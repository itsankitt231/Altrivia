import { useTheme } from "../contexts/ThemeContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function JoinUs() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const { isDarkMode } = useTheme();

  const handleRequestCallback = () => {
    // Add callback logic here - for now just show an alert
    alert('Callback request submitted! We will contact you soon.');
  };

  return (
    <section 
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-16 transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center rounded-2xl border border-white/20 transition-all duration-300 p-20 bg-[#EF5A3C] shadow-lg">
        <h2 className={`text-4xl md:text-5xl font-semibold mb-4 leading-tight text-white ${isVisible ? 'animate-scale-in' : ''}`}>
          Be a part of new era of{' '}
          <span className="text-white">programming</span>
        </h2>
        
        <p className={`text-xl md:text-2xl mb-8 font-medium text-white ${isVisible ? 'animate-delay-200 animate-fade-in-up' : ''}`}>
          Be an <span className="text-white font-semibold">Altrivian!</span>
        </p>
        
        <button
          onClick={handleRequestCallback}
          className={`inline-flex items-center px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl ${isVisible ? 'animate-delay-400 animate-fade-in-up' : ''}`}
        >
          Request callback
          <svg 
            className="ml-2 w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
