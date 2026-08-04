import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import PracticeAreas from '../components/PracticeAreas'
import Benefits from '../components/Benefits'
import Insights from '../components/Insights'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Benefits />
        <Insights />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Home
