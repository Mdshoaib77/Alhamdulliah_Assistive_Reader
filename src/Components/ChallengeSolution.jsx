// // import React from 'react';

// // const ChallengeSolution = () => {
// //   return (
// //     <div style={{ textAlign: 'center', padding: '20px' }}>
      
// //       {/* The Challenge Section */}
// //       <h2 style={{ color: 'red', marginBottom: '5px' }}>
// //         The <span style={{ borderBottom: '2px solid orange' }}>Challenge</span>
// //       </h2>
// //       <p style={{ 
// //         maxWidth: '700px', 
// //         margin: '0 auto 40px auto', 
// //         fontSize: '1.1em',
// //         lineHeight: '1.6'
// //       }}>
// //         Visually impaired people often face challenges when shopping in local stores. The inability to independently recognize currency and read product prices is a major obstacle.
// //       </p>

// //       {/* --- Horizontal Rule or visual separator if needed --- */}

// //       {/* The Solution Section */}
// //       <h2 style={{ color: 'green', marginBottom: '5px' }}>
// //         The <span style={{ borderBottom: '2px solid orange' }}>Solution</span>
// //       </h2>
// //       <div style={{ 
// //         backgroundColor: '#e6ffe6', 
// //         padding: '20px', 
// //         borderRadius: '10px', 
// //         maxWidth: '600px', 
// //         margin: '0 auto',
// //         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
// //       }}>
// //         <p style={{ 
// //           color: 'green', 
// //           fontSize: '1.2em', 
// //           fontWeight: 'bold',
// //           margin: '0'
// //         }}>
// //           An **AI-based application** that identifies **Bangladeshi notes** and product prices via camera and reads them aloud in **Bengali**.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // // Renaming the export to match the content
// // export default ChallengeSolution;

// // import React from 'react';
// // import { motion } from 'framer-motion';

// // // অ্যানিমেশনের জন্য ভিন্ন ভিন্ন ভ্যারিয়েন্ট সংজ্ঞায়িত করা হলো
// // const containerVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       delayChildren: 0.3, // শিশুদের অ্যানিমেশন শুরু করার আগে সামান্য দেরি
// //       staggerChildren: 0.2, // প্রতিটি শিশুকে পরপর অ্যানিমেট করা
// //     },
// //   },
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: { opacity: 1, y: 0 },
// // };

// // const ChallengeSolution = () => {
// //   return (
// //     // মূল কন্টেইনার, যা পুরো সেকশনটিকে অ্যানিমেট করবে
// //     <motion.div
// //       className="p-8 md:p-12 lg:p-16 text-center font-sans bg-gray-50 min-h-screen flex flex-col justify-center"
// //       initial="hidden"
// //       animate="visible"
// //       variants={containerVariants}
// //     >

// //       {/* --- The Challenge Section --- */}
// //       <motion.div variants={itemVariants} className="mb-10 md:mb-0">
// //         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">
// //           The <span className="border-b-4 border-orange-500">Challenge</span>
// //         </h2>
// //         <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mt-2.5">
// //           Visually impaired people often face challenges when shopping in local stores. The inability to independently recognize currency and read product prices is a major obstacle.
// //         </p>
// //       </motion.div>

// //       {/* --- The Solution Section --- */}
// //       <motion.div variants={itemVariants} className="max-w-4xl mx-auto w-full">
// //         <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-6">
// //           The <span className="border-b-4 border-orange-500">Solution</span>
// //         </h2>
        
// //         {/* Solution Box: Framer Motion-এর সাথে Tailwind-এর স্টাইলিং */}
// //         <motion.div
// //           className="bg-green-100 p-6 md:p-10 rounded-2xl shadow-xl border-2 border-green-300 transform hover:scale-[1.02] transition-transform duration-300"
// //           variants={itemVariants}
// //           // এটি একটি হালকা বাউন্সিং প্রভাব যোগ করবে
// //           whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(34, 197, 94, 0.5), 0 4px 6px -4px rgba(34, 197, 94, 0.5)" }}
// //           transition={{ type: "spring", stiffness: 300 }}
// //         >
// //           <p className="text-xl md:text-2xl text-green-800 font-semibold italic">
// //             An AI-based application that identifies Bangladeshi notes and product prices via camera and reads them aloud in Bengali.
// //           </p>
// //         </motion.div>
// //       </motion.div>

// //       {/* --- Optional: Animated Call-to-Action Button (Just for gorgeous effect) --- */}
// //       <motion.button
// //         className="mt-12 mx-auto px-8 py-3 text-lg font-bold rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
// //         variants={itemVariants}
// //         whileHover={{ scale: 1.05 }}
// //         whileTap={{ scale: 0.95 }}
// //       >
// //         Explore the AI Solution
// //       </motion.button>
// //     </motion.div>
// //   );
// // }

// // export default ChallengeSolution;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// // অ্যানিমেশনের জন্য ভিন্ন ভিন্ন ভ্যারিয়েন্ট সংজ্ঞায়িত করা হলো
// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delayChildren: 0.3, // শিশুদের অ্যানিমেশন শুরু করার আগে সামান্য দেরি
//       staggerChildren: 0.2, // প্রতিটি শিশুকে পরপর অ্যানিমেট করা
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const ChallengeSolution = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal visibility

//   // Function to open and close the modal
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <motion.div
//       className="p-8 md:p-12 lg:p-16 text-center font-sans bg-gray-50 min-h-screen flex flex-col justify-center"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >

//       {/* --- The Challenge Section --- */}
//       <motion.div variants={itemVariants} className="mb-10 md:mb-0">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">
//           The <span className="border-b-4 border-orange-500">Challenge</span>
//         </h2>
//         <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mt-2.5">
//           Visually impaired people often face challenges when shopping in local stores. The inability to independently recognize currency and read product prices is a major obstacle.
//         </p>
//       </motion.div>

//       {/* --- The Solution Section --- */}
//       <motion.div variants={itemVariants} className="max-w-4xl mx-auto w-full">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-6">
//           The <span className="border-b-4 border-orange-500">Solution</span>
//         </h2>
        
//         {/* Solution Box: Framer Motion-এর সাথে Tailwind-এর স্টাইলিং */}
//         <motion.div
//           className="bg-green-100 p-6 md:p-10 rounded-2xl shadow-xl border-2 border-green-300 transform hover:scale-[1.02] transition-transform duration-300"
//           variants={itemVariants}
//           whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(34, 197, 94, 0.5), 0 4px 6px -4px rgba(34, 197, 94, 0.5)" }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <p className="text-xl md:text-2xl text-green-800 font-semibold italic">
//             An AI-based application that identifies Bangladeshi notes and product prices via camera and reads them aloud in Bengali.
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* --- Animated Call-to-Action Button --- */}
//       <motion.button
//         className="mt-12 mx-auto px-8 py-3 text-lg font-bold rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
//         variants={itemVariants}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={toggleModal}  // Toggle modal visibility on button click
//       >
//         Explore the AI Solution
//       </motion.button>

//       {/* --- Modal for AI Solution (Pop-Up) --- */}
//       {isModalOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="bg-white p-10 rounded-xl shadow-xl max-w-md w-full"
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
//               AI Solution for Visually Impaired People
//             </h2>
//             <p className="text-lg text-gray-800 leading-relaxed mb-6">
//               This AI-powered application helps visually impaired people by recognizing Bangladeshi currency notes and reading product prices aloud in Bengali, making shopping more accessible and independent.
//             </p>
//             <button
//               className="mt-4 w-full px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none"
//               onClick={toggleModal}
//             >
//               Close
//             </button>
//           </motion.div>
//         </motion.div>
//       )}

//     </motion.div>
//   );
// }

// export default ChallengeSolution;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ১. ইউনিক ফিচারের জন্য ইনলাইন SVG আইকন ---
// ফ্রেমওয়ার্কের সীমাবদ্ধতার কারণে লুমিনোস বা লুসাইড রিঅ্যাক্ট এর বদলে ইনলাইন SVG ব্যবহার করা হয়েছে।
const CurrencyIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><path d="M15 12h-6"/></svg>
);
const PriceTagIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="2"/><path d="M13.5 1.5l1.44 1.44a2 2 0 0 1 .58 1.42V4h3c.8 0 1.5.3 2 .8l2.9 2.9c.5.5.8 1.2.8 2v3h-.14a2 2 0 0 1-1.42.58L17 10.5M19 14v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"/></svg>
);
const VoiceIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V3a2 2 0 0 0-2-2z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="21" x2="12" y2="23"/></svg>
);
const OfflineIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>
);

// --- ২. মডাল অ্যানিমেশনের ভ্যারিয়েন্ট ---
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 90 }, // লুকানো অবস্থায়
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateX: 0, 
    transition: { type: "spring", stiffness: 200, damping: 20 } // পপ-ইন অ্যানিমেশন
  },
  exit: { opacity: 0, scale: 0.9, rotateX: -90, transition: { duration: 0.2 } }, // বন্ধ করার অ্যানিমেশন
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// --- ৩. ফিচারের জন্য কার্ড কম্পোনেন্ট ---
const FeatureCard = ({ icon: Icon, title, description, titleBn }) => (
  <motion.div 
    className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
  >
    <div className="flex items-center mb-3">
      {/* আইকন ডিসপ্লে */}
      <div className="p-3 rounded-full bg-blue-500 text-white mr-3 shadow-md">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">
      <span className="font-semibold text-blue-600">{titleBn}</span>: {description}
    </p>
  </motion.div>
);

// --- ৪. মডাল কম্পোনেন্ট (Gorgeous Design) ---
const AISolutionModal = ({ isOpen, onClose }) => {
  return (
    // AnimatePresence ব্যবহার করা হয়েছে modal বন্ধ হওয়ার সময় exit অ্যানিমেশন দেখানোর জন্য
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop (ক্লিক করলে মডাল বন্ধ হবে) */}
          <motion.div
            className="absolute inset-0 bg-gray-900 bg-opacity-70"
            variants={backdropVariants}
            onClick={onClose}
          />

          {/* Modal Content Box - Gorgeous Gradient Style */}
          <motion.div
            className="relative w-full max-w-4xl p-6 md:p-10 rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] 
                       bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
            variants={modalVariants}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white hover:text-indigo-600 rounded-full transition duration-200 focus:outline-none focus:ring-4 focus:ring-white"
              aria-label="Close Solution Details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-yellow-300 drop-shadow-lg">
              Assistive AI: Unlocking Independence
            </h2>
            <p className="text-lg italic mb-8 border-b border-yellow-300/50 pb-4">
              সহযোগী এআই: স্বাধীনতার চাবিকাঠি (The Key to Independence)
            </p>

            {/* Feature Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }} // ফিচারের এন্ট্রি স্ট্যাগার
              initial="hidden"
              animate="visible"
            >
              <FeatureCard 
                icon={CurrencyIcon}
                title="Bangladeshi Currency Detection"
                titleBn="বাংলাদেশি মুদ্রা সনাক্তকরণ"
                description="Real-time recognition of Taka notes (e.g., ৳100, ৳500) using the device camera, announced instantly to the user."
              />
              <FeatureCard 
                icon={PriceTagIcon}
                title="Bangla Price Tag Reading"
                titleBn="বাংলায় মূল্য পাঠ"
                description="OCR technology to read product price tags and display, with an immediate, clear voice output in Bangla."
              />
              <FeatureCard 
                icon={VoiceIcon}
                title="Simple Voice Navigation"
                titleBn="সহজ ভয়েস নেভিগেশন"
                description="Intuitive, voice-activated commands allow visually impaired users to navigate the app hands-free and easily."
              />
              <FeatureCard 
                icon={OfflineIcon}
                title="Upcoming Offline"
                titleBn="অফলাইন কার্যকারিতা"
                description="The core currency and price reading models operate locally, ensuring reliable use even without internet in local shops."
              />
            </motion.div>
            
            <p className="mt-8 text-center text-sm opacity-80">
                This solution aims to provide full transactional confidence and independence during daily shopping.
            </p>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// --- ৫. মূল ChallengeSolution কম্পোনেন্ট ---

// অ্যানিমেশনের জন্য ভিন্ন ভিন্ন ভ্যারিয়েন্ট সংজ্ঞায়িত করা হলো
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3, // শিশুদের অ্যানিমেশন শুরু করার আগে সামান্য দেরি
      staggerChildren: 0.2, // প্রতিটি শিশুকে পরপর অ্যানিমেট করা
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ChallengeSolution = () => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal toggle function
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    // মূল কন্টেইনার
    <motion.div
      className="p-8 md:p-12 lg:p-16 text-center font-sans bg-gray-50 min-h-screen flex flex-col justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* --- The Challenge Section --- */}
      <motion.div variants={itemVariants} className="mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">
          The <span className="border-b-4 border-orange-500">Challenge</span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mt-2.5">
          Visually impaired people often face challenges when shopping in local stores. The inability to independently recognize currency and read product prices is a major obstacle.
        </p>
      </motion.div>

      {/* --- The Solution Section --- */}
      <motion.div variants={itemVariants} className="max-w-4xl mx-auto w-full mt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-6">
          The <span className="border-b-4 border-orange-500">Solution</span>
        </h2>
        
        {/* Solution Box */}
        <motion.div
          className="bg-green-100 p-6 md:p-10 rounded-2xl shadow-xl border-2 border-green-300 transform hover:scale-[1.02] transition-transform duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(34, 197, 94, 0.5), 0 4px 6px -4px rgba(34, 197, 94, 0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-xl md:text-2xl text-green-800 font-semibold italic">
            An AI-based application that identifies Bangladeshi notes and product prices via camera and reads them aloud in Bengali.
          </p>
        </motion.div>
      </motion.div>

      {/* --- Animated Call-to-Action Button (Triggers Modal) --- */}
      <motion.button
        className="mt-12 mx-auto px-8 py-3 text-lg font-bold rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleModal} // মডাল খোলার ফাংশন যুক্ত করা হলো
      >
        Explore the AI Solution
      </motion.button>
      
      {/* --- Gorgeous Modal Rendered Here --- */}
      <AISolutionModal isOpen={isModalOpen} onClose={toggleModal} />

    </motion.div>
  );
}

export default ChallengeSolution;