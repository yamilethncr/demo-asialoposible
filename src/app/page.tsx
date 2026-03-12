import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Promise from '@/components/Promise'
import Host from '@/components/Host'
import RouteMap from '@/components/RouteMap'
import Itinerary from '@/components/Itinerary'
import Includes from '@/components/Includes'
import VideoShowcase from '@/components/VideoShowcase'
import Hotels from '@/components/Hotels'
import Pricing from '@/components/Pricing'
import NotIncluded from '@/components/NotIncluded'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <Hero />
      <Problem />
      <Promise />
      <Hotels />
      <Host />
      <RouteMap />
      <Itinerary />
      <Includes />
      <VideoShowcase />
      <Pricing />
      <NotIncluded />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  )
}
