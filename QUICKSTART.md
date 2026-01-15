# Quick Start Guide

Get your Auswide Towing Group website up and running in minutes!

## 🚀 Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
# Copy the example file
cp env.example .env

# Edit .env with your settings
# Minimum required:
# - MONGODB_URI (use local MongoDB or MongoDB Atlas)
# - EMAIL_SERVICE and credentials (optional for testing)
```

### 3. Start MongoDB (if using local)
```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### 4. Start Backend Server
```bash
npm run dev:server
```
Backend will run on `http://localhost:5000`

### 5. Start Frontend (new terminal)
```bash
npm run dev
```
Frontend will run on `http://localhost:3000`

## ✅ Verify Installation

1. Open `http://localhost:3000` in your browser
2. You should see the homepage with all sections
3. Check backend: `http://localhost:5000/api/health` should return `{"status":"ok"}`
4. Test services: `http://localhost:5000/api/services` should return service data

## 🧪 Test Features

### Test Quote Form
1. Scroll to "Get a Free Quote" section
2. Fill out the form
3. Submit (will save to MongoDB)
4. Check backend logs for email notification (if configured)

### Test API Endpoints
```bash
# Health check
curl http://localhost:5000/api/health

# Get services
curl http://localhost:5000/api/services

# Get FAQs
curl http://localhost:5000/api/faqs
```

## 🔧 Common Issues

### MongoDB Connection Error
- **Problem**: `MongoDB connection error`
- **Solution**: 
  - Ensure MongoDB is running (local) or connection string is correct (Atlas)
  - Check firewall settings for MongoDB Atlas

### Port Already in Use
- **Problem**: `Port 5000 already in use`
- **Solution**: Change `PORT` in `.env` file

### Email Not Working
- **Problem**: Emails not sending
- **Solution**: 
  - For development, emails are logged to console
  - Configure email service in `.env` for production
  - Check email service credentials

### Frontend Can't Connect to Backend
- **Problem**: API calls failing
- **Solution**: 
  - Verify `NEXT_PUBLIC_API_URL` in `.env` matches backend URL
  - Check CORS settings in backend
  - Ensure backend is running

## 📝 Next Steps

1. **Customize Content**
   - Edit services in MongoDB or `server/index.js`
   - Update FAQs in MongoDB or `server/index.js`
   - Modify reviews in `components/Reviews.tsx`
   - Update stats in `components/Stats.tsx`

2. **Configure Email**
   - Set up Gmail, SendGrid, or custom SMTP
   - Test email notifications

3. **Deploy**
   - Follow `DEPLOYMENT.md` for production deployment
   - Deploy backend to Render/Railway
   - Deploy frontend to Vercel

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },  // Your brand colors
  slate: { ... },    // Neutral colors
}
```

### Change Logo
Replace logo in `components/Header.tsx` and `components/Footer.tsx`

### Add More Sections
1. Create new component in `components/`
2. Import and add to `app/page.tsx`

## 📚 Documentation

- Full documentation: `README.md`
- Deployment guide: `DEPLOYMENT.md`
- API documentation: See `README.md` API section

## 💡 Tips

- Use MongoDB Compass to view/edit database
- Check browser console for frontend errors
- Check terminal for backend logs
- Use Postman/Insomnia to test API endpoints

---

Happy coding! 🎉
