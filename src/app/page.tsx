import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}
