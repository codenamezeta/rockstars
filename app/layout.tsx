// - Root Layout for the entire site
import './globals.css'
import '/zeta-theme.scss'
import { Arvo } from 'next/font/google'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// * Brand Font for Titles
const soleil = localFont({
  src: [
    {
      path: './fonts/Soleil/Soleil_Extrabold_Italic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/Soleil/Soleil_Extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Soleil/Soleil_Bold_Italic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Soleil/Soleil_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Soleil/Soleil_Book_Italic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Soleil/Soleil_Book.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Soleil/Soleil_Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Soleil/Soleil_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Soleil/Soleil_Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Soleil/Soleil_Light_Italic.otf',
      weight: '300',
      style: 'italic',
    },
  ],
})

// * Body Font
const arvo = Arvo({
  subsets: ['latin'],
  variable: '--font-arvo',
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Rockstars of Tomorrow - La Verne',
  description:
    'From music lessons to performance coaching, Rockstars of Tomorrow in La Verne is the neighborhood music school that will unleash your inner rockstar!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${arvo.variable} ${soleil.className} font-arvo bg-black`}
      >
        <Nav
          pages={[
            { name: 'Home', path: '/' },
            { name: 'Programs', path: '/programs' },
            { name: 'Pricing', path: '/pricing' },
            { name: 'Contact', path: '/contact' },
            // { name: 'Team', path: '/team' },
          ]}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}
