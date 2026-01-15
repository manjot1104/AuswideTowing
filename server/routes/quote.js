const express = require('express')
const router = express.Router()
const Quote = require('../models/Quote')
const validator = require('validator')
const { sendQuoteEmail, sendConfirmationEmail } = require('../utils/email')

// POST create new quote request
router.post('/', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      fullName,
      email,
      phone,
      company,
      towingType,
      serviceType,
      registrationPlate,
      isDriveable,
      wasInAccident,
      collectionAddress,
      deliveryAddress,
      collectASAP,
      additionalDetails,
      additionalComments,
    } = req.body

    // Validation - check if it's a storage solution (addresses not required)
    const isStorageSolution = serviceType && serviceType.toLowerCase().includes('storage')
    
    // Basic required fields for all services
    if (!firstName || !lastName || !email || !phone || !serviceType) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    
    // For storage solutions, require storage type (towingType field used for storage type)
    if (isStorageSolution) {
      if (!towingType) {
        return res.status(400).json({ error: 'Please select what you want to store' })
      }
    } else {
      // For non-storage services (towing), require towing type and addresses
      if (!towingType) {
        return res.status(400).json({ error: 'Towing type is required' })
      }
      if (!collectionAddress || !deliveryAddress) {
        return res.status(400).json({ error: 'Collection and delivery addresses are required' })
      }
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    if (firstName.length < 2 || lastName.length < 2) {
      return res.status(400).json({ error: 'Name must be at least 2 characters' })
    }

    // Sanitize inputs
    const sanitizedData = {
      firstName: validator.escape(firstName.trim()),
      lastName: validator.escape(lastName.trim()),
      fullName: fullName || `${firstName.trim()} ${lastName.trim()}`,
      email: validator.normalizeEmail(email),
      phone: phone.trim(),
      company: company ? validator.escape(company.trim()) : undefined,
      serviceType: validator.escape(serviceType.trim()),
      registrationPlate: registrationPlate ? validator.escape(registrationPlate.trim()) : undefined,
      isDriveable: isDriveable !== undefined ? isDriveable : true,
      wasInAccident: wasInAccident !== undefined ? wasInAccident : false,
      collectASAP: collectASAP !== undefined ? collectASAP : true,
      additionalDetails: additionalDetails ? validator.escape(additionalDetails.trim()) : '',
      additionalComments: additionalComments ? validator.escape(additionalComments.trim()) : undefined,
    }
    
    // Add towing/storage type if provided
    if (towingType) {
      sanitizedData.towingType = validator.escape(towingType.trim())
    }
    
    // Add addresses only if provided (not required for storage solutions)
    if (collectionAddress) {
      sanitizedData.collectionAddress = validator.escape(collectionAddress.trim())
    }
    if (deliveryAddress) {
      sanitizedData.deliveryAddress = validator.escape(deliveryAddress.trim())
    }

    // Create quote
    const quote = new Quote(sanitizedData)
    await quote.save()

    // Send email notifications
    try {
      await sendQuoteEmail(quote) // Notify admin
      await sendConfirmationEmail(quote) // Confirm to customer
    } catch (emailError) {
      console.error('Error sending email notification:', emailError)
      // Don't fail the request if email fails
    }

    res.status(201).json({
      message: 'Quote request submitted successfully',
      quote: {
        id: quote._id,
        firstName: quote.firstName,
        lastName: quote.lastName,
        fullName: quote.fullName,
        email: quote.email,
        serviceType: quote.serviceType,
        towingType: quote.towingType,
      },
    })
  } catch (error) {
    console.error('Error creating quote:', error)
    res.status(500).json({ error: 'Failed to submit quote request' })
  }
})

// GET all quotes (admin endpoint - in production, add authentication)
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 })
    res.json(quotes)
  } catch (error) {
    console.error('Error fetching quotes:', error)
    res.status(500).json({ error: 'Failed to fetch quotes' })
  }
})

module.exports = router
