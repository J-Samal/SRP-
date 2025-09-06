import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'header' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'project' },
    { name: 'Reviews', to: 'review' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? 'bg-base-100/95 backdrop-blur shadow-lg' 
          : 'bg-base-100/60 backdrop-blur'
      }`}
    >
      <div className="w-full max-w-full mx-auto px-[20px]">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="header" 
              className="flex items-center gap-4 cursor-pointer"
            >
              <img src={logo} alt="Company Logo" className="h-24 md:h-28 w-auto object-contain py-2" />
              <div className="text-2xl md:text-3xl font-bold text-neutral hover:text-primary transition-colors duration-300">
                PARIDA <span className="text-primary">& SONS</span>
              </div>
            </Link>
          </motion.div>

          {/* Mobile Phone Number - Always Visible */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:hidden flex items-center gap-2"
          >
            <a
              href="tel:+917008560310"
              className="flex items-center gap-1 text-neutral hover:text-primary transition-colors duration-300 cursor-pointer"
              title="Click to call"
            >
              <FaPhone className="text-xs" />
              <span className="text-xs font-medium">+91 7008560310</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  className="text-neutral hover:text-primary transition-all duration-300 cursor-pointer relative group"
                  activeClass="text-primary font-medium"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            
            {/* Phone Number */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <a
                href="tel:+917008560310"
                className="flex items-center gap-2 text-neutral hover:text-primary transition-colors duration-300 cursor-pointer"
                title="Click to call"
              >
                <FaPhone className="text-sm" />
                <span className="text-sm font-medium">+91 7008560310</span>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="contact"
                smooth={true}
                className="custom-btn-primary hover:scale-105 transition-transform duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:hidden p-2 hover:bg-base-200 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-base-100/95 backdrop-blur"
            >
              <motion.div 
                className="py-4 space-y-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.to}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                  >
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      className="block px-4 py-2 text-neutral hover:text-primary hover:bg-base-200 transition-all duration-300 cursor-pointer"
                      activeClass="text-primary font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  className="px-4 pt-2"
                >
                  <Link
                    to="contact"
                    smooth={true}
                    className="custom-btn-primary w-full text-center block hover:scale-[1.02] transition-transform duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
