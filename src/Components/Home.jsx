// import React from 'react';
// import { motion } from 'framer-motion';

// const Home = () => {
//   // Framer Motion Variants for the 'Our Commitment' section
//   const commitmentVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   // Framer Motion Variants for the 'Feel the Independence' section
//   const independenceVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
//   };

//   // Framer Motion Variants for the buttons (using a different animation for engagement)
//   const buttonVariants = {
//     rest: { scale: 1, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' },
//     hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <div className="min-h-screen font-sans">
//       {/* --- Our Commitment Section (Blue Background) --- */}
//       <motion.div
//         className="bg-[#2a6ff4] text-white py-16 md:py-24 text-center px-4"
//         initial="hidden"
//         animate="visible"
//         variants={commitmentVariants}
//       >
//         <h2 className="text-3xl md:text-5xl font-bold mb-4">
//           Our Commitment
//         </h2>
//         <p className="max-w-3xl mx-auto text-base md:text-xl leading-relaxed mb-8">
//           We believe that technology can simplify life for people at every level of society. Assistive Reader is part of that commitment. It is not just an app; it is a step towards self-reliance.
//         </p>
//         <motion.button
//           className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
//           variants={buttonVariants}
//           initial="rest"
//           whileHover="hover"
//           whileTap="tap"
//           // In a real app, you would add an onClick handler here
//           onClick={() => console.log("Learn About Our Mission clicked")}
//         >
//           Learn About Our Mission
//         </motion.button>
//       </motion.div>
      
//       {/* --- Feel the Independence Section (White Background) --- */}
//       <motion.div
//         className="bg-white py-16 md:py-32 text-center px-4"
//         initial="hidden"
//         whileInView="visible" // Use whileInView to trigger animation when it scrolls into view
//         viewport={{ once: true, amount: 0.5 }} // Ensure it only animates once
//         variants={independenceVariants}
//       >
//         <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
//           Feel the Independence Today!
//         </h2>
//         <p className="text-base md:text-xl text-gray-700 mb-8">
//           Try our web prototype and share your experience with us.
//         </p>
//         <motion.button
//           className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-lg shadow-xl transition duration-300 transform"
//           variants={buttonVariants}
//           initial="rest"
//           whileHover="hover"
//           whileTap="tap"
//           // In a real app, you would add an onClick handler here
//           onClick={() => console.log("Launch the App clicked")}
//         >
//           Launch the App
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- ১. ইউনিক ফিচারের জন্য ইনলাইন SVG আইকন ---
// // (Currency, PriceTag, Voice, Offline - Launch App Modal এর জন্য)
// const CurrencyIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><path d="M15 12h-6"/></svg>
// );
// const PriceTagIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="2"/><path d="M13.5 1.5l1.44 1.44a2 2 0 0 1 .58 1.42V4h3c.8 0 1.5.3 2 .8l2.9 2.9c.5.5.8 1.2.8 2v3h-.14a2 2 0 0 1-1.42.58L17 10.5M19 14v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"/></svg>
// );
// const VoiceIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V3a2 2 0 0 0-2-2z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="21" x2="12" y2="23"/></svg>
// );
// const OfflineIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>
// );

// // Mission Modal-এর জন্য নতুন SVG আইকন
// const TargetIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
// );
// const HeartIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5a5.5 5.5 0 0 0-5.5-5.5c-1.57 0-3.6 1.05-5.5 2.5-1.9-1.45-3.93-2.5-5.5-2.5A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
// );
// const PeopleIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
// );


// // --- ২. মডাল অ্যানিমেশনের ভ্যারিয়েন্ট ---
// const modalVariants = {
//   hidden: { opacity: 0, scale: 0.8, rotateX: 90 }, // লুকানো অবস্থায়
//   visible: { 
//     opacity: 1, 
//     scale: 1, 
//     rotateX: 0, 
//     transition: { type: "spring", stiffness: 200, damping: 20 } // পপ-ইন অ্যানিমেশন
//   },
//   exit: { opacity: 0, scale: 0.9, rotateX: -90, transition: { duration: 0.2 } }, // বন্ধ করার অ্যানিমেশন
// };

// const backdropVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// // --- ৩. ফিচারের জন্য কার্ড কম্পোনেন্ট (উভয় মডালের জন্য ব্যবহার করা হবে) ---
// const FeatureCard = ({ icon: Icon, title, description, titleBn, iconColorClass = "bg-blue-500" }) => (
//   <motion.div 
//     className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
//     variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
//   >
//     <div className="flex items-center mb-3">
//       {/* আইকন ডিসপ্লে - রং পরিবর্তন করা হয়েছে */}
//       <div className={`p-3 rounded-full ${iconColorClass} text-white mr-3 shadow-md`}>
//         <Icon className="w-6 h-6" />
//       </div>
//       <h3 className="text-xl font-bold text-gray-800">{title}</h3>
//     </div>
//     <p className="text-sm text-gray-600 leading-relaxed">
//       <span className={`font-semibold ${iconColorClass.replace('bg-', 'text-')}`}>{titleBn}</span>: {description}
//     </p>
//   </motion.div>
// );

// // --- ৪. AI Solution Modal Component (Launch the App Button) ---
// const AISolutionModal = ({ isOpen, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         >
//           <motion.div
//             className="absolute inset-0 bg-gray-900 bg-opacity-70"
//             variants={backdropVariants}
//             onClick={onClose}
//           />
//           <motion.div
//             className="relative w-full max-w-4xl p-6 md:p-10 rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] 
//                        bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
//             variants={modalVariants}
//           >
//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 p-2 text-white hover:bg-white hover:text-indigo-600 rounded-full transition duration-200 focus:outline-none focus:ring-4 focus:ring-white"
//               aria-label="Close Solution Details"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>

//             {/* Header */}
//             <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-yellow-300 drop-shadow-lg">
//               Assistive AI: Unlocking Independence
//             </h2>
//             <p className="text-lg italic mb-8 border-b border-yellow-300/50 pb-4">
//               সহযোগী এআই: স্বাধীনতার চাবিকাঠি (The Key to Independence)
//             </p>

//             {/* Feature Grid */}
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//               variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
//               initial="hidden"
//               animate="visible"
//             >
//               <FeatureCard 
//                 icon={CurrencyIcon}
//                 title="Bangladeshi Currency Detection"
//                 titleBn="বাংলাদেশি মুদ্রা সনাক্তকরণ"
//                 description="Real-time recognition of Taka notes (e.g., ৳100, ৳500) using the device camera, announced instantly to the user."
//               />
//               <FeatureCard 
//                 icon={PriceTagIcon}
//                 title="Bangla Price Tag Reading"
//                 titleBn="বাংলায় মূল্য পাঠ"
//                 description="OCR technology to read product price tags and display, with an immediate, clear voice output in Bangla."
//               />
//               <FeatureCard 
//                 icon={VoiceIcon}
//                 title="Simple Voice Navigation"
//                 titleBn="সহজ ভয়েস নেভিগেশন"
//                 description="Intuitive, voice-activated commands allow visually impaired users to navigate the app hands-free and easily."
//               />
//               <FeatureCard 
//                 icon={OfflineIcon}
//                 title="Offline Functionality"
//                 titleBn="অফলাইন কার্যকারিতা"
//                 description="The core currency and price reading models operate locally, ensuring reliable use even without internet in local shops."
//               />
//             </motion.div>
            
//             <p className="mt-8 text-center text-sm opacity-80">
//                 This solution aims to provide full transactional confidence and independence during daily shopping.
//             </p>

//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // --- ৫. Mission Modal Component (Learn About Our Mission Button) ---
// const MissionModal = ({ isOpen, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         >
//           <motion.div
//             className="absolute inset-0 bg-gray-900 bg-opacity-70"
//             variants={backdropVariants}
//             onClick={onClose}
//           />
//           {/* Mission Modal Content - Yellow/Orange Gradient Theme */}
//           <motion.div
//             className="relative w-full max-w-4xl p-6 md:p-10 rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] 
//                        bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900"
//             variants={modalVariants}
//           >
//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 p-2 text-gray-800 hover:bg-gray-100 rounded-full transition duration-200 focus:outline-none focus:ring-4 focus:ring-white"
//               aria-label="Close Mission Details"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>

//             {/* Header */}
//             <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-lg">
//               Our Humanitarian Mission
//             </h2>
//             <p className="text-lg italic mb-8 border-b border-white/50 pb-4 text-gray-800">
//               আমাদের লক্ষ্য: সমাজের সকলের জন্য সমতা ও সুযোগ তৈরি করা
//             </p>

//             {/* Mission Grid */}
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-3 gap-6"
//               variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
//               initial="hidden"
//               animate="visible"
//             >
//               <FeatureCard 
//                 icon={HeartIcon}
//                 title="Social Inclusion"
//                 titleBn="সামাজিক অন্তর্ভুক্তি"
//                 description="To break down barriers and empower visually impaired individuals with the confidence to participate fully in daily economic life."
//                 iconColorClass="bg-red-600"
//               />
//               <FeatureCard 
//                 icon={TargetIcon}
//                 title="Accessibility First"
//                 titleBn="সহজলভ্যতা সর্বাগ্রে"
//                 description="We prioritize intuitive design and robust local language support (Bangla) to ensure the app is truly usable by our target audience."
//                 iconColorClass="bg-green-600"
//               />
//               <FeatureCard 
//                 icon={PeopleIcon}
//                 title="Community Growth"
//                 titleBn="গোষ্ঠীর উন্নতি"
//                 description="Building a platform that can grow and adapt based on user feedback, fostering an innovative ecosystem for assistive technology in Bangladesh."
//                 iconColorClass="bg-purple-600"
//               />
//             </motion.div>
            
//             {/* <motion.div 
//               className="mt-8 p-6 bg-white bg-opacity-80 rounded-xl text-center shadow-inner"
//               variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.5 } } }}
//             >
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Cause</h3>
//                 <p className="text-gray-700">Your feedback, support, and contribution can help us expand this service to reach thousands more.</p>
//                 <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-200">
//                     Get Involved
//                 </button>
//             </motion.div> */}

//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };


// // --- ৬. মূল Home কম্পোনেন্ট ---
// const Home = () => {
//   // Modal states
//   const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);
//   const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);

//   // Modal toggle functions
//   const toggleSolutionModal = () => {
//     setIsSolutionModalOpen(!isSolutionModalOpen);
//   };
//   const toggleMissionModal = () => {
//     setIsMissionModalOpen(!isMissionModalOpen);
//   };
    
//   // Framer Motion Variants for the 'Our Commitment' section
//   const commitmentVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   // Framer Motion Variants for the 'Feel the Independence' section
//   const independenceVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
//   };

//   // Framer Motion Variants for the buttons (using a different animation for engagement)
//   const buttonVariants = {
//     rest: { scale: 1, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' },
//     hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <div className="min-h-screen font-sans">
//       {/* --- Our Commitment Section (Blue Background) --- */}
//       <motion.div
//         className="bg-[#2a6ff4] text-white py-16 md:py-24 text-center px-4"
//         initial="hidden"
//         animate="visible"
//         variants={commitmentVariants}
//       >
//         <h2 className="text-3xl md:text-5xl font-bold mb-4">
//           Our Commitment
//         </h2>
//         <p className="max-w-3xl mx-auto text-base md:text-xl leading-relaxed mb-8">
//           We believe that technology can simplify life for people at every level of society. Assistive Reader is part of that commitment. It is not just an app; it is a step towards self-reliance.
//         </p>
//         <motion.button
//           className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
//           variants={buttonVariants}
//           initial="rest"
//           whileHover="hover"
//           whileTap="tap"
//           onClick={toggleMissionModal} // Mission Modal খোলার ফাংশন যুক্ত করা হলো
//         >
//           Learn About Our Mission
//         </motion.button>
//       </motion.div>
      
//       {/* --- Feel the Independence Section (White Background) --- */}
//       <motion.div
//         className="bg-white py-16 md:py-32 text-center px-4"
//         initial="hidden"
//         whileInView="visible" // Use whileInView to trigger animation when it scrolls into view
//         viewport={{ once: true, amount: 0.5 }} // Ensure it only animates once
//         variants={independenceVariants}
//       >
//         <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
//           Feel the Independence Today!
//         </h2>
//         <p className="text-base md:text-xl text-gray-700 mb-8">
//           Try our web prototype and share your experience with us.
//         </p>
//         <motion.button
//           className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-lg shadow-xl transition duration-300 transform"
//           variants={buttonVariants}
//           initial="rest"
//           whileHover="hover"
//           whileTap="tap"
//           onClick={toggleSolutionModal} // AI Solution Modal খোলার ফাংশন যুক্ত করা হলো
//         >
//           Send FeedBack
//         </motion.button>
//       </motion.div>
      
//       {/* --- Modals Rendered Here --- */}
//       <AISolutionModal isOpen={isSolutionModalOpen} onClose={toggleSolutionModal} />
//       <MissionModal isOpen={isMissionModalOpen} onClose={toggleMissionModal} />

//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ১. ইউনিক ফিচারের জন্য ইনলাইন SVG আইকন ---
// (Mission Modal-এর জন্য আইকনগুলি রাখা হলো)
const TargetIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const HeartIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5a5.5 5.5 0 0 0-5.5-5.5c-1.57 0-3.6 1.05-5.5 2.5-1.9-1.45-3.93-2.5-5.5-2.5A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);
const PeopleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);


// --- ২. মডাল অ্যানিমেশনের ভ্যারিয়েন্ট ---
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 90 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateX: 0, 
    transition: { type: "spring", stiffness: 200, damping: 20 }
  },
  exit: { opacity: 0, scale: 0.9, rotateX: -90, transition: { duration: 0.2 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// --- ৩. ফিচারের জন্য কার্ড কম্পোনেন্ট (Mission Modal এর জন্য) ---
const FeatureCard = ({ icon: Icon, title, description, titleBn, iconColorClass = "bg-blue-500" }) => (
  <motion.div 
    className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
  >
    <div className="flex items-center mb-3">
      <div className={`p-3 rounded-full ${iconColorClass} text-white mr-3 shadow-md`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">
      <span className={`font-semibold ${iconColorClass.replace('bg-', 'text-')}`}>{titleBn}</span>: {description}
    </p>
  </motion.div>
);

// --- ৪. ফিডব্যাক মডাল কম্পোনেন্ট (Send Feedback Button) ---
const FeedbackModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'
  // ইউজার প্রদত্ত Web3Forms Access Key
  const ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      // Web3Forms API-এ ডেটা পাঠানো হচ্ছে
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json',
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Form clear
        // 3 সেকেন্ড পরে মডাল বন্ধ করা
        setTimeout(onClose, 3000); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="absolute inset-0 bg-gray-900 bg-opacity-70"
            variants={backdropVariants}
            onClick={onClose}
          />
          {/* Feedback Modal Content - Red/Pink Gradient Theme */}
          <motion.div
            className="relative w-full max-w-lg p-6 md:p-8 rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] 
                       bg-gradient-to-br from-red-500 to-pink-600 text-white"
            variants={modalVariants}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white hover:text-red-600 rounded-full transition duration-200 focus:outline-none focus:ring-4 focus:ring-white"
              aria-label="Close Feedback Form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <h2 className="text-3xl font-extrabold mb-2 text-yellow-300 drop-shadow-lg text-center">
              Send Your Valuable Feedback
            </h2>
            <p className="text-md italic mb-6 border-b border-yellow-300/50 pb-3 text-center">
              আপনার মতামত আমাদের জন্য অত্যন্ত মূল্যবান!
            </p>

            {/* Status Message */}
            {status === 'submitting' && (
                <p className="p-3 mb-4 bg-yellow-100 text-yellow-800 rounded-lg font-semibold text-center">Sending feedback...</p>
            )}
            {status === 'success' && (
                <p className="p-3 mb-4 bg-green-100 text-green-800 rounded-lg font-semibold text-center">Feedback sent successfully! Thank you. (Closing in 3s)</p>
            )}
            {status === 'error' && (
                <p className="p-3 mb-4 bg-red-100 text-red-800 rounded-lg font-semibold text-center">Failed to send feedback. Please check console.</p>
            )}

            {/* Feedback Form */}
            <form onSubmit={handleSubmit} method="POST" action="https://api.web3forms.com/submit" className="space-y-4">
              {/* Web3Forms Access Key (Hidden Field) */}
              <input type="hidden" name="access_key" value={ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Assistive Reader Feedback Submission" />

              {/* Name Field */}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Your Name (নাম)</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Your Email (ইমেল)</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Feedback/Message (মতামত)</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  placeholder="Share your thoughts, suggestions, or issues..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-3 mt-4 text-lg font-bold rounded-lg shadow-xl transition duration-300 ${
                  status === 'submitting' || status === 'success'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                }`}
                whileHover={{ scale: status === 'submitting' || status === 'success' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'submitting' || status === 'success' ? 1 : 0.98 }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Feedback'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// --- ৫. Mission Modal Component (Learn About Our Mission Button) ---
const MissionModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="absolute inset-0 bg-gray-900 bg-opacity-70"
            variants={backdropVariants}
            onClick={onClose}
          />
          {/* Mission Modal Content - Yellow/Orange Gradient Theme */}
          <motion.div
            className="relative w-full max-w-4xl p-6 md:p-10 rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] 
                       bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900"
            variants={modalVariants}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-800 hover:bg-gray-100 rounded-full transition duration-200 focus:outline-none focus:ring-4 focus:ring-white"
              aria-label="Close Mission Details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-lg">
              Our Humanitarian Mission
            </h2>
            <p className="text-lg italic mb-8 border-b border-white/50 pb-4 text-gray-800">
              আমাদের লক্ষ্য: সমাজের সকলের জন্য সমতা ও সুযোগ তৈরি করা
            </p>

            {/* Mission Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              animate="visible"
            >
              <FeatureCard 
                icon={HeartIcon}
                title="Social Inclusion"
                titleBn="সামাজিক অন্তর্ভুক্তি"
                description="To break down barriers and empower visually impaired individuals with the confidence to participate fully in daily economic life."
                iconColorClass="bg-red-600"
              />
              <FeatureCard 
                icon={TargetIcon}
                title="Accessibility First"
                titleBn="সহজলভ্যতা সর্বাগ্রে"
                description="We prioritize intuitive design and robust local language support (Bangla) to ensure the app is truly usable by our target audience."
                iconColorClass="bg-green-600"
              />
              <FeatureCard 
                icon={PeopleIcon}
                title="Community Growth"
                titleBn="গোষ্ঠীর উন্নতি"
                description="Building a platform that can grow and adapt based on user feedback, fostering an innovative ecosystem for assistive technology in Bangladesh."
                iconColorClass="bg-purple-600"
              />
            </motion.div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// --- ৬. মূল Home কম্পোনেন্ট ---
const Home = () => {
  // Modal states
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false); // Changed name
  const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);

  // Modal toggle functions
  const toggleFeedbackModal = () => { // Changed name
    setIsFeedbackModalOpen(!isFeedbackModalOpen);
  };
  const toggleMissionModal = () => {
    setIsMissionModalOpen(!isMissionModalOpen);
  };
    
  // Framer Motion Variants for the 'Our Commitment' section
  const commitmentVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Framer Motion Variants for the 'Feel the Independence' section
  const independenceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  // Framer Motion Variants for the buttons (using a different animation for engagement)
  const buttonVariants = {
    rest: { scale: 1, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' },
    hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen font-sans">
      {/* --- Our Commitment Section (Blue Background) --- */}
      <motion.div
        className="bg-[#2a6ff4] text-white py-16 md:py-24 text-center px-4"
        initial="hidden"
        animate="visible"
        variants={commitmentVariants}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our Commitment
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-xl leading-relaxed mb-8">
          We believe that technology can simplify life for people at every level of society. Assistive Reader is part of that commitment. It is not just an app; it is a step towards self-reliance.
        </p>
        <motion.button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={toggleMissionModal} 
        >
          Learn About Our Mission
        </motion.button>
      </motion.div>
      
      {/* --- Feel the Independence Section (White Background) --- */}
      <motion.div
        className="bg-white py-16 md:py-32 text-center px-4"
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }} 
        variants={independenceVariants}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Feel the Independence Today!
        </h2>
        <p className="text-base md:text-xl text-gray-700 mb-8">
          Try our web prototype and share your experience with us.
        </p>
        <motion.button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-lg shadow-xl transition duration-300 transform"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={toggleFeedbackModal} // Updated to open Feedback Modal
        >
          Send Feedback
        </motion.button>
      </motion.div>
      
      {/* --- Modals Rendered Here --- */}
      <FeedbackModal isOpen={isFeedbackModalOpen} onClose={toggleFeedbackModal} /> {/* New/Renamed Modal */}
      <MissionModal isOpen={isMissionModalOpen} onClose={toggleMissionModal} />

    </div>
  );
};

export default Home;