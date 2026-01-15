# Fix Instructions for caniuse-lite Error

## Quick Fix (Recommended)

Run the PowerShell script I created:

```powershell
.\fix-dependencies.ps1
```

## Manual Fix Steps

If the script doesn't work, follow these steps manually:

### Step 1: Remove Old Dependencies
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
```

### Step 2: Clear npm Cache
```powershell
npm cache clean --force
```

### Step 3: Reinstall Dependencies
```powershell
npm install
```

### Step 4: Update Browserslist Database
```powershell
npx update-browserslist-db@latest
```

### Step 5: Try Running Dev Server
```powershell
npm run dev
```

## Alternative: Quick Install Fix

If you want to try a quicker fix without removing everything:

```powershell
npm install caniuse-lite browserslist --save-dev --legacy-peer-deps
npx update-browserslist-db@latest
npm run dev
```

## If Still Not Working

Try using yarn instead of npm:

```powershell
# Install yarn if you don't have it
npm install -g yarn

# Remove node_modules
Remove-Item -Recurse -Force node_modules

# Install with yarn
yarn install

# Run dev server
yarn dev
```

## Why This Happens

This error occurs when:
- The `node_modules` folder gets corrupted
- There's a version mismatch between Next.js and browserslist dependencies
- npm cache is corrupted
- Windows file system issues with long paths

The fix is to clean everything and reinstall fresh.
