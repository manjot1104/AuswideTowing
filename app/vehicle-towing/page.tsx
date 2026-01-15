import Header from '@/components/Header'
import VehicleTowing from '@/components/VehicleTowing'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Vehicle Towing & Transport Services | Auswide Towing Group',
  description: 'Professional vehicle towing services across Australia. Quick, efficient, and affordable towing for all vehicle types including cars, 4WDs, buses, and caravans.',
}

export default function VehicleTowingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <VehicleTowing />
      <Footer />
    </main>
  )
}
