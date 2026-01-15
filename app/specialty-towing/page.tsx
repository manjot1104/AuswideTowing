import Header from '@/components/Header'
import SpecialtyTowing from '@/components/SpecialtyTowing'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Specialty Towing Services | Auswide Towing Group',
  description: '24/7 specialty towing services for rare, vintage, racing vehicles and supercars. Expert handling with over 35 years of experience across Australia.',
}

export default function SpecialtyTowingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SpecialtyTowing />
      <Footer />
    </main>
  )
}
