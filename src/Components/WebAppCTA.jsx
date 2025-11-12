import React from 'react';
import { motion } from 'framer-motion';

// Replace this with your actual web app URL
const WEB_APP_URL = ""; 

const WebAppCTA = () => {
    // Framer Motion Variants for the main container
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8,
                delay: 0.1 
            } 
        }
    };

    // Framer Motion Variants for the button
    const buttonVariants = {
        rest: { scale: 1, boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)' },
        hover: { 
            scale: 1.05, 
            boxShadow: '0 12px 25px rgba(120, 86, 255, 0.4)' 
        },
        tap: { scale: 0.95 }
    };

    return (
        // Gradient Background similar to the image
        <div className="py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(249,250,251,1) 0%, rgba(240,240,255,1) 100%)' }}>
            <motion.div
                className="max-w-4xl mx-auto text-center px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                    Try Assistive Reader Web App
                </h2>

                {/* Subtext */}
                <p className="mt-4 text-lg sm:text-xl text-gray-600 mb-10 mx-auto max-w-2xl">
                    Experience Assistive Reader directly in your browser—no installation required. Access powerful currency and price reading features from any device, anywhere, anytime.
                </p>

                {/* Button (Link) */}
                <motion.a
                    href={WEB_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold rounded-lg text-white transition duration-300 ease-in-out cursor-pointer"
                    style={{ background: 'linear-gradient(90deg, #5A47C1 0%, #7E56FF 100%)' }} // Custom gradient for the button
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                >
                    Visit Web App
                </motion.a>
            </motion.div>
        </div>
    );
};

export default WebAppCTA;