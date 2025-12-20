import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function StreamingOutput({ lines, lineDelay = 800, charDelay = 30 }) {
  const { isDarkMode } = useTheme();
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentLineText, setCurrentLineText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        // Still typing current line
        const timeout = setTimeout(() => {
          setCurrentLineText(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, charDelay);

        return () => clearTimeout(timeout);
      } else {
        // Line complete, move to next line
        setVisibleLines(prev => [...prev, currentLine]);
        setCurrentLineText('');
        setCurrentCharIndex(0);
        setCurrentLineIndex(prev => prev + 1);
      }
    }
  }, [currentLineIndex, currentCharIndex, lines, lineDelay, charDelay]);

  return (
    <div className="space-y-1">
      {visibleLines.map((line, index) => (
        <div key={index} className={isDarkMode ? 'text-success' : 'text-green-600'}>
          {line}
        </div>
      ))}
      {currentLineText && (
        <div className={isDarkMode ? 'text-success' : 'text-green-600'}>
          {currentLineText}
          <span className={`animate-pulse ${isDarkMode ? 'text-success' : 'text-green-600'}`}>|</span>
        </div>
      )}
    </div>
  );
}
