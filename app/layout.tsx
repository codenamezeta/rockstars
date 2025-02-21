// - Root Layout for the entire site
import './globals.css'
import '/zeta-theme.scss'
import { Arvo } from 'next/font/google'
import localFont from 'next/font/local'
import lineLogo from '@/public/imgs/logos/Black-Line-Logo.png'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
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
  icons: {
    icon: '/favicons/favicon.ico', // Path to your favicon.ico in the public directory
    apple: '/favicons/apple-touch-icon.png', // Path to your apple-touch-icon.png in the public directory
    other: {
      rel: 'apple-touch-icon-precomposed', // For older iOS versions if needed
      url: '/favicons/apple-touch-icon.png',
    },
    shortcut: {
      rel: 'shortcut icon', // For some browsers, though 'icon' rel is generally sufficient now
      url: '/favicons/favicon.ico',
    },
    // You can specify different sizes for PNG favicons if needed, but 'icon' usually handles standard sizes
    // 32x32 and 16x16 are often automatically picked up if named correctly (favicon-32x32.png, etc.)
    // icon: [
    //   { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    //   { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    // ],
  },
  manifest: '/favicons/site.webmanifest',
  keywords:
    'music lessons, music classes, music school, music instruction, music performance, music coaching, music, California, La Verne, Pomona, Claremont, San Dimas, Glendora, Covina, Upland, Rancho Cucamonga, Ontario, Fontana, Rialto, Riverside, San Bernardino, Inland Empire, locations, cost, price, pricing, reddit, yelp, facebook, instagram, google, twitter, social media, review, grease, beginners, intermediate, advanced, online, guitar, bass, drums, keyboards, vocals, singing, voice, synth, percussion, piano, ukulele, songwriting, song writing, audio, production, engineering, workshops, rock, metal, pop, alternative, punk, blues, modern, learn, play, fun, exciting, new, child, children, kid, kids, teen, teens, adult, adults, band, group, performance, venue, stage, jam, session, recording, studio, live, show, concert, event,',
  openGraph: {
    title: 'Rockstars of Tomorrow - La Verne',
    description:
      'From music lessons to performance coaching, Rockstars of Tomorrow in La Verne is the neighborhood music school that will unleash your inner rockstar!',
    images: [
      {
        url: lineLogo.src,
        width: 800,
        height: 600,
        alt: 'Rockstars of Tomorrow - La Verne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rockstars of Tomorrow - La Verne',
    description:
      'From music lessons to performance coaching, Rockstars of Tomorrow in La Verne is the neighborhood music school that will unleash your inner rockstar!',
    images: [lineLogo.src],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${arvo.variable} ${soleil.className} font-arvo bg-black min-h-screen flex flex-col`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Nav
            pages={[
              { name: 'Home', path: '/' },
              { name: 'Programs', path: '/programs' },
              { name: 'Pricing', path: '/pricing' },
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
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=G-PZ2V2Q2WL2`}
        />
        <Script id='gtag-config-script' strategy='afterInteractive'>
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
