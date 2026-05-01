import PricingClasses from '@/components/PricingClasses'
import PricingLessons from '@/components/PricingLessons'
import FAQs from '@/components/FAQs'
import Header from '@/components/Header'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { FiExternalLink } from 'react-icons/fi'

import Script from 'next/script'
import type { Metadata } from 'next'

const pageUrl = '/pricing' // Relative to metadataBase
const businessName = 'Rockstars of Tomorrow'
const city = 'La Verne'
const state = 'CA'
const pricingOgImage = '/imagen/band-03.jpg'
const pricingOgImageAlt = `Music lesson and band program pricing at ${businessName} in ${city}`
const logoUrl = '/imgs/logos/rockstars-la-verne-logo-white.png' // Ensure this is correct

export const metadata: Metadata = {
  title: `Music Lesson & Program Pricing in ${city} | ${businessName}`,
  description: `Find transparent pricing for private music lessons, band classes, and group sessions at ${businessName} in ${city}. Affordable packages available to fit your budget.`,
  keywords: [
    'music lesson prices La Verne',
    'band class cost La Verne',
    'Rockstars of Tomorrow pricing',
    'music school fees La Verne',
    'guitar lesson cost',
    'drum lesson price',
    'piano lesson packages',
    'voice lesson tuition',
    'affordable music lessons',
    businessName,
    city,
    state,
    'pricing',
    'cost',
    'tuition',
    'packages',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl, // Next.js will resolve this with metadataBase
    title: `Affordable Music Lesson & Program Pricing | ${businessName}, ${city}`,
    description: `Check out our clear pricing for music lessons (guitar, drums, piano, vocals) and band programs at ${businessName}. Packages designed for every rockstar!`,
    images: [
      {
        url: pricingOgImage, // Next.js will resolve this with metadataBase
        width: 1200, // Adjust if your image has different dimensions
        height: 630, // Adjust for standard OG image aspect ratio
        alt: pricingOgImageAlt,
        type: 'image/jpeg', // Or image/png
      },
    ],
    siteName: businessName,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Music Program Pricing - ${businessName} | ${city}, ${state}`,
    description: `Transparent and affordable pricing for all music lessons and band programs at ${businessName}. Find the perfect package for you!`,
    images: {
      url: pricingOgImage, // Next.js will resolve this with metadataBase
      alt: pricingOgImageAlt,
    },
  },
}

export default function pricing() {
  const faqsForSchema = [
    {
      question: 'What is your cancellation policy?',
      answer:
        'Cancel your plan, cancel your lesson—whatever. Just give us 24 hours’ notice, and we’ll handle it. Plus, you get a free make-up lesson, because we’re cool like that.',
    },
    {
      question: 'What is your refund policy?',
      answer:
        'Had to pump the brakes? No problem. Cancel anytime with 24 hours’ notice, and we’ll refund you for what you didn’t use (minus a 10% processing fee). Or leave your credit with us—it’s waiting whenever you’re ready to make noise again.',
    },
    {
      question: 'Can I change my billing date?',
      answer:
        'Absolutely. By default, we hit your card on the 1st of the month to cover all your upcoming lessons, but hey, we’re flexible. Want a different date? No problem. Pick a date that fits your rhythm, and we’ll make sure your payment covers all the lessons between then and your next billing cycle. Easy, breezy, rockstar style.',
    },
    {
      question: 'Do you offer group lessons?',
      answer:
        'Oh yeah! Why jam alone when you can rock out with your friends or family? Convert any private lesson into a group sesh for a small fee. Because music is a team sport.',
    },
    {
      question: 'How often are lessons?',
      answer:
        'Most of our rockers do one private lesson and one band class a week. Need more? Less? A custom setup? No problem! Let us know how we can help.',
    },
    {
      question: 'What if I need to reschedule a lesson?',
      // Ensure this answer is filled in if it's missing in your actual code
      answer:
        'Life happens! Just give us at least 24 hours’ notice, and we’ll work with you to reschedule your lesson or arrange a substitute instructor if needed.',
    },
  ]

  //! --- DEFINE PRICING PACKAGES HERE ---

  const privateLessonPackages = [
    {
      id: 'private_30min_monthly', // For linking from Programs page if needed
      name: 'Monthly Private Lessons (30-mins)',
      description:
        'Weekly 30-minute private lessons. Ideal for focused, individual instruction.',
      price: '165', // Example price
      billingIncrement: 'Month',
      itemOfferedName: '30-Minute Private Music Lessons',
      itemOfferedDescription:
        'Personalized 30-minute lessons for guitar, bass, drums, piano, vocals.',
      programPageUrl: `https://rockstarslaverne.com/programs`,
    },
    {
      id: 'private_45min_monthly', // For linking from Programs page if needed
      name: 'Monthly Private Lessons (45-mins)',
      description:
        'Weekly 45-minute private lessons. Ideal for focused, individual instruction.',
      price: '245',
      billingIncrement: 'Month',
      itemOfferedName: '45-Minute Private Music Lessons',
      itemOfferedDescription:
        'Personalized 45-minute lessons for guitar, bass, drums, piano, vocals.',
      programPageUrl: `https://rockstarslaverne.com/programs`,
    },
    {
      id: 'private_60min_monthly', // For linking from Programs page if needed
      name: 'Monthly Private Lessons (60-mins)',
      description:
        'Weekly 60-minute private lessons. Ideal for focused, individual instruction.',
      price: '320',
      billingIncrement: 'Month',
      itemOfferedName: '60-Minute Private Music Lessons',
      itemOfferedDescription:
        'Personalized 60-minute lessons for guitar, bass, drums, piano, vocals.',
      programPageUrl: `https://rockstarslaverne.com/programs`,
    },
    // Add more private lesson packages if you have them (e.g., drop-in rates, longer packages)
  ]

  const bandClassPackages = [
    {
      id: 'rockstart',
      name: 'RockStart Band Program',
      description:
        'RockStart gets you ready to rock in just six months! Our beginner band program is designed to have students performing up to four pre-selected hit songs with confidence. Includes printed and digital sheet music, and custom audio tracks accessible through our student portal, learning and practicing is fun and effortless. Students perfect each song with their private instructor, rehearse and practice at home, and then meet monthly for a live band jam in our studio’s Live Room. After mastering all four songs, graduates are ready to level up to our JamCore band class.',
      price: '49',
      billingIncrement: 'Class',
      itemOfferedName: 'RockStart Band Program',
      itemOfferedDescription:
        'Beginner band class focusing on fundamentals and playing together.',
      programPageUrl: `https://rockstarslaverne.com/programs`,
    },
    {
      id: 'jamcore',
      name: 'JamCore Band Program',
      description:
        "Designed for intermediate level students who are ready to take the stage. JamCore is your chance to experience the excitement of playing live with other musicians! In this program, you'll collaborate with classmates of similar skill levels to learn assigned songs chosen by your instructor. Each week, you'll rehearse these songs in a structured environment, focusing on developing your musicianship and teamwork. The program culminates in a live performance at a local venue, giving you the ultimate payoff – the thrill of rocking out in front of a real audience!",
      price: '158',
      billingIncrement: 'Session',
      itemOfferedName: 'JamCore Band Program',
      itemOfferedDescription:
        'Intermediate band class with performance opportunities.',
      programPageUrl: `https://rockstarslaverne.com/programs`,
    },
    {
      id: 'bandcore',
      name: 'BandCore Band Program',
      description:
        'Advanced band program with weekly rehearsals and multiple epic venue shows.',
      price: '297',
      billingIncrement: 'Session',
      itemOfferedName: 'BandCore Band Program',
      itemOfferedDescription:
        "Are you an experienced musician looking to push your boundaries and develop your own unique sound? BandCore is designed to take your musical journey to the next level! This program is all about collaboration and creative expression. You'll get to form your own band with classmates who share your musical tastes, allowing you to choose songs you're passionate about (with guidance from your instructor). BandCore has extended session lengths compared to JamCore, giving you more time to conquer more challenging material, hone your skills as a band, and truly own your sound. The BandCore program culminates in not just one, but two electrifying live shows at local venues, putting your hard work on display for the world to see!",
      programPageUrl: `https://rockstarslaverne.com/programs`,
    },
    {
      id: 'bandcore',
      name: 'BandCore Band Program',
      description:
        "Advanced band program with weekly rehearsals and multiple epic venue shows. You'll get to form your own band with classmates who share your musical tastes, allowing you to choose songs you're passionate about (with guidance from your instructor). BandCore has extended session lengths compared to JamCore, giving you more time to conquer more challenging material, hone your skills as a band, and truly own your sound. The BandCore program culminates in not just one, but two electrifying live shows at local venues, putting your hard work on display for the world to see!",
      price: '297', // Ensure this price is correct for BandCore
      billingIncrement: 'Session', // Or 'Month' if it's a monthly fee for the session
      itemOfferedName: 'BandCore Band Program',
      itemOfferedDescription:
        'Advanced band class for experienced musicians focusing on collaboration, creative expression, and multiple live venue performances.',
      programPageUrl: `https://rockstarslaverne.com/programs#bandcore`, // Specific anchor
    },
    {
      id: 'rockstar_pro',
      name: 'Rockstar Pro Program (Custom)',
      description:
        'Rockstar Pro is the ultimate one-of-a-kind band program fully customizable just for you and your chosen band mates. Whether you’re a seasoned performer or just starting out, this program is designed to help you take your music to the next level. You’ll get to perform at local venues, festivals, and more, and you’ll have the opportunity to build your ideal setlist and work on any music you want, including originals. With personalized instruction and guidance from an instructor of your choice, you’ll have the freedom to explore your musical interests and develop your own unique sound. Rockstar Pro is an ongoing program, so you can continue for as long as you and your bandmates wish, with discounts on recording time, photoshoots, and more.',
      // No 'price' field here, or use a placeholder in priceSpecification.description
      billingIncrement: 'Custom',
      itemOfferedName: 'Rockstar Pro Custom Program',
      itemOfferedDescription:
        'Bespoke music program for serious musicians focusing on professional development, recording, and high-level performance. Contact for consultation and custom pricing.',
      programPageUrl: `https://rockstarslaverne.com/programs`,
    },
  ]

  // --- END OF PRICING PACKAGE DEFINITIONS ---

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: metadata.title,
      description: metadata.description,
      url: `https://rockstarslaverne.com${pageUrl}`,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://rockstarslaverne.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Pricing',
            item: `https://rockstarslaverne.com${pageUrl}`,
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: businessName,
      url: 'https://rockstarslaverne.com/',
      logo: `https://rockstarslaverne.com${logoUrl}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2855 Foothill Blvd Ste A102',
        addressLocality: city,
        addressRegion: state,
        postalCode: '91750',
        addressCountry: 'US',
      },
      telephone: '+1-844-366-8742',
      email: 'laverne@rockstarsoftomorrow.com',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '34.10969514585363',
        longitude: '-117.7531820340577',
      },
      priceRange: '$$', // Adjust based on your overall pricing
      sameAs: [
        'https://g.page/r/CR_OFMy86p8OEBM/',
        'https://www.instagram.com/rockstarslaverne/',
        'https://www.facebook.com/rockstarslaverne/',
        'https://www.yelp.com/biz/rockstars-of-tomorrow-la-verne',
      ],
    },
    // Offer Catalog for Private Lessons
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Private Music Lesson Packages',
      itemListElement: privateLessonPackages.map((pkg) => ({
        '@type': 'Offer',
        name: pkg.name,
        description: pkg.description,
        url: `https://rockstarslaverne.com${pageUrl}#${pkg.id}`, // Anchor link to this specific offer on the pricing page
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: pkg.price,
          priceCurrency: 'USD',
          valueAddedTaxIncluded: false, // Assuming VAT is not included
          billingIncrement: pkg.billingIncrement,
        },
        itemOffered: {
          '@type': 'Service', // Could also be Product if it's a defined package
          name: pkg.itemOfferedName,
          description: pkg.itemOfferedDescription,
          url: pkg.programPageUrl, // Link to the program page section
          provider: { '@type': 'EducationalOrganization', name: businessName },
        },
        category: 'Private Music Lessons',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'EducationalOrganization', name: businessName },
      })),
    },
    // Offer Catalog for Band Classes
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Band Class Program Packages',
      itemListElement: bandClassPackages.map((pkg) => ({
        '@type': 'Offer',
        name: pkg.name,
        description: pkg.description, // This description will be important for Rockstar Pro
        url: `https://rockstarslaverne.com${pageUrl}#${pkg.id}`,
        priceSpecification:
          (
            pkg.price // Check if price exists before creating PriceSpecification
          ) ?
            {
              '@type': 'PriceSpecification',
              price: pkg.price,
              priceCurrency: 'USD',
              valueAddedTaxIncluded: false,
              billingIncrement: pkg.billingIncrement,
            }
          : {
              // For Rockstar Pro or other custom priced items
              '@type': 'PriceSpecification',
              priceCurrency: 'USD',
              description:
                'Pricing is custom and available upon consultation. Please contact us.', // Explicitly state custom pricing
              valueAddedTaxIncluded: false, // Or true if applicable
            },
        itemOffered: {
          '@type': 'Service',
          name: pkg.itemOfferedName,
          description: pkg.itemOfferedDescription,
          url: pkg.programPageUrl,
          provider: { '@type': 'EducationalOrganization', name: businessName },
        },
        category: 'Band Programs',
        availability: 'https://schema.org/InStock', // Still available, just custom priced
        seller: { '@type': 'EducationalOrganization', name: businessName },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqsForSchema.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ]

  return (
    <>
      <Header title='Pricing' customClasses='red-background-3' />
      <PricingLessons />
      <PricingClasses />
      <section className='py-12 background-3'>
        <FAQs
          faqs={[
            {
              question: 'What is your cancellation policy?',
              answer:
                'Cancel your plan, cancel your lesson—whatever. Just give us 24 hours’ notice, and we’ll handle it. Plus, you get a free make-up lesson, because we’re cool like that.',
            },
            {
              question: 'What is your refund policy?',
              answer:
                'Had to pump the brakes? No problem. Cancel anytime with 24 hours’ notice, and we’ll refund you for what you didn’t use (minus a 10% processing fee). Or leave your credit with us—it’s waiting whenever you’re ready to make noise again.',
            },
            {
              question: 'Can I change my billing date?',
              answer:
                'Absolutely. By default, we hit your card on the 1st of the month to cover all your upcoming lessons, but hey, we’re flexible. Want a different date? No problem. Pick a date that fits your rhythm, and we’ll make sure your payment covers all the lessons between then and your next billing cycle. Easy, breezy, rockstar style.',
            },
            {
              question: 'Do you offer group lessons?',
              answer:
                'Oh yeah! Why jam alone when you can rock out with your friends or family? Convert any private lesson into a group sesh for a small fee. Because music is a team sport.',
            },
            {
              question: 'How often are lessons?',
              answer:
                'Most of our rockers do one private lesson and one band class a week. Need more? Less? A custom setup? No problem! Let us know how we can help.',
            },
            {
              question: 'What if I need to reschedule a lesson?',
              answer: (
                <>
                  <p>
                    No sweat. Life happens—just give us 24 hours’ notice, and
                    we’ll reschedule or line up a substitute instructor to keep
                    your groove alive.
                  </p>
                  <p>
                    You can also manage and view your lesson schedule from your
                    student portal.
                  </p>
                  <Link
                    href='https://app.mymusicstaff.com/'
                    className={`${buttonVariants({ variant: 'outline', size: 'sm' })} mt-4`}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    Access Student Portal <FiExternalLink />
                  </Link>
                </>
              ),
            },
          ]}
        />
      </section>
      <Script
        id='pricing-page-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
