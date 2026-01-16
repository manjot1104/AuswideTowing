'use client'

import { motion } from 'framer-motion'

const inventoryImages = [
  {
    id: 1,
    src: '/images/inventory/flatbed-kubota-loader.jpg',
    alt: 'White flatbed tow truck transporting orange Kubota SVL 75 compact track loader',
  },
  {
    id: 2,
    src: '/images/inventory/tow-truck-bus.jpg',
    alt: 'White flatbed tow truck transporting white bus',
  },
  {
    id: 3,
    src: '/images/inventory/flatbed-trailers.jpg',
    alt: 'White flatbed tow truck with two white enclosed trailers',
  },
  {
    id: 4,
    src: '/images/inventory/tow-truck-minibus.jpg',
    alt: 'White tow truck transporting white mini-bus',
  },
  {
    id: 5,
    src: '/images/inventory/kubota-side-view.jpg',
    alt: 'Side view of white flatbed tow truck with orange Kubota compact track loader',
  },
]

export default function Inventory() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="inventory" className="section-padding bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-primary-600">Fleet & Inventory</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our modern fleet of tow trucks and specialized equipment designed to handle any towing challenge
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {inventoryImages.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    item.id === 2 ? 'object-top' : ''
                  }`}
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
