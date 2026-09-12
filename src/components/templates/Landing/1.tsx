import { Navbar1 } from '../../blocks/Navbar/1'
import { Hero1 } from '../../blocks/Hero/1'
import { FeatureGrid1 } from '../../blocks/FeatureGrid/1'
import { Pricing1 } from '../../blocks/Pricing/1'
import { Testimonials1 } from '../../blocks/Testimonials/1'
import { FAQ1 } from '../../blocks/FAQ/1'
import { Footer1 } from '../../blocks/Footer/1'

export const Landing1 = () => {
  const customLinks = [
    { label: 'Features', to: '#features' },
    { label: 'Testimonials', to: '#testimonials' },
    { label: 'Pricing', to: '#pricing' },
    { label: 'FAQ', to: '#faq' },
  ]

  return (
    <div className="bg-(--lithos-bg) min-h-screen text-(--lithos-text) relative">
      <Navbar1 links={customLinks} />
      <main>
        <Hero1 />
        <FeatureGrid1 />
        <Testimonials1 />
        <Pricing1 />
        <FAQ1 />
      </main>
      <Footer1 />
    </div>
  )
}
