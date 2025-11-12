import React, { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun, FaGlobe } from 'react-icons/fa'; 
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const AssistiveReaderNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  // "Features" link will act as the home page and be highlighted by default.
  const navLinks = [
    { name: 'Features', path: '/' }, // Changed to root path for default highlight
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Mission', path: '/mission' },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const getLinkClasses = (path) => {
    // Check if the current path matches the link path exactly, 
    // or if the link is '/' (Home/Features) and the current path is exactly '/'
    const isRootActive = path === '/' && location.pathname === '/';
    const isActive = location.pathname === path || isRootActive; 
    
    const base = 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium transition-colors duration-200 text-base';
    const activeClass = 'font-semibold text-indigo-700 dark:text-indigo-500'; 
    return `${base} ${isActive ? activeClass : ''}`;
  };

  return (
    <motion.div 
      className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700" 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          {/* লোগো সেকশন */}
        <div className="flex items-center space-x-2">
          <div className="lg:hidden mr-2">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
          
          {/* Assistive Reader লোগো */}
          <Link to="/" className="flex items-center space-x-2">
            <FaGlobe className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Assistive Reader
            </span>
          </Link>
        </div>

        {/* নেভিগেশন লিঙ্ক এবং বাটন (ডেস্কটপের জন্য) */}
        <div className="hidden lg:flex items-center space-x-8">
          
          {/* মেনু লিঙ্ক */}
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={getLinkClasses(link.path)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* ডার্ক মোড টগল */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full text-gray-600 hover:text-yellow-600 transition-colors dark:text-yellow-400 dark:hover:text-yellow-300"
          >
            {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>

          {/* Use App বাটন */}
          <Link to="/use-app"> 
            <motion.button 
              className="text-white font-semibold py-2 px-6 rounded-lg shadow-md transition" 
              style={{ backgroundColor: '#6238F5' }} // ইমেজটির সাথে মেলে এমন রং
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              Use App
            </motion.button>
          </Link>
        </div>
      </div>

      {/* মোবাইল মেনু */}
      {isMenuOpen && (
        <motion.div 
          className="lg:hidden absolute w-full bg-white dark:bg-gray-900 shadow-xl pb-4" 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }} 
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                onClick={() => setIsMenuOpen(false)} 
                to={link.path} 
                className="block py-2 px-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center justify-between mt-4 border-t border-gray-200 dark:border-gray-700 pt-2">
              <button 
                onClick={toggleTheme} 
                className="flex items-center space-x-2 py-2 px-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-md"
              >
                {isDarkMode ? <FaSun className="w-5 h-5 text-yellow-500" /> : <FaMoon className="w-5 h-5" />} 
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <Link onClick={() => setIsMenuOpen(false)} to="/use-app">
                <motion.button 
                  className="text-white font-semibold py-2 px-4 rounded-md transition"
                  style={{ backgroundColor: '#6238F5' }}
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  Use App
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AssistiveReaderNavbar;