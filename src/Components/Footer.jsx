import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

// Framer Motion Variants
const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// Footer Link Item Component
const FooterLink = ({ title, href }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-indigo-400 transition duration-300 block mb-2 text-sm"
    variants={itemVariants}
    whileHover={{ x: 5 }} // Slight push on hover
  >
    {title}
  </motion.a>
);

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white pt-12 pb-6 border-t-4 border-indigo-600 font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Main Grid Section (Links, Mission, Social) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-gray-700 pb-10 mb-8">

          {/* 1. Logo and Mission Statement */}
          <motion.div className="col-span-2 md:col-span-1 lg:col-span-2" variants={itemVariants}>
            <h2 className="text-3xl font-extrabold text-indigo-400 mb-4">
          Assistive Reader
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Pioneering assistive AI for visually impaired persons in Bangladesh, empowering confident shopping and financial independence.
            </p>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-indigo-300">Quick Links</h3>
            <ul>
              <li><FooterLink title="Home" href="#" /></li>
              <li><FooterLink title="About Us" href="#about" /></li>
              <li><FooterLink title="Features" href="#features" /></li>
              <li><FooterLink title="How It Works" href="#how-it-works" /></li>
            </ul>
          </motion.div>

          {/* 3. Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-indigo-300">Resources</h3>
            <ul>
              <li><FooterLink title="Tech Stack" href="#tech" /></li>
              <li><FooterLink title="Privacy Policy" href="#privacy" /></li>
              <li><FooterLink title="Terms of Service" href="#terms" /></li>
              <li><FooterLink title="Datasets" href="#datasets" /></li>
            </ul>
          </motion.div>

          {/* 4. Contact & Location (Simple) */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-indigo-300">Contact</h3>
            <p className="text-gray-400 text-sm mb-2">Email: info@aivisionbd.com</p>
            <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
          </motion.div>
        </div>

        {/* --- Bottom Row (Social & Copyright) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          
          {/* Copyright */}
          <motion.div className="text-gray-500 text-sm mb-4 md:mb-0" variants={itemVariants}>
            &copy; {new Date().getFullYear()} Assistive Reader. All rights reserved.
          </motion.div>

          {/* Social Icons */}
          <motion.div className="flex space-x-6" variants={itemVariants}>
            <motion.a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300" whileHover={{ scale: 1.2 }}>
              <FaFacebook className="w-5 h-5" />
            </motion.a>
            <motion.a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" whileHover={{ scale: 1.2 }}>
              <FaTwitter className="w-5 h-5" />
            </motion.a>
            <motion.a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300" whileHover={{ scale: 1.2 }}>
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-300" whileHover={{ scale: 1.2 }}>
              <FaGithub className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* --- Final Credit --- */}
        <motion.div className="text-center mt-6 text-gray-500 text-xs" variants={itemVariants}>
            Built with <FaHeart className="inline w-3 h-3 text-red-500 mx-1" /> for the community.
        </motion.div>

      </div>
    </motion.footer>
  );
}

export default Footer;