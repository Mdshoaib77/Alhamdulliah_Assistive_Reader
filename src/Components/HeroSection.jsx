// import React from 'react';
// import { useLanguage } from '../Context/LanguageContext'; // Import useLanguage hook
// import { motion } from 'framer-motion'; // Import Framer Motion for animations

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
//     <div className="min-h-screen flex items-center justify-center bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl text-center">
        
//         {/* Hero Heading with Framer Motion */}
//         <motion.h1
//           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
//           style={{ color: '#284180' }}
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {t.heading}
//         </motion.h1>

//         {/* Hero Subheading with Framer Motion */}
//         <motion.p
//           className="mt-3 text-base sm:text-lg text-gray-600 mb-10 mx-auto max-w-2xl"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {t.subheading}
//         </motion.p>

//         {/* Buttons with Framer Motion */}
//         <motion.div
//           className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Use App Button */}
//           <button
//             className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-md text-white transition duration-300 ease-in-out"
//             style={{ backgroundColor: '#20A84D' }}
//           >
//             {t.useAppButton}
//           </button>

//           {/* View Features Button */}
//           <button
//             className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
//             style={{ borderColor: '#20A84D', color: '#20A84D' }}
//           >
//             {t.viewFeaturesButton}
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


// import React from 'react';
// import { Download, Zap, Eye, Mic } from 'lucide-react';

// // Required global variables for compliance
// const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// // Utility component for the Navigation Bar
// const Navbar = () => {
//     return (
//         <nav className="w-full max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center">
//                 {/* Logo / Project Name */}
//                 <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
//                     Assistive Reader
//                 </h1>
                
//                 {/* Navigation Links - Conceptual */}
//                 <div className="hidden sm:flex space-x-6 text-gray-300">
//                     <a href="#" className="hover:text-teal-400 transition duration-150">হোম</a>
//                     <a href="#" className="hover:text-teal-400 transition duration-150">বৈশিষ্ট্য</a>
//                     <a href="#" className="hover:text-teal-400 transition duration-150">আমাদের লক্ষ্য</a>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// // Utility component for Feature Badges
// const FeatureBadge = ({ text, icon: Icon }) => (
//     <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-teal-300 bg-gray-800 rounded-full border border-teal-600/50 shadow-md">
//         <Icon className="w-4 h-4 mr-2 text-teal-400" />
//         {text}
//     </span>
// );


// // Main Component
// const HeroSection = () => {
    
//     // Feature data based on your requirements
//     const features = [
//         { text: "অফলাইন সক্ষমতা", icon: Zap },
//         { text: "বাংলা ভয়েস আউটপুট", icon: Mic },
//         { text: "মুদ্রা সনাক্তকরণ", icon: Eye },
//     ];

//     return (
//         <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col">
            
//             <Navbar />

//             {/* Hero Content */}
//             <main className="flex-grow flex items-center justify-center text-center p-4 sm:p-8">
//                 <div className="max-w-4xl space-y-8">
                    
//                     {/* Feature Badges above Headline */}
//                     <div className="flex flex-wrap justify-center gap-3 mb-6">
//                         {features.map((f, index) => (
//                             <FeatureBadge key={index} text={f.text} icon={f.icon} />
//                         ))}
//                     </div>

//                     {/* Headline */}
//                     <h2 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tighter">
//                         <span className="text-gray-100 block">স্বাধীনতার নতুন আলো:</span>
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 block">Assistive Reader</span>
//                     </h2>

//                     {/* Subtitle / Problem Statement Summary */}
//                     <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mt-4">
//                         দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য তৈরি, যা স্থানীয় বাজারে কেনাকাটার সময় ক্যামেরা ব্যবহার করে বাংলাদেশি নোট ও পণ্যের মূল্য স্বয়ংক্রিয়ভাবে বাংলা ভয়েসে শনাক্ত করে।
//                     </p>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                        
//                         {/* Primary Button */}
//                         <button
//                             className="group flex items-center justify-center px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-teal-500 transition duration-300 transform hover:scale-105"
//                             onClick={() => console.log('Launching Web Prototype...')}
//                         >
//                             <Zap className="w-5 h-5 mr-2" />
//                             Use the App (Web Prototype)
//                         </button>

//                         {/* Secondary Button */}
//                         <button
//                             className="group flex items-center justify-center px-8 py-4 bg-gray-800 text-teal-400 text-lg font-semibold rounded-xl border border-teal-600 hover:border-teal-400 hover:text-white transition duration-300 transform hover:scale-105"
//                             onClick={() => console.log('Viewing Upcoming Features...')}
//                         >
//                             <Download className="w-5 h-5 mr-2" />
//                             View Upcoming Features
//                         </button>
//                     </div>

//                 </div>
//             </main>

//             {/* Footer / App Info */}
//             <footer className="w-full text-center py-3 text-xs text-gray-600 border-t border-gray-800">
//                 <p>App ID: {appId} | Designed for Accessibility | Version 1.0</p>
//             </footer>
//         </div>
//     );
// };

// export default HeroSection;

// import React from 'react';
// import { Download, Zap, Eye, Mic } from 'lucide-react';

// // Utility component for Feature Badges
// const FeatureBadge = ({ text, icon: Icon }) => (
//     // Changed colors for light background visibility
//     <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-teal-700 bg-teal-50 rounded-full border border-teal-300 shadow-sm">
//         <Icon className="w-4 h-4 mr-2 text-teal-600" />
//         {text}
//     </span>
// );


// // Main Component
// const HeroSection = () => {
    
//     // Feature data based on your requirements
//     const features = [
//         { text: "অফলাইন সক্ষমতা", icon: Zap },
//         { text: "বাংলা ভয়েস আউটপুট", icon: Mic },
//         { text: "মুদ্রা সনাক্তকরণ", icon: Eye },
//     ];

//     return (
//         // Reverted to the light background theme and removed flex-col setup
//         <div className="min-h-screen flex items-center justify-center bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            
//             {/* Hero Content */}
//             <main className="text-center">
//                 <div className="max-w-4xl space-y-8">
                    
//                     {/* Feature Badges above Headline */}
//                     <div className="flex flex-wrap justify-center gap-3 mb-6">
//                         {features.map((f, index) => (
//                             <FeatureBadge key={index} text={f.text} icon={f.icon} />
//                         ))}
//                     </div>

//                     {/* Headline */}
//                     <h2 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tighter">
//                         {/* Changed text color for better contrast on light background */}
//                         <span className="text-gray-900 block">স্বাধীনতার নতুন আলো:</span>
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 block">Assistive Reader</span>
//                     </h2>

//                     {/* Subtitle / Problem Statement Summary */}
//                     <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
//                         দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য তৈরি, যা স্থানীয় বাজারে কেনাকাটার সময় ক্যামেরা ব্যবহার করে বাংলাদেশি নোট ও পণ্যের মূল্য স্বয়ংক্রিয়ভাবে বাংলা ভয়েসে শনাক্ত করে।
//                     </p>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                        
//                         {/* Primary Button */}
//                         <button
//                             className="group flex items-center justify-center px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
//                             onClick={() => console.log('Launching Web Prototype...')}
//                         >
//                             <Zap className="w-5 h-5 mr-2" />
//                             Use the App (Web Prototype)
//                         </button>

//                         {/* Secondary Button */}
//                         <button
//                             className="group flex items-center justify-center px-8 py-4 bg-white text-teal-600 text-lg font-semibold rounded-xl border border-teal-600 hover:border-teal-700 hover:text-teal-700 transition duration-300 transform hover:scale-105 shadow-md"
//                             onClick={() => console.log('Viewing Upcoming Features...')}
//                         >
//                             <Download className="w-5 h-5 mr-2" />
//                             View Upcoming Features
//                         </button>
//                     </div>

//                 </div>
//             </main>
//         </div>
//     );
// };

// export default HeroSection;



import React, { useState } from 'react';
import { Download, Zap, Eye, Mic, ArrowUp, ArrowDown } from 'lucide-react';

// Utility component for Feature Badges
const FeatureBadge = ({ text, icon: Icon }) => (
    <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-teal-700 bg-teal-50 rounded-full border border-teal-300 shadow-sm">
        <Icon className="w-4 h-4 mr-2 text-teal-600" />
        {text}
    </span>
);

// Utility component for Upcoming Feature Card
const UpcomingFeatureCard = ({ title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
        <h4 className="text-xl font-bold text-teal-600 mb-2">{title}</h4>
        <p className="text-gray-600 text-base">{description}</p>
    </div>
);


// Main Component
const HeroSection = () => {
    // State to manage the visibility of the upcoming features section
    const [showUpcomingFeatures, setShowUpcomingFeatures] = useState(false);
    
    // Feature data based on existing requirements
    const features = [
        { text: "অফলাইন সক্ষমতা", icon: Zap },
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 block">Assistive Reader</span>
                    </h2>

                    {/* Subtitle / Problem Statement Summary */}
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                        দৃষ্টি প্রতিবন্ধী ব্যক্তিদের জন্য তৈরি, যা স্থানীয় বাজারে কেনাকাটার সময় ক্যামেরা ব্যবহার করে বাংলাদেশি নোট ও পণ্যের মূল্য স্বয়ংক্রিয়ভাবে বাংলা ভয়েসে শনাক্ত করে।
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                        
                        {/* Primary Button */}
                        <button
                            className="group flex items-center justify-center px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
                            onClick={() => console.log('Launching Web Prototype...')}
                        >
                            <Zap className="w-5 h-5 mr-2" />
                            Use the App (Web Prototype)
                        </button>

                        {/* Secondary Button - Now toggles visibility */}
                        <button
                            className="group flex items-center justify-center px-8 py-4 bg-white text-teal-600 text-lg font-semibold rounded-xl border border-teal-600 hover:border-teal-700 hover:text-teal-700 transition duration-300 transform hover:scale-105 shadow-md"
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
                        আমাদের পরবর্তী ধাপ: <span className="text-teal-600">অফলাইন অ্যাপের মাধ্যমে নতুন দিগন্ত</span>
                    </h3>

                    {/* Motivational Message */}
                    <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500 mb-10">
                        <p className="text-lg italic text-gray-700 leading-relaxed">
                            "এই অ্যাপটি শুধু একটি সরঞ্জাম নয়, এটি দৃষ্টি প্রতিবন্ধী ভাই-বোনদের জন্য **স্বাধীনতার চাবিকাঠি**। অফলাইন সক্ষমতা মানে যেখানে ইন্টারনেট নেই, সেখানেও জীবন থেমে থাকবে না। আমরা বিশ্বাস করি, আপনার সম্ভাবনা সীমাহীন, আর এই প্রযুক্তি সেই সম্ভাবনাকে বাস্তবে রূপ দেবে। **এগিয়ে চলুন, আমরা আছি আপনার পাশে!**"
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
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