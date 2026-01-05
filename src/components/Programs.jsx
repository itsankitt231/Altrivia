import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Program from "./Program";
import SquareCard from "./SquareCard";
import aiLearning from "../assets/AI-Learning.png";
import { Bot, Brain, Cpu, ChevronRight } from "lucide-react";

export default function Programs() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const squareCards = [
    {
      title: "Real-World AI Projects",
      description: "Looking to upskill in AI with Mathematics & Depth. ",
      icon: ChevronRight
    },
    {
      title: "Expert Mentorship", 
      description: "Looking to change career path from software developer to AI developer.",
      icon: ChevronRight
    },
    {
      title: "Career Support",
      description: "Looking to build own AI products.",
      icon: ChevronRight
    },
    {
      title: "Cutting-Edge Curriculum",
      description: "Generally curious about the field.",
      icon: ChevronRight
    }
  ];

  return (
    <section
      id="programs"
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-16 transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Original section commented out */}
      {/* 
      <div className={`text-center mb-16 ${isVisible ? 'animate-scale-in' : ''}`}>
        <h2 className="text-4xl leading-tight mb-4">Why Join<span className="text-[#EF5A3C] ml-3">Altrivia?</span></h2>
        <p className="text-lg text-neutral-600">Cutting-edge courses designed to prepare you for the AI-driven future</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className={`${isVisible ? 'animate-delay-100 animate-fade-in-left' : ''}`}>
          <Program
            title="Elite Developer Community"
            description="Join the community of Altrivia - the ones at the forefront of a new era in coding."
            icon={<Bot className="w-6 h-6 text-orange-500" />}
          />
        </div>
        <div className={`${isVisible ? 'animate-delay-200 animate-scale-in' : ''}`}>
          <Program
            title="Learn from Best Mentors"
            description="Your mentors in this course are the ones who have been there, done that! With decades of collective experience & having built real-world AI products,"
            icon={<Brain className="w-6 h-6 text-orange-500" />}
          />
        </div>
        <div className={`${isVisible ? 'animate-delay-300 animate-fade-in-right' : ''}`}>
          <Program
            title="AI Product Development"
            description="Learn to integrate AI into products, from concept to deployment and scaling."
            icon={<Cpu className="w-6 h-6 text-orange-500" />}
          />
        </div>
      </div>
      */}

      {/* New compact grid section */}
      <div className={`text-center mb-8 ${isVisible ? 'animate-scale-in' : ''}`}>
        {/* <h2 className="text-4xl font-semibold mb-4">Who is this <span className="text-[#EF5A3C]">for?</span></h2> */}
        <h2 className={` text-4xl font-semibold md:text-5xl flex items-center justify-center leading-tight mb-4
          }`}>
            Who Is this <span className="text-[#EF5A3C] ml-3">for?</span>
          </h2>
        <p className="text-lg text-neutral-600">From complete programming noobs to experienced professionals. Prior coding of Python helpful.</p>
      </div>
      
      {/* Two-column layout inside black container */}
      <div className="bg-neutral-900 rounded-2xl p-8 flex flex-col md:flex-row gap-8">
        {/* Left side - List */}
        <div className="flex-1 space-y-3">
          {squareCards.map((card, index) => (
            <div 
              key={index} 
              className={`${isVisible ? `animate-delay-${(index + 1) * 100} animate-fade-in-up` : ''}`}
            >
              <SquareCard
                description={card.description}
                icon={card.icon}
              />
            </div>
          ))}
        </div>
        
        {/* Right side - Image */}
        <div className="flex-1 flex items-center justify-center">
          <img 
            src={aiLearning}
            alt="AI Learning" 
            className="w-full h-full object-cover rounded-xl max-h-80"
          />
        </div>
      </div>
      
    </section>
  );
}
