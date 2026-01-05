import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import replicateLogo from "../assets/Replicate.png";
import nvidiaLogo from "../assets/nvidia.svg";

const tools = [
  { name: "Nvidia", src: nvidiaLogo },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "LangChain", src: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
  { name: "Replicate", src:replicateLogo },
  { name: "OpenAI", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Google Colab", src: "https://colab.research.google.com/img/colab_favicon_256px.png" }
];
const ToolsLogoScroll = () => {
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
        <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
          Tools changes every <span className="text-[#EF5A3C]">Week</span>
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          But Do You?
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center gap-12"
          animate={{
            x: [0, -120 * tools.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* First set of logos */}
          {tools.map((tool, i) => (
            <motion.div
              key={`first-${i}`}
              className="flex-shrink-0 w-24 h-24 flex items-center justify-center cursor-pointer p-4 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ 
                scale: 1.15,
                rotate: [0, -2, 2, 0],
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
                  src={tool.src} 
                  alt={`${tool.name} logo`}
                  className="w-16 h-16 object-contain dark:invert-0"
                  style={{ filter: tool.name === "OpenAI" || tool.name === "GitHub" ? "invert(0.5)" : "none" }}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Duplicate for seamless loop */}
          {tools.map((tool, i) => (
            <motion.div
              key={`second-${i}`}
              className="flex-shrink-0 w-24 h-24 flex items-center justify-center cursor-pointer p-4 relative overflow-hidden"
              whileHover={{ 
                scale: 1.15,
                rotate: [0, -2, 2, 0],
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
                  src={tool.src} 
                  alt={`${tool.name} logo`}
                  className="w-16 h-16 object-contain"
                  style={{ filter: tool.name === "OpenAI" || tool.name === "GitHub" ? "invert(0.5)" : "none" }}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Third set for extra seamlessness */}
          {tools.map((tool, i) => (
            <motion.div
              key={`third-${i}`}
              className="flex-shrink-0 w-24 h-24 flex items-center justify-center cursor-pointer p-4 relative overflow-hidden"
              whileHover={{ 
                scale: 1.15,
                rotate: [0, -2, 2, 0],
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
                  src={tool.src} 
                  alt={`${tool.name} logo`}
                  className="w-16 h-16 object-contain"
                  style={{ filter: tool.name === "OpenAI" || tool.name === "GitHub" ? "invert(0.5)" : "none" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ToolsLogoScroll;
