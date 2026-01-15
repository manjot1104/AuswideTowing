# Render Backend Deployment Fix

## ❌ Problem

Render was trying to run Next.js instead of just the Express backend, causing:
- CSS parsing errors (`Module parse failed: Unexpected character '@'`)
- Next.js compilation attempts
- Slow deployment and build failures

## ✅ Solution

Created a dedicated backend start script and updated Render configuration to explicitly run only the Express server.

## 🔧 Changes Made

1. **Created `start-backend.js`** - Dedicated script that only starts the Express server
2. **Updated `render.yaml`** - Changed start command to use `start-backend.js`
3. **Created `.renderignore`** - (Optional) Helps Render understand which files to ignore

## 🚀 Deployment Steps

### 1. Update Render Dashboard Settings

In your Render dashboard, make sure these settings are configured:

- **Build Command:** `npm install`
- **Start Command:** `node start-backend.js`
- **Environment:** `Node`
- **Node Version:** `18.x` or `20.x`

### 2. Environment Variables

Make sure these are set in Render:

```env
NODE_ENV=production
PORT=10000
MONGODB_URI=your-mongodb-connection-string
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your-key
EMAIL_FROM="Auswide Towing <noreply@auswidetowing.com.au>"
ADMIN_EMAIL=admin@auswidetowing.com.au
```

### 3. Deploy

After pushing these changes:

```bash
git add .
git commit -m "Fix Render backend deployment - use dedicated start script"
git push
```

Render will automatically rebuild with the new configuration.

## ✅ Verification

After deployment, check:

1. **Health Check:** `https://your-backend.onrender.com/api/health`
2. **Services API:** `https://your-backend.onrender.com/api/services`
3. **No Next.js Errors:** Logs should only show Express server starting
4. **No CSS Errors:** The `@tailwind` parsing error should be gone

## 📝 Notes

- The frontend (Next.js) should be deployed separately on Vercel
- The backend only needs Express, MongoDB, and email dependencies
- Next.js dependencies are still in package.json for local development, but won't be executed on Render
