import React from 'react';
import { motion } from 'framer-motion';
import { contacts } from '../../data';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-full mx-auto px-[20px] relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-neutral"
            >
              <span className="text-primary">Contact Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral/70 text-lg"
            >
              We build with precision and passion, creating structures that stand the test of time
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 bg-base-100 rounded-xl p-6 md:p-8 shadow-sm border border-base-300"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg bg-base-200 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg bg-base-200 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-base-200 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-base-200 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-base-200 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  ></textarea>
                </div>

                <button type="submit" className="custom-btn-primary w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-base-100 rounded-xl p-6 border border-base-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-neutral">{contact.name}</h3>
                      {contact.name === "Email" ? (
                        <div className="space-y-2">
                          <a 
                            href={`mailto:${contact.value}`}
                            className="block text-neutral/70 hover:text-primary transition-colors duration-300 cursor-pointer"
                            title="Click to send email"
                          >
                            {contact.value}
                          </a>
                          {contact.value2 && (
                            <a 
                              href={`mailto:${contact.value2}`}
                              className="block text-neutral/70 hover:text-primary transition-colors duration-300 cursor-pointer"
                              title="Click to send email"
                            >
                              {contact.value2}
                            </a>
                          )}
                        </div>
                      ) : contact.name === "Phone Number" ? (
                        <a 
                          href={`tel:${contact.value}`}
                          className="text-neutral/70 hover:text-primary transition-colors duration-300 cursor-pointer"
                          title="Click to call"
                        >
                          {contact.value}
                        </a>
                      ) : contact.name === "Address" ? (
                        <a 
                          href="https://maps.app.goo.gl/gzFcs3Y27hUuB5QV6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral/70 hover:text-primary transition-colors duration-300 cursor-pointer flex items-center gap-2"
                          title="Click to view on Google Maps"
                        >
                          {contact.value}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                            <path d="M7 7h10v10"/>
                            <path d="M7 17 17 7"/>
                          </svg>
                        </a>
                      ) : (
                        <p className="text-neutral/70">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
