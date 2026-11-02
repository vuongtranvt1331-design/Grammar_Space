#!/bin/bash
cd "$(dirname "$0")"
echo "Dang bat local server tai port 8000..."
(sleep 1 && (open http://localhost:8000 || xdg-open http://localhost:8000)) &
python3 -m http.server 8000 || python -m http.server 8000 || npx serve -l 8000
