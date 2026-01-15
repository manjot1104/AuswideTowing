import Header from '@/components/Header'
import PortablesContainers from '@/components/PortablesContainers'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Portables & Containers Transport Services | Auswide Towing Group',
  description: 'Professional portable containers and storage units transport services across Australia. Expert handling for shipping containers, portable buildings, and modular structures.',
}

export default function PortablesContainersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PortablesContainers />
      <Footer />
    </main>
  )
}
