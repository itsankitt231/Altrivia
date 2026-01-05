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
      title: "SchemaMind",
      description: "Fine-tune a domain specific LLM using PEFT to convert natural-language queries into optimized, executable SQL across complex schemas, with production deployment.",
      tech: ["React", "OpenAI API", "Node.js"],
      stars: "2.1k",
      category: "Chatbot",
      thumbnail: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "APIWeaver",
      description: "Train and deploy an LLM that translates natural language into validated, multi-step API Workflows with schema awareness and execution feedback loops.",
      tech: ["Python", "TensorFlow", "Flask"],
      stars: "1.8k",
      category: "Food Tech",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "DataReasoner",
      description: "Fine-tune an LLM to generate, execute, and self-correct Pandas/SQL and analytical code over structured datasets with accuracy and latency optimization.",
      tech: ["TypeScript", "GitHub API", "AI/ML"],
      stars: "3.2k",
      category: "Dev Tools",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "CaluseLogic",
      description: "Build a fine-tuned legal intelligence LLM that performs clause-level reasoning, citation grounded answers, and versioned deployment for enterprise contracts.",
      tech: ["React Native", "Firebase", "Chart.js"],
      stars: "1.5k",
      category: "Finance",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "AgentOps",
      description: "Design and deploy a multi-agent LLM system with task planning, tool use, failure recovery, and full MLOps lifecycle management.",
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
        {/* <h2 className={`text-3xl font-bold mb-4 ${isVisible ? 'animate-scale-in' : ''} ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>
          CREATION
        </h2> */}
        <h2 className={`text-4xl md:text-5xl leading-tight mb-4 ${
            isDarkMode ? 'text-text-main' : 'text-slate-900'
          }`}>
            Creation from our <span className="text-[#EF5A3C]">AI Lab</span>
          </h2>
          
        <p className={`text-lg ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          We're always builders first!
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
