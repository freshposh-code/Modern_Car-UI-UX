import Navbar from '@/Components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/Components/Footer'

export const metadata: Metadata = {
  title: 'Modern_Car App',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
