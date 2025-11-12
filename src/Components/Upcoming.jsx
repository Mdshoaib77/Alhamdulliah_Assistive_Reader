// import React from 'react'

// const Upcoming = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Upcoming


import React from 'react';
import { HardDrive, DollarSign, Tag, Mic, CheckCircle, Clock, Smartphone } from 'lucide-react';

// Required global variables for compliance, though not strictly used in this static page
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// Utility component for displaying a feature card
const FeatureCard = ({ title, description, icon: Icon, status, iconColor }) => {
    
    // Status color mapping for high contrast
    const statusClasses = status === 'Released'
        ? 'text-green-400 bg-green-900/50'
        : 'text-yellow-400 bg-yellow-900/50';
    
    const IconComponent = Icon || CheckCircle;

    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-700 hover:border-teal-500 transition duration-300">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                    <IconComponent className={`w-8 h-8 ${iconColor || 'text-teal-400'} mr-3`} />
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold uppercase rounded-full ${statusClasses}`}>
                    {status}
                </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

// Main Upcoming Component
const Upcoming = () => {

    const features = [
        {
            title: "Offline AI Currency Detection",
            description: "Locally installed deep learning model for real-time recognition of all Bangladeshi currency notes (Taka), ensuring functionality even without internet access.",
            icon: DollarSign,
            iconColor: 'text-green-500',
            status: "In Development",
        },
        {
            title: "Price Tag Reading & TTS",
            description: "Advanced OCR (Optical Character Recognition) runs locally to read product price tags and instantly converts the output to clear Bangla voice (Text-to-Speech).",
            icon: Tag,
            iconColor: 'text-blue-400',
            status: "In Development",
        },
        {
            title: "Simple Voice Navigation (Hands-free)",
            description: "Enables users to control the app (e.g., 'Scan Currency', 'What is this?') using simple Bangla voice commands, a crucial accessibility feature.",
            icon: Mic,
            iconColor: 'text-yellow-400',
            status: "In Development",
        },
        {
            title: "Local Database Caching",
            description: "Uses local storage capabilities to cache common product data and past scans, enhancing speed and reliability in local shops and canteens.",
            icon: HardDrive,
            iconColor: 'text-red-400',
            status: "Planned",
        },
        {
            title: "Simple, High-Contrast UI",
            description: "User interface designed with high contrast colors and large touch targets for maximum accessibility and ease of use by visually impaired persons.",
            icon: Smartphone,
            iconColor: 'text-indigo-400',
            status: "Released",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8 flex flex-col items-center">
            
            <header className="w-full max-w-3xl text-center py-6">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">
                    Assistive Reader
                </h1>
                <p className="text-xl font-semibold text-gray-300">
                    Offline Version: Upcoming Features Roadmap
                </p>
                <div className="mt-4 flex justify-center items-center text-sm text-yellow-300 bg-gray-800 p-3 rounded-lg shadow-inner">
                    <Clock className="w-4 h-4 mr-2" />
                    Core AI features are actively under development for **full offline functionality**.
                </div>
            </header>

            <main className="w-full max-w-3xl space-y-6 mt-6">
                
                {features.map((feature, index) => (
                    <FeatureCard 
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        status={feature.status}
                        iconColor={feature.iconColor}
                    />
                ))}

            </main>

            <footer className="mt-12 text-center text-gray-500 text-xs w-full max-w-3xl border-t border-gray-700 pt-4">
                <p>Project ID: {appId} | Designed for accessibility in Bangladesh.</p>
                <p className='mt-2'>We are building the future of independent shopping for the visually impaired community.</p>
            </footer>
        </div>
    );
};

export default Upcoming;