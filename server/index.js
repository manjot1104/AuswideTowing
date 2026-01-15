const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auswide-towing'

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB')
    // Seed initial data if database is empty
    seedDatabase()
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err)
  })

// Routes
app.use('/api/services', require('./routes/services'))
app.use('/api/faqs', require('./routes/faqs'))
app.use('/api/quote', require('./routes/quote'))

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

// Seed database with initial data
async function seedDatabase() {
  const Service = require('./models/Service')
  const FAQ = require('./models/FAQ')

  try {
    // Check if services exist
    const serviceCount = await Service.countDocuments()
    if (serviceCount === 0) {
      const defaultServices = [
        {
          name: 'Vehicle Towing',
          description: 'We can transport any size vehicle door to door',
          icon: '🚗',
        },
        {
          name: 'Plant & Equipment',
          description: 'Supporting Australia\'s plant & equipment organisations',
          icon: '🏗️',
        },
        {
          name: 'Portables & Containers',
          description: 'Need a portable building or container moved?',
          icon: '📦',
        },
        {
          name: 'Specialty Towing',
          description: 'We can assist with your speciality towing needs',
          icon: '🚛',
        },
        {
          name: 'Interstate',
          description: 'Anything, Nationwide, Anytime - Safely.',
          icon: '🛣️',
        },
        {
          name: 'Storage Solutions',
          description: 'Check out our storage solutions',
          icon: '🏢',
        },
      ]
      await Service.insertMany(defaultServices)
      console.log('✅ Seeded default services')
    }

    // Check if FAQs exist
    const faqCount = await FAQ.countDocuments()
    if (faqCount === 0) {
      const defaultFAQs = [
        {
          question: 'What areas do you service?',
          answer: 'We provide towing services across all major cities and regions in Australia, including Melbourne, Sydney, Brisbane, Perth, Adelaide, and surrounding areas.',
        },
        {
          question: 'How quickly can you arrive?',
          answer: 'Our average response time is 30-45 minutes in metropolitan areas. We prioritize emergency situations and aim to reach you as quickly as possible.',
        },
        {
          question: 'Do you offer 24/7 service?',
          answer: 'Yes, we operate 24 hours a day, 7 days a week, including holidays. Our team is always ready to assist you whenever you need help.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, credit cards, debit cards, and most insurance companies. Payment can be made on-site or through our online portal.',
        },
        {
          question: 'Are your drivers licensed and insured?',
          answer: 'Absolutely. All our drivers are fully licensed, trained, and insured. We maintain comprehensive insurance coverage for all our vehicles and operations.',
        },
        {
          question: 'Can you tow heavy vehicles?',
          answer: 'Yes, we have specialized equipment and trained operators for towing heavy vehicles including trucks, buses, and commercial vehicles.',
        },
      ]
      await FAQ.insertMany(defaultFAQs)
      console.log('✅ Seeded default FAQs')
    }
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}
