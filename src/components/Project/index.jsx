import React from 'react';
import { projects } from '../../data';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as RouterLink } from 'react-router-dom';

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        }
      }
    ]
  };

  const toSlug = (title) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <section id="project" className="py-16 md:py-24 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
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
            Our <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral/70 text-lg max-w-2xl mx-auto"
          >
            Discover our portfolio of successful construction projects
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="-mx-[20px] md:-mx-4"
        >
          <Slider {...settings} className="project-slider">
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-xl border border-base-300 bg-base-100 cursor-pointer"
                >
                  {/* Clickable Link Wrapper */}
                  <RouterLink
                    to={`/projects/${toSlug(project.title)}`}
                    className="block w-full h-full"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral/80 via-neutral/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Name - Always Visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-neutral/90 to-transparent">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </RouterLink>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .project-slider .slick-dots {
          bottom: -40px;
        }
        .project-slider .slick-dots li button:before {
          color: var(--primary);
        }
        .project-slider .slick-dots li.slick-active button:before {
          color: var(--primary);
        }
        .project-slider .slick-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .project-slider .slick-center {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Project;
