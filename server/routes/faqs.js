const express = require('express')
const router = express.Router()
const FAQ = require('../models/FAQ')

// GET all FAQs
router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ createdAt: -1 })
    res.json(faqs)
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    res.status(500).json({ error: 'Failed to fetch FAQs' })
  }
})

// GET single FAQ by ID
router.get('/:id', async (req, res) => {
  try {
    const faq = await FAQ.findById(req.params.id)
    if (!faq) {
      return res.status(404).json({ error: 'FAQ not found' })
    }
    res.json(faq)
  } catch (error) {
    console.error('Error fetching FAQ:', error)
    res.status(500).json({ error: 'Failed to fetch FAQ' })
  }
})

module.exports = router
