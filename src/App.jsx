/**
 * @fileoverview Lithos UI - Root Application Shell
 * 
 * Minimal architectural shell responsible for:
 * - Theme state management via useTheme hook
 * - Dynamic theming class application
 * - Showroom component composition
 */

import { useTheme } from './core/useTheme.js'
import Showroom from './showroom/Index.jsx'

/**
 * App Component - Orchestrates theme state and renders Showroom UI.
 */
function App() {
  const { isDarkMode, toggleObsidian } = useTheme()

  return (
    <div className={"min-h-screen overflow-x-hidden bg-(--lithos-bg) text-(--lithos-text) " + (isDarkMode ? 'dark obsidian' : '')}>
      <Showroom isDarkMode={isDarkMode} toggleObsidian={toggleObsidian} />
    </div>
  )
}

export default App