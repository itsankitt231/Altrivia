import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ExternalLink, Github, Star } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      className="flex-shrink-0 w-96 mx-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <div className={`p-6 ${isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 h-full`}>
        {/* Project Thumbnail */}
        <div className="flex justify-center mb-4">
          <motion.div
            className="w-full h-32 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Project Title */}
        <h3 className={`text-xl font-semibold mb-2 text-center ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>
          {project.title}
        </h3>

        {/* Project Description */}
        <p className={`text-sm mb-4 text-center ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className={`px-2 py-1 text-xs font-medium rounded-full ${isDarkMode ? 'bg-[#ef5a3c]/20 text-[#f59e0b]' : 'bg-orange-100 text-[#ef5a3c]'}`}
              whileHover={{ scale: 1.1, y: -1 }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Project Stats */}
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Star className={`w-4 h-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>
              {project.stars}
            </span>
          </div>
          <div className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {project.category}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-3">
          <motion.button
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isDarkMode ? 'bg-[#ef5a3c] text-white hover:bg-[#d14d35]' : 'bg-[#ef5a3c] text-white hover:bg-[#d14d35]'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Demo
          </motion.button>
          <motion.button
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isDarkMode ? 'border border-neutral-600 text-neutral-300 hover:bg-neutral-700' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
