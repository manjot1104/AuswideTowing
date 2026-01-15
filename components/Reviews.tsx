'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Review {
  name: string
  rating: number
  comment: string
  location?: string
}

const reviews: Review[] = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Excellent service! They arrived quickly and handled my car with care. Professional and friendly team.',
    location: 'Melbourne, VIC',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    comment: 'Best towing service I\'ve used. Fair pricing and very reliable. Highly recommend!',
    location: 'Sydney, NSW',
  },
  {
    name: 'Emma Williams',
    rating: 5,
    comment: 'Fast response time and professional service. They got me back on the road quickly.',
    location: 'Brisbane, QLD',
  },
  {
    name: 'David Brown',
    rating: 5,
    comment: 'Great experience from start to finish. The driver was courteous and the service was top-notch.',
    location: 'Perth, WA',
  },
  {
    name: 'Lisa Anderson',
    rating: 5,
    comment: 'Very professional and efficient. They made a stressful situation much easier to handle.',
    location: 'Adelaide, SA',
  },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our <span className="text-primary-600">Customers Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="card text-center"
          >
            <div className="flex justify-center mb-4">
              {renderStars(reviews[currentIndex].rating)}
            </div>
            <p className="text-xl text-slate-700 mb-6 italic">
              "{reviews[currentIndex].comment}"
            </p>
            <div>
              <p className="font-bold text-slate-900 text-lg">
                {reviews[currentIndex].name}
              </p>
              {reviews[currentIndex].location && (
                <p className="text-slate-600">{reviews[currentIndex].location}</p>
              )}
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
