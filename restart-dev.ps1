# Restart Dev Server Script
Write-Host "🛑 Stopping any running Next.js processes..." -ForegroundColor Yellow

# Kill any node processes running Next.js (be careful with this)
Get-Process node -ErrorAction SilentlyContinue | Where-Object { $_.Path -like "*node*" } | Stop-Process -Force -ErrorAction SilentlyContinue

Start-Sleep -Seconds 2

Write-Host "🧹 Cleaning .next folder..." -ForegroundColor Yellow
if (Test-Path .next) {
    try {
        Remove-Item -Recurse -Force .next -ErrorAction Stop
        Write-Host "✓ Removed .next folder" -ForegroundColor Green
    } catch {
        Write-Host "⚠ Could not remove .next folder (may be locked)" -ForegroundColor Red
        Write-Host "   Please stop the dev server manually (Ctrl+C) and run:" -ForegroundColor Yellow
        Write-Host "   Remove-Item -Recurse -Force .next" -ForegroundColor Cyan
    }
}

Write-Host "🚀 Starting dev server..." -ForegroundColor Yellow
npm run dev
