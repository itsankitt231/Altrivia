import { Users, Code, Briefcase } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Feature({ title, children }) {
  const { isDarkMode } = useTheme();

  const getIcon = () => {
    switch (title) {
      case "Mentorship":
        return <Users className="w-8 h-8 text-[#F97316] mb-4 flex justify-center items-center" />;
      case "Project-driven":
        return <Code className="w-8 h-8 text-[#F97316] mb-4" />;
      case "Hiring support":
        return <Briefcase className="w-8 h-8 text-[#F97316] mb-4" />;
      default:
        return null;
    }
  };

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}>
      <div className="flex justify-center mb-4">
        {getIcon()}
      </div>
      <h3 className={`text-xl font-semibold mb-2 text-center ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>{title}</h3>
      <p className={`${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>{children}</p>
    </div>
  );
}
