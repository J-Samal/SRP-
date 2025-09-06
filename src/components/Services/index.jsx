import React from 'react';
import { services } from '../../data';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-base-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="w-full max-w-full mx-auto px-[20px] relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-neutral"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral/70 text-lg max-w-2xl mx-auto"
          >
            Comprehensive construction solutions tailored to your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-base-100 border border-base-300 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group relative"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 text-neutral">
                  {service.name}
                </h3>
                <p className="text-neutral/70 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <div className="mt-4">
                  <button className="text-primary font-medium text-sm hover:underline transition-all duration-300 group-hover:text-primary/80">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-xl transition-colors duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
