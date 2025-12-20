import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Always use dark mode as default
  const [isDarkMode] = useState(true);

  useEffect(() => {
    // Update document class for Tailwind dark mode
    const html = document.documentElement;

    // Force add dark class
    html.classList.add('dark');

    // Debug logging
    console.log('Theme set to dark mode');
    console.log('HTML element:', html);
    console.log('HTML classes:', html.className);
    console.log('Has dark class:', html.classList.contains('dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
