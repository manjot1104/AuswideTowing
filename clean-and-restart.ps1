# Clean and Restart Script
Write-Host "🛑 Please stop the dev server first (press Ctrl+C in the terminal running npm run dev)" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press any key after stopping the server to continue..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host ""
Write-Host "🧹 Cleaning .next folder and cache..." -ForegroundColor Yellow

# Remove .next folder
if (Test-Path .next) {
    try {
        # Try to remove with retries
        $retries = 3
        $success = $false
        while ($retries -gt 0 -and -not $success) {
            try {
                Remove-Item -Recurse -Force .next -ErrorAction Stop
                $success = $true
                Write-Host "✓ Removed .next folder" -ForegroundColor Green
            } catch {
                $retries--
                if ($retries -gt 0) {
                    Write-Host "⚠ Retrying... ($retries attempts left)" -ForegroundColor Yellow
                    Start-Sleep -Seconds 2
                } else {
                    Write-Host "✗ Could not remove .next folder" -ForegroundColor Red
                    Write-Host "   Please close any programs using the folder and run:" -ForegroundColor Yellow
                    Write-Host "   Remove-Item -Recurse -Force .next" -ForegroundColor Cyan
                    exit 1
                }
            }
        }
    } catch {
        Write-Host "✗ Error removing .next: $_" -ForegroundColor Red
    }
} else {
    Write-Host "ℹ .next folder not found" -ForegroundColor Yellow
}

# Remove node_modules cache
if (Test-Path "node_modules\.cache") {
    Remove-Item -Recurse -Force "node_modules\.cache" -ErrorAction SilentlyContinue
    Write-Host "✓ Cleared node_modules cache" -ForegroundColor Green
}

Write-Host ""
Write-Host "🚀 Starting dev server..." -ForegroundColor Green
Write-Host ""
npm run dev
