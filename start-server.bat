@echo off
title GrammarSpace Local Server
cd /d "%~dp0"
echo ======================================================
echo   GrammarSpace Local Server dang chay tai port 8000
echo   Trinh duyet se tu dong mo: http://localhost:8000
echo   (Nhan Ctrl + C trong cua so nay de tat server)
echo ======================================================
start http://localhost:8000
python -m http.server 8000 || py -m http.server 8000 || npx serve -l 8000
pause
