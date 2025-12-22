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

  return (
    <motion.header 
      ref={ref}
      style={{ opacity, scale }}
      className={`${isDarkMode ? 'bg-background text-white' : 'bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900'} py-24 transition-colors duration-300`}
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className={`text-4xl md:text-6xl font-extrabold leading-tight ${isDarkMode ? 'text-text-main' : 'text-slate-900'}`}
        >
          Master <span className="text-[#EF5A3C]">Generative AI</span> Development
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className={`mt-6 text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-text-muted' : 'text-slate-600'}`}
        >
          Learn to build production-ready AI applications. From prompt engineering to autonomous agents — transform your career in 12 weeks.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8 flex justify-center gap-4"
        >
          <motion.a 
            href="#apply" 
            className="bg-[#EE593B] hover:bg-[#c43e25] px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-[#EE593B]/50 text-white text-lg"
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
            Start Learning Today
          </motion.a>
          
          <motion.a 
            href="#demo" 
            className={`px-8 py-4 rounded-lg border transition-colors text-lg ${isDarkMode ? 'border-white/20 hover:bg-white/10 text-white' : 'border-slate-300 hover:bg-slate-100 text-slate-900'}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.a>
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
