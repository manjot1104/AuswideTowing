'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const transportServices = [
  {
    id: 'boat',
    title: 'Interstate Boat Transport',
    description: 'Professional boat transport services across Australia',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
  },
  {
    id: 'caravan',
    title: 'Interstate Caravan Transport',
    description: 'Safe and secure caravan transport interstate',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
  },
  {
    id: 'motorcycle',
    title: 'Interstate Motorcycle Transport',
    description: 'Specialized motorcycle transport across states',
    image: 'https://images.unsplash.com/photo-1558980664-1db5067516f2?w=800&h=600&fit=crop',
  },
  {
    id: 'container',
    title: 'Interstate Shipping Container Transport',
    description: 'Container transport services nationwide',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
  },
]

const processSteps = [
  {
    step: 'STEP 1',
    title: 'Ensure You Are Safe',
    description: 'The first priority in any emergency situation is your safety. If you experience a breakdown or accident, move your vehicle to a safe location away from traffic, if possible. Turn on your hazard lights and stay inside your vehicle until help arrives.',
  },
  {
    step: 'STEP 2',
    title: 'Call Us for a Tow',
    description: 'Once you are safe, contact our 24/7 dispatch team. Provide us with essential details such as your location, the type of vehicle, and any specific needs you might have. Our team will quickly dispatch a tow truck to your location.',
  },
  {
    step: 'STEP 3',
    title: 'Prepare Your Vehicle for Towing',
    description: 'If time allows, remove any personal belongings from your vehicle and secure any loose items. Ensure that the vehicle is in a position that allows for easy loading onto the tow truck.',
  },
  {
    step: 'STEP 4',
    title: 'Stay Safe Until Help Arrives',
    description: 'Stay in a safe area while waiting for the tow truck. If you\'re on a busy road, it\'s best to remain inside your vehicle with the doors locked. Our professional interstate tow truck drivers will handle the rest.',
  },
]

export default function InterstateTowing() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transportServices.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transportServices.length) % transportServices.length)
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
                Interstate Car Towing Service
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Interstate towing services from Auswide Towing Group can get your vehicle where it needs to be, anywhere in Australia. We offer 24/7 and emergency interstate towing services to help customers stuck far away from home.
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
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop"
                  alt="Interstate towing vehicle"
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

      {/* Specialised Services Section */}
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
                Specialised Car Towing Interstate Services
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Established in 1987, Auswide Towing Group has made a name for ourselves around the country as a premium interstate towing provider. We have fleets of tow trucks in major national hubs to offer assistance where you need it.
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                  alt="Interstate road and signage"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Our Interstate Car Towing Services?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When it comes to interstate car towing services, you deserve a provider that goes above and beyond. At Auswide Towing Group, we pride ourselves on our exceptional service, which is why we stand out from the rest. Here's what sets us apart:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: '🕐',
                title: '24/7 Availability',
                description: 'Emergencies don\'t adhere to a 9-to-5 schedule, and neither do we. Our team is ready around the clock to handle your interstate towing needs, no matter the time of day or night. Whether it\'s early morning or late at night, we\'re just a call away.',
              },
              {
                icon: '⚡',
                title: 'Quick Response Times',
                description: 'Time is of the essence in emergency situations, including interstate towing. Our efficient dispatch system ensures that help is on the way as quickly as possible. We guarantee rapid response times to get you and your vehicle moving again.',
              },
              {
                icon: '🚗',
                title: 'Able to Tow Most Vehicles',
                description: 'From compact cars to large trucks, our versatile interstate towing fleet can handle a wide range of vehicles. We are equipped to manage various towing scenarios, ensuring your vehicle arrives safely at its destination.',
              },
              {
                icon: '🚛',
                title: '400+ Vehicles in Fleet',
                description: 'With a substantial fleet of over 400 vehicles, we are equipped to meet the demands of interstate towing. Our diverse fleet allows us to match the right truck to your specific needs, ensuring efficiency and reliability.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+61461374583"
                    className="btn-primary text-sm px-6 py-3 flex items-center justify-center gap-2"
                  >
                    📞 +61 461 374 583
                  </a>
                  <Link
                    href="#contact"
                    className="btn-secondary text-sm px-6 py-3 flex items-center justify-center gap-2"
                  >
                    Online Quote <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Interstate Towing Process Explained
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              With a substantial fleet of over 400 vehicles, we are equipped to meet the demands of interstate towing. Our diverse fleet allows us to match the right truck to your specific needs, ensuring efficiency and reliability.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary-600 hidden md:block"></div>

              {/* Steps */}
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex gap-8">
                      {/* Timeline Circle */}
                      <div className="hidden md:block relative z-10">
                        <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 card bg-slate-50">
                        <div className="text-primary-600 font-bold text-sm mb-2">{step.step}</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">{step.description}</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href="tel:+61461374583"
                            className="btn-primary text-sm px-6 py-3 flex items-center justify-center gap-2"
                          >
                            📞 +61 461 374 583
                          </a>
                          <Link
                            href="#contact"
                            className="btn-secondary text-sm px-6 py-3 flex items-center justify-center gap-2"
                          >
                            Online Quote <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Scenarios Section */}
      <div className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Common Scenarios Where Emergency Interstate Towing Is Needed
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Understanding when interstate towing is essential can help you recognise when to call for assistance. Here are some common scenarios:
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  title: 'Breakdowns and Mechanical Failures',
                  description: 'Breakdowns and mechanical failures can happen unexpectedly. If your vehicle breaks down far from home, especially on an interstate, immediate towing is crucial to prevent further damage and get you back on the road as soon as possible.',
                },
                {
                  title: 'After a Collision',
                  description: 'After a collision, your vehicle may not be drivable, necessitating interstate towing to a repair shop or another destination. We ensure safe transport of your vehicle to the desired location.',
                },
                {
                  title: 'Moving Across States',
                  description: 'Moving across states or transporting a vehicle to a different location requires reliable interstate towing services. We handle the logistics and ensure your vehicle arrives in the same condition.',
                },
                {
                  title: 'Transporting for Special Events',
                  description: 'Transporting a vehicle for a special event, such as a car show or auction, requires specialized towing services. We provide timely and perfect condition delivery for your special occasions.',
                },
              ].map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card bg-white"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{scenario.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{scenario.description}</p>
                </motion.div>
              ))}
            </div>

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
        </div>
      </div>

      {/* Cost Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Cost of Interstate Towing Services
            </h2>
            <p className="text-xl text-slate-600 mb-4 font-semibold">
              Understanding the cost of interstate towing helps in planning and budgeting.
            </p>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              The cost of interstate towing depends on several factors including the distance of the tow, the type of vehicle, and any special requirements. Long distances and larger vehicles typically incur higher costs.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We offer transparent pricing and will provide a detailed quote based on your specific needs. Contact us directly for a customised quote, and get your vehicle back on the road as soon as possible.
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
        </div>
      </div>

      {/* Transport Services Carousel */}
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
              Our Interstate Transport Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive interstate transport solutions for all your needs
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
                {transportServices.map((service) => (
                  <div key={service.id} className="min-w-full px-4">
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
                            src={service.image}
                            alt={service.title}
                            className="w-full h-64 md:h-80 object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-3xl font-bold text-slate-900 mb-4">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 btn-primary"
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
              {transportServices.map((_, index) => (
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
    </section>
  )
}
