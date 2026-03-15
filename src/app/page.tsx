import dynamic from 'next/dynamic'
import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Promise from '@/components/Promise'

// Below-fold components — loaded on demand for faster initial page load
const Hotels = dynamic(() => import('@/components/Hotels'))
const Host = dynamic(() => import('@/components/Host'))
const RouteMap = dynamic(() => import('@/components/RouteMap'))
const Itinerary = dynamic(() => import('@/components/Itinerary'))
const Includes = dynamic(() => import('@/components/Includes'))
const VideoShowcase = dynamic(() => import('@/components/VideoShowcase'))
const Pricing = dynamic(() => import('@/components/Pricing'))
const NotIncluded = dynamic(() => import('@/components/NotIncluded'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const CTAFinal = dynamic(() => import('@/components/CTAFinal'))
const Footer = dynamic(() => import('@/components/Footer'))

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
