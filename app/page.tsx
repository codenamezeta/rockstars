// import lineLogo from '@/public/imgs/logos/Black-Line-Logo.png'
import drummerGirl from '@/public/imgs/drummer-girl-1.png'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Benefits from '@/components/Benefits'
import ProgramsOverview from '@/components/ProgramsOverview'
// import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import GHLForm from '@/components/GHLForm'
// import bandOfSix from '../public/imgs/Kids/band-of-six.png'
// import FreeTrialForm from '@/components/FreeTrialForm'

import type { Metadata } from 'next'
import Script from 'next/script'

const businessName = 'Rockstars of Tomorrow La Verne'
const city = 'La Verne'
const state = 'CA'
const mainService = 'Music Lessons'
const secondaryService = 'Band Programs'
const homepageUrl = 'https://rockstarslaverne.com/'
const ogImageUrl = '/imgs/ai/imagen/band-47.jpg' // Choose a strong image URL for social sharing - ideally a photo, not just logo
const logoUrl = '/imgs/logos/rockstars-la-verne-logo-white.png' // Use the logo URL for the favicon and manifest

export const metadata: Metadata = {
  // Title: Prioritize Keywords, Location, Brand (~60 chars)
  title: `${mainService} & ${secondaryService} in ${city}, ${state} | ${businessName}`,
  // Example: "Music Lessons & Band Programs in La Verne, CA | Rockstars of Tomorrow La Verne"

  // Description: Compelling summary, include keywords, location, unique value prop, CTA (~155-160 chars)
  description: `${businessName} offers fun ${mainService.toLowerCase()} (guitar, drums, vocals, piano & more) & rock ${secondaryService.toLowerCase()} for kids, teens & adults in ${city}. Build confidence through live performance! Free trial available.`,

  metadataBase: new URL(homepageUrl), // Set the base URL

  alternates: {
    canonical: '/', // Canonical path for the homepage
  },

  // Keywords: Refined list as an array
  keywords: [
    'music lessons',
    'music school',
    'band programs',
    'rock band',
    'performance coaching',
    `${city}`,
    'California',
    `${city} music lessons`,
    `${city} music school`,
    'guitar lessons',
    'bass lessons',
    'drum lessons',
    'piano lessons',
    'keyboard lessons',
    'voice lessons',
    'singing lessons',
    'ukulele lessons',
    'kids music lessons',
    'teen music lessons',
    'adult music lessons',
    'beginner music lessons',
    'music classes',
    'live performance',
    'music instruction',
    'Rockstars of Tomorrow',
    'Pomona',
    'Claremont',
    'San Dimas',
    'Glendora',
  ],

  // Open Graph (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: `${businessName}: ${mainService} & Performance`, // Slightly different, engaging title
    description: `Learn guitar, drums, vocals & more! Join bands & perform live at our ${city} music school. Fun lessons for all ages. Get your free trial!`, // Social-friendly description
    url: homepageUrl,
    siteName: businessName,
    images: [
      {
        url: ogImageUrl, // Use a strong visual image URL
        width: 1408, // Use actual dimensions if known (example from band-20.jpg)
        height: 768, // Use actual dimensions if known
        alt: `Student rock band performing live at ${businessName}`, // Descriptive alt text
        type: 'image/jpeg', // Specify type
      },
      // Optional: Add logo as a secondary image if desired
      {
        url: logoUrl,
        width: 800,
        height: 600,
        alt: `${businessName} Logo`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: `${mainService} & ${secondaryService} in ${city} | ${businessName}`, // Concise title
    description: `Learn music & rock the stage in ${city}! Fun lessons & band programs for all ages at ${businessName}. #MusicLessons #${city} #RockSchool`, // Concise, with hashtags
    // site: '@YourTwitterHandle', // Optional: Your site's main handle
    // creator: '@YourTwitterHandle', // Optional: Your handle
    images: {
      url: ogImageUrl, // Use the same strong visual
      alt: `Student rock band performing live at ${businessName}`, // Descriptive alt text
    },
  },

  // Robots: Control crawler access
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
  },
  manifest: '/favicons/site.webmanifest',
}

export default function Home() {
  // Structured Data for SEO
  // 1. Define the JSON-LD Data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MusicSchool', // More specific than LocalBusiness
    name: 'Rockstars of Tomorrow La Verne',
    description:
      'Rockstars of Tomorrow La Verne offers customized music lessons (guitar, drums, vocals, piano & more) & rock band programs for kids, teens & adults. Build confidence through live performance!',
    url: 'https://rockstarslaverne.com/',
    telephone: '+1-844-366-8742', // International format preferred
    email: 'laverne@rockstarsoftomorrow.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2855 Foothill Blvd A-102',
      addressLocality: 'La Verne',
      addressRegion: 'CA',
      postalCode: '91750',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // --- IMPORTANT: Get accurate Lat/Long for your address ---
      // --- You can find these using Google Maps ---
      latitude: '34.10969514585363', // Example for La Verne area - REPLACE WITH ACCURATE VALUE
      longitude: '-117.7531820340577', // Example for La Verne area - REPLACE WITH ACCURATE VALUE
    },
    image: `${homepageUrl}${ogImageUrl.startsWith('/') ? ogImageUrl.substring(1) : ogImageUrl}`, // Use the same strong image as OG
    logo: `${homepageUrl}${logoUrl.startsWith('/') ? logoUrl.substring(1) : logoUrl}`, // Use the logo URL
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '11:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '11:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        // Indicate closed by omitting opens/closes or setting specific times like 00:00-00:00
        // Or simply omit the Sunday specification if preferred.
      },
    ],
    priceRange: '$$', // Optional: General price indication (e.g., $, $$, $$$)
    sameAs: [
      // Links to your official profiles
      'https://g.page/r/CR_OFMy86p8OEBM/',
      'https://www.instagram.com/rockstarslaverne/',
      'https://www.facebook.com/rockstarslaverne/',
      'https://www.yelp.com/biz/rockstars-of-tomorrow-la-verne',
      // Add Google Business Profile link if different from website/maps
      // Add other relevant profiles (Twitter, YouTube, etc.)
    ],
    hasOfferCatalog: {
      // Describe main service categories
      '@type': 'OfferCatalog',
      name: 'Music Programs',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Private Music Lessons (Guitar, Bass, Drums, Piano, Vocals, Ukulele)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Band Programs (JamCore, BandCore)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Performance Coaching',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Free Trial Lesson', // Highlight this!
          },
        },
      ],
    },
    // Optional: Add potentialAction for Sitelinks Search Box if you have site search
    // "potentialAction": {
    //   "@type": "SearchAction",
    //   "target": "https://rockstarslaverne.com/?s={search_term_string}",
    //   "query-input": "required name=search_term_string"
    // }
  }
  return (
    <>
      <Hero
        title='Learn to Play & Rock the Stage!'
        subtitle='Discover a music school that nurtures talent and builds life skills through the power of live performance.'
        text='At Rockstars of Tomorrow, we believe everyone deserves their moment in the spotlight. That’s why we offer more than lessons—we provide an experience that transforms your love of music into confidence, creativity, and a lifelong sense of achievement.'
        list={[
          'Play the music you love with instructors who get it',
          'Develop stage presence and confidence with live performances',
          'Enjoy flexible scheduling and expert instruction for any skill level',
          'Join a vibrant community that celebrates creativity and individuality',
        ]}
        image={{
          src: drummerGirl,
          alt: 'Young Woman Drummer',
        }}
      />
      <ProblemSolution />
      <Benefits />
      <ProgramsOverview />
      {/* <Team /> */}
      <Testimonials />
      <Contact />
      <GHLForm />
      {/* <FreeTrialForm /> */}

      <Script
        id='homepage-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
