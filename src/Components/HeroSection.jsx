// // // import React from 'react'

// // // const HeroSection = () => {
// // //   return (
// // //     <div>
// // //       <h1>Alhamdulliah Hero</h1>
// // //     </div>
// // //   )
// // // }

// // // export default HeroSection


// // // import React, { useState } from 'react';

// // // // Navbar-এর মতো এখানেও অনুবাদ (translations) অবজেক্টটি ব্যবহার করা হয়েছে
// // // const translations = {
// // //   en: {
// // //     heading: "Shop with Confidence, Live with Independence.",
// // //     subheading: "AI-Powered Currency and Price Reader application for the visually impaired people of Bangladesh.",
// // //     useAppButton: "Use the App (Web Prototype)",
// // //     viewFeaturesButton: "View Features",
// // //   },
// // //   bn: {
// // //     heading: "আত্মবিশ্বাসের সাথে কেনাকাটা করুন, স্বাধীনভাবে জীবন যাপন করুন।",
// // //     subheading: "বাংলাদেশের দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য এআই-চালিত মুদ্রা ও মূল্য পাঠক অ্যাপ্লিকেশন।",
// // //     useAppButton: "অ্যাপ ব্যবহার করুন (ওয়েব প্রোটোটাইপ)",
// // //     viewFeaturesButton: "বৈশিষ্ট্য দেখুন",
// // //   }
// // // };

// // // const HeroSection = ({ currentLang }) => {
// // //   // 💡 যদি আপনি এই কম্পোনেন্টটিকে আলাদাভাবে ব্যবহার করেন, তবে একটি ডিফল্ট ভাষা সেট করুন।
// // //   // তবে Navbar থেকে prop হিসেবে currentLang পেলে সেটিই ব্যবহার করবে।
// // //   const lang = currentLang || 'en'; 

// // //   // বর্তমান ভাষার উপর ভিত্তি করে টেক্সট লোড করা
// // //   const t = translations[lang]; 

// // //   return (
// // //     <div className="min-h-[50vh] flex items-center justify-center bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
// // //       <div className="max-w-4xl text-center">
        
// // //         {/* Main Heading */}
// // //         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6" style={{color: '#284180'}}>
// // //           {t.heading}
// // //         </h1>

// // //         {/* Subheading/Description */}
// // //         <p className="mt-3 text-base sm:text-lg text-gray-600 mb-10 mx-auto max-w-2xl">
// // //           {t.subheading}
// // //         </p>

// // //         {/* Action Buttons */}
// // //         <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          
// // //           {/* Use App Button (Green) */}
// // //           <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-md text-white transition duration-300 ease-in-out" 
// // //             style={{ backgroundColor: '#20A84D', hover: { backgroundColor: '#19863c' } }}
// // //           >
// // //             {t.useAppButton}
// // //           </button>

// // //           {/* View Features Button (White/Outline) */}
// // //           <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
// // //             style={{ borderColor: '#20A84D', color: '#20A84D' }}
// // //           >
// // //             {t.viewFeaturesButton}
// // //           </button>
// // //         </div>

// // //         <h1 className="mt-8 text-sm text-gray-400">Alhamdulliah Hero</h1>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default HeroSection;


// // import React from "react";
// // import { useLanguage } from "../Context/LanguageContext"; // ✅ Context import করা হলো

// // const translations = {
// //   en: {
// //     heading: "Shop with Confidence, Live with Independence.",
// //     subheading:
// //       "AI-Powered Currency and Price Reader application for the visually impaired people of Bangladesh.",
// //     useAppButton: "Use the App (Web Prototype)",
// //     viewFeaturesButton: "View Features",
// //   },
// //   bn: {
// //     heading: "আত্মবিশ্বাসের সাথে কেনাকাটা করুন, স্বাধীনভাবে জীবন যাপন করুন।",
// //     subheading:
// //       "বাংলাদেশের দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য এআই-চালিত মুদ্রা ও মূল্য পাঠক অ্যাপ্লিকেশন।",
// //     useAppButton: "অ্যাপ ব্যবহার করুন (ওয়েব প্রোটোটাইপ)",
// //     viewFeaturesButton: "বৈশিষ্ট্য দেখুন",
// //   },
// // };

// // const HeroSection = () => {
// //   const { currentLang } = useLanguage(); // ✅ Context থেকে ভাষা নিচ্ছি
// //   const t = translations[currentLang];

// //   return (
// //     <div className="min-h-[50vh] flex items-center justify-center bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-4xl text-center">
// //         <h1
// //           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
// //           style={{ color: "#284180" }}
// //         >
// //           {t.heading}
// //         </h1>
// //         <p className="mt-3 text-base sm:text-lg text-gray-600 mb-10 mx-auto max-w-2xl">
// //           {t.subheading}
// //         </p>
// //         <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
// //           <button
// //             className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-md text-white transition duration-300 ease-in-out"
// //             style={{ backgroundColor: "#20A84D" }}
// //           >
// //             {t.useAppButton}
// //           </button>
// //           <button
// //             className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
// //             style={{ borderColor: "#20A84D", color: "#20A84D" }}
// //           >
// //             {t.viewFeaturesButton}
// //           </button>
// //         </div>
// //         <h1 className="mt-8 text-sm text-gray-400">Alhamdulillah Hero</h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;

// import React from "react";
// import { useLanguage } from "../Context/LanguageContext"; // ✅ Context import করা হলো

// const translations = {
//   en: {
//     heading: "Shop with Confidence, Live with Independence.",
//     subheading:
//       "AI-Powered Currency and Price Reader application for the visually impaired people of Bangladesh.",
//     useAppButton: "Use the App (Web Prototype)",
//     viewFeaturesButton: "View Features",
//   },
//   bn: {
//     heading: "আত্মবিশ্বাসের সাথে কেনাকাটা করুন, স্বাধীনভাবে জীবন যাপন করুন।",
//     subheading:
//       "বাংলাদেশের দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য এআই-চালিত মুদ্রা ও মূল্য পাঠক অ্যাপ্লিকেশন।",
//     useAppButton: "অ্যাপ ব্যবহার করুন (ওয়েব প্রোটোটাইপ)",
//     viewFeaturesButton: "বৈশিষ্ট্য দেখুন",
//   },
// };

// const HeroSection = () => {
//   const { currentLang } = useLanguage(); // ✅ Context থেকে ভাষা নিচ্ছি
//   const t = translations[currentLang];

//   return (
//     <div className="min-h-[50vh] flex items-center justify-center bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl text-center">
//         <h1
//           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
//           style={{ color: "#284180" }}
//         >
//           {t.heading}
//         </h1>
//         <p className="mt-3 text-base sm:text-lg text-gray-600 mb-10 mx-auto max-w-2xl">
//           {t.subheading}
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//           <button
//             className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-md text-white transition duration-300 ease-in-out"
//             style={{ backgroundColor: "#20A84D" }}
//           >
//             {t.useAppButton}
//           </button>
//           <button
//             className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
//             style={{ borderColor: "#20A84D", color: "#20A84D" }}
//           >
//             {t.viewFeaturesButton}
//           </button>
//         </div>
//         <h1 className="mt-8 text-sm text-gray-400">Alhamdulillah Hero</h1>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React from 'react';
// import { useLanguage } from '../Context/LanguageContext'; // Import useLanguage hook

// const translations = {
//   en: {
//     heading: "Shop with Confidence, Live with Independence.",
//     subheading: "AI-Powered Currency and Price Reader application for the visually impaired people of Bangladesh.",
//     useAppButton: "Use the App (Web Prototype)",
//     viewFeaturesButton: "View Features",
//   },
//   bn: {
//     heading: "আত্মবিশ্বাসের সাথে কেনাকাটা করুন, স্বাধীনভাবে জীবন যাপন করুন।",
//     subheading: "বাংলাদেশের দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য এআই-চালিত মুদ্রা ও মূল্য পাঠক অ্যাপ্লিকেশন।",
//     useAppButton: "অ্যাপ ব্যবহার করুন (ওয়েব প্রোটোটাইপ)",
//     viewFeaturesButton: "বৈশিষ্ট্য দেখুন",
//   }
// };

// const HeroSection = () => {
//   // Get the current language from the context
//   const { currentLang } = useLanguage(); // This will update when the language changes
//   const t = translations[currentLang];  // Translate based on current language

//   return (
//     <div className="min-h-[50vh] flex items-center justify-center bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl text-center">
//         <h1
//           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
//           style={{ color: '#284180' }}
//         >
//           {t.heading}
//         </h1>
//         <p className="mt-3 text-base sm:text-lg text-gray-600 mb-10 mx-auto max-w-2xl">
//           {t.subheading}
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//           <button
//             className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-md text-white transition duration-300 ease-in-out"
//             style={{ backgroundColor: '#20A84D' }}
//           >
//             {t.useAppButton}
//           </button>
//           <button
//             className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
//             style={{ borderColor: '#20A84D', color: '#20A84D' }}
//           >
//             {t.viewFeaturesButton}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from 'react';
import { useLanguage } from '../Context/LanguageContext'; // Import useLanguage hook
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const translations = {
  en: {
    heading: "Shop with Confidence, Live with Independence.",
    subheading: "AI-Powered Currency and Price Reader application for the visually impaired people of Bangladesh.",
    useAppButton: "Use the App (Web Prototype)",
    viewFeaturesButton: "View Features",
  },
  bn: {
    heading: "আত্মবিশ্বাসের সাথে কেনাকাটা করুন, স্বাধীনভাবে জীবন যাপন করুন।",
    subheading: "বাংলাদেশের দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য এআই-চালিত মুদ্রা ও মূল্য পাঠক অ্যাপ্লিকেশন।",
    useAppButton: "অ্যাপ ব্যবহার করুন (ওয়েব প্রোটোটাইপ)",
    viewFeaturesButton: "বৈশিষ্ট্য দেখুন",
  }
};

const HeroSection = () => {
  // Get the current language from the context
  const { currentLang } = useLanguage(); // This will update when the language changes
  const t = translations[currentLang];  // Translate based on current language

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl text-center">
        
        {/* Hero Heading with Framer Motion */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          style={{ color: '#284180' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.heading}
        </motion.h1>

        {/* Hero Subheading with Framer Motion */}
        <motion.p
          className="mt-3 text-base sm:text-lg text-gray-600 mb-10 mx-auto max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.subheading}
        </motion.p>

        {/* Buttons with Framer Motion */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Use App Button */}
          <button
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-md text-white transition duration-300 ease-in-out"
            style={{ backgroundColor: '#20A84D' }}
          >
            {t.useAppButton}
          </button>

          {/* View Features Button */}
          <button
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
            style={{ borderColor: '#20A84D', color: '#20A84D' }}
          >
            {t.viewFeaturesButton}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
