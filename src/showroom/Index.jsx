import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import FeatureGrid from '../components/sections/FeatureGrid'
import Pricing from '../components/sections/Pricing'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import ThemeEngine from '../components/sections/ThemeEngine'
import Footer from '../components/layout/Footer'

/**
 * Showroom Component - Landing Page UI Composition
 * 
 * Isolates the landing page structure (Navbar, sections, Footer) from root App logic.
 * Accepts theme state and toggle function as props for downstream consumption.
 * 
 * @param {Object} props
 * @param {boolean} props.isDarkMode - Current theme mode state
 * @param {Function} props.toggleObsidian - Theme toggle callback
 * @returns {React.ReactElement}
 */
export default function Showroom({ isDarkMode, toggleObsidian }) {
  /**
   * ZERO-GAP SPACING MATH:
   * - pt-24 (main): padding-top: 6rem = 96px
   *   Accounts for fixed Navbar height (~96px) to prevent content overlap.
   *   Navbar height MUST equal pt-24 value for perfect zero-gap alignment.
   * 
   * - Wrapper div mt-24: margin-top: 6rem = 96px
   *   Creates uniform inter-section spacing (96px between major blocks).
   *   This is the Lithos spacing unit. Do NOT mix with gap utilities.
   */
  return (
    <>
      <Navbar />
      
      <main className="pt-24">
        <Hero />
        {/* All sections: mt-24 = 96px margin for zero-gap layout */}
        <div className="mt-24"><FeatureGrid /></div>
        <div className="mt-24"><Pricing /></div>
        <div className="mt-24"><Testimonials /></div>
        <div className="mt-24"><FAQ /></div>
        <div className="mt-24"><ThemeEngine isDarkMode={isDarkMode} onToggleObsidian={toggleObsidian} /></div>
      </main>
      
      <div className="mt-24">
        <Footer isDarkMode={isDarkMode} onToggleObsidian={toggleObsidian} />
      </div>
    </>
  )
}
