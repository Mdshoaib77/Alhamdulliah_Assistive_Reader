// // import React from 'react'

// // const Home = () => {
// //   return (
// //     <div>
// //       Alhamdulliah Home
// //     </div>
// //   )
// // }

// // export default Home


// // // import React from 'react';
// // // import { motion } from 'framer-motion'; // Assuming framer-motion is used for animations

// // // const Home = () => {
// // //   return (
// // //     <div 
// // //       className="min-h-[calc(100vh-64px-100px)] flex flex-col items-center justify-center p-8 text-center" // min-h set to fill screen minus navbar/footer height
// // //       style={{
// // //         background: 'linear-gradient(180deg, #f0e6ff 0%, #ffffff 100%)', // Light purple to white gradient
// // //       }}
// // //     >
// // //       <motion.h1 
// // //         className="text-5xl font-bold text-gray-800 mb-6 max-w-2xl leading-tight"
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6, delay: 0.2 }}
// // //       >
// // //         Try Durbin AI Web App
// // //       </motion.h1>

// // //       <motion.p 
// // //         className="text-xl text-gray-600 mb-10 max-w-3xl"
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6, delay: 0.4 }}
// // //       >
// // //         Experience Durbin AI directly in your browser—no installation required.
// // //         Access powerful visual assistance features from any device, anywhere,
// // //         anytime.
// // //       </motion.p>

// // //       <motion.button
// // //         className="btn py-4 px-10 rounded-full text-white font-bold text-lg shadow-xl"
// // //         style={{
// // //           background: 'linear-gradient(90deg, #5b4bff 0%, #9a66ff 100%)', // Gradient background for the button
// // //           border: 'none', // Remove default button border
// // //         }}
// // //         whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
// // //         whileTap={{ scale: 0.95 }}
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6, delay: 0.6 }}
// // //       >
// // //         Visit Web App
// // //       </motion.button>
// // //     </div>
// // //   )
// // // }

// // // export default Home;

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { FaHeart, FaShoppingBasket, FaEyeSlash } from 'react-icons/fa'; // Icons for visual appeal

// // const Home = () => {
// //   // Animation settings for the main title
// //   const titleVariants = {
// //     hidden: { opacity: 0, y: -20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// //   };

// //   // Animation settings for the cards
// //   const cardVariants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
// //   };

// //   const ProjectCard = ({ icon: Icon, title, problem, solution, features, delay }) => (
// //     <motion.div
// //       className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl transition-all hover:shadow-3xl max-w-sm w-full mx-auto"
// //       variants={cardVariants}
// //       initial="hidden"
// //       animate="visible"
// //       whileHover={{ y: -5 }} // Slight lift on hover
// //       transition={{ delay }}
// //     >
// //       <div className="flex justify-center mb-6">
// //         <Icon className="text-6xl text-[#5b4bff] opacity-80" /> {/* Stylish Icon */}
// //       </div>
      
// //       <h2 className="text-2xl font-extrabold text-gray-900 mb-4 text-center">
// //         {title}
// //       </h2>

// //       {/* Problem Statement (Light Gray Text) */}
// //       <div className="text-sm text-gray-500 mb-6 border-l-4 border-red-400 pl-3 italic">
// //         <strong className="text-red-600">Problem:</strong> {problem}
// //       </div>

// //       {/* Proposed Solution (Darker Text) */}
// //       <p className="text-md text-gray-700 mb-6 font-semibold">
// //         Solution: {solution}
// //       </p>

// //       {/* Unique Features List */}
// //       <h3 className="text-lg font-semibold text-gray-800 mb-2 border-t pt-4">Unique Features</h3>
// //       <ul className="text-sm text-gray-600 space-y-2 text-left list-disc list-inside">
// //         {features.map((feature, index) => (
// //           <li key={index} className="pl-1 leading-relaxed">{feature}</li>
// //         ))}
// //       </ul>
      
// //     </motion.div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-16 md:py-24 px-4">
      
// //       {/* Main Title Section */}
// //       <motion.header
// //         className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
// //         variants={titleVariants}
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         <p className="text-lg font-semibold text-[#5b4bff] uppercase tracking-wider mb-2">
// //           Featured AI Solutions
// //         </p>
// //         <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
// //           Solving Real-World Problems with Assistive AI
// //         </h1>
// //       </motion.header>

// //       {/* Project Cards Grid */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
// //         {/* Card 1: AI Currency & Price Reader (Assistive Shopping) */}
// //         <ProjectCard
// //           icon={FaShoppingBasket}
// //           title="AI Currency & Price Reader"
// //           problem="Visually impaired people in Bangladesh struggle to identify currency notes and read product prices while shopping."
// //           solution="A real-time camera-based app for recognizing Bangladeshi currency and reading product prices aloud in Bangla."
// //           features={[
// //             "Bangladeshi currency detection using real-time camera input.",
// //             "Price tag reading with Bangla voice output (Text-to-Speech).",
// //             "Simple voice-based navigation for maximum accessibility.",
// //             "Works offline for dependable local shop use.",
// //           ]}
// //           delay={0.8}
// //         />

// //         {/* Card 2: EyeShield (Screen Privacy Protector) */}
// //         <ProjectCard
// //           icon={FaEyeSlash}
// //           title="EyeShield – Screen Privacy Protector"
// //           problem="Students using devices in public spaces (classrooms, labs) face privacy concerns from shoulder surfing."
// //           solution="An application utilizing the front camera to detect unauthorized faces, automatically blurring or locking the screen."
// //           features={[
// //             "Real-time face detection for instant privacy protection.",
// //             "Automatic screen blur or lock when an unauthorized face is detected.",
// //             "Lightweight and highly privacy-friendly (local processing only).",
// //             "Designed for CSE, PUB students and academic environments.",
// //           ]}
// //           delay={1.0}
// //         />
        
// //       </div>
      
// //     </div>
// //   );
// // }

// // export default Home;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHeart } from 'react-icons/fa'; 

// const Home = () => {
//   // --- Framer Motion Variants ---

//   // Main container (card) entrance animation
//   const cardVariants = {
//     hidden: { opacity: 0, y: 70, rotateX: 5, scale: 0.98 }, // Subtle rotation and scaling
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       rotateX: 0,
//       scale: 1,
//       transition: { 
//         type: "spring", 
//         stiffness: 80, 
//         damping: 15, 
//         delay: 0.1 
//       } 
//     },
//   };

//   // Staggered items animation
//   const itemVariants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     // Outer container: Soft background and centers the card
//     <div className="flex justify-center items-center py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white min-h-[calc(100vh-64px-100px)] px-4">
      
//       {/* The main card container with enhanced shadow and roundedness */}
//       <motion.div
//         className="bg-white p-10 md:p-16 rounded-[2rem] shadow-2xl max-w-xl text-center flex flex-col items-center border border-gray-100/70"
//         style={{
//             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)', // Custom, softer shadow
//         }}
//         variants={cardVariants}
//         initial="hidden"
//         animate="visible"
//         whileHover={{ 
//             scale: 1.02, 
//             y: -5,
//             rotateX: 0,
//             boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.2)', // Deeper shadow on hover
//             transition: { type: "spring", stiffness: 200, damping: 10 }
//         }} 
//       >
//         {/* Heart Icon - Larger and bolder */}
//         <motion.div variants={itemVariants} transition={{ delay: 0.3 }}>
//           <FaHeart className="text-6xl text-gray-800 mb-8 opacity-90" /> 
//         </motion.div>

//         {/* "Free for All, Forever" Title - Bolder and better spaced */}
//         <motion.h2
//           className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug"
//           variants={itemVariants}
//           transition={{ delay: 0.4 }}
//         >
//           Free for All, Forever
//         </motion.h2>

//         {/* Description Paragraph - Wider and clearer */}
//         <motion.p
//           className="text-lg text-gray-600 mb-12 leading-relaxed max-w-sm"
//           variants={itemVariants}
//           transition={{ delay: 0.5 }}
//         >
//           Durbin is provided free of cost to ensure that every visually challenged person
//           in Bangladesh and around the world can benefit from AI-powered assistance
//           without financial barriers.
//         </motion.p>

//         {/* "Help Us Keep Durbin Running" Section - Clearer separation */}
//         <motion.div
//           className="w-full pt-6 border-t border-gray-200/50" // Separator line for visual break
//           variants={itemVariants}
//           transition={{ delay: 0.6 }}
//         >
//           <h3 className="text-xl font-bold text-gray-800 mb-2">
//             Help Us Keep Durbin Running
//           </h3>
//           <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-sm">
//             To maintain this vital service, expand features, and continue empowering those who depend on
//             Durbin, we seek support from individuals, organizations, and governments.
//           </p>
//         </motion.div>

//         {/* "Support Our Mission" Button - More prominent hover style */}
//         <motion.button
//           className="btn btn-outline border-2 border-gray-400 text-gray-700 
//                      hover:bg-purple-600 hover:border-purple-600 hover:text-white 
//                      font-bold py-3 px-10 rounded-full normal-case text-base transition-all duration-300 flex items-center gap-2"
//           variants={itemVariants}
//           initial="hidden"
//           animate="visible"
//           whileHover={{ scale: 1.05 }} // Clean scale up on hover
//           whileTap={{ scale: 0.98 }}
//           transition={{ delay: 0.7 }}
//         >
//           <FaHeart className="text-lg" /> Support Our Mission
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
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
          // In a real app, you would add an onClick handler here
          onClick={() => console.log("Learn About Our Mission clicked")}
        >
          Learn About Our Mission
        </motion.button>
      </motion.div>
      
      {/* --- Feel the Independence Section (White Background) --- */}
      <motion.div
        className="bg-white py-16 md:py-32 text-center px-4"
        initial="hidden"
        whileInView="visible" // Use whileInView to trigger animation when it scrolls into view
        viewport={{ once: true, amount: 0.5 }} // Ensure it only animates once
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
          // In a real app, you would add an onClick handler here
          onClick={() => console.log("Launch the App clicked")}
        >
          Launch the App
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;