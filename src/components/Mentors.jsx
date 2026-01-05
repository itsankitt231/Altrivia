import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import akshitImage from "../assets/Akshit.png";


export default function Mentors() {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const mentors = [
    {
      name: "Aishit Dharwal",
      image: akshitImage,
      description: "Data Scientist "
    },
    {
      name: "Navneet Kamboj",
      image: "https://dme2wmiz2suov.cloudfront.net/websitebuilder/6303/utils/4622840-Final-1.jpeg",
      description: "AI Engineering, Google."
    },
    {
      name: "Apurv Singh Gautam",
      image: "https://dme2wmiz2suov.cloudfront.net/websitebuilder/6303/utils/4622802-Retry-2.jpeg",
      description: "Sr.Threat Analyst, Cyble."
    },
    {
      name: "Angad Dubey",
      image: "https://dme2wmiz2suov.cloudfront.net/websitebuilder/6303/utils/4601881-Angad-Dubey-Microsoft.jpeg",
      description: "SDE, Microsoft."
    }
  ];

  return (
    <motion.section
      id="mentors"
      ref={containerRef}
      className="max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-4xl font-semibold mb-4 ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>
          Meet Your <span className="text-[#EF5A3C]">Mentors</span>
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Join the new era of AI Applied Engineers. Learn from the elite, break the mould.
        </p>
      </motion.div>

      {/* Mentors Grid - Horizontal 4 columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Big Image */}
            <motion.div
              className="mb-4 overflow-hidden rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-64 object-cover"
              />
            </motion.div>
            
            {/* Name with Arrow */}
            <div className="flex items-center justify-center gap-1 mb-2">
              <ChevronRight className="w-5 h-5 text-[#EF5A3C]" strokeWidth={2.5} />
              <h3 className="text-lg font-semibold text-[#EF5A3C]">
                {mentor.name}
              </h3>
            </div>
            
            {/* Description */}
            <p className={`text-sm px-2 ${isDarkMode ? 'text-neutral-400' : 'text-gray-600'}`}>
              {mentor.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
