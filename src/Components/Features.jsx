// // // import React from 'react'

// // // const Features = () => {
// // //   return (
// // //     <div>
// // //       <h1>ALhamdulliah</h1>
// // //     </div>
// // //   )
// // // }

// // // export default Features


// // import React from 'react';
// // import { motion } from 'framer-motion';

// // // আইকন হিসেবে react-icons ব্যবহার করা হয়েছে।
// // // নিশ্চিত করুন যে আপনার প্রজেক্টে এটি ইনস্টল করা আছে: npm install react-icons
// // import { HiOutlineMicrophone, HiOutlineCamera, HiOutlineEye } from 'react-icons/hi';

// // // Framer Motion Variants for Staggered Animation
// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.2, // Items will appear one after another
// //       delayChildren: 0.1,
// //     },
// //   },
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, x: -50 },
// //   visible: {
// //     opacity: 1,
// //     x: 0,
// //     transition: {
// //       type: 'spring',
// //       stiffness: 100,
// //       damping: 10,
// //     },
// //   },
// // };

// // // Feature Item Component
// // const FeatureItem = ({ icon: Icon, title, description, delay }) => {
// //   return (
// //     <motion.div
// //       className="flex items-start space-x-4 mb-8"
// //       variants={itemVariants}
// //       whileHover={{ scale: 1.03, x: 10 }} // Subtle hover effect
// //       transition={{ type: "spring", stiffness: 300 }}
// //     >
// //       {/* Icon with Purple Background */}
// //       <div className="flex-shrink-0 p-3 bg-indigo-500 rounded-full text-white shadow-lg">
// //         <Icon className="w-6 h-6" />
// //       </div>
      
// //       {/* Text Content */}
// //       <div>
// //         <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
// //         <p className="text-gray-600 text-base">{description}</p>
// //       </div>
// //     </motion.div>
// //   );
// // };


// // const Features = () => {
// //   const imageUrl = 'https://www.durbinai.com/blind-school.png';

// //   return (
// //     <div className="py-16 md:py-24 bg-white font-sans">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// //         {/* Header Section */}
// //         <motion.div 
// //           className="text-center mb-12"
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.5 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
// //             How It <span className="text-indigo-600">Works</span>
// //           </h2>
// //           <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
// //             Simple voice commands activate powerful AI that describes your world in real-time
// //           </p>
// //         </motion.div>

// //         {/* Content Layout (Features & Image) */}
// //         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

// //           {/* Left Side: Feature List */}
// //           <motion.div
// //             className="w-full lg:w-1/2"
// //             variants={containerVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.3 }} // Animation runs once when in view
// //           >
// //             <FeatureItem
// //               icon={HiOutlineMicrophone}
// //               title="Voice Command Activation"
// //               description="Simply speak to activate the app and start the scanning process"
// //             />
// //             <FeatureItem
// //               icon={HiOutlineCamera}
// //               title="Smart Camera Capture"
// //               description="App automatically captures images using your smartphone's front camera"
// //             />
// //             <FeatureItem
// //               icon={HiOutlineEye}
// //               title="AI-Powered Analysis"
// //               description="In 2-4 seconds, advanced AI processes and describes everything in view"
// //             />
// //           </motion.div>

// //           {/* Right Side: Image */}
// //           <motion.div 
// //             className="w-full lg:w-1/2 flex justify-center"
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true, amount: 0.5 }}
// //             transition={{ duration: 0.7, delay: 0.2 }}
// //           >
// //             <div className="relative w-full max-w-lg">
// //               <img
// //                 src={imageUrl}
// //                 alt="Visually impaired children receiving education with teacher"
// //                 className="w-full h-auto rounded-xl shadow-2xl transform rotate-1 transition-transform duration-500" // Subtle rotation for style
// //                 style={{ clipPath: 'url(#rounded-clip)', filter: 'drop-shadow(0 20px 20px rgba(0, 0, 0, 0.2))' }}
// //               />
// //               {/* Optional: Add a subtle rounded border that matches the image border */}
// //               <div className="absolute inset-0 border-4 border-white/50 rounded-xl pointer-events-none"></div>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Features;

// // import React from 'react'

// // const Features = () => {
// //   return (
// //     <div>
// //       <h1>Alhamdulliah</h1>
// //     </div>
// //   )
// // }

// // export default Features


// import React from 'react';
// import { motion } from 'framer-motion';

// // আইকন হিসেবে react-icons ব্যবহার করা হয়েছে।
// // নিশ্চিত করুন যে আপনার প্রজেক্টে এটি ইনস্টল করা আছে: npm install react-icons
// import { 
//   FaMoneyBillWave, // For Currency Detection
//   FaTag,            // For Price Reading
//   FaMicrophoneAlt,  // For Bangla Voice Output
//   FaWifi             // For Offline Capability (inverted for 'offline')
// } from 'react-icons/fa';

// // Framer Motion Variants
// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       when: "beforeChildren", // Parent animation finishes before children start
//       staggerChildren: 0.15, // Children animate one after another
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//     },
//   },
// };

// // Feature Card Component
// const FeatureCard = ({ icon: Icon, title, description, colorClass, delay }) => {
//   return (
//     <motion.div
//       className={`relative p-6 md:p-8 rounded-2xl shadow-xl border-t-4 ${colorClass} bg-white flex flex-col justify-between h-full group transform transition-all duration-300`}
//       variants={itemVariants}
//       whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }} // Lift and deeper shadow on hover
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.5 }}
//     >
//       {/* Icon */}
//       <div className="flex-shrink-0 mb-4">
//         <Icon className={`w-10 h-10 ${colorClass.replace('border-t-4', 'text')}-600 group-hover:scale-110 transition-transform duration-300`} />
//       </div>
      
//       {/* Content */}
//       <div className="flex-grow">
//         <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
//           {title}
//         </h3>
//         <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//           {description}
//         </p>
//       </div>

//       {/* Subtle background element on hover */}
//       <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${colorClass.replace('border-t-4', 'bg')}-50`}></div>
//     </motion.div>
//   );
// };


// const Features = () => {
//   return (
//     <div className="bg-gray-100 py-16 md:py-24 font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Section */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//             Key <span className="border-b-4 border-indigo-600 pb-1">Features</span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//             Our app offers essential functionalities to empower visually impaired individuals.
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <FeatureCard
//             icon={FaMoneyBillWave}
//             title="Currency Detection"
//             description="Accurately identifies Bangladeshi Taka using real-time camera input."
//             colorClass="border-t-4 border-blue-500" // Blue color
//           />
//           <FeatureCard
//             icon={FaTag}
//             title="Price Reading"
//             description="Detects product price tags and announces them in a clear voice in Bengali."
//             colorClass="border-t-4 border-green-500" // Green color
//           />
//           <FeatureCard
//             icon={FaMicrophoneAlt}
//             title="Bangla Voice Output"
//             description="All information is read aloud to the user in Bengali for easy comprehension."
//             colorClass="border-t-4 border-purple-500" // Purple color
//           />
//           <FeatureCard
//             icon={FaWifi} // Changed to FaWifi and inverted meaning for 'offline' visually
//             title="Offline Capability"
//             description="Designed to work without internet access for use in local shops or canteens."
//             colorClass="border-t-4 border-yellow-500" // Yellow color
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import React from 'react';
import { motion } from 'framer-motion';

// আইকন ইম্পোর্ট
import { 
  FaMoneyBillWave, 
  FaTag,            
  FaMicrophoneAlt,  
  FaWifi,           
  FaClock           // নতুন আইকন, 'Upcoming' বোঝানোর জন্য
} from 'react-icons/fa';

// Framer Motion Variants (আগের মতো একই থাকবে)
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Feature Card Component (Updated to handle 'isUpcoming' prop)
const FeatureCard = ({ icon: Icon, title, description, colorClass, isUpcoming = false }) => {
  
  // Upcoming ফিচারের জন্য কন্ডিশনাল স্টাইল সেট করা
  const baseClasses = "relative p-6 md:p-8 rounded-2xl shadow-xl border-t-4 flex flex-col justify-between h-full group transform transition-all duration-300";
  const upcomingClasses = isUpcoming 
    ? "bg-gray-100 border-gray-300 opacity-70 cursor-not-allowed hover:shadow-md" // ফেইড এবং ক্লিক করা যাবে না এমন লুক
    : `bg-white ${colorClass} hover:shadow-xl`;

  // Hover Effect
  const hoverProps = isUpcoming 
    ? {} // Upcoming-এর জন্য কোনো hover effect নেই
    : { y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" };

  // Icon Color
  const iconColor = isUpcoming ? "text-gray-500" : `${colorClass.replace('border-t-4', 'text')}-600`;

  return (
    <motion.div
      className={`${baseClasses} ${upcomingClasses}`}
      variants={itemVariants}
      whileHover={hoverProps} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      
      {/* --- UPCOMING Badge --- */}
      {isUpcoming && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 bg-gray-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transform rotate-3">
          UPCOMING
        </div>
      )}

      {/* Icon */}
      <div className="flex-shrink-0 mb-4">
        <Icon className={`w-10 h-10 ${iconColor} group-hover:scale-110 transition-transform duration-300`} />
      </div>
      
      {/* Content */}
      <div className="flex-grow">
        <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isUpcoming ? 'text-gray-600' : 'text-gray-800'} group-hover:text-indigo-700 transition-colors duration-300`}>
          {title}
        </h3>
        <p className={`text-base md:text-lg leading-relaxed ${isUpcoming ? 'text-gray-500' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};


const Features = () => {
  return (
    <div className="bg-gray-100 py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Key <span className="border-b-4 border-indigo-600 pb-1">Features</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our app offers essential functionalities to empower visually impaired individuals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* 1. Currency Detection (Active) */}
          <FeatureCard
            icon={FaMoneyBillWave}
            title="Currency Detection"
            description="Accurately identifies Bangladeshi Taka using real-time camera input."
            colorClass="border-t-4 border-blue-500"
          />
          {/* 2. Price Reading (Active) */}
          <FeatureCard
            icon={FaTag}
            title="Price Reading"
            description="Detects product price tags and announces them in a clear voice in Bengali."
            colorClass="border-t-4 border-green-500"
          />
          {/* 3. Bangla Voice Output (Active) */}
          <FeatureCard
            icon={FaMicrophoneAlt}
            title="Bangla Voice Output"
            description="All information is read aloud to the user in Bengali for easy comprehension."
            colorClass="border-t-4 border-purple-500"
          />
          {/* 4. Offline Capability (UPCOMING Feature) */}
          <FeatureCard
            icon={FaWifi}
            title="Offline Capability In Sah Allah"
            description="Designed to work without internet access for use in local shops or canteens."
            colorClass="border-t-4 border-gray-500" // Grey border for 'Upcoming'
            isUpcoming={true} // <-- এই prop-টি যোগ করা হয়েছে
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;