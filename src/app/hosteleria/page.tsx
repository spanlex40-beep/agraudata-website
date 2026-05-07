import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HoseleriaPage from '@/components/HoseleriaPage'

export const metadata = {
  title: 'Para hostelería — AgrauData',
  description: 'Control financiero, costes de personal y datos reales para restaurantes, hoteles y bares.',
}

export default function Hosteleria() {
  return (
    <>
      <Navbar />
      <HoseleriaPage />
      <Footer />
    </>
  )
}
