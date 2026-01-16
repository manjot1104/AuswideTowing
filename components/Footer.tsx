'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-white">
                Auswide <span className="text-primary-400">Towing Group</span>
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Professional towing and roadside assistance services across Australia. Available 24/7.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Vehicle Towing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Plant & Equipment
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Portables & Containers
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Specialty Towing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Interstate
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Storage Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="text-primary-400">📞</span>
                <a
                  href="tel:+61461374583"
                  className="hover:text-primary-400 transition-colors"
                >
                  +61 461 374 583
                </a>
                <span className="text-slate-400 mx-2">|</span>
                <a
                  href="tel:+61452000091"
                  className="hover:text-primary-400 transition-colors"
                >
                  +61 452 000 091
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-400">✉️</span>
                <a
                  href="mailto:info@auswidetowing.com.au"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@auswidetowing.com.au
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-400">📍</span>
                <span>
                  123 Towing Street<br />
                  Melbourne, VIC 3000<br />
                  Australia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            © {currentYear} Auswide Towing Group. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
