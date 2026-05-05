/**
 * @fileoverview Lithos UI - Root Application Component
 * 
 * Core Architecture:
 * - Zero-Gap, Neo-Brutalist design system
 * - CSS custom property-driven theming (instant dark/light toggle)
 * - Mathematically consistent section spacing via Tailwind scale
 * - CSS cascade handles theme updates (no child re-renders)
 */

import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeatureGrid from './components/FeatureGrid.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import ThemeEngine from './components/ThemeEngine.jsx'
import Footer from './components/Footer.jsx'

/**
 * App Component - Orchestrates theme state and vertical section layout.
 */
function App() {
  // Theme persists to localStorage; class toggle redefines CSS custom properties
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('lithos-theme-mode') === 'dark'
  })

  const toggleObsidian = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    localStorage.setItem('lithos-theme-mode', nextMode ? 'dark' : 'light');
  }

  /**
   * ROOT CONTAINER - Tailwind Classes:
   * - min-h-screen: 100vh minimum (prevents footer collapse)
   * - overflow-x-hidden: Protects from Neo-Brutalist border/shadow overflow
   * - bg-(--lithos-bg), text-(--lithos-text): CSS custom properties toggle via class
   * - dark obsidian: Conditional class redefines all --lithos-* variables
   * 
   * ZERO-GAP SPACING MATH:
   * - pt-24 (main): padding-top: 6rem = 96px
   *   Accounts for fixed Navbar height (~96px) to prevent content overlap.
   *   Navbar height MUST equal pt-24 value for perfect zero-gap alignment.
   * 
   * - Wrapper div mt-24: margin-top: 6rem = 96px
   *   Creates uniform inter-section spacing (96px between major blocks).
   *   This is the Lithos spacing unit. Do NOT mix with gap utilities.
   * 
   * WHY mt-24 over gap utilities:
   * 1. Margin is additive: If a child has its own margin, the larger
   *    value is used (margin-collapse). This provides flexibility.
   * 2. Gap utilities collapse in flex containers (margin doesn't).
   *    Since we use block flow, margin is more predictable.
   * 3. Neo-Brutalist borders/shadows need margin breathing room;
   *    gap doesn't interact well with box-shadow calculations.
   * 
   * VISUAL GUARANTEE: 96px gutter between all major sections.
   * Maintains consistent visual rhythm across viewport sizes.
   */
  return (
    <div className={`min-h-screen overflow-x-hidden bg-(--lithos-bg) text-(--lithos-text) ${isDarkMode ? 'dark obsidian' : ''}`}>
      <Navbar />
      
      <main className="pt-24">
        <Hero />
        {/* All sections: mt-24 = 96px margin for zero-gap layout */}
        <div className="mt-24"><FeatureGrid /></div>
        <div className="mt-24"><Pricing /></div>
        <div className="mt-24"><Testimonials /></div>
        <div className="mt-24"><FAQ /></div>
        <div className="mt-24"><ThemeEngine /></div>
      </main>
      
      <div className="mt-24">
        <Footer isDarkMode={isDarkMode} onToggleObsidian={toggleObsidian} />
      </div>
    </div>
  )
}

export default App
