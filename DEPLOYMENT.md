# Deployment Guide

This guide provides step-by-step instructions for deploying the Auswide Towing Group website.

## Prerequisites

- GitHub account
- MongoDB Atlas account (or local MongoDB)
- Email service account (Gmail, SendGrid, or custom SMTP)
- Vercel account (for frontend)
- Render or Railway account (for backend)

## Step 1: MongoDB Setup

### Option A: MongoDB Atlas (Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (choose free tier)
4. Create a database user
5. Whitelist your IP address (or use 0.0.0.0/0 for all IPs in development)
6. Get your connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/auswide-towing
   ```

### Option B: Local MongoDB

Install MongoDB locally and use:
```
mongodb://localhost:27017/auswide-towing
```

## Step 2: Backend Deployment

### Deploy to Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `auswide-towing-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm run server`
   - **Plan**: Free (or paid for better performance)

5. Add Environment Variables:
   ```
   MONGODB_URI=mongodb+srv://...
   PORT=10000
   NODE_ENV=production
   EMAIL_SERVICE=sendgrid
   SENDGRID_API_KEY=your-key
   EMAIL_FROM="Auswide Towing <noreply@auswidetowing.com.au>"
   ADMIN_EMAIL=admin@auswidetowing.com.au
   ```

6. Deploy and note your backend URL (e.g., `https://auswide-towing-backend.onrender.com`)

### Deploy to Railway

1. Go to [Railway](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Add environment variables (same as Render)
5. Deploy

## Step 3: Frontend Deployment

### Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. Add Environment Variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
   ```

6. Deploy

## Step 4: Email Configuration

### Using SendGrid (Recommended for Production)

1. Sign up at [SendGrid](https://sendgrid.com)
2. Verify your sender email
3. Create an API key
4. Add to backend environment variables:
   ```
   EMAIL_SERVICE=sendgrid
   SENDGRID_API_KEY=SG.xxxxx
   ```

### Using Gmail (Development Only)

1. Enable 2FA on your Gmail account
2. Generate an App Password
3. Add to backend environment variables:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

### Using Custom SMTP

Add to backend environment variables:
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
```

## Step 5: Domain Configuration (Optional)

### Backend Domain

1. In Render/Railway, add a custom domain
2. Update `NEXT_PUBLIC_API_URL` in Vercel to use the custom domain

### Frontend Domain

1. In Vercel, go to Settings → Domains
2. Add your custom domain
3. Configure DNS as instructed

## Step 6: Post-Deployment Checklist

- [ ] Test API endpoints: `/api/health`, `/api/services`, `/api/faqs`
- [ ] Test quote form submission
- [ ] Verify email notifications are working
- [ ] Check MongoDB connection
- [ ] Test responsive design on mobile/tablet
- [ ] Verify SEO meta tags
- [ ] Test all navigation links
- [ ] Check loading states and error handling

## Troubleshooting

### Backend Issues

**MongoDB Connection Error**
- Verify connection string is correct
- Check IP whitelist in MongoDB Atlas
- Ensure database user has proper permissions

**Email Not Sending**
- Verify email service credentials
- Check email service logs
- Test with different email provider

**CORS Errors**
- Ensure backend CORS is configured correctly
- Check `NEXT_PUBLIC_API_URL` matches backend URL

### Frontend Issues

**API Calls Failing**
- Verify `NEXT_PUBLIC_API_URL` is set correctly
- Check backend is running and accessible
- Review browser console for errors

**Build Errors**
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Review build logs in Vercel

## Monitoring

### Backend Monitoring

- Render: View logs in dashboard
- Railway: View logs in dashboard
- Set up error tracking (e.g., Sentry)

### Frontend Monitoring

- Vercel Analytics (built-in)
- Google Analytics (optional)
- Error tracking (e.g., Sentry)

## Security Checklist

- [ ] Use HTTPS for all connections
- [ ] Keep environment variables secure
- [ ] Use strong MongoDB passwords
- [ ] Implement rate limiting (backend)
- [ ] Add authentication for admin endpoints
- [ ] Regularly update dependencies
- [ ] Use Content Security Policy headers

## Performance Optimization

1. **Enable Vercel Edge Functions** (if needed)
2. **Optimize Images** (use Next.js Image component)
3. **Enable Caching** (Vercel handles this automatically)
4. **Database Indexing** (add indexes to frequently queried fields)
5. **CDN** (Vercel provides global CDN)

## Backup Strategy

1. **Database Backups**
   - MongoDB Atlas: Automatic backups (paid plans)
   - Manual: Export data regularly

2. **Code Backups**
   - GitHub repository serves as backup
   - Tag releases for easy rollback

## Support

For deployment issues, check:
- Render/Railway documentation
- Vercel documentation
- MongoDB Atlas documentation
- Next.js deployment guide
