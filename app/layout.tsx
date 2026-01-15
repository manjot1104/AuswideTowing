import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auswide Towing Group - Professional Towing & Roadside Assistance Services',
  description: 'Reliable 24/7 towing services, roadside assistance, and heavy vehicle towing across Australia. Fast response times and professional service.',
  keywords: 'towing services, roadside assistance, car towing, heavy vehicle towing, emergency towing, Melbourne towing',
  authors: [{ name: 'Auswide Towing Group' }],
  openGraph: {
    title: 'Auswide Towing Group - Professional Towing Services',
    description: 'Reliable 24/7 towing services and roadside assistance',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
