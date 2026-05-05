import { useState } from 'react';

/**
 * Custom hook for managing theme state with localStorage persistence.
 * 
 * Manages dark/light mode state by reading from and writing to localStorage.
 * The theme preference is persisted under the key 'lithos-theme-mode'.
 * 
 * @returns {Object} Theme state and control object
 * @returns {boolean} isDarkMode - Current theme mode (true for dark, false for light)
 * @returns {Function} toggleObsidian - Function to toggle between dark and light modes
 */
export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from localStorage using direct string comparison
    return localStorage.getItem('lithos-theme-mode') === 'dark';
  });

  const toggleObsidian = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save as raw string to match the original architecture
      localStorage.setItem('lithos-theme-mode', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return { isDarkMode, toggleObsidian };
}