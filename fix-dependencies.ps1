# Fix Dependencies Script for Auswide Towing Group
# Run this script to fix the caniuse-lite module error

Write-Host "🔧 Fixing dependencies..." -ForegroundColor Cyan

# Remove node_modules and lock files
Write-Host "📦 Removing old dependencies..." -ForegroundColor Yellow
if (Test-Path node_modules) {
    Remove-Item -Recurse -Force node_modules
    Write-Host "✓ Removed node_modules" -ForegroundColor Green
}

if (Test-Path package-lock.json) {
    Remove-Item -Force package-lock.json
    Write-Host "✓ Removed package-lock.json" -ForegroundColor Green
}

# Clear npm cache
Write-Host "🧹 Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force
Write-Host "✓ Cache cleared" -ForegroundColor Green

# Reinstall dependencies
Write-Host "📥 Installing dependencies..." -ForegroundColor Yellow
npm install

# Update browserslist database
Write-Host "🔄 Updating browserslist database..." -ForegroundColor Yellow
npx update-browserslist-db@latest

Write-Host "✅ Done! Try running 'npm run dev' now." -ForegroundColor Green
