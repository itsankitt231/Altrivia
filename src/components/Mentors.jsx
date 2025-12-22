import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Star, Award, Users, Github, Linkedin } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Mentors() {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.7
      }
    }
  };

  const mentors = [
    {
      name: "Sarah Chen",
      role: "Senior Software Engineer",
      company: "Google",
      experience: "8+ years",
      expertise: ["React", "TypeScript", "System Design"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      students: 250,
      bio: "Former Google engineer with expertise in scalable web applications and team leadership."
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      company: "Meta",
      experience: "6+ years",
      expertise: ["Node.js", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      students: 180,
      bio: "Meta alumnus specializing in modern web technologies and cloud infrastructure."
    },
    {
      name: "Dr. Priya Sharma",
      role: "AI/ML Engineer",
      company: "OpenAI",
      experience: "7+ years",
      expertise: ["Python", "TensorFlow", "AI Ethics"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      students: 320,
      bio: "AI researcher and engineer with PhD in Machine Learning from Stanford."
    },
    {
      name: "Alex Thompson",
      role: "Engineering Manager",
      company: "Netflix",
      experience: "10+ years",
      expertise: ["Leadership", "Architecture", "Mentorship"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      students: 400,
      bio: "Engineering leader at Netflix, passionate about developer growth and career development."
    }
  ];

  return (
    <motion.section
      id="mentors"
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
          Meet Your Mentors
        </motion.h2>
        <motion.p
          className={`text-lg ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Learn from industry experts with proven track records at top tech companies
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        style={{ y, opacity }}
      >
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              z: 50,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            <div className={`p-6 ${isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300`}>
              <div className="flex items-start space-x-4">
                <motion.img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary/30 dark:border-accent/50"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div className="mb-2 sm:mb-0">
                      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>{mentor.name}</h3>
                      <p className="text-[#EE593B] font-medium">{mentor.role}</p>
                      <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>{mentor.company}</p>
                    </div>
                    <motion.div
                      className="flex items-center space-x-1 self-start sm:self-auto"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>{mentor.rating}</span>
                    </motion.div>
                  </div>

                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>{mentor.bio}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 sm:gap-0">
                    <div className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {mentor.experience}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {mentor.students} students
                      </div>
                    </div>
                    <div className="flex space-x-2 self-start sm:self-auto">
                      <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                        <Github className={`w-5 h-5 cursor-pointer ${isDarkMode ? 'text-neutral-500 hover:text-neutral-300' : 'text-neutral-400 hover:text-neutral-600'}`} />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
                        <Linkedin className={`w-5 h-5 cursor-pointer ${isDarkMode ? 'text-neutral-500 hover:text-neutral-300' : 'text-neutral-400 hover:text-neutral-600'}`} />
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${isDarkMode ? 'bg-[#EE593B]/30 text-[#F59E0B]' : 'bg-orange-100 text-[#EE593B]'}`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        variants={itemVariants}
      >
        <motion.p
          className={`mb-4 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          All mentors are carefully selected based on their industry experience and teaching ability
        </motion.p>
        <motion.div
          className={`flex justify-center space-x-8 text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {[
            { icon: Award, text: "100+ combined years experience", delay: 0 },
            { icon: Users, text: "1,150+ students mentored", delay: 0.1 },
            { icon: Star, text: "4.9 average rating", delay: 0.2 }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.4 + stat.delay, duration: 0.5 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: stat.delay
                }}
              >
                <stat.icon className="w-4 h-4 mr-2 text-[#EE593B]" />
              </motion.div>
              {stat.text}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
