import { useTheme } from "../contexts/ThemeContext";

const ArrowIcon = () => (
  <svg 
    width="22px" 
    height="22px" 
    viewBox="-2.4 -2.4 28.80 28.80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="mr-2 flex-shrink-0"
  >
    <g strokeWidth="0" transform="translate(3.96,3.96), scale(0.67)">
      <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#EF5A3C" strokeWidth="0"></rect>
    </g>
    <g strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g>
    <g>
      <path opacity="0.15" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill=""></path>
      <path d="M10 17L15 12L10 7M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#212121" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
    </g>
  </svg>
);

const perks = [
  ["25 weeks of cohort", "Build LLMs", "Lead AI teams"],
  ["200+ hours of learning", "Elite Dev Batch", "Expert Instructions"], ["Project Based Learning", "Live Classes", "Cloud Ready Deployment"]
];

export default function Inside() {
  const { isDarkMode } = useTheme();

  return (
    <section className="py-16 px-16">
      <h2 className={` text-4xl font-semibold md:text-5xl flex items-center justify-center leading-tight mb-4
          }`}>
            What's <span className="text-[#EF5A3C] ml-3">Inside?</span>
          </h2>
      {/* <h2 className={`text-4xl md:text-5xl flex flex items-center justify-center leading-relaxed mb-4${
            isDarkMode ? 'text-text-main' : 'text-slate-900'
          }`}>
            What's{' '}<span className="text-[#EF5A3C]">Inside?</span>
          </h2> */}
      <p className={`flex justify-center mt-4 mb-10 text-lg ${
        isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
      }`}>
        You can explain, deploy & scale.
      </p>
      
      <div className="flex flex-col gap-12 max-w-4xl mx-auto px-33">
        {perks.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row items-stretch justify-center gap-9">
            {row.map((perk, index) => (
              <div 
                key={index}
                className={`flex-1 p-4 rounded-lg border flex items-center transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-neutral-800/50 border-neutral-700 hover:border-[#EF5A3C]/50' 
                    : 'bg-white border-gray-200 hover:border-[#EF5A3C]/50 shadow-sm'
                }`}
              >
                <ArrowIcon />
                <span className={isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}>
                  {perk}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
