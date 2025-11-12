// import React from 'react';

// const ChallengeSolution = () => {
//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
      
//       {/* The Challenge Section */}
//       <h2 style={{ color: 'red', marginBottom: '5px' }}>
//         The <span style={{ borderBottom: '2px solid orange' }}>Challenge</span>
//       </h2>
//       <p style={{ 
//         maxWidth: '700px', 
//         margin: '0 auto 40px auto', 
//         fontSize: '1.1em',
//         lineHeight: '1.6'
//       }}>
//         Visually impaired people often face challenges when shopping in local stores. The inability to independently recognize currency and read product prices is a major obstacle.
//       </p>

//       {/* --- Horizontal Rule or visual separator if needed --- */}

//       {/* The Solution Section */}
//       <h2 style={{ color: 'green', marginBottom: '5px' }}>
//         The <span style={{ borderBottom: '2px solid orange' }}>Solution</span>
//       </h2>
//       <div style={{ 
//         backgroundColor: '#e6ffe6', 
//         padding: '20px', 
//         borderRadius: '10px', 
//         maxWidth: '600px', 
//         margin: '0 auto',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//       }}>
//         <p style={{ 
//           color: 'green', 
//           fontSize: '1.2em', 
//           fontWeight: 'bold',
//           margin: '0'
//         }}>
//           An **AI-based application** that identifies **Bangladeshi notes** and product prices via camera and reads them aloud in **Bengali**.
//         </p>
//       </div>
//     </div>
//   );
// }

// // Renaming the export to match the content
// export default ChallengeSolution;

import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    // মূল কন্টেইনার, যা পুরো সেকশনটিকে অ্যানিমেট করবে
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
      <motion.div variants={itemVariants} className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-6">
          The <span className="border-b-4 border-orange-500">Solution</span>
        </h2>
        
        {/* Solution Box: Framer Motion-এর সাথে Tailwind-এর স্টাইলিং */}
        <motion.div
          className="bg-green-100 p-6 md:p-10 rounded-2xl shadow-xl border-2 border-green-300 transform hover:scale-[1.02] transition-transform duration-300"
          variants={itemVariants}
          // এটি একটি হালকা বাউন্সিং প্রভাব যোগ করবে
          whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(34, 197, 94, 0.5), 0 4px 6px -4px rgba(34, 197, 94, 0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-xl md:text-2xl text-green-800 font-semibold italic">
            An AI-based application that identifies Bangladeshi notes and product prices via camera and reads them aloud in Bengali.
          </p>
        </motion.div>
      </motion.div>

      {/* --- Optional: Animated Call-to-Action Button (Just for gorgeous effect) --- */}
      <motion.button
        className="mt-12 mx-auto px-8 py-3 text-lg font-bold rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore the AI Solution
      </motion.button>
    </motion.div>
  );
}

export default ChallengeSolution;