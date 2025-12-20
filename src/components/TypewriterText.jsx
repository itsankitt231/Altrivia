import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function TypewriterText({ text, speed = 50 }) {
  const { isDarkMode } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`font-mono text-sm ${isDarkMode ? 'text-gray-200' : 'text-slate-100'}`}>
      {displayText}
      <span className={`animate-pulse ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>|</span>
    </span>
  );
}
