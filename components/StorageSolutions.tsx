'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface StorageFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  storageType: string
}

const storageTypes = [
  { id: '4wds', label: '4WDs', icon: '🚙' },
  { id: 'agriculture', label: 'Agriculture', icon: '🚜' },
  { id: 'boats', label: 'Boats', icon: '🚤' },
  { id: 'bus-coach', label: 'Bus & Coach', icon: '🚌' },
  { id: 'caravans', label: 'Caravans', icon: '🏕️' },
  { id: 'cars', label: 'Cars', icon: '🚗' },
  { id: 'construction', label: 'Construction Equipment', icon: '🏗️' },
  { id: 'containers', label: 'Containers', icon: '📦' },
  { id: 'elevated-platforms', label: 'Elevated Work Platforms', icon: '🔧' },
  { id: 'generators', label: 'Generators', icon: '⚡' },
  { id: 'limousines', label: 'Limousines', icon: '🚙' },
  { id: 'materials', label: 'Materials', icon: '📦' },
  { id: 'motorcycles', label: 'Motorcycles', icon: '🏍️' },
  { id: 'plant-equipment', label: 'Plant & Equipment Transport', icon: '🚛' },
  { id: 'portable-buildings', label: 'Portable Buildings', icon: '🏢' },
  { id: 'portables-containers', label: 'Portables & Containers', icon: '📦' },
  { id: 'trailers', label: 'Trailers', icon: '🚚' },
  { id: 'trucks', label: 'Trucks', icon: '🚛' },
  { id: 'other', label: 'Other', icon: '🐘' },
]

const locations = [
  {
    name: 'Noble Park',
    phone: '+61 461 374 583',
    email: 'noblepark.impound@auswidetowing.com.au',
  },
  {
    name: 'Sunshine',
    phone: '+61 461 374 583',
    email: 'sunshine.impound@auswidetowing.com.au',
  },
]

export default function StorageSolutions() {
  const [selectedStorageType, setSelectedStorageType] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<StorageFormData>()

  const onSubmit = async (data: StorageFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/quote`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            fullName: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phone: data.phone,
            company: data.company || undefined,
            serviceType: 'Storage Solutions',
            towingType: storageTypes.find(t => t.id === selectedStorageType)?.label || selectedStorageType,
            additionalDetails: `Storage Type: ${storageTypes.find(t => t.id === selectedStorageType)?.label || 'Other'}`,
          }),
        }
      )

      if (response.ok) {
        const result = await response.json()
        setSubmitStatus('success')
        reset()
        setSelectedStorageType('')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Failed to submit enquiry' }))
        setSubmitStatus('error')
        console.error('Form submission error:', errorData)
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Network error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
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
                Storage Solutions
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                With multiple dedicated undercover or indoor vehicle storage sites, we provide secure and convenient vehicle storage solutions across Australia.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="#storage-enquiry"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  Online Quote <span>→</span>
                </Link>
                <a
                  href="tel:+61461374583"
                  className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50"
                >
                  📞 Call Now
                </a>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">4,000+</div>
                  <div className="text-slate-300 text-sm md:text-base">Vehicles stored Nationally</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">1,200+</div>
                  <div className="text-slate-300 text-sm md:text-base">Vehicles auctioned annually</div>
                </div>
              </div>

              {/* Storage for Business Link */}
              <div className="mt-8">
                <Link
                  href="#storage-enquiry"
                  className="text-primary-400 hover:text-primary-300 underline flex items-center gap-2 text-lg"
                >
                  STORAGE FOR BUSINESS <span>→</span>
                </Link>
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                  alt="Storage facility with vehicles"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Need Storage Banner */}
      <div className="bg-slate-900 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Need Storage Solutions?</h2>
                <p className="text-slate-300">Use our online form to get a free, no obligation online quote.</p>
                <p className="text-slate-300">You can also ring us to chat about a quote with our team</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+61461374583"
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50"
              >
                📞 Call Now
              </a>
              <Link
                href="#storage-enquiry"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                Online Quote <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Storage Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-premium-lg">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop"
                  alt="Vehicles in storage facility"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="text-5xl font-bold mb-2">1000+</div>
                    <div className="text-xl">Car Capacity</div>
                    <div className="text-lg mt-2">With Secure, Private Storage</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Vehicle Storage
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                With multiple dedicated undercover or indoor vehicle storage sites, we provide secure and convenient vehicle storage solutions across Australia.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our storage sites can collectively hold 1000+ cars, and we are constantly expanding to provide additional storage capability. We can offer secure and private storage and processing, and our storage facilities can safely move cars without keys or vehicle access.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link
                  href="#storage-enquiry"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  Online Quote <span>→</span>
                </Link>
                <a
                  href="tel:+61461374583"
                  className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  📞 Call Now
                </a>
              </div>

              <Link
                href="#storage-enquiry"
                className="text-primary-600 hover:text-primary-700 underline flex items-center gap-2"
              >
                STORAGE FOR BUSINESS <span>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Plant & Equipment Storage Section */}
      <div className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Plant & Equipment Storage
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We can store your plant & equipment items in our secure storage facility until you need them. We can even transport them to and from your business or job site.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link
                  href="#storage-enquiry"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  Online Quote <span>→</span>
                </Link>
                <a
                  href="tel:+61461374583"
                  className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  📞 Call Now
                </a>
              </div>

              <Link
                href="#storage-enquiry"
                className="text-primary-600 hover:text-primary-700 underline flex items-center gap-2"
              >
                STORAGE FOR BUSINESS <span>→</span>
              </Link>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-premium-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                  alt="Plant equipment in storage"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Caravan & Boat Storage Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-premium-lg">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
                  alt="Boat in storage"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Right Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Caravan & Boat Storage
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Reclaim your backyard! Let us store your caravan or boat for you. From small caravans to large boats, we can store whatever you need for as long as you need.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link
                  href="#storage-enquiry"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  Online Quote <span>→</span>
                </Link>
                <a
                  href="tel:+61461374583"
                  className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  📞 Call Now
                </a>
              </div>

              <Link
                href="#storage-enquiry"
                className="text-primary-600 hover:text-primary-700 underline flex items-center gap-2"
              >
                STORAGE FOR BUSINESS <span>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Storage Enquiry Form Section */}
      <section id="storage-enquiry" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="card space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Storage Enquiry</h3>
                  <p className="text-slate-600">Please enter your information so we can get in touch with you.</p>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name <span className="text-orange-500">Required</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">👤</span>
                      <input
                        type="text"
                        id="firstName"
                        {...register('firstName', {
                          required: 'First name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' },
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name <span className="text-orange-500">Required</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">👤</span>
                      <input
                        type="text"
                        id="lastName"
                        {...register('lastName', {
                          required: 'Last name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' },
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Carter"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email <span className="text-orange-500">Required</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">✉️</span>
                      <input
                        type="email"
                        id="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Email address"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number <span className="text-orange-500">Required</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">📞</span>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[\d\s\-\+\(\)]+$/,
                            message: 'Invalid phone number format',
                          },
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Phone Number"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company <span className="text-slate-400 text-xs">(optional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">🏢</span>
                    <input
                      type="text"
                      id="company"
                      {...register('company')}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* What Do You Want To Store? */}
                <div>
                  <label className="block text-lg font-bold text-slate-900 mb-4">
                    What Do You Want To Store?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {storageTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => {
                          setSelectedStorageType(type.id)
                          setValue('storageType', type.id)
                        }}
                        className={`p-4 border-2 rounded-lg text-center transition-all ${
                          selectedStorageType === type.id
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-slate-300 hover:border-primary-400 text-slate-700'
                        }`}
                      >
                        <div className="text-3xl mb-2">{type.icon}</div>
                        <div className="text-sm font-medium">{type.label}</div>
                      </button>
                    ))}
                  </div>
                  {!selectedStorageType && (
                    <p className="mt-2 text-sm text-red-600">Please select what you want to store</p>
                  )}
                  <input type="hidden" {...register('storageType', { required: true })} />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedStorageType}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                  >
                    ✓ Thank you! Your storage enquiry has been submitted. We'll contact you shortly.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                  >
                    ✗ Something went wrong. Please try again or call us directly.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Locations - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{location.name}</h3>
                  <a
                    href="tel:+61461374583"
                    className="btn-primary w-full mb-4 flex items-center justify-center gap-2"
                  >
                    📞 Call {location.phone}
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${location.email}`}
                      className="text-primary-600 hover:text-primary-700 flex-1"
                    >
                      {location.email}
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(location.email)
                      }}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      aria-label="Copy email"
                    >
                      📋
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  )
}
