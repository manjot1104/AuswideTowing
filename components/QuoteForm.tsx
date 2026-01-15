'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  towingType: string
  registrationPlate?: string
  isDriveable: boolean
  wasInAccident: boolean
  collectionAddress: string
  deliveryAddress: string
  collectASAP: boolean
  additionalComments?: string
}

const towingTypes = [
  { id: 'car', label: 'Car', icon: '🚗' },
  { id: 'plant-equipment', label: 'Plant & Equipment', icon: '🏗️' },
  { id: 'motorcycle', label: 'Motorcycle', icon: '🏍️' },
  { id: 'material', label: 'Material', icon: '📦' },
  { id: 'limousine', label: 'Limousine', icon: '🚙' },
  { id: 'generator', label: 'Generator', icon: '⚡' },
  { id: 'bus-coach', label: 'Bus & Coach', icon: '🚌' },
  { id: 'caravan', label: 'Caravan', icon: '🏕️' },
  { id: 'portable-container', label: 'Portable & Container', icon: '📦' },
  { id: 'boat-trailer', label: 'Boat & Trailer', icon: '🚤' },
  { id: 'truck', label: 'Truck', icon: '🚛' },
]

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedTowingType, setSelectedTowingType] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      isDriveable: true,
      wasInAccident: false,
      collectASAP: true,
    },
  })

  const isDriveable = watch('isDriveable')
  const wasInAccident = watch('wasInAccident')
  const collectASAP = watch('collectASAP')

  const onSubmit = async (data: FormData) => {
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
            ...data,
            towingType: selectedTowingType,
            fullName: `${data.firstName} ${data.lastName}`,
            serviceType: towingTypes.find(t => t.id === selectedTowingType)?.label || 'Other',
            additionalDetails: data.additionalComments,
          }),
        }
      )

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setSelectedTowingType('')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get a <span className="text-primary-600">Free Quote</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Please enter your information so we can get in touch with you
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card space-y-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Towing & Transport Quote</h3>
              <p className="text-slate-600 mb-6">Please enter your information so we can get in touch with you.</p>

              {/* Name Fields - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
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
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters',
                        },
                      })}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Last Name */}
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
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters',
                        },
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

              {/* Email and Phone - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
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

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone <span className="text-orange-500">Required</span>
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

              {/* Company (Optional) */}
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

              {/* What Needs Towing? */}
              <div>
                <label className="block text-lg font-bold text-slate-900 mb-4">
                  What Needs Towing?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {towingTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setSelectedTowingType(type.id)
                        setValue('towingType', type.id)
                      }}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        selectedTowingType === type.id
                          ? 'border-primary-600 bg-primary-50 text-primary-700'
                          : 'border-slate-300 hover:border-primary-400 text-slate-700'
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <div className="text-sm font-medium">{type.label}</div>
                    </button>
                  ))}
                </div>
                {!selectedTowingType && (
                  <p className="mt-2 text-sm text-red-600">Please select what needs towing</p>
                )}
                <input type="hidden" {...register('towingType', { required: true })} />
              </div>

              {/* Asset Details */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-4">Asset Details</h4>

                {/* Registration Plate */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Registration Plate
                  </label>
                  <div className="flex gap-2 mb-2">
                    <button
                      type="button"
                      className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-200 transition-colors flex items-center gap-2"
                    >
                      ⚠️ Enter Details Manually
                    </button>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">🚗</span>
                    <input
                      type="text"
                      id="registrationPlate"
                      {...register('registrationPlate')}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter Plate"
                    />
                  </div>
                </div>

                {/* Vehicle Condition */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Vehicle Condition
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('isDriveable')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                    <span className="text-slate-700 font-medium">This vehicle is driveable</span>
                  </div>
                </div>

                {/* Vehicle Accident */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Vehicle Accident
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('wasInAccident')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                    <span className="text-slate-700 font-medium">This vehicle was in an accident</span>
                  </div>
                </div>
              </div>

              {/* Journey Details */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-4">Journey Details</h4>

                {/* Collection Address */}
                <div className="mb-6">
                  <label htmlFor="collectionAddress" className="block text-sm font-medium text-slate-700 mb-2">
                    Collection Address <span className="text-orange-500">Required</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">📍</span>
                    <input
                      type="text"
                      id="collectionAddress"
                      {...register('collectionAddress', {
                        required: 'Collection address is required',
                      })}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter Collection Address"
                    />
                  </div>
                  {errors.collectionAddress && (
                    <p className="mt-1 text-sm text-red-600">{errors.collectionAddress.message}</p>
                  )}
                </div>

                {/* Delivery Address */}
                <div className="mb-6">
                  <label htmlFor="deliveryAddress" className="block text-sm font-medium text-slate-700 mb-2">
                    Delivery Address <span className="text-orange-500">Required</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">📍</span>
                    <input
                      type="text"
                      id="deliveryAddress"
                      {...register('deliveryAddress', {
                        required: 'Delivery address is required',
                      })}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter Delivery Address"
                    />
                  </div>
                  {errors.deliveryAddress && (
                    <p className="mt-1 text-sm text-red-600">{errors.deliveryAddress.message}</p>
                  )}
                </div>

                {/* Collection Time */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Collection Time <span className="text-orange-500">Required</span>
                  </label>
                  <div className="flex items-center gap-3 mb-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('collectASAP')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                    <span className="text-slate-700 font-medium">Collect ASAP</span>
                  </div>
                  {collectASAP && (
                    <p className="text-sm text-slate-600 ml-14">
                      We'll be in touch to arrange the earliest collection time.
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <label htmlFor="additionalComments" className="block text-lg font-bold text-slate-900 mb-2">
                  Additional Comments
                </label>
                <p className="text-sm text-slate-600 mb-3">Please add anything else that may be of help.</p>
                <textarea
                  id="additionalComments"
                  {...register('additionalComments')}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Enter description here"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !selectedTowingType}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit form'}
              </button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                >
                  ✓ Thank you! Your quote request has been submitted. We'll contact you shortly.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                >
                  ✗ Something went wrong. Please try again or call us directly at 0614 613 74583.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Call Us Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="card bg-slate-50 border-2 border-slate-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚠️</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">Call Us</h3>
              <p className="text-slate-600 mb-6 text-center">
                Need an urgent quote? Call us to speak to a team member
              </p>
              <a
                href="tel:+6161461374583"
                className="w-full btn-primary text-center block"
              >
                📞 Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
