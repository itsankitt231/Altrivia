import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Import logo images
import netflixLogo from "../logos/icons8-netflix.svg";
import googleLogo from "../logos/icons8-google.svg";
import amazonLogo from "../logos/icons8-amazon.svg";
import appleLogo from "../logos/icons8-apple.svg";

const logos = [
  { name: "Netflix", src: netflixLogo },
  { name: "Google", src: googleLogo },
  { name: "Amazon", src: amazonLogo },
  { name: "Apple", src: appleLogo },
  { name: "Netflix", src: netflixLogo },
  { name: "Google", src: googleLogo }
];

const InfiniteLogoScroll = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={containerRef}
      className="w-full py-16 bg-slate-50 dark:bg-slate-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          Our Alumni Work At
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center gap-8"
          animate={{
            x: [0, -100 * logos.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, i) => (
            <motion.div
              key={`first-${i}`}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center cursor-pointer p-4 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -2, 2, 0],
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              >
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}

          {/* Duplicate for seamless loop */}
          {logos.map((logo, i) => (
            <motion.div
              key={`second-${i}`}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center cursor-pointer p-4 relative overflow-hidden"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -2, 2, 0],
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              >
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfiniteLogoScroll;
