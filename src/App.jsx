import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeatureGrid from './components/FeatureGrid.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import ThemeEngine from './components/ThemeEngine.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleObsidian = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <div className={`min-h-screen overflow-x-hidden bg-(--lithos-bg) text-(--lithos-text) ${isDarkMode ? 'dark obsidian' : ''}`}>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <div className="mt-24">
          <FeatureGrid />
        </div>
        <div className="mt-24">
          <Pricing />
        </div>
        <div className="mt-24">
          <Testimonials />
        </div>
        <div className="mt-24">
          <FAQ />
        </div>
        <div className="mt-24">
          <ThemeEngine />
        </div>
      </main>
      <div className="mt-24">
        <Footer isDarkMode={isDarkMode} onToggleObsidian={toggleObsidian} />
      </div>
    </div>
  )
}

export default App
