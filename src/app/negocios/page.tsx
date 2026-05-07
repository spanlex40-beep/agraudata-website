import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NegociosPage from '@/components/NegociosPage'

export const metadata = {
  title: 'Para tu negocio — AgrauData',
  description: 'Automatización, datos ordenados y control financiero claro para clínicas, talleres, asesorías y otros negocios.',
}

export default function Negocios() {
  return (
    <>
      <Navbar />
      <NegociosPage />
      <Footer />
    </>
  )
}
