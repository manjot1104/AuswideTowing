import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Reviews />
      <FAQ />
      <QuoteForm />
      <Footer />
    </main>
  )
}
