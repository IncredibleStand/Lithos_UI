import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import FeatureGrid from './components/FeatureGrid.jsx'
import PricingSection from './components/PricingSection.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQSection from './components/FAQSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="pt-24">
        <HeroSection />
        <FeatureGrid />
        <PricingSection />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
