import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Feature from "./Feature";

export default function Features() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const features = [
    { 
      title: "Mentorship", 
      description: "One-on-one time with senior engineers and weekly AMAs.",
      delay: 0
    },
    { 
      title: "Project-driven", 
      description: "Build production-like projects to show on your portfolio.",
      delay: 0.1
    },
    { 
      title: "Hiring support", 
      description: "Interview prep, resume review, and alumni network introductions.",
      delay: 0.2
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      className="max-w-6xl mx-auto px-6 py-16"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{ y }}
      >
        {features.map((feature, index) => (
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
            <Feature title={feature.title}>{feature.description}</Feature>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
