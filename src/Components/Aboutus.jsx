import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHandshake, FaGlobe, FaTachometerAlt } from 'react-icons/fa';

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
    },
  },
};

// Value/Pillar Card Component
const ValuePillar = ({ icon: Icon, title, description, color }) => (
    <motion.div 
        className={`p-6 rounded-xl shadow-lg border-t-4 ${color} bg-white transition-shadow duration-300 hover:shadow-2xl h-full`}
        variants={itemVariants}
        whileHover={{ y: -5 }}
    >
        <Icon className={`w-10 h-10 ${color.replace('border-t-4', 'text')}-600 mb-4`} />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);


const Aboutus = () => {
    // এখানে আপনার প্রজেক্টের একটি কাল্পনিক ছবি URL ব্যবহার করা হলো
    const teamImageUrl = 'https://images.unsplash.com/photo-1631038506857-6c970dd9ba02?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332';

  return (
    <div className="bg-gray-50 py-16 md:py-24 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Header & Title --- */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-semibold text-indigo-600 uppercase tracking-wider">Our Story & Commitment</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-2">
            Pioneering <span className="text-indigo-600">Assistive AI</span>
          </h1>
        </motion.header>

        {/* --- Mission Section --- */}
        <motion.div 
            className="bg-indigo-700 text-white p-8 md:p-12 rounded-2xl shadow-2xl mb-20"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex items-center space-x-4 mb-4">
                <FaEye className="w-10 h-10 text-yellow-300" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed font-light">
                To eliminate shopping barriers for visually impaired individuals in Bangladesh by providing reliable, instant, and localized AI assistance for currency identification and price reading.
            </p>
        </motion.div>

        {/* --- Vision & Impact Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Vision Text */}
            <motion.div 
                className="lg:pt-10"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-200 pb-2">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    We envision a Bangladesh where every visually impaired person can handle money and shop confidently and independently, without relying on others. Our goal is to set the standard for localized assistive technology across South Asia.
                </p>
                <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-400 text-indigo-700 italic">
                    "Empowering independence, one transaction at a time."
                </div>
            </motion.div>

            {/* Team/Image */}
            <motion.div 
                className="shadow-2xl rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                <img 
                    src={teamImageUrl} 
                    alt="Our dedicated team working on the AI project" 
                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                />
            </motion.div>
        </div>


        {/* --- Core Values Section --- */}
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h2>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <ValuePillar
                    icon={FaHandshake}
                    title="Inclusivity"
                    description="Building technology that is accessible and serves every member of the community."
                    color="border-t-4 border-teal-500"
                />
                <ValuePillar
                    icon={FaTachometerAlt}
                    title="Reliability"
                    description="Ensuring our AI provides rapid and highly accurate currency and price recognition."
                    color="border-t-4 border-pink-500"
                />
                <ValuePillar
                    icon={FaGlobe}
                    title="Localization"
                    description="Committing to the specific needs of Bangladeshi users, including Bangla voice output."
                    color="border-t-4 border-yellow-500"
                />
                <ValuePillar
                    icon={FaEye}
                    title="Empowerment"
                    description="Our ultimate goal is to give users independence and confidence in their daily lives."
                    color="border-t-4 border-indigo-500"
                />
            </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Aboutus;