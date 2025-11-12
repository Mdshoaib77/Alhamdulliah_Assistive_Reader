import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { Link } from 'react-router-dom'; // Import Link for routing

const translations = {
  en: {
    brand: "Assistive Reader",
    home: "Home",          // Added Home
    features: "Features",
    howItWorks: "How It Works",
    aboutUs: "About Us",
    useApp: "Use App",
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Set to English only, no language switching
  const t = translations.en;

  const navItems = [
    { name: t.home, href: '/' },  // Home link added with root path
    { name: t.features, href: '/features' },
    { name: t.howItWorks, href: '/how-it-works' },
    { name: t.aboutUs, href: '/about-us' },
    // Mission link has been removed
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <div className="flex items-center">
            <Globe className="h-6 w-6 text-indigo-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">{t.brand}</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Nav Links */}
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href} // Use Link here for routing
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
              >
                {item.name}
              </Link>
            ))}

            {/* Use App Button */}
            <button className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-2 px-5 rounded-lg shadow-lg text-base transition duration-150 ease-in-out">
              {t.useApp}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <motion.div
          className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href} // Use Link for routing
              onClick={() => setIsOpen(false)} // Closes the mobile menu after clicking a link
              className="text-gray-600 hover:bg-gray-50 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Use App Button */}
          <div className="pt-4 border-t border-gray-200">
            <button className="w-full mt-2 bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-2 px-5 rounded-lg shadow-md text-base transition duration-150 ease-in-out">
              {t.useApp}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
