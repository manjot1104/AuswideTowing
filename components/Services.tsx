'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Service {
  _id: string
  name: string
  description: string
  icon: string
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Default services - use immediately for fast loading
    const defaultServices = [
      {
        _id: '1',
        name: 'Vehicle Towing',
        description: 'We can transport any size vehicle door to door',
        icon: '🚗',
      },
      {
        _id: '2',
        name: 'Plant & Equipment',
        description: 'Supporting Australia\'s plant & equipment organisations',
        icon: '🏗️',
      },
      {
        _id: '3',
        name: 'Portables & Containers',
        description: 'Need a portable building or container moved?',
        icon: '📦',
      },
      {
        _id: '4',
        name: 'Specialty Towing',
        description: 'We can assist with your speciality towing needs',
        icon: '🚛',
      },
      {
        _id: '5',
        name: 'Interstate',
        description: 'Anything, Nationwide, Anytime - Safely.',
        icon: '🛣️',
      },
      {
        _id: '6',
        name: 'Storage Solutions',
        description: 'Check out our storage solutions',
        icon: '🏢',
      },
    ]

    // Set default services immediately for fast loading
    setServices(defaultServices)
    setLoading(false)

    // Only fetch from API if explicitly configured with a valid production URL
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    
    // Skip API fetch if:
    // 1. API URL is not set
    // 2. API URL is localhost (development only)
    // This ensures Vercel uses static data immediately without waiting for API
    if (!apiUrl || apiUrl.includes('localhost')) {
      return // Use default services only - instant loading
    }

    // Try to fetch from API in background with very short timeout (1 second)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 1000) // 1 second timeout for faster fail

    fetch(`${apiUrl}/api/services`, {
      signal: controller.signal,
      // Add cache headers to prevent unnecessary requests
      cache: 'no-store',
    })
      .then((res) => {
        if (!res.ok) throw new Error('API response not ok')
        return res.json()
      })
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          setServices(data)
        }
      })
      .catch(() => {
        // Silently fail - we already have default services
      })
      .finally(() => {
        clearTimeout(timeoutId)
      })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            Comprehensive towing and roadside assistance solutions tailored to your needs
          </p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-slate-700 font-medium">Contact Info:</span>
            <a
              href="tel:+61461374583"
              className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              📞 +61 461 374 583
            </a>
          </div>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card animate-pulse">
                <div className="h-6 bg-slate-200 rounded mb-3"></div>
                <div className="h-16 w-16 bg-slate-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const serviceName = service.name.toLowerCase()
              let href = '#contact'
              
              if (serviceName.includes('vehicle') || (serviceName.includes('towing') && !serviceName.includes('plant') && !serviceName.includes('portable') && !serviceName.includes('specialty') && !serviceName.includes('speciality') && !serviceName.includes('interstate') && !serviceName.includes('storage'))) {
                href = '/vehicle-towing'
              } else if (serviceName.includes('plant') || serviceName.includes('equipment')) {
                href = '/plant-equipment'
              } else if (serviceName.includes('portable') || serviceName.includes('container')) {
                href = '/portables-containers'
              } else if (serviceName.includes('specialty') || serviceName.includes('speciality')) {
                href = '/specialty-towing'
              } else if (serviceName.includes('interstate')) {
                href = '/interstate-towing'
              } else if (serviceName.includes('storage')) {
                href = '/storage-solutions'
              }
              
              return (
              <motion.a
                key={service._id}
                href={href}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card group cursor-pointer block no-underline"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h3>
                  <svg 
                    className="w-6 h-6 text-primary-600 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.a>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}
