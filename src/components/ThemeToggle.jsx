import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log('Toggle button clicked, current isDarkMode:', isDarkMode);
    console.log('HTML before toggle:', document.documentElement.className);
    toggleTheme();
    // Check after a short delay to see if it updated
    setTimeout(() => {
      console.log('HTML after toggle:', document.documentElement.className);
    }, 100);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
      )}
    </button>
  );
}
