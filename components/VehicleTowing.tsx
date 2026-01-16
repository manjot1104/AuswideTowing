'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const vehicleTypes = [
  {
    id: '4wds',
    title: '4WDs',
    description: 'Professional towing services for 4WD vehicles with specialized equipment',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop',
  },
  {
    id: 'bus-coach',
    title: 'Bus & Coach',
    description: 'Heavy-duty towing for buses and coaches with experienced operators',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
  },
  {
    id: 'caravans',
    title: 'Caravans',
    description: 'Safe and secure caravan towing services across Australia',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
  },
  {
    id: 'cars',
    title: 'Cars',
    description: 'Quick, efficient, and affordable towing for all car types',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
  },
]

export default function VehicleTowing() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % vehicleTypes.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + vehicleTypes.length) % vehicleTypes.length)
  }

  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section with Dark Background */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Vehicle Towing & Transport
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                We're your first choice for vehicle towing in Australia. We've got the experience, know-how, and quality vehicles to get the job done.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:+61461374583"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  📞 +61 461 374 583
                </a>
                <Link
                  href="#contact"
                  className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50"
                >
                  Online Quote <span>→</span>
                </Link>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">400+</div>
                  <div className="text-slate-300 text-sm md:text-base">Vehicles In Our Fleet</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">5million</div>
                  <div className="text-slate-300 text-sm md:text-base">Tows since 1987</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">450,000</div>
                  <div className="text-slate-300 text-sm md:text-base">Vehicles transported every year</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                  alt="Vehicle being loaded onto tow truck"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Broken Down Banner */}
      <div className="bg-slate-900 py-4">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors inline-block text-center"
            >
              Broken Down?
            </Link>
            <p className="text-white text-lg">
              Contact Us For A Free Quote To Tow Your Vehicle
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Quick, efficient, affordable towing for vehicles
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                We know that towing and transporting your vehicle in a quick, efficient and cost effective way is important to you.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Auswide Towing Group, we've been delivering exceptional vehicle towing services since 1987.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+61461374583"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  📞 +61 461 374 583
                </a>
                <Link
                  href="#contact"
                  className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  Online Quote <span>→</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-premium-lg">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop"
                  alt="Professional towing service"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vehicle Types Carousel */}
      <div className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Vehicle Towing Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Specialized towing solutions for every type of vehicle
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-premium hover:shadow-premium-lg transition-all transform hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-premium hover:shadow-premium-lg transition-all transform hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {vehicleTypes.map((vehicle) => (
                  <div key={vehicle.id} className="min-w-full px-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="card max-w-4xl mx-auto"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <div className="relative rounded-lg overflow-hidden">
                          <img
                            src={vehicle.image}
                            alt={vehicle.title}
                            className="w-full h-64 md:h-80 object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-3xl font-bold text-slate-900 mb-4">
                            {vehicle.title}
                          </h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">
                            {vehicle.description}
                          </p>
                          <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                          >
                            Find Out More <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {vehicleTypes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-primary-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Us for Vehicle Towing?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '⚡',
                  title: 'Quick Response',
                  description: 'Fast response times to get you back on the road quickly',
                },
                {
                  icon: '🛡️',
                  title: 'Safe & Secure',
                  description: 'Professional handling to ensure your vehicle arrives safely',
                },
                {
                  icon: '💰',
                  title: 'Affordable Rates',
                  description: 'Competitive pricing with transparent, upfront quotes',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
