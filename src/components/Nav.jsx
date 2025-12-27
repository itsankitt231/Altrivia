import { useTheme } from "../contexts/ThemeContext";

export default function Nav() {
  const { isDarkMode } = useTheme();
  
  return (
    <nav className={`w-full py-8 px-8 flex justify-between items-center ${isDarkMode ? 'text-white' : 'text-slate-900'} ${isDarkMode ? 'bg-transparent' : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50'}`}>
      <div className="text-2xl font-bold">Altrivia</div>
      <div className="flex items-center space-x-6">
        <div className="space-x-8 hidden md:flex">
          <a href="#programs" className={`hover:underline ${isDarkMode ? 'hover:text-white' : 'hover:text-[#EE593B]'}`}>Programs</a>
          <a href="#curriculum" className={`hover:underline ${isDarkMode ? 'hover:text-white' : 'hover:text-[#EE593B]'}`}>Curriculum</a>
          <a href="#mentors" className={`hover:underline ${isDarkMode ? 'hover:text-white' : 'hover:text-[#EE593B]'}`}>Mentors</a>
          <a href="#pricing" className={`hover:underline ${isDarkMode ? 'hover:text-white' : 'hover:text-[#EE593B]'}`}>Pricing</a>
        </div>
      </div>
      <div>
        <button className="bg-[#EE593B] hover:bg-[#c43e25] text-white px-6 py-3 rounded transition-colors">Apply</button>
      </div>
    </nav>
  );
}
