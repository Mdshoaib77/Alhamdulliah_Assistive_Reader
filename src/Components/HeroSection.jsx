// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Zap, ArrowUp, X } from 'lucide-react'; // Added X for modal close button

// // --- START: Mock Language Context (Required for single-file operation) ---
// // Note: In a full React project, you would import this hook. 
// // We are mocking it here to keep the file self-contained and runnable.
// const useLanguage = () => {
//     // Defaulting to English ('en') for this specific component example.
//     const [currentLang, setCurrentLang] = useState('en'); 
//     return { currentLang, setLang: setCurrentLang };
// };

// // --- START: Updated Translations ---
// const translations = {
//     en: {
//         heading: "Shop with Confidence, Live with Independence.",
//         subheading: "AI-Powered Currency and Price Reader application for the visually impaired people of Bangladesh.",
//         useAppButton: "Use the App (Web Prototype)",
//         viewFeaturesButton: "View Upcoming Features", // Updated text
//         modalTitle: "Our Next Step: A New Horizon with Offline App Features", 
//         modalMoto: "This app is not just a tool, it's the key to independence for visually impaired brothers and sisters. Offline capabilities mean life won’t stop, even where the internet doesn’t reach. We believe your potential is limitless, and this technology will turn that potential into reality. Keep moving forward, we are with you!", 
//         feature1Title: "Advanced Object Recognition",
//         feature1Desc: "Using the camera, many daily items (such as fruits, vegetables, medicines) can be accurately detected.",
//         feature2Title: "Route Planning and Navigation",
//         feature2Desc: "Voice-based navigation that helps users reach their destination offline as well.",
//         closeButton: "Close",
//     },
//     bn: {
//         heading: "আত্মবিশ্বাসের সাথে কেনাকাটা করুন, স্বাধীনভাবে জীবন যাপন করুন।",
//         subheading: "বাংলাদেশের দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য এআই-চালিত মুদ্রা ও মূল্য পাঠক অ্যাপ্লিকেশন।",
//         useAppButton: "অ্যাপ ব্যবহার করুন (ওয়েব প্রোটোটাইপ)",
//         viewFeaturesButton: "আসন্ন বৈশিষ্ট্য দেখুন", // Updated text
//     }
// };
// // --- END: Updated Translations ---


// // Utility component for Upcoming Feature Card
// const UpcomingFeatureCard = ({ title, description }) => (
//     <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
//         <h4 className="text-xl font-bold text-violet-600 mb-2">{title}</h4>
//         <p className="text-gray-600 text-base">{description}</p>
//     </div>
// );

// // Framer Motion Modal Component
// const Modal = ({ showModal, onClose, t }) => {
//     // Features data (Uses English translations from 't' prop)
//     const upcomingFeaturesData = [
//         { title: t.feature1Title, description: t.feature1Desc },
//         { title: t.feature2Title, description: t.feature2Desc },
//     ];

//     const backdropVariants = {
//         visible: { opacity: 1 },
//         hidden: { opacity: 0 },
//     };

//     const modalVariants = {
//         hidden: { y: "-100vh", opacity: 0 },
//         visible: { 
//             y: "0", 
//             opacity: 1,
//             // Framer Motion Spring animation for smooth bounce effect
//             transition: { delay: 0.1, duration: 0.5, type: "spring", stiffness: 100 } 
//         },
//         exit: { y: "100vh", opacity: 0 }
//     };

//     return (
//         <AnimatePresence>
//             {showModal && (
//                 <motion.div
//                     className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center p-4 backdrop-blur-sm font-sans"
//                     variants={backdropVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     onClick={onClose} // Close on backdrop click
//                 >
//                     <motion.div 
//                         className="bg-white rounded-3xl w-full max-w-4xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
//                         variants={modalVariants}
//                         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//                     >
//                         <div className="flex justify-end mb-4">
//                             <button
//                                 onClick={onClose}
//                                 className="text-gray-400 hover:text-violet-600 transition duration-150 p-2 rounded-full hover:bg-violet-50"
//                             >
//                                 <X className="w-6 h-6" />
//                             </button>
//                         </div>

//                         {/* Modal Header */}
//                         <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-700">
//                                 {t.modalTitle}
//                             </span>
//                         </h3>

//                         {/* Motivational Message - Violet Theme applied */}
//                         <div className="bg-violet-50 p-6 rounded-xl border-l-4 border-violet-500 mb-10 shadow-inner">
//                             <p className="text-lg italic text-gray-700 leading-relaxed">
//                                 {t.modalMoto}
//                             </p>
//                         </div>

//                         {/* Feature Cards Grid */}
//                         <div className="grid md:grid-cols-2 gap-6">
//                             {upcomingFeaturesData.map((feature, index) => (
//                                 <UpcomingFeatureCard key={index} title={feature.title} description={feature.description} />
//                             ))}
//                         </div>
                        
//                         <div className="flex justify-center mt-8">
//                              <button
//                                 onClick={onClose}
//                                 className="px-8 py-3 bg-violet-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105"
//                             >
//                                 {t.closeButton}
//                             </button>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }


// // Main Component
// const HeroSection = () => {
//     // Get the current language from the context
//     const { currentLang } = useLanguage();
//     const t = translations[currentLang];
//     const t_en = translations['en']; // Using English translations for the Modal content as requested

//     // State for modal visibility
//     const [showModal, setShowModal] = useState(false);

//     return (
//         <>
//             <div className="min-h-screen flex items-center justify-center bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
//                 <div className="max-w-4xl text-center w-full">
                    
//                     {/* Hero Heading with Framer Motion - Violet Theme Applied */}
//                     <motion.h1
//                         className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         {/* Heading Text Split for Highlighting 'Assistive Reader' or key concept */}
//                         <span className="text-gray-900 block">{t.heading}</span>
//                         {/* Custom Gradient to replace the old blue/teal */}
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-700 block">
//                             Assistive Reader
//                         </span>
//                     </motion.h1>

//                     {/* Hero Subheading with Framer Motion */}
//                     <motion.p
//                         className="mt-3 text-base sm:text-lg text-gray-600 mb-10 mx-auto max-w-2xl"
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         {t.subheading}
//                     </motion.p>

//                     {/* Buttons with Framer Motion */}
//                     <motion.div
//                         className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1 }}
//                     >
//                         {/* Primary Button - Violet Theme Applied */}
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl shadow-lg text-white transition duration-300 ease-in-out bg-violet-600 hover:bg-violet-700"
//                             onClick={() => console.log('Launching Web Prototype...')}
//                         >
//                             <Zap className="w-5 h-5 mr-2" />
//                             {t.useAppButton}
//                         </motion.button>

//                         {/* Secondary Button (View Upcoming Features) - Violet Theme Applied */}
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="inline-flex items-center justify-center px-8 py-4 border text-lg font-semibold rounded-xl text-violet-600 bg-white hover:bg-violet-50 transition duration-300 ease-in-out border-violet-600 hover:border-violet-700 hover:text-violet-700 shadow-md"
//                             onClick={() => setShowModal(true)} // Open Modal
//                         >
//                              <ArrowUp className="w-5 h-5 mr-2" />
//                             {t.viewFeaturesButton}
//                         </motion.button>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Modal Component */}
//             <Modal 
//                 showModal={showModal} 
//                 onClose={() => setShowModal(false)} 
//                 t={t_en} // Always pass English translation for Modal content
//             />
//         </>
//     );
// };

// export default HeroSection;



//ALhamdulliah  Second  Banner




import React, { useState } from 'react';
import { Download, Zap, Eye, Mic, ArrowUp, ArrowDown } from 'lucide-react';

// Utility component for Feature Badges
const FeatureBadge = ({ text, icon: Icon }) => (
    // Updated colors to violet-based scheme
    <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-violet-700 bg-violet-50 rounded-full border border-violet-300 shadow-sm">
        <Icon className="w-4 h-4 mr-2 text-violet-600" />
        {text}
    </span>
);

// Utility component for Upcoming Feature Card
const UpcomingFeatureCard = ({ title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
        {/* Changed title text color to Violet-600 */}
        <h4 className="text-xl font-bold text-violet-600 mb-2">{title}</h4>
        <p className="text-gray-600 text-base">{description}</p>
    </div>
);


// Main Component
const HeroSection = () => {
    // State to manage the visibility of the upcoming features section
    const [showUpcomingFeatures, setShowUpcomingFeatures] = useState(false);
    
    // Feature data based on existing requirements
    const features = [
        // { text: "অফলাইন সক্ষমতা", icon: Zap },
        { text: "শপিং করার সক্ষমতা", icon: Zap },
        { text: "বাংলা ভয়েস আউটপুট", icon: Mic },
        { text: "মুদ্রা সনাক্তকরণ", icon: Eye },
    ];

    // Upcoming app features data
    const upcomingFeaturesData = [
        { 
            title: "অ্যাডভান্সড অবজেক্ট রিকগনিশন", 
            description: "ক্যামেরা ব্যবহার করে আরও অনেক দৈনন্দিন জিনিসপত্র (যেমন—ফল, সবজি, ওষুধ) নির্ভুলভাবে শনাক্ত করা যাবে।" 
        },
        { 
            title: "রুট প্ল্যানিং এবং দিকনির্দেশনা", 
            description: "ভয়েসনির্ভর নেভিগেশন, যা ব্যবহারকারীকে অফলাইনেও গন্তব্যে পৌঁছাতে সাহায্য করবে।" 
        },
    ];

    const toggleFeatures = () => {
        setShowUpcomingFeatures(prev => !prev);
    };


    return (
        <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            
            {/* Hero Content */}
            <main className="text-center max-w-6xl mx-auto">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    {/* Feature Badges above Headline */}
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {features.map((f, index) => (
                            <FeatureBadge key={index} text={f.text} icon={f.icon} />
                        ))}
                    </div>

                    {/* Headline */}
                    <h2 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tighter">
                        <span className="text-gray-900 block">স্বাধীনতার নতুন আলো:</span>
                        {/* Changed text color gradient from Teal/Cyan to Violet/Indigo */}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-700 block">Assistive Reader</span>
                    </h2>

                    {/* Subtitle / Problem Statement Summary */}
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                        দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য তৈরি, যা স্থানীয় বাজারে কেনাকাটার সময় ক্যামেরা ব্যবহার করে বাংলাদেশি নোট ও পণ্যের মূল্য স্বয়ংক্রিয়ভাবে বাংলা ভয়েসে শনাক্ত করে।
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                        
                        {/* Primary Button - Changed background and hover colors to Violet */}
                        <button
                            className="group flex items-center justify-center px-8 py-4 bg-violet-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105"
                            onClick={() => console.log('Launching Web Prototype...')}
                        >
                            <Zap className="w-5 h-5 mr-2" />
                            Use the App (Web Prototype)
                        </button>

                        {/* Secondary Button - Changed text and border colors to Violet */}
                        <button
                            className="group flex items-center justify-center px-8 py-4 bg-white text-violet-600 text-lg font-semibold rounded-xl border border-violet-600 hover:border-violet-700 hover:text-violet-700 transition duration-300 transform hover:scale-105 shadow-md"
                            onClick={toggleFeatures}
                        >
                            {showUpcomingFeatures ? 
                                <ArrowUp className="w-5 h-5 mr-2" /> : 
                                <Download className="w-5 h-5 mr-2" />
                            }
                            {showUpcomingFeatures ? 'Hide Upcoming Features' : 'View Upcoming Features'}
                        </button>
                    </div>

                </div>
            </main>

            {/* Upcoming Features Section (Conditional Render) */}
            {showUpcomingFeatures && (
                <section className="mt-20 w-full max-w-6xl mx-auto p-6 sm:p-10 bg-white/90 rounded-2xl shadow-2xl transition-opacity duration-500 animate-fade-in">
                    <h3 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                        আমাদের পরবর্তী ধাপ: <span className="text-violet-600">অফলাইন অ্যাপের মাধ্যমে নতুন দিগন্ত</span> {/* Changed text color to Violet-600 */}
                    </h3>

                    {/* Motivational Message - Changed border color to Violet-500 and background to Violet-50 */}
                    <div className="bg-violet-50 p-6 rounded-xl border-l-4 border-violet-500 mb-10">
                        <p className="text-lg italic text-gray-700 leading-relaxed">
                            "এই অ্যাপটি শুধু একটি সরঞ্জাম নয়, এটি দৃষ্টি প্রতিবন্ধী ভাই-বোনদের জন্য **স্বাধীনতার চাবিকাঠি**। অফলাইন সক্ষমতা মানে যেখানে ইন্টারনেট নেই, সেখানেও জীবন থেমে থাকবে না। আমরা বিশ্বাস করি, আপনার সম্ভাবনা সীমাহীন, আর এই প্রযুক্তি সেই সম্ভাবনাকে বাস্তবে রূপ দেবে। **এগিয়ে চলুন, আমরা আছি আপনার পাশে!**"
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* UpcomingFeatureCard will now use Violet-600 for titles */}
                        {upcomingFeaturesData.map((feature, index) => (
                            <UpcomingFeatureCard key={index} title={feature.title} description={feature.description} />
                        ))}
                    </div>

                    {/* Simple Fade-in Animation for smooth transition */}
                    <style jsx="true">{`
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        .animate-fade-in {
                            animation: fadeIn 0.5s ease-out forwards;
                        }
                    `}</style>
                </section>
            )}
        </div>
    );
};

export default HeroSection;


// Bannaer 2 WIth Modals 


// import React, { useState } from 'react';
// import { Zap, Eye, Mic, ArrowUp, X } from 'lucide-react'; 
// import { motion, AnimatePresence } from 'framer-motion';
// // Note: Download and ArrowDown icons are no longer needed as the modal replaces conditional rendering.

// // --- Utility Components ---

// // Utility component for Feature Badges
// const FeatureBadge = ({ text, icon: Icon }) => (
//     // Updated colors to violet-based scheme
//     <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-violet-700 bg-violet-50 rounded-full border border-violet-300 shadow-sm">
//         <Icon className="w-4 h-4 mr-2 text-violet-600" />
//         {text}
//     </span>
// );

// // Utility component for Upcoming Feature Card
// const UpcomingFeatureCard = ({ title, description }) => (
//     <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
//         {/* Changed title text color to Violet-600 */}
//         <h4 className="text-xl font-bold text-violet-600 mb-2">{title}</h4>
//         <p className="text-gray-600 text-base">{description}</p>
//     </div>
// );


// // --- Modal Component Definition ---
// // Includes the Bengali text from the user's conditional rendering section.
// const Modal = ({ showModal, onClose, upcomingFeaturesData }) => {
//     const backdropVariants = {
//         visible: { opacity: 1 },
//         hidden: { opacity: 0 },
//     };

//     const modalVariants = {
//         hidden: { y: "-100vh", opacity: 0 },
//         visible: { 
//             y: "0", 
//             opacity: 1,
//             // Framer Motion Spring animation for smooth bounce effect
//             transition: { delay: 0.1, duration: 0.5, type: "spring", stiffness: 100 } 
//         },
//         exit: { y: "100vh", opacity: 0 }
//     };

//     // Bengali content for the modal (adapted from the user's previous conditional section)
//     const modalContent = {
//         titlePart1: "আমাদের পরবর্তী ধাপ:",
//         titlePart2: "অফলাইন অ্যাপের মাধ্যমে নতুন দিগন্ত",
//         moto: "এই অ্যাপটি শুধু একটি সরঞ্জাম নয়, এটি দৃষ্টি প্রতিবন্ধী ভাই-বোনদের জন্য **স্বাধীনতার চাবিকাঠি**। অফলাইন সক্ষমতা মানে যেখানে ইন্টারনেট নেই, সেখানেও জীবন থেমে থাকবে না। আমরা বিশ্বাস করি, আপনার সম্ভাবনা সীমাহীন, আর এই প্রযুক্তি সেই সম্ভাবনাকে বাস্তবে রূপ দেবে। **এগিয়ে চলুন, আমরা আছি আপনার পাশে!**", 
//         closeButton: "বন্ধ করুন",
//     };

//     return (
//         <AnimatePresence>
//             {showModal && (
//                 <motion.div
//                     className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center p-4 backdrop-blur-sm font-sans"
//                     variants={backdropVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     onClick={onClose} // Close on backdrop click
//                 >
//                     <motion.div 
//                         className="bg-white rounded-3xl w-full max-w-4xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
//                         variants={modalVariants}
//                         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//                     >
//                         <div className="flex justify-end mb-4">
//                             <button
//                                 onClick={onClose}
//                                 className="text-gray-400 hover:text-violet-600 transition duration-150 p-2 rounded-full hover:bg-violet-50"
//                             >
//                                 <X className="w-6 h-6" />
//                             </button>
//                         </div>

//                         {/* Modal Header (Bengali) */}
//                         <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
//                              {modalContent.titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-700">
//                                 {modalContent.titlePart2}
//                             </span>
//                         </h3>

//                         {/* Motivational Message (Bengali) - Violet Theme applied */}
//                         <div className="bg-violet-50 p-6 rounded-xl border-l-4 border-violet-500 mb-10 shadow-inner">
//                             <p className="text-lg italic text-gray-700 leading-relaxed">
//                                 {modalContent.moto}
//                             </p>
//                         </div>

//                         {/* Feature Cards Grid (Bengali) */}
//                         <div className="grid md:grid-cols-2 gap-6">
//                             {upcomingFeaturesData.map((feature, index) => (
//                                 <UpcomingFeatureCard key={index} title={feature.title} description={feature.description} />
//                             ))}
//                         </div>
                        
//                         <div className="flex justify-center mt-8">
//                              <button
//                                 onClick={onClose}
//                                 className="px-8 py-3 bg-violet-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105"
//                             >
//                                 {modalContent.closeButton}
//                             </button>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }


// // --- Main Component ---

// const HeroSection = () => {
//     // State to manage the visibility of the Modal
//     const [showModal, setShowModal] = useState(false);
    
//     // Feature data (Bengali)
//     const features = [
//         { text: "শপিং করার সক্ষমতা", icon: Zap },
//         { text: "বাংলা ভয়েস আউটপুট", icon: Mic },
//         { text: "মুদ্রা সনাক্তকরণ", icon: Eye },
//     ];

//     // Upcoming app features data (Bengali - used by the Modal)
//     const upcomingFeaturesData = [
//         { 
//             title: "অ্যাডভান্সড অবজেক্ট রিকগনিশন", 
//             description: "ক্যামেরা ব্যবহার করে আরও অনেক দৈনন্দিন জিনিসপত্র (যেমন—ফল, সবজি, ওষুধ) নির্ভুলভাবে শনাক্ত করা যাবে।" 
//         },
//         { 
//             title: "রুট প্ল্যানিং এবং দিকনির্দেশনা", 
//             description: "ভয়েসনির্ভর নেভিগেশন, যা ব্যবহারকারীকে অফলাইনেও গন্তব্যে পৌঁছাতে সাহায্য করবে।" 
//         },
//     ];

//     // Removed the unused toggleFeatures function and showUpcomingFeatures state

//     return (
//         <>
//             <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
                
//                 {/* Hero Content */}
//                 <main className="text-center max-w-6xl mx-auto">
//                     <div className="max-w-4xl mx-auto space-y-8">
                        
//                         {/* Feature Badges above Headline */}
//                         <div className="flex flex-wrap justify-center gap-3 mb-6">
//                             {features.map((f, index) => (
//                                 <FeatureBadge key={index} text={f.text} icon={f.icon} />
//                             ))}
//                         </div>

//                         {/* Headline (Bengali) */}
//                         <h2 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tighter">
//                             <span className="text-gray-900 block">স্বাধীনতার নতুন আলো:</span>
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-700 block">Assistive Reader</span>
//                         </h2>

//                         {/* Subtitle / Problem Statement Summary (Bengali) */}
//                         <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
//                             দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য তৈরি, যা স্থানীয় বাজারে কেনাকাটার সময় ক্যামেরা ব্যবহার করে বাংলাদেশি নোট ও পণ্যের মূল্য স্বয়ংক্রিয়ভাবে বাংলা ভয়েসে শনাক্ত করে।
//                         </p>

//                         {/* Action Buttons */}
//                         <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                            
//                             {/* Primary Button */}
//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="group flex items-center justify-center px-8 py-4 bg-violet-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105"
//                                 onClick={() => console.log('Launching Web Prototype...')}
//                             >
//                                 <Zap className="w-5 h-5 mr-2" />
//                                 Use the App (Web Prototype)
//                             </motion.button>

//                             {/* Secondary Button - Opens the Modal */}
//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="group flex items-center justify-center px-8 py-4 bg-white text-violet-600 text-lg font-semibold rounded-xl border border-violet-600 hover:border-violet-700 hover:text-violet-700 transition duration-300 transform hover:scale-105 shadow-md"
//                                 onClick={() => setShowModal(true)} // Open Modal
//                             >
//                                 {/* Using ArrowUp for viewing features */}
//                                 <ArrowUp className="w-5 h-5 mr-2" /> 
//                                 View Upcoming Features
//                             </motion.button>
//                         </div>
//                     </div>
//                 </main>
                
//                 {/* Removed the conditional section for upcoming features */}

//             </div>

//             {/* Modal Component rendered outside the main hero section */}
//             <Modal 
//                 showModal={showModal} 
//                 onClose={() => setShowModal(false)} 
//                 upcomingFeaturesData={upcomingFeaturesData} 
//             />
//         </>
//     );
// };

// export default HeroSection;




// Banner 3

// import React, { useState } from 'react';
// import { Download, Zap, Eye, Mic, ArrowUp, X } from 'lucide-react'; 
// import { motion, AnimatePresence } from 'framer-motion';

// // --- Utility Components ---

// // Utility component for Feature Badges
// const FeatureBadge = ({ text, icon: Icon }) => (
//     // Updated colors to violet-based scheme
//     <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-violet-700 bg-violet-50 rounded-full border border-violet-300 shadow-sm">
//         <Icon className="w-4 h-4 mr-2 text-violet-600" />
//         {text}
//     </span>
// );

// // Utility component for Upcoming Feature Card
// const UpcomingFeatureCard = ({ title, description }) => (
//     <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
//         <h4 className="text-xl font-bold text-violet-600 mb-2">{title}</h4>
//         <p className="text-gray-600 text-base">{description}</p>
//     </div>
// );


// // --- Modal Component Definition ---

// const Modal = ({ showModal, onClose, upcomingFeaturesData }) => {
//     const backdropVariants = {
//         visible: { opacity: 1 },
//         hidden: { opacity: 0 },
//     };

//     const modalVariants = {
//         hidden: { y: "-100vh", opacity: 0 },
//         visible: { 
//             y: "0", 
//             opacity: 1,
//             // Framer Motion Spring animation for smooth bounce effect
//             transition: { delay: 0.1, duration: 0.5, type: "spring", stiffness: 100 } 
//         },
//         exit: { y: "100vh", opacity: 0 }
//     };

//     // English content for the modal
//     const modalContent = {
//         title: "Our Next Step: A New Horizon with Offline App Features", 
//         moto: "This app is not just a tool, it's the key to independence for visually impaired brothers and sisters. Offline capabilities mean life won’t stop, even where the internet doesn’t reach. We believe your potential is limitless, and this technology will turn that potential into reality. Keep moving forward, we are with you!", 
//         closeButton: "Close",
//     };

//     return (
//         <AnimatePresence>
//             {showModal && (
//                 <motion.div
//                     className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center p-4 backdrop-blur-sm font-sans"
//                     variants={backdropVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     onClick={onClose} // Close on backdrop click
//                 >
//                     <motion.div 
//                         className="bg-white rounded-3xl w-full max-w-4xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
//                         variants={modalVariants}
//                         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//                     >
//                         <div className="flex justify-end mb-4">
//                             <button
//                                 onClick={onClose}
//                                 className="text-gray-400 hover:text-violet-600 transition duration-150 p-2 rounded-full hover:bg-violet-50"
//                             >
//                                 <X className="w-6 h-6" />
//                             </button>
//                         </div>

//                         {/* Modal Header */}
//                         <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-700">
//                                 {modalContent.title}
//                             </span>
//                         </h3>

//                         {/* Motivational Message - Violet Theme applied */}
//                         <div className="bg-violet-50 p-6 rounded-xl border-l-4 border-violet-500 mb-10 shadow-inner">
//                             <p className="text-lg italic text-gray-700 leading-relaxed">
//                                 {modalContent.moto}
//                             </p>
//                         </div>

//                         {/* Feature Cards Grid */}
//                         <div className="grid md:grid-cols-2 gap-6">
//                             {upcomingFeaturesData.map((feature, index) => (
//                                 <UpcomingFeatureCard key={index} title={feature.title} description={feature.description} />
//                             ))}
//                         </div>
                        
//                         <div className="flex justify-center mt-8">
//                              <button
//                                 onClick={onClose}
//                                 className="px-8 py-3 bg-violet-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105"
//                             >
//                                 {modalContent.closeButton}
//                             </button>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }


// // --- Main Component ---

// const HeroSection = () => {
//     // Renamed state to showModal and initialized to false
//     const [showModal, setShowModal] = useState(false);
    
//     // Feature data based on existing requirements
//     const features = [
//         { text: "Shopping Ability", icon: Zap },
//         { text: "Bengali Voice Output", icon: Mic },
//         { text: "Currency Detection", icon: Eye },
//     ];

//     // Upcoming app features data (used by the Modal)
//     const upcomingFeaturesData = [
//         { 
//             title: "Advanced Object Recognition", 
//             description: "Using the camera, many daily items (such as fruits, vegetables, medicines) can be accurately detected." 
//         },
//         { 
//             title: "Route Planning and Navigation", 
//             description: "Voice-based navigation that helps users reach their destination offline as well." 
//         },
//     ];

//     return (
//         <>
//             <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
                
//                 {/* Hero Content */}
//                 <main className="text-center max-w-6xl mx-auto">
//                     <div className="max-w-4xl mx-auto space-y-8">
                        
//                         {/* Feature Badges above Headline */}
//                         <div className="flex flex-wrap justify-center gap-3 mb-6">
//                             {features.map((f, index) => (
//                                 <FeatureBadge key={index} text={f.text} icon={f.icon} />
//                             ))}
//                         </div>

//                         {/* Headline */}
//                         <h2 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tighter">
//                             <span className="text-gray-900 block">A New Light of Freedom:</span>
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-700 block">Assistive Reader</span>
//                         </h2>

//                         {/* Subtitle / Problem Statement Summary */}
//                         <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
//                             Designed for visually impaired individuals, it automatically detects Bangladeshi notes and product prices using the camera, providing output in Bengali voice during local shopping.
//                         </p>

//                         {/* Action Buttons */}
//                         <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                            
//                             {/* Primary Button */}
//                             <button
//                                 className="group flex items-center justify-center px-8 py-4 bg-violet-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105"
//                                 onClick={() => console.log('Launching Web Prototype...')}
//                             >
//                                 <Zap className="w-5 h-5 mr-2" />
//                                 Use the App (Web Prototype)
//                             </button>

//                             {/* Secondary Button - Now opens the Modal */}
//                             <button
//                                 className="group flex items-center justify-center px-8 py-4 bg-white text-violet-600 text-lg font-semibold rounded-xl border border-violet-600 hover:border-violet-700 hover:text-violet-700 transition duration-300 transform hover:scale-105 shadow-md"
//                                 onClick={() => setShowModal(true)} // Open Modal
//                             >
//                                 {/* Using ArrowUp icon for consistency with "View Upcoming Features" */}
//                                 <ArrowUp className="w-5 h-5 mr-2" /> 
//                                 View Upcoming Features
//                             </button>
//                         </div>
//                     </div>
//                 </main>
//             </div>

//             {/* Modal Component rendered outside the main hero section */}
//             <Modal 
//                 showModal={showModal} 
//                 onClose={() => setShowModal(false)} 
//                 upcomingFeaturesData={upcomingFeaturesData} 
//             />
//         </>
//     );
// };

// export default HeroSection;



// Banner Four


// import React, { useState } from 'react';
// import { Download, Zap, Eye, Mic, ArrowUp, ArrowDown } from 'lucide-react';

// // Utility component for Feature Badges
// const FeatureBadge = ({ text, icon: Icon }) => (
//     // Updated colors to violet-based scheme (consistent with navbar button)
//     <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-violet-700 bg-violet-50 rounded-full border border-violet-300 shadow-sm">
//         <Icon className="w-4 h-4 mr-2 text-violet-600" />
//         {text}
//     </span>
// );

// // Utility component for Upcoming Feature Card
// const UpcomingFeatureCard = ({ title, description }) => (
//     <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
//         <h4 className="text-xl font-bold text-violet-600 mb-2">{title}</h4>
//         <p className="text-gray-600 text-base">{description}</p>
//     </div>
// );


// // Main Component
// const HeroSection = () => {
//     // State to manage the visibility of the upcoming features section
//     const [showUpcomingFeatures, setShowUpcomingFeatures] = useState(false);
    
//     // Feature data based on existing requirements
//     const features = [
//         { text: "Shopping Ability", icon: Zap },
//         { text: "Bengali Voice Output", icon: Mic },
//         { text: "Currency Detection", icon: Eye },
//     ];

//     // Upcoming app features data
//     const upcomingFeaturesData = [
//         { 
//             title: "Advanced Object Recognition", 
//             description: "Using the camera, many daily items (such as fruits, vegetables, medicines) can be accurately detected." 
//         },
//         { 
//             title: "Route Planning and Navigation", 
//             description: "Voice-based navigation that helps users reach their destination offline as well." 
//         },
//     ];

//     const toggleFeatures = () => {
//         setShowUpcomingFeatures(prev => !prev);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            
//             {/* Hero Content */}
//             <main className="text-center max-w-6xl mx-auto">
//                 <div className="max-w-4xl mx-auto space-y-8">
                    
//                     {/* Feature Badges above Headline */}
//                     <div className="flex flex-wrap justify-center gap-3 mb-6">
//                         {/* FeatureBadge component will now render in Violet colors */}
//                         {features.map((f, index) => (
//                             <FeatureBadge key={index} text={f.text} icon={f.icon} />
//                         ))}
//                     </div>

//                     {/* Headline */}
//                     <h2 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tighter">
//                         <span className="text-gray-900 block">A New Light of Freedom:</span>
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-700 block">Assistive Reader</span>
//                     </h2>

//                     {/* Subtitle / Problem Statement Summary */}
//                     <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
//                         Designed for visually impaired individuals, it automatically detects Bangladeshi notes and product prices using the camera, providing output in Bengali voice during local shopping.
//                     </p>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                        
//                         {/* Primary Button */}
//                         <button
//                             className="group flex items-center justify-center px-8 py-4 bg-violet-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105"
//                             onClick={() => console.log('Launching Web Prototype...')}
//                         >
//                             <Zap className="w-5 h-5 mr-2" />
//                             Use the App (Web Prototype)
//                         </button>

//                         {/* Secondary Button */}
//                         <button
//                             className="group flex items-center justify-center px-8 py-4 bg-white text-violet-600 text-lg font-semibold rounded-xl border border-violet-600 hover:border-violet-700 hover:text-violet-700 transition duration-300 transform hover:scale-105 shadow-md"
//                             onClick={toggleFeatures}
//                         >
//                             {showUpcomingFeatures ? 
//                                 <ArrowUp className="w-5 h-5 mr-2" /> : 
//                                 <Download className="w-5 h-5 mr-2" />
//                             }
//                             {showUpcomingFeatures ? 'Hide Upcoming Features' : 'View Upcoming Features'}
//                         </button>
//                     </div>

//                 </div>
//             </main>

//             {/* Upcoming Features Section (Conditional Render) */}
//             {showUpcomingFeatures && (
//                 <section className="mt-20 w-full max-w-6xl mx-auto p-6 sm:p-10 bg-white/90 rounded-2xl shadow-2xl transition-opacity duration-500 animate-fade-in">
//                     <h3 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
//                         Our Next Step: <span className="text-violet-600">A New Horizon with Offline App Features</span>
//                     </h3>

//                     {/* Motivational Message */}
//                     <div className="bg-violet-50 p-6 rounded-xl border-l-4 border-violet-500 mb-10">
//                         <p className="text-lg italic text-gray-700 leading-relaxed">
//                             "This app is not just a tool, it's the key to independence for visually impaired brothers and sisters. Offline capabilities mean life won’t stop, even where the internet doesn’t reach. We believe your potential is limitless, and this technology will turn that potential into reality. **Keep moving forward, we are with you!"
//                         </p>
//                     </div>

//                     {/* Feature Cards */}
//                     <div className="grid md:grid-cols-2 gap-6">
//                         {upcomingFeaturesData.map((feature, index) => (
//                             <UpcomingFeatureCard key={index} title={feature.title} description={feature.description} />
//                         ))}
//                     </div>

//                     {/* Simple Fade-in Animation for smooth transition */}
//                     <style jsx="true">{`
//                         @keyframes fadeIn {
//                             from { opacity: 0; transform: translateY(20px); }
//                             to { opacity: 1; transform: translateY(0); }
//                         }
//                         .animate-fade-in {
//                             animation: fadeIn 0.5s ease-out forwards;
//                         }
//                     `}</style>
//                 </section>
//             )}
//         </div>
//     );
// };

// export default HeroSection;