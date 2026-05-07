import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TimeManagerPage from '@/components/TimeManagerPage'

export const metadata = {
  title: 'Time Manager — AgrauData',
  description: 'Gestiona los cuadrantes de tu equipo en 5 minutos. Sin Excel, sin errores, sin cuota mensual.',
}

export default function TimeManager() {
  return (
    <>
      <Navbar />
      <TimeManagerPage />
      <Footer />
    </>
  )
}
