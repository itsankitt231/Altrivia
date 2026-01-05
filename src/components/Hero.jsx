import { useTheme } from "../contexts/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  // Wing animation variants
  const wingVariants = {
    left: {
      initial: { x: -100, rotate: -30, opacity: 0 },
      animate: { 
        x: 0, 
        rotate: 0, 
        opacity: 0.15,
        transition: { duration: 1.2, ease: "easeOut" }
      }
    },
    right: {
      initial: { x: 100, rotate: 30, opacity: 0 },
      animate: { 
        x: 0, 
        rotate: 0, 
        opacity: 0.15,
        transition: { duration: 1.2, ease: "easeOut" }
      }
    }
  };

  return (
    <motion.header 
      ref={ref}
      style={{ opacity, scale }}
      className={`${isDarkMode ? 'bg-background text-white' : 'bg-white text-slate-900'} py-24 transition-colors duration-300 relative overflow-hidden`}
    >
      {/* Left Wing */}
      <motion.img
        src="https://framerusercontent.com/images/6rBIbt5AbovbqugfZz2tokSLCc.svg"
        alt=""
        className="absolute left-0 inset-y-0 h-[150%] w-auto object-contain pointer-events-none z-0 my-auto"
        initial={wingVariants.left.initial}
        animate={wingVariants.left.animate}
      />
      
      {/* Right Wing */}
      <motion.img
        src="https://framerusercontent.com/images/eijfAuzyDLDj0BvXsONvqqncns.svg"
        alt=""
        className="absolute right-0 inset-y-0 h-[150%] w-auto object-contain pointer-events-none z-0 my-auto"
        initial={wingVariants.right.initial}
        animate={wingVariants.right.animate}
      />

      <motion.div 
        className="max-w-3xl mx-auto text-center px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className={`text-2xl text-semibold md:text-6xl text-[#242424] leading-tight ${isDarkMode ? 'text-text-main' : 'text-slate-900'}`}
        >
          Become a Super Applied<br /><span className="text-[#EF5A3C]">AI Developer</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className={`mt-6 text-l max-w-2xl mx-auto ${isDarkMode ? 'text-text-muted' : 'text-slate-600'}`}
        >
          From Zero to Pro in 6 months.<br />NOT another AI course.
        </motion.p>
        <motion.p 
          variants={itemVariants}
          className={`mt-4 text-xs max-w-2xl mx-auto ${isDarkMode ? 'text-text-muted' : 'text-slate-600'}`}
        >
          Cohort 4 kicks off in <b>Q1 2026</b>
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8 flex justify-center gap-4"
        >
          <motion.a 
            href="#apply" 
            className="bg-[#EE593B] hover:bg-[#c43e25] px-16 py-2 rounded-lg transition-all shadow-lg shadow-[#EE593B]/50 text-white text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            Join Waitlist
          </motion.a>
          
          {/* <motion.a 
            href="#demo" 
            className={`px-8 py-4 rounded-lg border transition-colors text-lg ${isDarkMode ? 'border-white/20 hover:bg-white/10 text-white' : 'border-slate-300 hover:bg-slate-100 text-slate-900'}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.a> */}
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          variants={itemVariants}
          className={`mt-12 flex justify-center items-center gap-8 text-sm flex-wrap ${isDarkMode ? 'text-text-muted' : 'text-slate-600'}`}
        >
          {[
            { label: "12-week program", delay: 0 },
            { label: "Portfolio projects", delay: 0.1 },
            { label: "Career support", delay: 0.2 }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + item.delay, duration: 0.5 }}
            >
              <motion.span 
                className="text-success"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: item.delay 
                }}
              >
                ●
              </motion.span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
