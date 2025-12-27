import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ProjectCard from "./ProjectCard";
import { MessageSquare, ChefHat, Code, DollarSign, Languages } from "lucide-react";

export default function Creation() {
  const { isDarkMode } = useTheme();
  const [ref, isVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      title: "AI Chat Assistant",
      description: "Intelligent conversational AI that learns from your preferences and provides personalized responses.",
      tech: ["React", "OpenAI API", "Node.js"],
      stars: "2.1k",
      category: "Chatbot",
      thumbnail: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Smart Recipe Generator",
      description: "AI-powered recipe generator that creates meals based on your ingredients and dietary preferences.",
      tech: ["Python", "TensorFlow", "Flask"],
      stars: "1.8k",
      category: "Food Tech",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Code Review Bot",
      description: "Automated code review assistant that catches bugs, suggests improvements, and enforces best practices.",
      tech: ["TypeScript", "GitHub API", "AI/ML"],
      stars: "3.2k",
      category: "Dev Tools",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Personal Finance Tracker",
      description: "Smart financial advisor that analyzes spending patterns and provides personalized savings recommendations.",
      tech: ["React Native", "Firebase", "Chart.js"],
      stars: "1.5k",
      category: "Finance",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Language Learning Companion",
      description: "Adaptive language learning platform that personalizes lessons based on your learning style and progress.",
      tech: ["Vue.js", "NLP", "MongoDB"],
      stars: "2.7k",
      category: "Education",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section
      id="creation"
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-16 transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className={`text-3xl font-bold mb-4 ${isVisible ? 'animate-scale-in' : ''} ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>
          CREATION
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Innovative AI projects built by our community
        </p>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center"
          animate={{
            x: [0, -100 * projects.length]
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
          {/* First set of projects */}
          {projects.map((project, index) => (
            <ProjectCard
              key={`first-${index}`}
              project={project}
              index={index}
            />
          ))}

          {/* Duplicate for seamless loop */}
          {projects.map((project, index) => (
            <ProjectCard
              key={`second-${index}`}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className={`mb-6 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Ready to build your own AI project?
        </p>
        <motion.button
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${isDarkMode ? 'bg-[#ef5a3c] text-white hover:bg-[#d14d35]' : 'bg-[#ef5a3c] text-white hover:bg-[#d14d35]'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Creating
        </motion.button>
      </motion.div>
    </section>
  );
}
