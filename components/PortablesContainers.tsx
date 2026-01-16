'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PortablesContainers() {
  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section with Dark Background */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
            alt="Shipping containers background"
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Portable Containers Transport
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Shifting portable containers can be a tricky proposition. However, at Auswide Towing Group, we've got the experience and the equipment to get your portable containers on the road sooner rather than later.
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
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                  alt="Portable container being loaded onto truck"
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
                Portable Containers Transport
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                We're experts at towing and transporting an array of portable containers, of any size. Our team of transport experts know exactly how to navigate this process, ensuring we can transport your container safely and securely. We always provide a smooth and stress-free experience for our clients and customers, all over Australia.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-semibold">
                With Auswide Towing Group, you're always in good hands.
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
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                  alt="Truck transporting portable containers"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What We Transport Section */}
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
              Types of Portable Containers We Transport
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We handle all types of portable containers and storage units, from small portable buildings to large shipping containers. Our specialized equipment and experienced team ensure safe and secure transport every time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                'Shipping containers (20ft, 40ft, and custom sizes)',
                'Portable buildings and site offices',
                'Storage containers and units',
                'Modular buildings and structures',
                'Construction site containers',
                'Temporary accommodation units',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-primary-600 mt-1 text-xl">✓</span>
                  <span className="text-lg text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Whether you need to move a single container or multiple units, our team has the expertise and equipment to handle your requirements. We provide comprehensive transport solutions for businesses and individuals across Australia.
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

      {/* Container Types Grid */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Container Transport Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional transport solutions for all types of portable containers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📦',
                title: 'Shipping Containers',
                description: '20ft, 40ft, and custom-sized shipping containers safely transported',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
              },
              {
                icon: '🏢',
                title: 'Portable Buildings',
                description: 'Site offices and portable buildings moved with care and precision',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
              },
              {
                icon: '🏗️',
                title: 'Storage Containers',
                description: 'Secure transport for storage containers and units of all sizes',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
              },
              {
                icon: '🚚',
                title: 'Modular Structures',
                description: 'Modular buildings and prefabricated structures transported safely',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
              },
              {
                icon: '🔧',
                title: 'Construction Containers',
                description: 'Construction site containers and temporary units moved efficiently',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
              },
              {
                icon: '🏠',
                title: 'Accommodation Units',
                description: 'Temporary accommodation and portable living units transported',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
              },
            ].map((container, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group cursor-pointer overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={container.image}
                    alt={container.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-4xl">{container.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{container.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{container.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="section-padding bg-slate-50">
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
                Why Choose Us for Container Transport?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Expert Handling',
                  description: 'Specialized equipment and experienced operators for safe container transport',
                },
                {
                  icon: '⚡',
                  title: 'Quick Service',
                  description: 'Fast response times to get your containers moved quickly and efficiently',
                },
                {
                  icon: '🛡️',
                  title: 'Secure Transport',
                  description: 'Proper securing and handling to ensure your containers arrive safely',
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
