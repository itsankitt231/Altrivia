import { ChevronRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const TrackCard = ({ image, title, description, subheading, points }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
      isDarkMode 
        ? 'bg-neutral-800/50 border-neutral-700 hover:border-[#EF5A3C]/50' 
        : 'bg-white border-gray-200 hover:border-[#EF5A3C]/50 shadow-sm hover:shadow-lg'
    }`}>
      <div className="flex items-start gap-6">
        {/* Avatar on the left */}
        <div className="flex-shrink-0">
          <img 
            src={image} 
            alt={title}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        
        {/* Content on the right */}
        <div className="flex-1">
          <h3 className={`text-2xl font-semibold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          
          <div className="flex items-start gap-2 mb-2">
            <ChevronRight className="w-5 h-5 flex-shrink-0 text-[#EF5A3C] mt-1" strokeWidth={2.5} />
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-neutral-300' : 'text-gray-600'
            }`}>
              {description}
            </p>
          </div>
          
          {subheading && (
            <p className={`text-sm mb-6 ${
              isDarkMode ? 'text-neutral-400' : 'text-gray-500'
            }`}>
              {subheading}
            </p>
          )}
          
          {/* Dashed line */}
          <div className={`w-full h-px border-t border-dashed mb-6 ${
            isDarkMode ? 'border-neutral-600' : 'border-gray-300'
          }`}></div>
          
          {/* Three horizontal points */}
          <div className="flex flex-wrap gap-6 items-center">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-5 h-5 flex-shrink-0 text-[#EF5A3C]" strokeWidth={2.5} />
                <span className={`${
                  isDarkMode ? 'text-neutral-200' : 'text-gray-700'
                }`}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Tracks() {
  const { isDarkMode } = useTheme();

  const tracks = [
    {
      image: "https://framerusercontent.com/images/sYT5xLgQfiNGvSXQt4f9hO5zg.png?width=161&height=224",
      title: "For Job Seekers",
      description: "Get a job in AI Development",
      subheading: "Build a killer portfolio of applied AI with strong foundational knowledge. Get personalized mentorship with 1:10 ratio. Land your dream package. ",
      points: [
        "Learn the skills!",
        "Prep for Interviews",
        "Get Hired In Top Companies"
      ]
    },
    {
      image: "https://framerusercontent.com/images/Xu8d9debKxaGfcZvxz59jBJrM.png?width=163&height=227",
      title: "For Founders",
      description: "Build AI Product",
      subheading: "Create a new AI product to integrate AI into a existing product. Engineering first-applied AI Curriculum.",
      points: [
        "Learn AI fundamentals and advanced techniques",
        "Complete industry-relevant projects", 
        "Graduate with practical experience"
      ]
    }
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className={`text-4xl md:text-5xl font-semibold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Meet your goals with{' '}
          <span className="text-[#EF5A3C]">tailored tracks</span>
        </h2>
        <p className={`text-lg ${
          isDarkMode ? 'text-neutral-400' : 'text-gray-600'
        }`}>
          Forget the one size fits all approach.
        </p>
      </div>
      
      <div className="space-y-8">
        {tracks.map((track, index) => (
          <TrackCard key={index} {...track} />
        ))}
      </div>
    </section>
  );
}
