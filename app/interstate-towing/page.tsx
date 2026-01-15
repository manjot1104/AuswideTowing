import Header from '@/components/Header'
import InterstateTowing from '@/components/InterstateTowing'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Interstate Towing & Transport Services | Auswide Towing Group',
  description: '24/7 interstate towing services across Australia. Professional car towing, boat transport, caravan transport, and more. Get your vehicle where it needs to be, anywhere in Australia.',
}

export default function InterstateTowingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <InterstateTowing />
      <Footer />
    </main>
  )
}
