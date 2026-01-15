'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FAQ {
  _id: string
  question: string
  answer: string
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Default FAQs - use immediately for fast loading
    const defaultFAQs = [
      {
        _id: '1',
        question: 'What areas do you service?',
        answer: 'We provide towing services across all major cities and regions in Australia, including Melbourne, Sydney, Brisbane, Perth, Adelaide, and surrounding areas.',
      },
      {
        _id: '2',
        question: 'How quickly can you arrive?',
        answer: 'Our average response time is 30-45 minutes in metropolitan areas. We prioritize emergency situations and aim to reach you as quickly as possible.',
      },
      {
        _id: '3',
        question: 'Do you offer 24/7 service?',
        answer: 'Yes, we operate 24 hours a day, 7 days a week, including holidays. Our team is always ready to assist you whenever you need help.',
      },
      {
        _id: '4',
        question: 'What payment methods do you accept?',
        answer: 'We accept cash, credit cards, debit cards, and most insurance companies. Payment can be made on-site or through our online portal.',
      },
      {
        _id: '5',
        question: 'Are your drivers licensed and insured?',
        answer: 'Absolutely. All our drivers are fully licensed, trained, and insured. We maintain comprehensive insurance coverage for all our vehicles and operations.',
      },
      {
        _id: '6',
        question: 'Can you tow heavy vehicles?',
        answer: 'Yes, we have specialized equipment and trained operators for towing heavy vehicles including trucks, buses, and commercial vehicles.',
      },
    ]

    // Set default FAQs immediately for fast loading
    setFaqs(defaultFAQs)
    setLoading(false)

    // Try to fetch from API in background (with timeout)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3000) // 3 second timeout

    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/faqs`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error('API response not ok')
        return res.json()
      })
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          setFaqs(data)
        }
      })
      .catch(() => {
        // Silently fail - we already have default FAQs
      })
      .finally(() => {
        clearTimeout(timeoutId)
      })
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {loading ? (
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card animate-pulse">
                  <div className="h-6 bg-slate-200 rounded mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.svg
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 text-primary-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
