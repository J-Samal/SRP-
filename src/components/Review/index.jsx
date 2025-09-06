import React from 'react';
import { review } from '../../data';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        }
      }
    ]
  };

  return (
    <section id="review" className="py-16 md:py-24 bg-gradient-to-b from-base-200 to-base-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
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
            Client <span className="text-primary">Reviews</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral/70 text-lg max-w-2xl mx-auto"
          >
            What our valued clients say about our services
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...settings} className="review-slider -mx-4">
            {review.map((item, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-base-100 border border-base-300 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral">{item.name}</h3>
                      <p className="text-primary/80 text-sm">Verified Client</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-neutral/70 italic">"{item.revieww}"</p>
                  </div>

                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5" />
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .review-slider .slick-dots li button:before {
          color: var(--primary);
        }
        .review-slider .slick-dots li.slick-active button:before {
          color: var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Review;
