import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight } from "lucide-react";

export default function Ribbon() {
  const { isDarkMode } = useTheme();

  return (
    <div className="w-full bg-[#EF5A3C] py-1 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-white font-medium text-sm md:text-base ml-20">
          The Altrivians Buildethon
        </span>
        <button className="text-white text-sm font-semibold hover:underline transition-colors flex items-center gap-1 mr-20">
          Join Waitlist <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
