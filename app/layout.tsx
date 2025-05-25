//! - Root Layout for the entire site
import './globals.css'
import '/zeta-theme.scss'
import { Arvo } from 'next/font/google'
import localFont from 'next/font/local'
// import lineLogo from '@/public/imgs/logos/Black-Line-Logo.png'
// import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import type { Metadata, Viewport } from 'next'

// * Brand Font for Titles
const soleil = localFont({
  src: [
    // {
    //   path: './fonts/Soleil/Soleil_Extrabold_Italic.otf',
    //   weight: '800',
    //   style: 'italic',
    // },
    // {
    //   path: './fonts/Soleil/Soleil_Extrabold.otf',
    //   weight: '800',
    //   style: 'normal',
    // },
    // {
    //   path: './fonts/Soleil/Soleil_Bold_Italic.otf',
    //   weight: '700',
    //   style: 'italic',
    // },
    {
      path: './fonts/Soleil/Soleil_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    // {
    //   path: './fonts/Soleil/Soleil_Book_Italic.otf',
    //   weight: '500',
    //   style: 'italic',
    // },
    // {
    //   path: './fonts/Soleil/Soleil_Book.otf',
    //   weight: '500',
    //   style: 'normal',
    // },
    // {
    //   path: './fonts/Soleil/Soleil_Italic.otf',
    //   weight: '400',
    //   style: 'italic',
    // },
    {
      path: './fonts/Soleil/Soleil_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    // {
    //   path: './fonts/Soleil/Soleil_Light.otf',
    //   weight: '300',
    //   style: 'normal',
    // },
    // {
    //   path: './fonts/Soleil/Soleil_Light_Italic.otf',
    //   weight: '300',
    //   style: 'italic',
    // },
  ],
  display: 'swap',
  preload: true,
  variable: '--font-soleil',
})

// * Body Font
const arvo = Arvo({
  subsets: ['latin'],
  variable: '--font-arvo',
  display: 'swap',
  preload: true,
  weight: ['400', '700'],
})

// --- Define Metadata in Root Layout ---
export const metadata: Metadata = {
  // Set the base URL for the entire application
  metadataBase: new URL('https://rockstarslaverne.com'), // Use your production domain

  // You can set default titles, descriptions, etc., here
  // These can be overridden by individual pages
  title: {
    default: 'Rockstars of Tomorrow La Verne', // Default title if page doesn't specify
    template: '%s | Rockstars of Tomorrow La Verne', // Template for page titles (e.g., "Summer Camp | Rockstars of Tomorrow La Verne")
  },
  description:
    "La Verne's premier music school for lessons, band programs, and performance coaching. All ages welcome!", // Default description
  // Add default openGraph/twitter images (like your logo) here if desired
  openGraph: {
    images: ['/default-og-image.png'], // Provide a default social image path
  },
}

// Viewport for theme color etc. (Best practice is often in root layout, but can be page-specific)
export const viewport: Viewport = {
  themeColor: '#5b0707',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${arvo.variable} ${soleil.variable}`}>
      <head>
        <link rel='preconnect' href='https://api.leadconnectorhq.com' />
        <link rel='preconnect' href='https://link.msgsndr.com' />
      </head>
      <body className='font-arvo bg-black min-h-screen flex flex-col'>
        <Suspense fallback={<div>Loading...</div>}>
          <Nav
            pages={[
              { name: 'Home', path: '/' },
              { name: 'Programs', path: '/programs' },
              { name: 'Pricing', path: '/pricing' },
              { name: 'Summer Camp', path: '/summer-camp' },
              { name: 'Contact', path: '/contact' },
              // {
              //   name: 'More', // This will be the dropdown trigger
              //   subPages: [
              //     { name: 'Support', path: '/support' },
              //     { name: 'Gallery', path: '/gallery' },
              //     { name: 'Services', path: '/services' },
              //     { name: 'About Us', path: '/about' },
              //   ],
              // },
            ]}
          />
        </Suspense>
        {children}
        {/* Google Analytics */}
        <Script
          id='gtag-script'
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=G-PZ2V2Q2WL2`}
        />
        <Script id='gtag-config-script' strategy='lazyOnload'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PZ2V2Q2WL2');
          `}
        </Script>
        <Footer />
      </body>
    </html>
  )
}
