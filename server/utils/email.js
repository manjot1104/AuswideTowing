const nodemailer = require('nodemailer')

// Create transporter
// For production, use environment variables for credentials
// Supports Gmail, SendGrid, AWS SES, etc.
const createTransporter = () => {
  // Option 1: Gmail (for development/testing)
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use App Password for Gmail
      },
    })
  }

  // Option 2: SendGrid
  if (process.env.EMAIL_SERVICE === 'sendgrid') {
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    })
  }

  // Option 3: SMTP (generic)
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })
  }

  // Option 4: Development - log to console (no actual email sent)
  return {
    sendMail: async (options) => {
      console.log('📧 Email would be sent (development mode):')
      console.log('To:', options.to)
      console.log('Subject:', options.subject)
      console.log('HTML:', options.html)
      return { messageId: 'dev-mode' }
    },
  }
}

// Send quote notification email
const sendQuoteEmail = async (quote) => {
  const transporter = createTransporter()
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@auswidetowing.com.au'

  const mailOptions = {
    from: process.env.EMAIL_FROM || `"Auswide Towing" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject: `New Quote Request from ${quote.firstName || quote.fullName} ${quote.lastName || ''}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0d9488 0%, #115e59 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0d9488; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Quote Request</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${quote.firstName || quote.fullName} ${quote.lastName || ''}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${quote.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${quote.phone}</div>
              </div>
              ${quote.company ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${quote.company}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Service Type:</div>
                <div class="value">${quote.serviceType}</div>
              </div>
              ${quote.towingType ? `
              <div class="field">
                <div class="label">${quote.serviceType && quote.serviceType.toLowerCase().includes('storage') ? 'Storage Type' : 'What Needs Towing'}:</div>
                <div class="value">${quote.towingType}</div>
              </div>
              ` : ''}
              ${quote.registrationPlate ? `
              <div class="field">
                <div class="label">Registration Plate:</div>
                <div class="value">${quote.registrationPlate}</div>
              </div>
              ` : ''}
              ${quote.isDriveable !== undefined ? `
              <div class="field">
                <div class="label">Vehicle Condition:</div>
                <div class="value">${quote.isDriveable ? 'Driveable' : 'Not Driveable'}${quote.wasInAccident ? ' | Was in Accident' : ''}</div>
              </div>
              ` : ''}
              ${quote.collectionAddress ? `
              <div class="field">
                <div class="label">Collection Address:</div>
                <div class="value">${quote.collectionAddress}</div>
              </div>
              ` : ''}
              ${quote.deliveryAddress ? `
              <div class="field">
                <div class="label">Delivery Address:</div>
                <div class="value">${quote.deliveryAddress}</div>
              </div>
              ` : ''}
              ${quote.collectASAP !== undefined ? `
              <div class="field">
                <div class="label">Collection Time:</div>
                <div class="value">${quote.collectASAP ? 'ASAP' : 'Scheduled'}</div>
              </div>
              ` : ''}
              ${quote.additionalComments || quote.additionalDetails ? `
              <div class="field">
                <div class="label">Additional Comments:</div>
                <div class="value">${quote.additionalComments || quote.additionalDetails}</div>
              </div>
              ` : ''}
              <div class="footer">
                <p>This quote request was submitted on ${new Date(quote.createdAt).toLocaleString()}.</p>
                <p>Quote ID: ${quote._id}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Quote email sent:', info.messageId)
    return info
  } catch (error) {
    console.error('❌ Error sending quote email:', error)
    throw error
  }
}

// Send confirmation email to customer
const sendConfirmationEmail = async (quote) => {
  const transporter = createTransporter()

  const mailOptions = {
    from: process.env.EMAIL_FROM || `"Auswide Towing" <${process.env.EMAIL_USER}>`,
    to: quote.email,
    subject: 'Thank You for Your Quote Request - Auswide Towing',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0d9488 0%, #115e59 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; padding: 12px 24px; background: #0d9488; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Your Quote Request!</h2>
            </div>
            <div class="content">
              <p>Hi ${quote.fullName},</p>
              <p>Thank you for contacting Auswide Towing Group. We have received your quote request for <strong>${quote.serviceType}</strong>.</p>
              <p>Our team will review your request and get back to you within 24 hours.</p>
              <p>If you have any urgent questions, please don't hesitate to call us at <strong>1300 000 000</strong>.</p>
              <p>Best regards,<br>The Auswide Towing Team</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Confirmation email sent:', info.messageId)
    return info
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error)
    throw error
  }
}

module.exports = {
  sendQuoteEmail,
  sendConfirmationEmail,
}
