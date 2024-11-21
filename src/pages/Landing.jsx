import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaBrain, FaChartLine } from 'react-icons/fa';

function Landing() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Master Marketing Skills
        </h1>
        <p className="text-xl dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
          Learn digital marketing through interactive conversations with our AI-powered bot.
          Master SEO, Google Ads, and more through hands-on experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-xl dark:bg-gray-900/50 bg-white shadow-xl"
          >
            <feature.icon className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-800">{feature.title}</h3>
            <p className="dark:text-gray-400 text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <Link
          to="/login"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg hover:opacity-90 transition-opacity"
        >
          Start Learning Now
        </Link>
      </motion.div>
    </div>
  );
}

const features = [
  {
    icon: FaRocket,
    title: 'Interactive Learning',
    description: 'Learn through conversation with our AI bot that adapts to your pace and knowledge level.'
  },
  {
    icon: FaBrain,
    title: 'Practical Skills',
    description: 'Get hands-on experience with real-world marketing scenarios and challenges.'
  },
  {
    icon: FaChartLine,
    title: 'Track Progress',
    description: 'Monitor your learning journey with achievements and progress tracking.'
  }
];

export default Landing;