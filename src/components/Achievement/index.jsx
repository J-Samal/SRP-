import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaBuilding, FaStar } from 'react-icons/fa';
import CountUp from 'react-countup';

const achievements = [
  {
    icon: <FaTrophy />,
    count: 4,
    title: "Years Experience",
    suffix: "+"
  },
  {
    icon: <FaUsers />,
    count: 10,
    title: "Happy Clients",
    suffix: "+"
  },
  {
    icon: <FaBuilding />,
    count: 6,
    title: "Projects Done",
    suffix: "+"
  },
  {
    icon: <FaStar />,
    count: 98,
    title: "Success Rate",
    suffix: "%"
  }
];

const Achievement = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="card bg-base-200 hover:bg-base-300 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <div className="card-body items-center text-center p-6">
            <div className="text-primary text-3xl mb-4">
              {achievement.icon}
            </div>
            
            <div className="flex items-center gap-1 text-3xl font-bold mb-2">
              <CountUp
                end={achievement.count}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce
              />
              <span className="text-primary">{achievement.suffix}</span>
            </div>
            
            <h3 className="text-base-content/80 font-medium">
              {achievement.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Achievement;
