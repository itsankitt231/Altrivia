import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export default function TestimonialCard({ testimonial, index, gridArea }) {
  const { isDarkMode } = useTheme();

  const getPlatformLogo = (platform) => {
    const size = "w-6 h-6";
    switch (platform) {
      case 'twitter':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'github':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'reddit':
        return (
          <svg className={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.283-.822.52-1.741.526-2.806.018-2.206-1.912-2.937-1.912-2.937zm-7.75 2.927l2.062.005c.041.28.06.567.06.857 0 2.755-2.578 5.283-5.738 5.283-3.16 0-5.738-2.528-5.738-5.283 0-.29.019-.577.06-.857l2.063-.005c.041.28.06.567.06.857 0 1.806 1.77 3.268 3.938 3.268 2.168 0 3.938-1.462 3.938-3.268 0-.29.019-.577.06-.857zm-1.68 8.018c-.296.158-.635.312-1.047.312-.41 0-.75-.154-1.046-.312-1.735-.93-3.04-2.617-3.27-4.707-.046-.403.24-.791.646-.791.41 0 .75.388.697.79.23 1.63 1.135 2.94 2.624 3.683.296.158.635.312 1.046.312.41 0 .75-.154 1.046-.312 1.49-.743 2.394-2.053 2.624-3.683-.054-.402.287-.79.697-.79.406 0 .692.388.646.79-.23 2.09-1.535 3.777-3.27 4.708zm4.49-6.99c-.41 0-.75-.154-1.046-.312-1.49-.743-2.394-2.053-2.624-3.683.054-.402-.287-.79-.697-.79-.406 0-.692.388-.646.79.23 2.09 1.535 3.777 3.27 4.708.296.158.635.312 1.046.312.41 0 .75-.154 1.046-.312 1.735-.93 3.04-2.617 3.27-4.707-.046-.403-.24-.791-.646-.791-.41 0-.75.388-.697.79-.23 1.63-1.135 2.94-2.624 3.683-.296.158-.635.312-1.047.312z"/>
          </svg>
        );
      default:
        return (
          <svg className={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      className={`p-6 ${isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
      style={{ gridArea }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Platform Icon */}
      <div className="flex justify-end mb-4">
        <div className={`p-2 rounded-full ${isDarkMode ? 'bg-neutral-700' : 'bg-gray-100'}`}>
          {getPlatformLogo(testimonial.platform)}
        </div>
      </div>

      {/* Quote */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-[#ef5a3c] text-4xl font-serif mb-4 leading-none">"</div>
        <blockquote className={`text-lg ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'} mb-4 leading-relaxed font-medium`}>
          {testimonial.review}
        </blockquote>
        <div className="text-[#ef5a3c] text-4xl font-serif leading-none rotate-180 self-end -mt-2">"</div>

        {/* Author Info */}
        <div className="mt-auto pt-4">
          <div className="flex items-center space-x-3">
            <motion.img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#ef5a3c]/30"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <div>
              <p className={`${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>
                {testimonial.author}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
