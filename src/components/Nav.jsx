import { useTheme } from "../contexts/ThemeContext";

export default function Nav() {
  const { isDarkMode } = useTheme();
  
  return (
    <nav className={`w-full py-8 px-8 flex justify-between items-center ${isDarkMode ? 'text-white' : 'text-slate-500'} ${isDarkMode ? 'bg-transparent' : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50'}`}>
      <div className="text-2xl font-bold ml-10">Altrivia</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4 hidden md:flex">
          <a href="#programs" className={`hover:underline ${isDarkMode ? 'hover:text-white' : 'hover:text-[#EE593B]'}`}>Programs</a>
          <a href="#curriculum" className={`hover:underline ${isDarkMode ? 'hover:text-white' : 'hover:text-[#EE593B]'}`}>Curriculum</a>
          <a href="#mentors" className={`hover:underline ${isDarkMode ? 'hover:text-white' : 'hover:text-[#EE593B]'}`}>Mentors</a>
          <a href="#faq" className={`hover:underline ${isDarkMode ? 'hover:text-white' : 'hover:text-[#EE593B]'}`}>FAQs</a>
        </div>
        <button className="bg-[#EE593B] hover:bg-[#c43e25] text-white px-14 py-2 rounded transition-colors font-medium mr-10">Join Waitlist</button>
      </div>
    </nav>
  );
}
