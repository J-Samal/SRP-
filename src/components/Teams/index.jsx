import React, { useRef } from 'react';
import { teams } from '../../data';
import { motion } from 'framer-motion';

const Teams = () => {
  const containerRef = useRef(null);

  return (
    <section id="teams" className="py-16 md:py-24 bg-base-200">
      <div className="w-full max-w-full mx-auto px-[20px]">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Meet Our <span className="text-primary">Expert Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base-content/70 text-lg max-w-2xl mx-auto"
          >
            Our skilled professionals bring years of experience and dedication to every project
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={containerRef}>
          {teams.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-base-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.profile}
                  alt={member.name}
                  className="w-full h-72 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
{/* marquee animation */}

                {/* Social Links */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {member.social.map((social, idx) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-base-content/70">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
