import React from 'react'
import "./Footer.css"
import Logo from '../Logo'
import { footer } from '../../data'
import { Link } from 'react-scroll'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const footerLinks = [
    { name: 'Home', to: 'header' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'project' },
    { name: 'Contact', to: 'contact' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/srp__construction?utm_source=qr&igsh=MXI0d2hiaTU1a2Vyaw==' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com' },
  ]

  return (
    <footer className="bg-base-100 border-t border-base-300 pt-16 pb-8">
      <div className="w-full max-w-full mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link to="header" className="text-2xl font-bold mb-4 block cursor-pointer text-neutral">
              PARIDA<span className="text-primary"> & SONS</span>
            </Link>
            <p className="text-neutral/70 mb-6">
              Building dreams into reality with precision, innovation, and unwavering commitment to quality.
              Your trusted partner in construction excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-base-200 border border-base-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-neutral">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    className="text-neutral/70 hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-neutral">Newsletter</h3>
            <p className="text-neutral/70 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-base-200 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              <button type="submit" className="custom-btn-primary w-full">
                Subscribe
              </button>
            </form>
          </motion.div>


        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-base-300 pt-8 text-center"
        >
          <p className="text-neutral/70">
            ©2022 SRP Constrution LTD. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


//{new Date().getFullYear()}