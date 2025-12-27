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
  // Use light mode as default
  const [isDarkMode] = useState(false);

  useEffect(() => {
    // Update document class for Tailwind dark mode
    const html = document.documentElement;

    // Remove dark class for light mode
    html.classList.remove('dark');

    // Debug logging
    console.log('Theme set to light mode');
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
