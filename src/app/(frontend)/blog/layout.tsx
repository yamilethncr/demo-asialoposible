import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <main className="min-h-screen pt-[100px]">{children}</main>
      <Footer />
    </>
  )
}
