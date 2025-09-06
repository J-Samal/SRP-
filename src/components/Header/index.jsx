import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import bg from '../../assets/bg.jpeg';
import Achievement from '../Achievement';

const Header = () => {
  return (
    <header id="header" className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/65"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-28">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.2em] mb-6 relative">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Welcome to SRP Construction
                </span>
                {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-primary rounded-full"></div> */}
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-neutral">
                Building Your 
                <span className="block mt-2">
                  <span className="text-primary">Dreams</span> Into Reality
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-neutral/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
            >
              We are dedicated to turning your visions into tangible masterpieces.
              With years of experience and a team of skilled professionals,
              we deliver excellence in every project.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center pt-4"
            >
              <Link
                to="services"
                smooth={true}
                className="custom-btn-outline text-lg px-8 py-4"
              >
                Our Services
              </Link>
              <Link
                to="contact"
                smooth={true}
                className="custom-btn-primary text-lg px-8 py-4"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievement Section */}
        <div className="mt-20 lg:mt-28">
          <Achievement />
        </div>
      </div>
    </header>
  );
};

export default Header;
