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

// import React from 'react';
// import { motion } from 'framer-motion';

// // আইকন ইম্পোর্ট
// import { 
//   FaMoneyBillWave, 
//   FaTag,            
//   FaMicrophoneAlt,  
//   FaWifi,           
//   FaClock           // নতুন আইকন, 'Upcoming' বোঝানোর জন্য
// } from 'react-icons/fa';

// // Framer Motion Variants (আগের মতো একই থাকবে)
// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       when: "beforeChildren",
//       staggerChildren: 0.15,
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

// // Feature Card Component (Updated to handle 'isUpcoming' prop)
// const FeatureCard = ({ icon: Icon, title, description, colorClass, isUpcoming = false }) => {
  
//   // Upcoming ফিচারের জন্য কন্ডিশনাল স্টাইল সেট করা
//   const baseClasses = "relative p-6 md:p-8 rounded-2xl shadow-xl border-t-4 flex flex-col justify-between h-full group transform transition-all duration-300";
//   const upcomingClasses = isUpcoming 
//     ? "bg-gray-100 border-gray-300 opacity-70 cursor-not-allowed hover:shadow-md" // ফেইড এবং ক্লিক করা যাবে না এমন লুক
//     : `bg-white ${colorClass} hover:shadow-xl`;

//   // Hover Effect
//   const hoverProps = isUpcoming 
//     ? {} // Upcoming-এর জন্য কোনো hover effect নেই
//     : { y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" };

//   // Icon Color
//   const iconColor = isUpcoming ? "text-gray-500" : `${colorClass.replace('border-t-4', 'text')}-600`;

//   return (
//     <motion.div
//       className={`${baseClasses} ${upcomingClasses}`}
//       variants={itemVariants}
//       whileHover={hoverProps} 
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.5 }}
//     >
      
//       {/* --- UPCOMING Badge --- */}
//       {isUpcoming && (
//         <div className="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 bg-gray-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transform rotate-3">
//           UPCOMING
//         </div>
//       )}

//       {/* Icon */}
//       <div className="flex-shrink-0 mb-4">
//         <Icon className={`w-10 h-10 ${iconColor} group-hover:scale-110 transition-transform duration-300`} />
//       </div>
      
//       {/* Content */}
//       <div className="flex-grow">
//         <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isUpcoming ? 'text-gray-600' : 'text-gray-800'} group-hover:text-indigo-700 transition-colors duration-300`}>
//           {title}
//         </h3>
//         <p className={`text-base md:text-lg leading-relaxed ${isUpcoming ? 'text-gray-500' : 'text-gray-600'}`}>
//           {description}
//         </p>
//       </div>
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
//             Key <span className="border-b-4 border-indigo-600 pb-1">Features</span> <br />
//             <span className="text-lg text-gray-600">আমাদের অ্যাপের মূল বৈশিষ্ট্য</span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//             Our app offers essential functionalities to empower visually impaired individuals. <br />
//             <span className="text-lg text-gray-600">দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য অ্যাপটি গুরুত্বপূর্ণ সুবিধা প্রদান করে।</span>
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
//           {/* 1. Currency Detection (Active) */}
//           <FeatureCard
//             icon={FaMoneyBillWave}
//             title="Currency Detection"
//             description="Accurately identifies Bangladeshi Taka using real-time camera input. (বাস্তব সময় ক্যামেরা ইনপুট ব্যবহার করে বাংলাদেশি টাকা সঠিকভাবে শনাক্ত করে।)"
//             colorClass="border-t-4 border-blue-500"
//           />
//           {/* 2. Price Reading (Active) */}
//           <FeatureCard
//             icon={FaTag}
//             title="Price Reading"
//             description="Detects product price tags and announces them in a clear voice in Bengali. (পণ্য মূল্যের ট্যাগ শনাক্ত করে এবং সেগুলো বাংলা ভাষায় স্পষ্টভাবে ঘোষণা করে।)"
//             colorClass="border-t-4 border-green-500"
//           />
//           {/* 3. Bangla Voice Output (Active) */}
//           <FeatureCard
//             icon={FaMicrophoneAlt}
//             title="Bangla Voice Output"
//             description="All information is read aloud to the user in Bengali for easy comprehension. (সব তথ্য ব্যবহারকারীকে বাংলায় পড়ে শোনা যায়, যাতে তারা সহজে বুঝতে পারে।)"
//             colorClass="border-t-4 border-purple-500"
//           />
//           {/* 4. Offline Capability (UPCOMING Feature) */}
//           <FeatureCard
//             icon={FaWifi}
//             title="Offline Capability In Sah Allah"
//             description="Designed to work without internet access for use in local shops or canteens. (স্থানীয় দোকান বা ক্যান্টিনে ব্যবহার করার জন্য ইন্টারনেট ছাড়াই কাজ করার জন্য ডিজাইন করা হয়েছে।)"
//             colorClass="border-t-4 border-gray-500" // Grey border for 'Upcoming'
//             isUpcoming={true} // <-- এই prop-টি যোগ করা হয়েছে
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Features;
