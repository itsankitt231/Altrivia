import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Program from "./Program";
import { Bot, Brain, Cpu } from "lucide-react";

export default function Programs() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="programs"
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-16 transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`text-center mb-16 ${isVisible ? 'animate-scale-in' : ''}`}>
        <h2 className="text-3xl font-bold mb-4">AI-Powered Programs</h2>
        <p className="text-lg text-neutral-600">Cutting-edge courses designed to prepare you for the AI-driven future</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${isVisible ? 'animate-delay-100 animate-fade-in-left' : ''}`}>
          <Program
            title="AI Fundamentals"
            description="Master the basics of artificial intelligence, machine learning, and neural networks."
            duration="8 weeks"
            icon={<Bot className="w-6 h-6 text-orange-500" />}
          />
        </div>
        <div className={`${isVisible ? 'animate-delay-200 animate-scale-in' : ''}`}>
          <Program
            title="Machine Learning Engineering"
            description="Build and deploy ML models with modern tools and frameworks like TensorFlow and PyTorch."
            duration="12 weeks"
            icon={<Brain className="w-6 h-6 text-orange-500" />}
          />
        </div>
        <div className={`${isVisible ? 'animate-delay-300 animate-fade-in-right' : ''}`}>
          <Program
            title="AI Product Development"
            description="Learn to integrate AI into products, from concept to deployment and scaling."
            duration="10 weeks"
            icon={<Cpu className="w-6 h-6 text-orange-500" />}
          />
        </div>
      </div>
    </section>
  );
}
