import PasswordGate from '@/components/PasswordGate'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Promise from '@/components/Promise'
import Host from '@/components/Host'
import Itinerary from '@/components/Itinerary'
import Includes from '@/components/Includes'
import Hotels from '@/components/Hotels'
import Pricing from '@/components/Pricing'
import NotIncluded from '@/components/NotIncluded'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <PasswordGate>
      <Navbar />
      <Hero />
      <Problem />
      <Promise />
      <Host />
      <Itinerary />
      <Includes />
      <Hotels />
      <Pricing />
      <NotIncluded />
      <FAQ />
      <CTAFinal />
      <Footer />
    </PasswordGate>
  )
}
