import type { Metadata } from 'next'
import { Arvo, Anton } from 'next/font/google'
import './globals.css'
import '/zeta-theme.scss'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// Soleil
// American Captain
// Bebas Neue
// Striped King
// Bad Grunge

const arvo = Arvo({
  subsets: ['latin'],
  variable: '--font-arvo',
  display: 'swap',
  weight: '400',
})

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
  weight: '400',
})

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
      <body
        className={`${arvo.variable} ${anton.variable} font-arvo pt-32 bg-black`}
      >
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
