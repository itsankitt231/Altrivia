import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const { isDarkMode } = useTheme();
  const [ref, isVisible] = useScrollAnimation(0.1);

  const testimonials = [
    {
      author: "Sarah Johnson",
      role: "Software Engineer at Google",
      platform: "linkedin",
      review: "ALtrivia transformed my career! The AI-focused curriculum is exactly what the industry needs. I went from basic coding to building production AI applications in just 6 months.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      author: "Mike Chen",
      role: "Data Scientist",
      platform: "twitter",
      review: "The hands-on projects are incredible. Built 3 portfolio projects that landed me interviews at FAANG. The mentorship quality is unmatched!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      author: "Priya Patel",
      role: "ML Engineer",
      platform: "github",
      review: "Best investment I've made in my career. The AI ethics discussions and practical implementations gave me confidence to tackle real-world problems.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      author: "David Kumar",
      role: "Full Stack Developer",
      platform: "youtube",
      review: "From zero to hero in AI development! The community support and weekly code reviews kept me motivated throughout the journey.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      author: "Emma Wilson",
      role: "AI Researcher",
      platform: "linkedin",
      review: "The curriculum depth is phenomenal. Covered everything from neural networks to deployment strategies. Worth every penny!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      author: "Raj Singh",
      role: "Startup Founder",
      platform: "reddit",
      review: "Started my AI company using skills from ALtrivia. The practical focus on scalable AI solutions was exactly what I needed for my startup.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const gridAreas = [
    "card1 card1 card2 card2",
    "card1 card1 card3 card4",
    "card5 card5 card6 card6",
    "card5 card5 card6 card6"
  ];

  return (
    <section
      id="testimonials"
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
        <h2 className={`text-4xl md:text-5xl leading-tight mb-4${
            isDarkMode ? 'text-text-main' : 'text-slate-900'
          }`}>
            Hear From <span className="text-[#EF5A3C]">Altrivians</span>
          </h2>
        
        {/* <h2 className={`text-3xl font-bold mb-4 ${isVisible ? 'animate-scale-in' : ''} ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>
          Hear from
        </h2> <h2 className={`text-3xl font-bold mb-4 ${isVisible ? 'animate-scale-in' : ''} ${isDarkMode ? 'text-neutral-100' : 'text-[#EF5A3C]'}`}>
          Altrivia
        </h2>  */}
        <p className={`text-lg mt-3 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Find out what our students have to say about this
        </p>
      </motion.div>

      {/* Collage Container */}
      <div className="relative mb-8">
        <div
          className="grid gap-6 w-full"
          style={{
            gridTemplateAreas: gridAreas.map(row => `"${row}"`).join(' '),
            gridTemplateRows: 'repeat(4, minmax(200px, auto))',
            gridTemplateColumns: 'repeat(4, 1fr)',
            minHeight: '600px'
          }}
        >
          {testimonials.map((testimonial, index) => {
            let gridArea = '';
            switch (index) {
              case 0: gridArea = 'card1'; break;
              case 1: gridArea = 'card2'; break;
              case 2: gridArea = 'card3'; break;
              case 3: gridArea = 'card4'; break;
              case 4: gridArea = 'card5'; break;
              case 5: gridArea = 'card6'; break;
              default: gridArea = 'card1';
            }

            return (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
                gridArea={gridArea}
              />
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className={`mb-6 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Join thousands of successful graduates
        </p>
        <motion.button
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${isDarkMode ? 'bg-[#ef5a3c] text-white hover:bg-[#d14d35]' : 'bg-[#ef5a3c] text-white hover:bg-[#d14d35]'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </section>
  );
}
