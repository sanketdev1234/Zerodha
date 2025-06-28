@echo off
echo Starting S-Exchange Applications...
echo.
echo Frontend (Landing Pages) will run on: http://localhost:3000
echo Dashboard will run on: http://localhost:3001
echo.
echo Starting applications in separate windows...

start "Frontend - Landing Pages" cmd /k "cd frontend && npm run dev"
timeout /t 3 /nobreak >nul
start "Dashboard" cmd /k "cd dashboard && npm run dev"

echo.
echo Both applications are starting...
echo Frontend: http://localhost:3000
echo Dashboard: http://localhost:3001
echo.
pause 