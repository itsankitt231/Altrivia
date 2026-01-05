import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <div className={`w-full rounded-xl border transition-all duration-300 ${
      isDarkMode 
        ? 'bg-neutral-800/50 border-neutral-700' 
        : 'bg-white border-gray-200 shadow-sm'
    }`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-opacity-80 transition-all duration-200"
      >
        <h3 className={`text-lg font-semibold text-left pr-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className={`w-5 h-5 transition-transform duration-200 ${
              isDarkMode ? 'text-[#EF5A3C]' : 'text-[#EF5A3C]'
            }`} />
          ) : (
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
              isDarkMode ? 'text-[#EF5A3C]' : 'text-[#EF5A3C]'
            }`} />
          )}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`px-6 pb-6 ${
          isDarkMode ? 'text-neutral-300' : 'text-gray-600'
        }`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const { isDarkMode } = useTheme();

  const faqData = [
    {
      question: "What distinguishes this Applied AI Course from others?",
      answer: "We are treating AI as Engineering, not just modeling with depth of fundamental in Maths. We are not just prompting & going beyond that. Prompt users are replacable. System builders are not."
    },
    {
      question: "Who is the ideal candidate for this course?",
      answer: " The course is perfect for these curious about Applied Artificial Intelligence, professionals who know about Python (even if you don't we will teach you), software developer changing into AI developer role, managers who want to deep dive into artificial intelligence or anyone who want to build their own AI product."
    },
    {
      question: "What type of projects will I work on during the course?",
      answer: "Our projects are production ready project with enforced code quality which you will never see anywhere. Altrivia builds AI Engineers."
    },
    {
      question: "Will I receive a certification upon completing the course?",
      answer: "Yes, upon successful completion of course, you will receive a professional certificate from Altrivia, signifying your expertise in Applied AI."
    }
  ];

  return (
    <section 
      ref={ref}
      className={`max-w-4xl mx-auto px-6 py-16 transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`text-center mb-12 ${isVisible ? 'animate-scale-in' : ''}`}>
        <h2 className={`text-4xl md:text-5xl font-semibold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          You'll have <span className="text-[#EF5A3C]">questions!</span>
        </h2>
        <p className={`text-lg ${
          isDarkMode ? 'text-neutral-400' : 'text-gray-600'
        }`}>
          Everything you need to know about the course and payments.
        </p>
      </div>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className={`${isVisible ? `animate-delay-${(index + 1) * 100} animate-fade-in-up` : ''}`}
          >
            <FAQItem question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </div>
    </section>
  );
}
