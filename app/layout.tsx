import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '/zeta-theme.scss'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rockstars of Tomorrow - La Verne',
  description: 'Unleash Your Inner Rockstar!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav
          pages={[
            { name: 'Home', path: '/' },
            { name: 'Programs', path: '/programs' },
            { name: 'Pricing', path: '/pricing' },
            { name: 'Contact', path: '/contact' },
          ]}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}
