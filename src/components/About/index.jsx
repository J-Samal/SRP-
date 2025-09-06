import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaCheck } from 'react-icons/fa';
import { about_image, building_1, building_2, building_3 } from '../../assets';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="w-full max-w-full mx-auto px-[20px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={about_image}
                alt="About Us"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              {/* Decorative gradient */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform scale-105 blur-lg"></div>
              
              {/* Name under image */}
              <div className="mt-4 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-neutral">
                  Er. Soumya Ranjan Parida
                </h3>
                <p className="text-neutral font-bold text-sm md:text-base mt-1">
                  Founder
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">About Us</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-neutral">
              Why Choose Us?
            </h3>

            {/* Project Images */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[building_1, building_2, building_3].map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neutral/70 mb-8 leading-relaxed"
            >
              Founded in 2022, SRP Construction is one of Bhubaneswar's most dynamic real estate development and construction company. Our projects are scattered across different cities of Odisha that range from multi-unit residential communities and corporate campuses to exclusive residential condominiums presenting superb design and enduring workmanship.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-neutral/70 mb-8 leading-relaxed"
            >
              Our team members hold decades of construction experience and attentively oversee every aspect of the development process from acquisition of land through design, marketing, and construction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-neutral/70 mb-8 leading-relaxed"
            >
              SRP Constructiontakes pride in the ability to realize multifold development opportunities found in advance of the marketplace and chase tangible innovations in design and construction. We identify promising neighborhoods and target demographics, and its comprehensive building programming outputs unit mixes, amenities, and finishes that are optimized for individual market and site.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-neutral/70 mb-8 leading-relaxed"
            >
              Our company collaborates with the best workforce including architects and designers to realize superior products. The intimate approach of SRP Construction is project development and delivery that yields refined products, which constantly outperform the competition not just in the capital city but beyond.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-neutral/70 mb-8 leading-relaxed"
            >
              SRP Construction handmade buildings raise the bar – we foresee shifts in the Bhubaneswar area's ever-changing real estate landscape and cater to our wide discerning clientele. We often collaborate with big players to ensure that our each project is modern, distinctive and timeless, culturally relevant and financially successful.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-neutral/70 mb-8 leading-relaxed"
            >
              Our sole priority is to make all arrangements for you to have a property in your dream location and erect an abode there with all the facilities that you are always aspiring for. We simplify your every step to make you a proud and permanent resident of Bhubaneswar.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { label: 'Consultation', value: 'Free' },
                { label: 'Expert', value: 'Engineers' },
                { label: 'Customer', value: 'Support' },
                { label: 'Quality', value: 'Service' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FaCheck />
                  </div>
                  <div>
                    <p className="text-neutral/70 text-sm">{item.label}</p>
                    <h4 className="font-semibold text-neutral">{item.value}</h4>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="project" smooth={true} className="custom-btn-outline">
                Explore Projects
              </Link>
              <Link to="contact" smooth={true} className="custom-btn-primary">
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
