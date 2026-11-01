/**
 * Holographic Canvas Annotation Layer & AssistiveTouch Menu
 * Object-Based "Stroke Eraser" (Vector-like) Annotation Engine
 */

export function initAnnotationLayer() {
  const canvas = document.getElementById('annotation-layer');
  const container = document.getElementById('annotation-touch');
  const trigger = document.getElementById('annotation-trigger');
  const penBtn = document.getElementById('annotation-tool-pen');
  const eraserBtn = document.getElementById('annotation-tool-eraser');
  const colorBtn = document.getElementById('annotation-color-btn');
  const colorPopup = document.getElementById('annotation-color-popup');
  const activeColorCircle = document.getElementById('annotation-active-color');
  const clearBtn = document.getElementById('annotation-clear-btn');
  const swatches = Array.from(document.querySelectorAll('.color-swatch'));

  if (!canvas || !container || !trigger) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 1. Color Palette: Pastel Red, Pastel Blue, Pastel Green
  const DEFAULT_COLORS = ['#ff9a9e', '#a1c4fd', '#c2e9fb'];
  let currentColor = DEFAULT_COLORS[0];
  let currentTool = 'pen'; // 'pen' | 'eraser'
  let isDrawingMode = false;
  let isDrawing = false;
  let currentStroke = null;
  let strokes = [];

  // Update Active Color Indicator
  function updateColorUI() {
    if (activeColorCircle) {
      activeColorCircle.style.backgroundColor = currentColor;
    }
    swatches.forEach(s => {
      s.classList.toggle('is-selected', s.dataset.color.toLowerCase() === currentColor.toLowerCase());
    });
  }

  // Update Active Tool UI (Pen vs Eraser visual highlight)
  function setTool(tool) {
    currentTool = tool;
    if (penBtn) {
      const isPen = currentTool === 'pen';
      penBtn.classList.toggle('is-active', isPen);
      penBtn.setAttribute('aria-pressed', String(isPen));
    }
    if (eraserBtn) {
      const isEraser = currentTool === 'eraser';
      eraserBtn.classList.toggle('is-active', isEraser);
      eraserBtn.setAttribute('aria-pressed', String(isEraser));
    }
    // Update canvas cursor for tool feedback
    if (canvas) {
      canvas.style.cursor = currentTool === 'eraser' ? 'cell' : 'crosshair';
    }
    closeColorPopup();
  }

  // 2. Build the Redraw Engine
  function redrawCanvas() {
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = 'source-over';

    strokes.forEach(stroke => {
      if (!stroke || !stroke.points || stroke.points.length === 0) return;
      ctx.strokeStyle = stroke.color || currentColor;
      ctx.lineWidth = stroke.width || 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      const first = stroke.points[0];
      ctx.moveTo(first.x, first.y);
      if (stroke.points.length === 1) {
        ctx.lineTo(first.x + 0.1, first.y + 0.1);
      } else {
        for (let i = 1; i < stroke.points.length; i++) {
          const pt = stroke.points[i];
          ctx.lineTo(pt.x, pt.y);
        }
      }
      ctx.stroke();
    });
  }

  // 3. Dynamic Full-Document Scrolling Canvas Dimensions
  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const w = Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
      window.innerWidth
    );
    const h = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      window.innerHeight
    );

    const targetWidth = Math.round(w * dpr);
    const targetHeight = Math.round(h * dpr);

    if (canvas.width === targetWidth && canvas.height === targetHeight) {
      return;
    }

    canvas.width = targetWidth;
    canvas.height = targetHeight;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    redrawCanvas();
  }

  // 4. Distance to line segment helper (ensures fast drag gestures never miss strokes)
  function distanceToSegment(p, a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const l2 = dx * dx + dy * dy;
    if (l2 === 0) return Math.hypot(p.x - a.x, p.y - a.y);
    let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
  }

  // 5. Whole Stroke Eraser Logic: removes continuous line with 15px radius
  function eraseAt(x, y) {
    const ERASER_RADIUS = 15;

    // Iterate backwards through the strokes array to check the top-most layers first
    for (let i = strokes.length - 1; i >= 0; i--) {
      const stroke = strokes[i];
      if (!stroke || !stroke.points || stroke.points.length === 0) continue;

      let hit = false;

      // 1. Point distance check
      for (let j = 0; j < stroke.points.length; j++) {
        const pt = stroke.points[j];
        if (Math.hypot(pt.x - x, pt.y - y) < ERASER_RADIUS) {
          hit = true;
          break;
        }
      }

      // 2. Segment distance check for fast drag motions across strokes
      if (!hit && stroke.points.length > 1) {
        for (let j = 0; j < stroke.points.length - 1; j++) {
          if (distanceToSegment({ x, y }, stroke.points[j], stroke.points[j + 1]) < ERASER_RADIUS) {
            hit = true;
            break;
          }
        }
      }

      if (hit) {
        // Remove that entire stroke from the strokes array
        strokes.splice(i, 1);
        // Redraw canvas immediately
        redrawCanvas();
        // Break so it only deletes one stroke per touch/motion step
        break;
      }
    }
  }

  // 6. State Management: STATE 1 (CLOSED) vs STATE 2 (OPEN)
  function setDrawingMode(open) {
    isDrawingMode = open;
    container.classList.toggle('is-open', isDrawingMode);
    trigger.setAttribute('aria-expanded', String(isDrawingMode));
    trigger.setAttribute('title', isDrawingMode ? 'Đóng chế độ vẽ (X)' : 'Ghi chú (AssistiveTouch)');

    // STATE 1 - CLOSED: canvas pointer-events: none (click-through, ink scrolls with page)
    // STATE 2 - OPEN: canvas pointer-events: auto (drawing/erasing enabled)
    canvas.classList.toggle('is-drawing', isDrawingMode);

    if (!isDrawingMode) {
      closeColorPopup();
    }
  }

  function toggleDrawingMode() {
    setDrawingMode(!isDrawingMode);
  }

  function openColorPopup() {
    if (!colorPopup) return;
    colorPopup.hidden = false;
    colorBtn?.setAttribute('aria-expanded', 'true');
  }

  function closeColorPopup() {
    if (!colorPopup) return;
    colorPopup.hidden = true;
    colorBtn?.setAttribute('aria-expanded', 'false');
  }

  function toggleColorPopup() {
    if (!colorPopup) return;
    if (colorPopup.hidden) {
      openColorPopup();
    } else {
      closeColorPopup();
    }
  }

  // 7. Button & Tool Listeners
  trigger.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleDrawingMode();
  });

  penBtn?.addEventListener('click', (event) => {
    event.stopPropagation();
    setTool('pen');
  });

  eraserBtn?.addEventListener('click', (event) => {
    event.stopPropagation();
    setTool('eraser');
  });

  colorBtn?.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleColorPopup();
  });

  swatches.forEach(swatch => {
    swatch.addEventListener('click', (event) => {
      event.stopPropagation();
      currentColor = swatch.dataset.color;
      updateColorUI();
      setTool('pen'); // Selecting color automatically switches back to Pen tool
      closeColorPopup();
    });
  });

  clearBtn?.addEventListener('click', (event) => {
    event.stopPropagation();
    strokes.length = 0;
    currentStroke = null;
    redrawCanvas();
    closeColorPopup();
  });

  // Close color popup on outside click
  document.addEventListener('click', (event) => {
    if (!colorPopup || colorPopup.hidden) return;
    if (!event.target.closest('.annotation-color-wrapper')) {
      closeColorPopup();
    }
  });

  // 8. Drawing & Erasing Mechanics
  function getCoordinates(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  function onPointerDown(event) {
    if (!isDrawingMode) return;
    if (event.button !== undefined && event.button !== 0 && event.pointerType === 'mouse') return;

    isDrawing = true;
    closeColorPopup();
    const pt = getCoordinates(event);

    if (currentTool === 'eraser') {
      eraseAt(pt.x, pt.y);
    } else {
      // Pen mode: create a new stroke object
      currentStroke = {
        points: [pt],
        color: currentColor,
        width: 3
      };

      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      ctx.moveTo(pt.x, pt.y);
      ctx.lineTo(pt.x + 0.1, pt.y + 0.1);
      ctx.stroke();
    }

    try {
      canvas.setPointerCapture(event.pointerId);
    } catch (_) {}
  }

  function onPointerMove(event) {
    if (!isDrawingMode || !isDrawing) return;
    const pt = getCoordinates(event);

    if (currentTool === 'eraser') {
      eraseAt(pt.x, pt.y);
    } else if (currentStroke) {
      currentStroke.points.push(pt);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
    }
  }

  function onPointerUp(event) {
    if (isDrawing) {
      if (currentTool === 'pen' && currentStroke && currentStroke.points.length > 0) {
        // Push completed stroke object to strokes array
        strokes.push(currentStroke);
      }
      currentStroke = null;
      isDrawing = false;
      try {
        canvas.releasePointerCapture(event.pointerId);
      } catch (_) {}
    }
  }

  // Pointer event listeners on canvas
  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerUp);

  // Expose strokes & helper for inspection/debugging if needed
  window.__annotationStrokes = strokes;
  window.__annotationRedraw = redrawCanvas;

  // ResizeObserver on document.body for dynamic document height/width expansion
  const bodyObserver = new ResizeObserver(() => {
    resizeCanvas();
  });
  bodyObserver.observe(document.body);
  window.addEventListener('resize', resizeCanvas);

  // Initialize
  resizeCanvas();
  updateColorUI();
  setTool('pen');
  setDrawingMode(false); // Default to STATE 1 - CLOSED
}
