import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckCircle, ArrowRight, Code, Database, Globe, Zap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Curriculum() {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const timelineVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const curriculumItems = [
    {
      week: "Week 1-2",
      title: "Programming Foundations",
      description: "Master JavaScript, React, and modern development tools",
      icon: Code,
      skills: ["JavaScript ES6+", "React Fundamentals", "Git & GitHub", "Terminal Commands"]
    },
    {
      week: "Week 3-5",
      title: "Backend Development",
      description: "Build robust APIs and work with databases",
      icon: Database,
      skills: ["Node.js & Express", "RESTful APIs", "MongoDB/PostgreSQL", "Authentication & Security"]
    },
    {
      week: "Week 6-8",
      title: "Full-Stack Integration",
      description: "Connect frontend and backend into complete applications",
      icon: Globe,
      skills: ["Full-Stack Projects", "Deployment", "Testing", "Performance Optimization"]
    },
    {
      week: "Week 9-12",
      title: "Advanced Topics & Projects",
      description: "Tackle complex challenges and build portfolio projects",
      icon: Zap,
      skills: ["Advanced React", "AI/ML Integration", "Real-world Projects", "Career Preparation"]
    }
  ];

  return (
    <motion.section
      id="curriculum"
      ref={containerRef}
      className="max-w-6xl mx-auto px-6 py-16"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="text-center mb-16"
        variants={itemVariants}
      >
        <motion.h2
          className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          12-Week Curriculum
        </motion.h2>
        <motion.p
          className={`text-lg ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Structured learning path from basics to advanced full-stack development
        </motion.p>
      </motion.div>

      <div className="relative" style={{ y, opacity }}>
        {/* Timeline line */}
        <motion.div
          className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDarkMode ? 'bg-[#1e3a8a]' : 'bg-[#bfdbfe]'} hidden md:block transition-colors duration-300`}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ originY: 0 }}
        ></motion.div>

        <div className="space-y-8">
          {curriculumItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-start"
              variants={timelineVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Timeline dot */}
              <motion.div
                className={`flex-shrink-0 w-16 h-16 ${isDarkMode ? 'bg-neutral-800' : 'bg-white'} border-4 border-[#F97316] rounded-full flex items-center justify-center shadow-lg z-10 transition-colors duration-300`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <item.icon className="w-6 h-6 text-[#F97316]" />
                </motion.div>
              </motion.div>

              {/* Content card */}
              <motion.div
                className={`ml-6 flex-1 ${isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6 hover:shadow-lg transition-shadow duration-300`}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  z: 20,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>{item.title}</h3>
                    <p className="text-[#F97316] font-medium">{item.week}</p>
                  </div>
                  {index < curriculumItems.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="w-6 h-6 text-[#93c5fd] hidden md:block" />
                    </motion.div>
                  )}
                </div>

                <p className={`mb-4 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>{item.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className={`flex items-center text-sm ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.8 + index * 0.2 + skillIndex * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      </motion.div>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
