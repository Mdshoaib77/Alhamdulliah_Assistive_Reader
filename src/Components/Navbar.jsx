// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { FaBars } from 'react-icons/fa';
// // // // // import { Link } from 'react-router-dom';
// // // // // import { auth } from '../Firebase/firebase-config';
// // // // // import { onAuthStateChanged, signOut } from 'firebase/auth';
// // // // // import { motion } from 'framer-motion'; // Import motion

// // // // // import logo from '../assets/ToyTopia_logo.png';

// // // // // const Navbar = () => {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // // // //       setUser(currentUser);
// // // // //       setLoading(false);
// // // // //     });

// // // // //     return () => unsubscribe();
// // // // //   }, []);

// // // // //   const toggleDropdown = () => {
// // // // //     setIsOpen(!isOpen);
// // // // //   };

// // // // //   const handleLogout = () => {
// // // // //     signOut(auth).then(() => {
// // // // //       setUser(null);
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <motion.div
// // // // //       className="navbar shadow-sm"
// // // // //       style={{ backgroundColor: 'rgba(48, 48, 64, 1)' }}
// // // // //       initial={{ opacity: 0 }}
// // // // //       animate={{ opacity: 1 }}
// // // // //       transition={{ duration: 0.5 }}
// // // // //     >
// // // // //       {/* Left side (Start) */}
// // // // //       <div className="navbar-start">
// // // // //         <div className="dropdown">
// // // // //           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// // // // //             <FaBars className="h-5 w-5" />
// // // // //           </div>
// // // // //           <motion.ul
// // // // //             tabIndex="-1"
// // // // //             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //           >
// // // // //             <li>
// // // // //               <Link
// // // // //                 to="/"
// // // // //                 className="bg-amber-500 py-2 px-4 text-lg text-white hover:text-red-400 transition duration-300 ease-in-out"
// // // // //               >
// // // // //                 Home
// // // // //               </Link>
// // // // //             </li>
// // // // //             <li>
// // // // //               <Link
// // // // //                 to="/profile"
// // // // //                 className="bg-pink-700 py-2 px-4 text-lg text-white hover:text-teal-400 transition duration-300 ease-in-out"
// // // // //               >
// // // // //                 My Profile
// // // // //               </Link>
// // // // //             </li>
// // // // //           </motion.ul>
// // // // //         </div>
// // // // //         <a className="btn btn-ghost text-xl">
// // // // //           <img src={logo} alt="ToyTopia Logo" className="w-32" />
// // // // //         </a>
// // // // //       </div>

// // // // //       {/* Center menu (Desktop) */}
// // // // //       <div className="navbar-center hidden lg:flex">
// // // // //         <motion.ul
// // // // //           className="menu menu-horizontal px-1"
// // // // //           initial={{ opacity: 0 }}
// // // // //           animate={{ opacity: 1 }}
// // // // //           transition={{ duration: 0.5 }}
// // // // //         >
// // // // //           <li>
// // // // //             <Link to="/" className="text-xl py-2 px-4 text-white">
// // // // //               Home
// // // // //             </Link>
// // // // //           </li>
// // // // //           <li>
// // // // //             <Link to="/profile" className="text-xl py-2 px-4 text-white">
// // // // //               My Profile
// // // // //             </Link>
// // // // //           </li>
// // // // //         </motion.ul>
// // // // //       </div>

// // // // //       {/* Right side (End) */}
// // // // //       <div className="navbar-end flex items-center">
// // // // //         {!user ? (
// // // // //           <Link to="/login" className="lg:mr-10 mr-4">
// // // // //             <motion.button
// // // // //               className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               whileTap={{ scale: 0.95 }}
// // // // //             >
// // // // //               Login
// // // // //             </motion.button>
// // // // //           </Link>
// // // // //         ) : (
// // // // //           <>
// // // // //             {/* Profile Image and Name (Visible on Hover) */}
// // // // //             <div className="relative mr-4">
// // // // //               <motion.img
// // // // //                 src={user.photoURL || 'https://via.placeholder.com/150'}
// // // // //                 alt="User"
// // // // //                 className="w-12 h-12 rounded-full cursor-pointer"
// // // // //                 whileHover={{ scale: 1.1 }}
// // // // //                 transition={{ duration: 0.3 }}
// // // // //               />
// // // // //               <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
// // // // //                 {user.displayName}
// // // // //               </div>
// // // // //             </div>
// // // // //             {/* Logout Button */}
// // // // //             <motion.button
// // // // //               onClick={handleLogout}
// // // // //               className="mr-10 btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               whileTap={{ scale: 0.95 }}
// // // // //             >
// // // // //               Logout
// // // // //             </motion.button>
// // // // //           </>
// // // // //         )}
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // // import React from 'react'

// // // // // const Navbar = () => {
// // // // //   return (
// // // // //     <div>
      
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default Navbar

// // // // import React from 'react';
// // // // import { Menu, X, Globe } from 'lucide-react'; // 'lucide-react' আইকন লাইব্রেরি ব্যবহার করা হয়েছে

// // // // // আপনি যদি 'lucide-react' ব্যবহার না করেন, তবে আইকনের জন্য অন্য কিছু ব্যবহার করতে পারেন বা আইকন বাদ দিতে পারেন।

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = React.useState(false);

// // // //   const navItems = [
// // // //     { name: 'Features', href: '#' },
// // // //     { name: 'FAQ', href: '#' },
// // // //     { name: 'About Us', href: '#' },
// // // //     { name: 'Mission', href: '#' },
// // // //   ];

// // // //   return (
// // // //     <nav className="bg-white border-b border-gray-200 shadow-sm">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         <div className="flex justify-between items-center h-16">

// // // //           {/* Logo/Brand Name */}
// // // //           <div className="flex items-center">
// // // //             <Globe className="h-6 w-6 text-blue-600 mr-2" />
// // // //             <span className="text-xl font-bold text-gray-800">Assistive Reader</span>
// // // //           </div>

// // // //           {/* Desktop Navigation Links and Buttons */}
// // // //           <div className="hidden md:flex items-center space-x-6">
            
// // // //             {/* Nav Links */}
// // // //             {navItems.map((item) => (
// // // //               <a
// // // //                 key={item.name}
// // // //                 href={item.href}
// // // //                 className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
// // // //               >
// // // //                 {item.name}
// // // //               </a>
// // // //             ))}

// // // //             {/* Language Selection */}
// // // //             <div className="flex items-center space-x-3">
// // // //               <span className="text-gray-600 text-sm font-medium">বাংলা</span>
              
// // // //               {/* English Button */}
// // // //               <button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 font-medium py-1.5 px-3 rounded-md text-sm transition duration-150 ease-in-out">
// // // //                 English
// // // //               </button>
              
// // // //               {/* Use App Button */}
// // // //               <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-5 rounded-lg shadow-lg text-base transition duration-150 ease-in-out">
// // // //                 Use App
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Mobile Menu Button */}
// // // //           <div className="md:hidden flex items-center">
// // // //             <button
// // // //               onClick={() => setIsOpen(!isOpen)}
// // // //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
// // // //               aria-expanded="false"
// // // //             >
// // // //               <span className="sr-only">Open main menu</span>
// // // //               {isOpen ? (
// // // //                 <X className="block h-6 w-6" aria-hidden="true" />
// // // //               ) : (
// // // //                 <Menu className="block h-6 w-6" aria-hidden="true" />
// // // //               )}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu Content */}
// // // //       {isOpen && (
// // // //         <div className="md:hidden" id="mobile-menu">
// // // //           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// // // //             {navItems.map((item) => (
// // // //               <a
// // // //                 key={item.name}
// // // //                 href={item.href}
// // // //                 className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
// // // //               >
// // // //                 {item.name}
// // // //               </a>
// // // //             ))}
            
// // // //             <div className="pt-4 border-t border-gray-200">
// // // //                 {/* Language and Buttons for Mobile */}
// // // //                 <div className="flex items-center justify-between px-3 py-2">
// // // //                     <span className="text-gray-600 text-base font-medium">বাংলা</span>
// // // //                     <button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 font-medium py-1.5 px-3 rounded-md text-sm transition duration-150 ease-in-out">
// // // //                         English
// // // //                     </button>
// // // //                 </div>
// // // //                 <button className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-5 rounded-lg shadow-md text-base transition duration-150 ease-in-out">
// // // //                     Use App
// // // //                 </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // // import React, { useState } from 'react';
// // // // import { Menu, X, Globe } from 'lucide-react'; 
// // // // // যদি lucide-react ইনস্টল না থাকে, তবে এই import লাইনটি মুছে দিন এবং নিচের আইকনগুলি বাদ দিন।

// // // // const translations = {
// // // //   en: {
// // // //     brand: "Assistive Reader",
// // // //     features: "Features",
// // // //     faq: "FAQ",
// // // //     aboutUs: "About Us",
// // // //     mission: "Mission",
// // // //     useApp: "Use App",
// // // //     langBn: "বাংলা",
// // // //     langEn: "English",
// // // //   },
// // // //   bn: {
// // // //     brand: "সহায়ক পাঠক", // আপনি আপনার পছন্দ অনুযায়ী পরিবর্তন করতে পারেন
// // // //     features: "বৈশিষ্ট্য",
// // // //     faq: "প্রশ্নাবলী",
// // // //     aboutUs: "আমাদের সম্পর্কে",
// // // //     mission: "লক্ষ্য",
// // // //     useApp: "অ্যাপ ব্যবহার করুন",
// // // //     langBn: "বাংলা",
// // // //     langEn: "ইংলিশ",
// // // //   }
// // // // };

// // // // const Navbar = () => {
// // // //   // 'en' (English) কে ডিফল্ট ভাষা হিসেবে সেট করা হলো
// // // //   const [currentLang, setCurrentLang] = useState('en'); 
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // বর্তমান ভাষার উপর ভিত্তি করে টেক্সট লোড করা
// // // //   const t = translations[currentLang]; 

// // // //   const navItems = [
// // // //     { name: t.features, href: '#' },
// // // //     { name: t.faq, href: '#' },
// // // //     { name: t.aboutUs, href: '#' },
// // // //     { name: t.mission, href: '#' },
// // // //   ];

// // // //   // ভাষা পরিবর্তন করার ফাংশন
// // // //   const changeLanguage = (lang) => {
// // // //     setCurrentLang(lang);
// // // //   };

// // // //   return (
// // // //     <nav className="bg-white border-b border-gray-200 shadow-sm">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         <div className="flex justify-between items-center h-16">

// // // //           {/* Logo/Brand Name */}
// // // //           <div className="flex items-center">
// // // //             <Globe className="h-6 w-6 text-blue-600 mr-2" />
// // // //             <span className="text-xl font-bold text-gray-800">{t.brand}</span>
// // // //           </div>

// // // //           {/* Desktop Navigation Links and Buttons */}
// // // //           <div className="hidden md:flex items-center space-x-6">
            
// // // //             {/* Nav Links */}
// // // //             {navItems.map((item, index) => (
// // // //               <a
// // // //                 key={index} // Key হিসেবে index ব্যবহার করা হলো 
// // // //                 href={item.href}
// // // //                 className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
// // // //               >
// // // //                 {item.name}
// // // //               </a>
// // // //             ))}

// // // //             {/* Language Selection */}
// // // //             <div className="flex items-center space-x-3">
              
// // // //               {/* Bangla Button */}
// // // //               <button 
// // // //                 onClick={() => changeLanguage('bn')} // বাংলা ক্লিক করলে ভাষা 'bn' হবে
// // // //                 className={`text-sm font-medium py-1.5 px-3 rounded-md transition duration-150 ease-in-out 
// // // //                   ${currentLang === 'bn' 
// // // //                     ? 'bg-blue-50 text-blue-600 border border-blue-600' // Active Style
// // // //                     : 'text-gray-600 hover:text-blue-600' // Inactive Style
// // // //                   }`}
// // // //               >
// // // //                 {t.langBn}
// // // //               </button>
              
// // // //               {/* English Button */}
// // // //               <button 
// // // //                 onClick={() => changeLanguage('en')} // English ক্লিক করলে ভাষা 'en' হবে
// // // //                 className={`text-sm font-medium py-1.5 px-3 rounded-md transition duration-150 ease-in-out 
// // // //                   ${currentLang === 'en' 
// // // //                     ? 'bg-blue-50 text-blue-600 border border-blue-600' // Active Style
// // // //                     : 'text-gray-600 hover:text-blue-600' // Inactive Style
// // // //                   }`}
// // // //               >
// // // //                 {t.langEn}
// // // //               </button>
              
// // // //               {/* Use App Button */}
// // // //               <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-5 rounded-lg shadow-lg text-base transition duration-150 ease-in-out">
// // // //                 {t.useApp}
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Mobile Menu Button (Toggle Logic omitted for simplicity, but included in the original) */}
// // // //           <div className="md:hidden flex items-center">
// // // //             <button
// // // //               onClick={() => setIsOpen(!isOpen)}
// // // //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
// // // //             >
// // // //               <span className="sr-only">Open main menu</span>
// // // //               {isOpen ? (
// // // //                 <X className="block h-6 w-6" aria-hidden="true" />
// // // //               ) : (
// // // //                 <Menu className="block h-6 w-6" aria-hidden="true" />
// // // //               )}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu Content (ভাষা পরিবর্তনের সাথে আপডেট হবে) */}
// // // //       {isOpen && (
// // // //         <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
// // // //             {navItems.map((item, index) => (
// // // //               <a
// // // //                 key={index}
// // // //                 href={item.href}
// // // //                 className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
// // // //               >
// // // //                 {item.name}
// // // //               </a>
// // // //             ))}
            
// // // //             {/* Mobile Language and Buttons */}
// // // //             <div className="pt-4 border-t border-gray-200">
// // // //                 <div className="flex items-center justify-around px-3 py-2">
// // // //                     <button 
// // // //                         onClick={() => changeLanguage('bn')}
// // // //                         className={`text-base font-medium py-1.5 px-3 rounded-md transition duration-150 ease-in-out 
// // // //                             ${currentLang === 'bn' 
// // // //                                 ? 'bg-blue-50 text-blue-600 border border-blue-600' 
// // // //                                 : 'text-gray-600 hover:text-blue-600'
// // // //                             }`}
// // // //                     >
// // // //                         {t.langBn}
// // // //                     </button>
// // // //                     <button 
// // // //                         onClick={() => changeLanguage('en')}
// // // //                         className={`text-base font-medium py-1.5 px-3 rounded-md transition duration-150 ease-in-out 
// // // //                             ${currentLang === 'en' 
// // // //                                 ? 'bg-blue-50 text-blue-600 border border-blue-600' 
// // // //                                 : 'text-gray-600 hover:text-blue-600'
// // // //                             }`}
// // // //                     >
// // // //                         {t.langEn}
// // // //                     </button>
// // // //                 </div>
// // // //                 <button className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-5 rounded-lg shadow-md text-base transition duration-150 ease-in-out">
// // // //                     {t.useApp}
// // // //                 </button>
// // // //             </div>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // import React, { useState } from 'react';
// // // import { Menu, X, Globe } from 'lucide-react'; 

// // // const translations = {
// // //   en: {
// // //     brand: "Assistive Reader",
// // //     features: "Features",
// // //     // 💡 পরিবর্তন: 'faq' এর পরিবর্তে 'howItWorks'
// // //     howItWorks: "How It Works", 
// // //     aboutUs: "About Us",
// // //     mission: "Mission",
// // //     useApp: "Use App",
// // //     langBn: "বাংলা",
// // //     langEn: "English",
// // //   },
// // //   bn: {
// // //     brand: "সহায়ক পাঠক", // আপনি আপনার পছন্দ অনুযায়ী পরিবর্তন করতে পারেন
// // //     features: "বৈশিষ্ট্য",
// // //     // 💡 পরিবর্তন: 'প্রশ্নাবলী' এর পরিবর্তে 'কীভাবে কাজ করে'
// // //     howItWorks: "কীভাবে কাজ করে", 
// // //     aboutUs: "আমাদের সম্পর্কে",
// // //     mission: "লক্ষ্য",
// // //     useApp: "অ্যাপ ব্যবহার করুন",
// // //     langBn: "বাংলা",
// // //     langEn: "ইংলিশ",
// // //   }
// // // };

// // // const Navbar = () => {
// // //   // 'en' (English) কে ডিফল্ট ভাষা হিসেবে সেট করা হলো
// // //   const [currentLang, setCurrentLang] = useState('en'); 
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   // বর্তমান ভাষার উপর ভিত্তি করে টেক্সট লোড করা
// // //   const t = translations[currentLang]; 

// // //   const navItems = [
// // //     { name: t.features, href: '#' },
// // //     // 💡 পরিবর্তন: navItems এ 't.faq' এর পরিবর্তে 't.howItWorks' ব্যবহার করা হয়েছে
// // //     { name: t.howItWorks, href: '#' }, 
// // //     { name: t.aboutUs, href: '#' },
// // //     { name: t.mission, href: '#' },
// // //   ];

// // //   // ভাষা পরিবর্তন করার ফাংশন
// // //   const changeLanguage = (lang) => {
// // //     setCurrentLang(lang);
// // //   };

// // //   return (
// // //     <nav className="bg-white border-b border-gray-200 shadow-sm">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex justify-between items-center h-16">

// // //           {/* Logo/Brand Name */}
// // //           <div className="flex items-center">
// // //             <Globe className="h-6 w-6 text-blue-600 mr-2" />
// // //             <span className="text-xl font-bold text-gray-800">{t.brand}</span>
// // //           </div>

// // //           {/* Desktop Navigation Links and Buttons */}
// // //           <div className="hidden md:flex items-center space-x-6">
            
// // //             {/* Nav Links */}
// // //             {navItems.map((item, index) => (
// // //               <a
// // //                 key={index}
// // //                 href={item.href}
// // //                 className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
// // //               >
// // //                 {item.name}
// // //               </a>
// // //             ))}

// // //             {/* Language Selection */}
// // //             <div className="flex items-center space-x-3">
              
// // //               {/* Bangla Button */}
// // //               <button 
// // //                 onClick={() => changeLanguage('bn')}
// // //                 className={`text-sm font-medium py-1.5 px-3 rounded-md transition duration-150 ease-in-out 
// // //                   ${currentLang === 'bn' 
// // //                     ? 'bg-blue-50 text-blue-600 border border-blue-600' // Active Style
// // //                     : 'text-gray-600 hover:text-blue-600' // Inactive Style
// // //                   }`}
// // //               >
// // //                 {t.langBn}
// // //               </button>
              
// // //               {/* English Button */}
// // //               <button 
// // //                 onClick={() => changeLanguage('en')}
// // //                 className={`text-sm font-medium py-1.5 px-3 rounded-md transition duration-150 ease-in-out 
// // //                   ${currentLang === 'en' 
// // //                     ? 'bg-blue-50 text-blue-600 border border-blue-600' // Active Style
// // //                     : 'text-gray-600 hover:text-blue-600' // Inactive Style
// // //                   }`}
// // //               >
// // //                 {t.langEn}
// // //               </button>
              
// // //               {/* Use App Button */}
// // //               <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-5 rounded-lg shadow-lg text-base transition duration-150 ease-in-out">
// // //                 {t.useApp}
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Mobile Menu Button */}
// // //           <div className="md:hidden flex items-center">
// // //             <button
// // //               onClick={() => setIsOpen(!isOpen)}
// // //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
// // //             >
// // //               <span className="sr-only">Open main menu</span>
// // //               {isOpen ? (
// // //                 <X className="block h-6 w-6" aria-hidden="true" />
// // //               ) : (
// // //                 <Menu className="block h-6 w-6" aria-hidden="true" />
// // //               )}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu Content */}
// // //       {isOpen && (
// // //         <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
// // //             {navItems.map((item, index) => (
// // //               <a
// // //                 key={index}
// // //                 href={item.href}
// // //                 className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
// // //               >
// // //                 {item.name}
// // //               </a>
// // //             ))}
            
// // //             {/* Mobile Language and Buttons */}
// // //             <div className="pt-4 border-t border-gray-200">
// // //                 <div className="flex items-center justify-around px-3 py-2">
// // //                     <button 
// // //                         onClick={() => changeLanguage('bn')}
// // //                         className={`text-base font-medium py-1.5 px-3 rounded-md transition duration-150 ease-in-out 
// // //                             ${currentLang === 'bn' 
// // //                                 ? 'bg-blue-50 text-blue-600 border border-blue-600' 
// // //                                 : 'text-gray-600 hover:text-blue-600'
// // //                             }`}
// // //                     >
// // //                         {t.langBn}
// // //                     </button>
// // //                     <button 
// // //                         onClick={() => changeLanguage('en')}
// // //                         className={`text-base font-medium py-1.5 px-3 rounded-md transition duration-150 ease-in-out 
// // //                             ${currentLang === 'en' 
// // //                                 ? 'bg-blue-50 text-blue-600 border border-blue-600' 
// // //                                 : 'text-gray-600 hover:text-blue-600'
// // //                             }`}
// // //                     >
// // //                         {t.langEn}
// // //                     </button>
// // //                 </div>
// // //                 <button className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-5 rounded-lg shadow-md text-base transition duration-150 ease-in-out">
// // //                     {t.useApp}
// // //                 </button>
// // //             </div>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState } from 'react';
// // import { Menu, X, Globe } from 'lucide-react'; 

// // const translations = {
// //   en: {
// //     brand: "Assistive Reader",
// //     features: "Features",
// //     howItWorks: "How It Works", 
// //     aboutUs: "About Us",
// //     mission: "Mission",
// //     useApp: "Use App",
// //   },
// // };

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   // Set to English only, no language switching
// //   const t = translations.en;

// //   const navItems = [
// //     { name: t.features, href: '#' },
// //     { name: t.howItWorks, href: '#' }, 
// //     { name: t.aboutUs, href: '#' },
// //     { name: t.mission, href: '#' },
// //   ];

// //   return (
// //     <nav className="bg-white border-b border-gray-200 shadow-sm">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo/Brand Name */}
// //           <div className="flex items-center">
// //             <Globe className="h-6 w-6 text-blue-600 mr-2" />
// //             <span className="text-xl font-bold text-gray-800">{t.brand}</span>
// //           </div>

// //           {/* Desktop Navigation Links */}
// //           <div className="hidden md:flex items-center space-x-6">
// //             {/* Nav Links */}
// //             {navItems.map((item, index) => (
// //               <a
// //                 key={index}
// //                 href={item.href}
// //                 className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
// //               >
// //                 {item.name}
// //               </a>
// //             ))}

// //             {/* Use App Button */}
// //             <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-5 rounded-lg shadow-lg text-base transition duration-150 ease-in-out">
// //               {t.useApp}
// //             </button>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden flex items-center">
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
// //             >
// //               <span className="sr-only">Open main menu</span>
// //               {isOpen ? (
// //                 <X className="block h-6 w-6" aria-hidden="true" />
// //               ) : (
// //                 <Menu className="block h-6 w-6" aria-hidden="true" />
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu Content */}
// //       {isOpen && (
// //         <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
// //             {navItems.map((item, index) => (
// //               <a
// //                 key={index}
// //                 href={item.href}
// //                 className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
// //               >
// //                 {item.name}
// //               </a>
// //             ))}

// //             {/* Mobile Use App Button */}
// //             <div className="pt-4 border-t border-gray-200">
// //                 <button className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-5 rounded-lg shadow-md text-base transition duration-150 ease-in-out">
// //                     {t.useApp}
// //                 </button>
// //             </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState } from 'react';
// import { Menu, X, Globe } from 'lucide-react';
// import { motion } from 'framer-motion'; // Import Framer Motion

// const translations = {
//   en: {
//     brand: "Assistive Reader",
//     features: "Features",
//     howItWorks: "How It Works",
//     aboutUs: "About Us",
//     mission: "Mission",
//     useApp: "Use App",
//   },
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Set to English only, no language switching
//   const t = translations.en;

//   const navItems = [
//     { name: t.features, href: '#' },
//     { name: t.howItWorks, href: '#' },
//     { name: t.aboutUs, href: '#' },
//     { name: t.mission, href: '#' },
//   ];

//   return (
//     <nav className="bg-white border-b border-gray-200 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo/Brand Name */}
//           <div className="flex items-center">
//             <Globe className="h-6 w-6 text-blue-600 mr-2" />
//             <span className="text-xl font-bold text-gray-800">{t.brand}</span>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6">
//             {/* Nav Links */}
//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
//               >
//                 {item.name}
//               </a>
//             ))}

//             {/* Use App Button */}
//             <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-5 rounded-lg shadow-lg text-base transition duration-150 ease-in-out">
//               {t.useApp}
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Content */}
//       {isOpen && (
//         <motion.div
//           className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//           transition={{ duration: 0.3 }}
//         >
//           {navItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.href}
//               className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               {item.name}
//             </a>
//           ))}

//           {/* Mobile Use App Button */}
//           <div className="pt-4 border-t border-gray-200">
//             <button className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-5 rounded-lg shadow-md text-base transition duration-150 ease-in-out">
//               {t.useApp}
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Menu, X, Globe } from 'lucide-react';
// import { motion } from 'framer-motion'; // Import Framer Motion

// const translations = {
//   en: {
//     brand: "Assistive Reader",
//     features: "Features",
//     howItWorks: "How It Works",
//     aboutUs: "About Us",
//     mission: "Mission",
//     useApp: "Use App",
//   },
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Set to English only, no language switching
//   const t = translations.en;

//   const navItems = [
//     // Anchor links for single-page navigation
//     { name: t.features, href: '#features' }, 
//     { name: t.howItWorks, href: '#how-it-works' }, 
//     { name: t.aboutUs, href: '#aboutus' }, 
//     { name: t.mission, href: '#mission' }, 
//   ];

//   return (
//     // Sticky navbar added for better user experience, using indigo theme
//     <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo/Brand Name */}
//           <div className="flex items-center">
//             <Globe className="h-6 w-6 text-indigo-600 mr-2" />
//             <span className="text-xl font-bold text-gray-800">{t.brand}</span>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6">
//             {/* Nav Links */}
//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
//               >
//                 {item.name}
//               </a>
//             ))}

//             {/* Use App Button */}
//             <button className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-2 px-5 rounded-lg shadow-lg text-base transition duration-150 ease-in-out">
//               {t.useApp}
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//         </div>

//       {/* Mobile Menu Content */}
//       {isOpen && (
//         <motion.div
//           className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//           transition={{ duration: 0.3 }}
//         >
//           {navItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.href}
//               onClick={() => setIsOpen(false)} // Closes the mobile menu after clicking a link
//               className="text-gray-600 hover:bg-gray-50 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               {item.name}
//             </a>
//           ))}

//           {/* Mobile Use App Button */}
//           <div className="pt-4 border-t border-gray-200">
//             <button className="w-full mt-2 bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-2 px-5 rounded-lg shadow-md text-base transition duration-150 ease-in-out">
//               {t.useApp}
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

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
