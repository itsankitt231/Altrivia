import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

export default function WhatWillYouMaster() {
  const { isDarkMode } = useTheme();
  const [ref, isVisible] = useScrollAnimation(0.1);

  const tools = [
    { 
      name: "GitHub", 
      description: "Version control & collaboration",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "from-purple-500 to-purple-700"
    },
    { 
      name: "Python", 
      description: "Core programming language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-blue-500 to-blue-700"
    },
    { 
      name: "NumPy", 
      description: "Numerical computing library",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      color: "from-indigo-500 to-indigo-700"
    },
    { 
      name: "Pandas", 
      description: "Data manipulation & analysis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      color: "from-green-500 to-green-700"
    },
    { 
      name: "XGBoost", 
      description: "Gradient boosting framework",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xgboost/xgboost-original.svg",
      color: "from-orange-500 to-orange-700"
    },
    { 
      name: "TensorFlow", 
      description: "Deep learning framework",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      color: "from-red-500 to-red-700"
    },
    { 
      name: "NLP", 
      description: "Natural Language Processing",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/naturallanguageprocessing/naturallanguageprocessing-original.svg",
      color: "from-teal-500 to-teal-700"
    },
    { 
      name: "Hugging Face", 
      description: "Transformers & pre-trained models",
      icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      color: "from-yellow-500 to-yellow-700"
    },
    { 
      name: "Vector Database", 
      description: "Similarity search & retrieval",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "from-cyan-500 to-cyan-700"
    },
    { 
      name: "RAG Pipeline", 
      description: "Retrieval-Augmented Generation",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "from-pink-500 to-pink-700"
    },
    { 
      name: "Docker", 
      description: "Containerization platform",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "from-blue-600 to-blue-800"
    },
    { 
      name: "Flask", 
      description: "Lightweight web framework",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      color: "from-gray-500 to-gray-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const toolVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <section
      id="what-will-you-master"
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-16 transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`text-center mb-12 ${isVisible ? 'animate-scale-in' : ''}`}>
        <h2 className={`text-4xl md:text-5xl leading-tight mb-6 ${
          isDarkMode ? 'text-text-main' : 'text-slate-900'
        }`}>
          What will you <span className="text-[#EF5A3C]">master</span>?
        </h2>
        <p className={`text-lg mt-3 ${
          isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          We don't just use tools — we know why, when, & how to architect AI systems
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            variants={toolVariants}
            whileHover={{ 
              scale: 1.1,
              rotateY: 10,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
            style={{
              perspective: "1000px"
            }}
          >
            <div className={`
              w-20 h-20 sm:w-24 sm:h-24 rounded-full 
              bg-gradient-to-br ${tool.color}
              shadow-lg hover:shadow-xl
              flex items-center justify-center
              transition-all duration-300
              ${isDarkMode ? 'bg-opacity-80 hover:bg-opacity-100' : 'bg-opacity-90 hover:bg-opacity-100'}
              backdrop-blur-sm
              border border-white/20
              relative overflow-hidden
            `}>
              {/* Background shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Tool icon */}
              <motion.img 
                src={tool.icon}
                alt={tool.name}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain relative z-10"
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            {/* Tooltip on hover */}
            <motion.div
              className={`
                absolute -top-12 left-1/2 transform -translate-x-1/2
                px-3 py-2 rounded-lg text-xs font-medium
                bg-black/90 text-white
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                pointer-events-none
                whitespace-nowrap z-20
              `}
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
            >
              {tool.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className={`text-center mt-12 ${isVisible ? 'animate-delay-600 animate-scale-in' : ''}`}
      >
        <div className={`inline-flex items-center justify-center px-6 py-3 rounded-full ${
          isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'
        } border shadow-sm`}>
          <motion.span 
            className="text-[#EF5A3C] mr-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            ⚡
          </motion.span>
          <span className={`text-sm font-medium ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            Master the tools that power the future of AI
          </span>
        </div>
      </motion.div>
    </section>
  );
}
