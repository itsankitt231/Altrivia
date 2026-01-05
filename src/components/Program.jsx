import { Bot, Brain, Cpu } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Program({ title, description, duration, icon }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}>
      <div className="flex justify-center mb-4">
        <div className={`w-12 h-12 ${isDarkMode ? 'bg-[#ef5a3c]/30' : 'bg-orange-100'} rounded-full flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <h3 className={`text-xl mb-2 text-center ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>{title}</h3>
      <p className={`${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'} mb-3 text-center`}>{description}</p>
      <p className="text-sm text-[#ef5a3c] font-medium text-center">{duration}</p>
    </div>
  );
}
