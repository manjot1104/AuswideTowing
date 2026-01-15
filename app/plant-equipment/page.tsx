import Header from '@/components/Header'
import PlantEquipment from '@/components/PlantEquipment'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Plant & Equipment Towing Services | Auswide Towing Group',
  description: 'Professional plant equipment and heavy machinery towing services across Australia. 24/7 specialized transport for excavators, cranes, generators, and more.',
}

export default function PlantEquipmentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PlantEquipment />
      <Footer />
    </main>
  )
}
