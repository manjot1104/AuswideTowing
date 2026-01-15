'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SpecialtyTowing() {
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
                24/7 Speciality Towing Service
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Towing and transporting specialty vehicles and items takes a certain amount of experience, and plenty of care. That's where we come in.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:+6161461374583"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  📞 0614 613 74583
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
                  alt="Specialty towing vehicle"
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
                Speciality Transport Since 1987
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                At Auswide Towing Group, we've been towing and transporting vehicles and specialty items for more than 35 years. Our towing experts know just how to transport rare and expensive vehicles safely, and we utilise the latest technology to give our customers and clients peace of mind, every time.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Get your vehicle to where it needs to be, safely and securely.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+6161461374583"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  📞 0614 613 74583
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
                  alt="Professional specialty towing service"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What We Tow Section */}
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
              What specialty vehicles and items do we tow and transport?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We regularly tow all kinds of specialty vehicles and items, both locally and interstate. We're here to deliver safe, affordable, and swift specialised towing solutions for people and businesses around Australia.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">We tow and transport:</h3>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Vintage vehicles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Racing vehicles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Rare vehicles and machines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Supercars</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Classic cars and collectibles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Motorcycles and bikes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>And much more</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              It's absolutely essential that your special vehicle is handled by an experienced transport team that prioritises the care of your machine. At Auswide Towing Group, we're dedicated to delivering safe and smooth services, every time. That includes towing for broken-down vehicles, and transport for items that need to be moved safely.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+6161461374583"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                📞 0614 613 74583
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

      {/* Specialty Vehicle Types Grid */}
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
              Our Specialty Towing Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Expert handling for rare, valuable, and specialty vehicles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏎️',
                title: 'Supercars',
                description: 'Luxury and high-performance supercars transported with utmost care and precision',
                image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
              },
              {
                icon: '🚗',
                title: 'Vintage Vehicles',
                description: 'Classic and vintage cars handled with specialized equipment and expertise',
                image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop',
              },
              {
                icon: '🏁',
                title: 'Racing Vehicles',
                description: 'Professional transport for race cars and competition vehicles',
                image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
              },
              {
                icon: '💎',
                title: 'Rare Vehicles',
                description: 'Rare and collectible vehicles transported with specialized care',
                image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop',
              },
              {
                icon: '🏍️',
                title: 'Motorcycles',
                description: 'Specialized motorcycle transport for all types of bikes',
                image: 'https://images.unsplash.com/photo-1558980664-1db5067516f2?w=600&h=400&fit=crop',
              },
              {
                icon: '🔧',
                title: 'Custom Machines',
                description: 'Unique and custom-built vehicles and machines safely transported',
                image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
              },
            ].map((vehicle, index) => (
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
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-4xl">{vehicle.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{vehicle.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{vehicle.description}</p>
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
                Why Choose Us for Specialty Towing?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Expert Care',
                  description: 'Specialized handling for rare and valuable vehicles with utmost care and precision',
                },
                {
                  icon: '🛡️',
                  title: 'Safe Transport',
                  description: 'Latest technology and equipment to ensure your specialty vehicle arrives safely',
                },
                {
                  icon: '⭐',
                  title: '35+ Years Experience',
                  description: 'Over three decades of experience transporting specialty vehicles across Australia',
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
