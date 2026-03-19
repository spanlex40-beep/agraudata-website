import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesStrip from '@/components/ServicesStrip'
import ProblemsSection from '@/components/ProblemsSection'
import SolutionsSection from '@/components/SolutionsSection'
import OtherSectorsSection from '@/components/OtherSectorsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesStrip />
      <ProblemsSection />
      <SolutionsSection />
      <OtherSectorsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
