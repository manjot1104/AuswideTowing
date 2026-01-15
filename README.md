# Auswide Towing Group - Professional Towing Services Website

A modern, responsive website for towing and roadside assistance services built with Next.js, Express, and MongoDB.

## 🚀 Features

- **Modern UI/UX**: Premium design with gradients, shadows, and smooth animations
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Next.js App Router for optimal performance
- **Form Handling**: React Hook Form with validation
- **Email Notifications**: Automated email notifications for quote submissions
- **Database**: MongoDB with Mongoose for data persistence
- **Animations**: Framer Motion for smooth transitions and interactions

## 📋 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **React Hook Form**

### Backend
- **Node.js**
- **Express**
- **MongoDB** with Mongoose
- **Nodemailer** (Email notifications)
- **Validator** (Input validation & sanitization)

## 🛠️ Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB (local or MongoDB Atlas)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AuswideTowingGroup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and configure:
   - MongoDB connection string
   - Email service credentials (Gmail, SendGrid, or SMTP)
   - Server port

4. **Start MongoDB** (if using local MongoDB)
   ```bash
   # On Windows
   mongod

   # On macOS/Linux
   sudo systemctl start mongod
   ```

5. **Start the backend server**
   ```bash
   npm run dev:server
   ```
   The server will run on `http://localhost:5000`

6. **Start the frontend** (in a new terminal)
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
AuswideTowingGroup/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Stats.tsx
│   ├── Reviews.tsx
│   ├── FAQ.tsx
│   ├── QuoteForm.tsx
│   └── Footer.tsx
├── server/                # Express backend
│   ├── index.js          # Server entry point
│   ├── models/           # MongoDB models
│   │   ├── Service.js
│   │   ├── FAQ.js
│   │   └── Quote.js
│   ├── routes/           # API routes
│   │   ├── services.js
│   │   ├── faqs.js
│   │   └── quote.js
│   └── utils/            # Utilities
│       └── email.js      # Email service
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🔌 API Endpoints

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get single service

### FAQs
- `GET /api/faqs` - Get all FAQs
- `GET /api/faqs/:id` - Get single FAQ

### Quotes
- `POST /api/quote` - Submit quote request
- `GET /api/quote` - Get all quotes (admin)

### Health Check
- `GET /api/health` - Server health status

## 📧 Email Configuration

The application supports multiple email providers:

### Gmail (Development)
1. Enable 2-factor authentication
2. Generate an App Password
3. Set in `.env`:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

### SendGrid (Production Recommended)
1. Create a SendGrid account
2. Generate an API key
3. Set in `.env`:
   ```
   EMAIL_SERVICE=sendgrid
   SENDGRID_API_KEY=your-api-key
   ```

### Custom SMTP
Set in `.env`:
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
```

## 🚀 Deployment

### Frontend (Vercel)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variable: `NEXT_PUBLIC_API_URL` (your backend URL)
   - Deploy

### Backend (Render/Railway)

#### Option 1: Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Build command: `npm install`
4. Start command: `npm run server`
5. Add environment variables from `.env`
6. Deploy

#### Option 2: Railway

1. Create a new project on Railway
2. Connect your GitHub repository
3. Add environment variables
4. Deploy

### MongoDB

#### MongoDB Atlas (Recommended for Production)

1. Create a free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in your backend environment variables

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: { ... },  // Teal colors
  slate: { ... },    // Gray colors
}
```

### Content
- Services: Edit `server/index.js` seed data or use MongoDB directly
- FAQs: Edit `server/index.js` seed data or use MongoDB directly
- Reviews: Edit `components/Reviews.tsx`
- Stats: Edit `components/Stats.tsx`

## 📝 Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run server` - Start backend server
- `npm run dev:server` - Start backend with nodemon (auto-reload)

## 🔒 Security Notes

- Input validation and sanitization implemented
- Environment variables for sensitive data
- CORS configured for API
- In production, add authentication for admin endpoints
- Use HTTPS in production
- Implement rate limiting for API endpoints

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For issues or questions, please contact the development team.

---

Built with ❤️ for Auswide Towing Group
