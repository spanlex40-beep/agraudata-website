import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductosPage from '@/components/ProductosPage'

export const metadata = {
  title: 'Productos — AgrauData',
  description: 'Time Manager para cuadrantes de personal, webs a medida y herramientas personalizadas para tu negocio.',
}

export default function Productos() {
  return (
    <>
      <Navbar />
      <ProductosPage />
      <Footer />
    </>
  )
}
