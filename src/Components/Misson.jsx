import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

// Framer Motion Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Mission = () => {
  return (
    <motion.div
      className="bg-white py-16 md:py-24 font-sans min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Header: Mission Title --- */}
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
        >
          <p className="text-lg font-semibold text-red-600 uppercase tracking-wider">Our Driving Force</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-2">
            The <span className="text-indigo-600">Core Mission</span>
          </h1>
        </motion.div>

        {/* --- Content Area: Problem & Solution --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* 1. Problem Statement Card (The Challenge) */}
          <motion.div
            className="p-8 rounded-2xl shadow-xl bg-red-50 border-t-8 border-red-500 flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-[1.03]"
            variants={cardVariants}
          >
            <FaHeartbeat className="w-12 h-12 text-red-600 mb-6 animate-pulse" />
            <h2 className="text-2xl font-bold text-red-800 mb-3">The Problem</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Visually impaired persons in Bangladesh face severe challenges in local shops, struggling to **identify Bangladeshi currency notes** and **read product prices** independently.
            </p>
            <p className="mt-4 text-sm font-semibold text-red-500">
              Barrier to Independence & Confidence
            </p>
          </motion.div>

          {/* 2. Central Arrow/Separator (Only on large screens) */}
          <motion.div 
            className="hidden lg:flex items-center justify-center pt-20"
            variants={cardVariants}
            transition={{ delay: 0.5 }} // Delay for a sequential flow effect
          >
             <div className="h-1 bg-indigo-300 w-full relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-indigo-500"></div>
             </div>
          </motion.div>

          {/* 3. Proposed Solution Card (The Mission) */}
          <motion.div
            className="p-8 rounded-2xl shadow-xl bg-indigo-50 border-t-8 border-indigo-500 flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-[1.03]"
            variants={cardVariants}
          >
            <FaShieldAlt className="w-12 h-12 text-indigo-600 mb-6" />
            <h2 className="text-2xl font-bold text-indigo-800 mb-3">The Solution (Our Mission)</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To develop an **AI-based application** that instantly recognizes currency and reads prices aloud in **Bangla**, empowering users to shop confidently and independently.
            </p>
            <p className="mt-4 text-sm font-semibold text-indigo-500">
              Empowering Independence and Confidence
            </p>
          </motion.div>

        </div>

        {/* --- Key Takeaway / Punchline --- */}
        <motion.div
            className="max-w-4xl mx-auto mt-20 p-8 rounded-xl bg-green-50 border-l-4 border-green-500 shadow-lg text-center"
            variants={cardVariants}
        >
            <div className="flex items-center justify-center space-x-3">
                 <FaLightbulb className="w-6 h-6 text-green-600 flex-shrink-0" />
                 <h3 className="text-xl font-bold text-green-800">Mission Goal</h3>
            </div>
            <p className="mt-3 text-gray-700 text-lg italic">
                "Bridging the visual gap with intelligent, accessible technology localized for the Bangladeshi community."
            </p>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Mission;