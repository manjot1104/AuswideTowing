# Backend Connection - Required Environment Variables

## 📋 Required Environment Variables

Backend ko connect karne ke liye aapko yeh environment variables `.env` file me set karne honge:

### 🔴 **REQUIRED (Minimum for Basic Functionality)**

#### 1. **MongoDB Connection** (Required)
```env
MONGODB_URI=mongodb://localhost:27017/auswide-towing
```
- **Local MongoDB**: `mongodb://localhost:27017/auswide-towing`
- **MongoDB Atlas**: `mongodb+srv://username:password@cluster.mongodb.net/auswide-towing`

#### 2. **Server Port** (Optional - Default: 5000)
```env
PORT=5000
```

#### 3. **Frontend API URL** (Required for Frontend)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```
- Development: `http://localhost:5000`
- Production: `https://your-backend-domain.com`

---

### 📧 **EMAIL CONFIGURATION** (Required for Email Notifications)

Aapko **ek email service** choose karna hoga:

#### **Option 1: Gmail** (Easiest for Development)

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM="Auswide Towing <noreply@auswidetowing.com.au>"
ADMIN_EMAIL=admin@auswidetowing.com.au
```

**Gmail Setup Steps:**
1. Gmail account me 2-Factor Authentication enable karein
2. Google Account Settings → Security → App Passwords
3. "Mail" aur "Other (Custom name)" select karein
4. Generated App Password ko `EMAIL_PASSWORD` me use karein

#### **Option 2: SendGrid** (Recommended for Production)

```env
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your-sendgrid-api-key
EMAIL_FROM="Auswide Towing <noreply@auswidetowing.com.au>"
ADMIN_EMAIL=admin@auswidetowing.com.au
```

**SendGrid Setup Steps:**
1. [SendGrid.com](https://sendgrid.com) par account banayein
2. Settings → API Keys → Create API Key
3. API Key ko `SENDGRID_API_KEY` me use karein

#### **Option 3: Custom SMTP** (Any Email Provider)

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
EMAIL_FROM="Auswide Towing <noreply@auswidetowing.com.au>"
ADMIN_EMAIL=admin@auswidetowing.com.au
```

---

## 🚀 Quick Setup Guide

### Step 1: Create `.env` File
```bash
# Root directory me .env file create karein
cp env.example .env
```

### Step 2: Minimum Configuration (Without Email)
```env
# MongoDB (Required)
MONGODB_URI=mongodb://localhost:27017/auswide-towing

# Server Port
PORT=5000

# Frontend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Note:** Email notifications ke bina bhi backend kaam karega, lekin quote submissions par emails nahi jayengi.

### Step 3: Full Configuration (With Email)
```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/auswide-towing

# Server
PORT=5000

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:5000

# Email (Gmail Example)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM="Auswide Towing <noreply@auswidetowing.com.au>"
ADMIN_EMAIL=admin@auswidetowing.com.au
```

---

## 📝 Environment Variables Summary

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `MONGODB_URI` | ✅ Yes | MongoDB connection string | `mongodb://localhost:27017/auswide-towing` |
| `PORT` | ❌ No | Backend server port | `5000` |
| `NEXT_PUBLIC_API_URL` | ✅ Yes | Frontend se backend URL | `http://localhost:5000` |
| `EMAIL_SERVICE` | ⚠️ Conditional | Email provider (`gmail`, `sendgrid`, or `smtp`) | `gmail` |
| `EMAIL_USER` | ⚠️ Conditional | Email address (Gmail/SMTP) | `your-email@gmail.com` |
| `EMAIL_PASSWORD` | ⚠️ Conditional | Email password/App Password | `xxxx xxxx xxxx xxxx` |
| `SENDGRID_API_KEY` | ⚠️ Conditional | SendGrid API key | `SG.xxxxx` |
| `SMTP_HOST` | ⚠️ Conditional | SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | ⚠️ Conditional | SMTP server port | `587` |
| `SMTP_SECURE` | ⚠️ Conditional | Use SSL/TLS | `false` |
| `SMTP_USER` | ⚠️ Conditional | SMTP username | `your-email@example.com` |
| `SMTP_PASSWORD` | ⚠️ Conditional | SMTP password | `your-password` |
| `EMAIL_FROM` | ⚠️ Conditional | Sender email address | `"Auswide Towing <noreply@auswidetowing.com.au>"` |
| `ADMIN_EMAIL` | ⚠️ Conditional | Admin notification email | `admin@auswidetowing.com.au` |

---

## 🔍 Testing Backend Connection

### 1. Check MongoDB Connection
```bash
# Backend server start karein
npm run dev:server

# Agar MongoDB connected hai, aapko yeh dikhega:
# ✅ Connected to MongoDB
```

### 2. Test API Endpoints
```bash
# Health check
curl http://localhost:5000/api/health

# Services
curl http://localhost:5000/api/services

# FAQs
curl http://localhost:5000/api/faqs
```

### 3. Test Email (If Configured)
```bash
# Quote form submit karein frontend se
# Agar email configured hai, admin aur customer dono ko email jayegi
```

---

## 🐛 Common Issues

### Issue 1: MongoDB Connection Failed
**Error:** `MongoServerError: Authentication failed`

**Solution:**
- MongoDB Atlas use kar rahe ho? Connection string me username/password sahi hai?
- Local MongoDB use kar rahe ho? MongoDB service running hai?

### Issue 2: Email Not Sending
**Error:** `Invalid login` or `Authentication failed`

**Solution:**
- Gmail: App Password use kar rahe ho? Regular password nahi!
- SendGrid: API key sahi hai?
- SMTP: Host, port, credentials sahi hain?

### Issue 3: Frontend Can't Connect to Backend
**Error:** `Failed to fetch` or `Network error`

**Solution:**
- `NEXT_PUBLIC_API_URL` sahi set hai?
- Backend server running hai?
- CORS enabled hai? (Already configured in `server/index.js`)

---

## 📚 Additional Resources

- **MongoDB Atlas Setup**: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- **Gmail App Passwords**: [https://support.google.com/accounts/answer/185833](https://support.google.com/accounts/answer/185833)
- **SendGrid Setup**: [https://docs.sendgrid.com/](https://docs.sendgrid.com/)

---

## ✅ Checklist

- [ ] `.env` file created
- [ ] `MONGODB_URI` set (local ya Atlas)
- [ ] `NEXT_PUBLIC_API_URL` set
- [ ] Email service configured (optional but recommended)
- [ ] Backend server starts without errors
- [ ] MongoDB connection successful
- [ ] API endpoints accessible
- [ ] Email notifications working (if configured)

---

**Need Help?** Check `README.md` for detailed setup instructions.
