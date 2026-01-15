import Header from '@/components/Header'
import StorageSolutions from '@/components/StorageSolutions'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Storage Solutions | Auswide Towing Group',
  description: 'Secure vehicle storage solutions across Australia. Store cars, plant equipment, caravans, boats, and more. 4000+ vehicles stored nationally with 1000+ car capacity.',
}

export default function StorageSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <StorageSolutions />
      <Footer />
    </main>
  )
}
