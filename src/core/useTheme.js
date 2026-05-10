import { useEffect, useState } from 'react'
import { getContrastText } from '../utils/yiq'

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
    return localStorage.getItem('lithos-theme-mode') === 'dark'
  })

  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem('lithos-theme-color') || '#00FF00'
  })

  useEffect(() => {
    let styleTag = document.getElementById('lithos-theme-overrides')
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = 'lithos-theme-overrides'
      document.head.appendChild(styleTag)
    }
    const text = getContrastText(accentColor)
    styleTag.innerHTML = `
      *, :root, .obsidian, body.obsidian, .dark {
        --lithos-accent: ${accentColor} !important;
        --lithos-accent-text: ${text} !important;
      }
      ::selection {
        background-color: var(--lithos-accent) !important;
        color: var(--lithos-accent-text) !important;
      }
    `
  }, [accentColor])

  const toggleObsidian = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save as raw string to match the original architecture
      localStorage.setItem('lithos-theme-mode', newMode ? 'dark' : 'light')
      return newMode
    })
  }

  const updateAccentColor = (color) => {
    setAccentColor(color)
    localStorage.setItem('lithos-theme-color', color)
  }

  return { isDarkMode, toggleObsidian, accentColor, updateAccentColor }
}