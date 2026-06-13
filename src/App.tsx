import { ModalProvider } from './context/ModalContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustBar from './components/TrustBar/TrustBar'
import Services from './components/Services/Services'
import Process from './components/Process/Process'
import WhyUs from './components/WhyUs/WhyUs'
import SeoBlock from './components/SeoBlock/SeoBlock'
import Pricing from './components/Pricing/Pricing'
import Portfolio from './components/Portfolio/Portfolio'
import Team from './components/Team/Team'
import Guarantees from './components/Guarantees/Guarantees'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import CookieBanner from './components/CookieBanner/CookieBanner'
import ContactModal from './components/ContactModal/ContactModal'

export default function App() {
  return (
    <ModalProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <WhyUs />
        <SeoBlock />
        <Pricing />
        <Portfolio />
        <Team />
        <Guarantees />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
      <ContactModal />
    </ModalProvider>
  )
}
