import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMicrophone, HiOutlineCamera, HiOutlineEye } from 'react-icons/hi';

// Framer Motion Variants for Staggered Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Items will appear one after another
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

// Feature Item Component
const FeatureItem = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      className="flex items-start space-x-4 mb-8"
      variants={itemVariants}
      whileHover={{ scale: 1.03, x: 10 }} // Subtle hover effect
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Icon with Purple Background */}
      <div className="flex-shrink-0 p-3 bg-indigo-500 rounded-full text-white shadow-lg">
        <Icon className="w-6 h-6" />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

const HowitWorks = () => {
  const imageUrl = 'https://www.durbinai.com/blind-school.png';

  return (
    <div className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How The <span className="text-indigo-600">Assistive Reader</span> Works
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Our AI-powered currency & price reader helps visually impaired individuals shop independently
            and with confidence in Bangladesh.
          </p>
        </motion.div>

        {/* Content Layout (Features & Image) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Feature List */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Animation runs once when in view
          >
            <FeatureItem
              icon={HiOutlineMicrophone}
              title="Voice Command Activation"
              description="Activate the app and begin scanning by simply speaking a command."
            />
            <FeatureItem
              icon={HiOutlineCamera}
              title="Real-Time Camera Input"
              description="The app uses your device’s camera to detect Bangladeshi currency and read prices."
            />
            <FeatureItem
              icon={HiOutlineEye}
              title="AI-Powered Price Recognition"
              description="AI analyzes the input and reads out the price tag in Bangla within few seconds."
            />
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg">
              <img
                src={imageUrl}
                alt="Visually impaired children receiving education with teacher"
                className="w-full h-auto rounded-xl shadow-2xl transform rotate-1 transition-transform duration-500" // Subtle rotation for style
                style={{ clipPath: 'url(#rounded-clip)', filter: 'drop-shadow(0 20px 20px rgba(0, 0, 0, 0.2))' }}
              />
              {/* Optional: Add a subtle rounded border that matches the image border */}
              <div className="absolute inset-0 border-4 border-white/50 rounded-xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
