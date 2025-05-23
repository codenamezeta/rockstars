//* Programs Page
import Header from '@/components/Header'
// import Instruments from '@/components/Instruments'
import { InstrumentsSelector } from '@/components/Instruments'
import Programs from '@/components/Programs'
import FAQs from '@/components/FAQs'
import SectionOverview from '@/components/SectionOverview'
// import { ProgramsComparisonCards } from '@/components/ProgramsComparison'
// import rockstarProImage from '@/public/imgs/band-01.png'
// import Image from 'next/image'
import Script from 'next/script'
import type { Metadata } from 'next'

const pageUrl = '/programs' // Relative to metadataBase
const businessName = 'Rockstars of Tomorrow'
const city = 'La Verne'
const state = 'CA'
const programsOgImage = '/imgs/band-01.png'
const programsOgImageAlt = `Music programs including band classes and private lessons at ${businessName} in ${city}`

export const metadata: Metadata = {
  title: `Music Programs: Band Classes & Lessons in ${city} | ${businessName}`,
  description: `Explore music programs at ${businessName} in ${city}. Offering band classes, private & group lessons for guitar, drums, vocals, piano & more. All ages & skill levels welcome!`,
  keywords: [
    'music programs La Verne',
    'band classes La Verne',
    'private music lessons La Verne',
    'group music lessons',
    'kids music programs',
    'teen music programs',
    'adult music lessons',
    'guitar lessons',
    'drum lessons',
    'piano lessons',
    'voice lessons',
    'ukulele lessons',
    'music school La Verne',
    'learn music',
    'Rockstars of Tomorrow programs',
    businessName,
    city,
    state,
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl, // Next.js will resolve this with metadataBase
    title: `Music Programs & Lessons in ${city} | ${businessName}`,
    description: `Discover band classes, private lessons (guitar, drums, vocals, piano), and group sessions at ${businessName}. Ignite your musical passion!`,
    images: [
      {
        url: programsOgImage, // Next.js will resolve this with metadataBase
        width: 800, // Adjust if your image has different dimensions
        height: 600, // Adjust if your image has different dimensions
        alt: programsOgImageAlt,
        type: 'image/png', // Or image/jpeg
      },
    ],
    siteName: businessName,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    // site: '@YourTwitterHandle', // Add your actual Twitter handle if available
    title: `Explore Music Programs at ${businessName}, ${city}`,
    description: `From beginner lessons to advanced band classes, find your rhythm at ${businessName}. Guitar, drums, vocals, piano & more!`,
    images: {
      url: programsOgImage, // Next.js will resolve this with metadataBase
      alt: programsOgImageAlt,
    },
  },
}

export default function ProgramsPage(): JSX.Element {
  const faqsForSchema = [
    {
      question: 'What instruments are offered in band classes?',
      answer:
        'We’re all about guitar, bass, drums, keys, and vocals. But if you’ve got a violin, ukulele, or sax that’s itching to join the fun, we’re game.',
    },
    {
      question: 'Can I bring my own instrument?',
      answer:
        'Heck yeah! Unless you’re a drummer or pianist—we’ve got those rigs on lock. But if it’s portable, bring your axe, your sticks, or whatever you need to slay.',
    },
    {
      question: 'What genres or styles of music do you teach?',
      answer:
        'Whether you’re into smashing power chords or soaring melodies, we’ve got you. Rock, Pop, Metal, Blues, Hip Hop, Jazz—whatever gets you hyped, we’ll teach you how to own it. Your style, your rules.',
    },
    {
      question: 'What is the age range for your students?',
      answer:
        'From diaper drummers to silver-haired shredders, we welcome everyone. Most of our students are 7 to 17, but we say if you’ve got a pulse, you’re ready to rock.',
    },
    {
      question: 'What is your experience level requirement?',
      answer:
        'None. Zero. Zilch. Whether you’ve never touched an instrument or you’re already ripping solos, we’ll meet you where you’re at and take you even further.',
    },
    {
      question: 'What methods or curriculum do you use?',
      answer:
        'We’re not here for boring drills and stuffy theory. Our RockStart program gets you stage-ready in six months. You’ll jam out with a real band and master four songs while feeling like an absolute legend. Private lessons + live band vibes = the ultimate rockstar experience.',
    },
    {
      question: 'What is the typical lesson structure?',
      answer:
        'It’s all about you. Private lessons (30-60 minutes) customized for your goals, plus live band classes to sharpen your skills. No cookie-cutter stuff—just a plan that makes you unstoppable.',
    },
    {
      question: 'Do you offer group lessons?',
      answer:
        'Heck yeah! Why jam alone when you can rock out with your friends or family? Convert any private lesson into a group sesh for a small fee. Because music is a team sport.',
    },
    {
      question: 'How often are lessons?',
      answer:
        'Most of our rockers do one private lesson and one band class a week. Need more? Less? A custom setup? Let’s crank it up to fit your vibe.',
    },
    {
      question: 'What if I need to reschedule a lesson?',
      answer:
        'No sweat. Life happens—just give us 24 hours’ notice, and we’ll reschedule or line up a substitute instructor to keep your groove alive.',
    },
    {
      question: 'What is the format of band classes?',
      answer:
        'RockStart: Beginner jams once a month—perfect for new rockers. JamCore: Intermediate bands meet weekly and hit the stage every 8 weeks. BandCore: Advanced rock warriors rehearse weekly and crush two epic gigs every 12 weeks. RockStar Pro: Go custom—your schedule, your band, your dream.',
    },
    {
      question: 'What is the performance schedule for band classes?',
      answer:
        'RockStart: Studio shows every month—your first step to stardom. JamCore: Local venue gigs every 8 weeks. BandCore: Two blowout venue shows every 12 weeks. RockStar Pro: Whenever, wherever—this is your stage to own.',
    },
    {
      question: 'Do you offer ensemble coaching?',
      answer:
        'Absolutely. Whether it’s your band, your group, or just you, we’ll get you stage-ready for your next big gig or recording session.',
    },
  ]

  // Ensure logoUrl is defined, e.g., from a shared constants file or defined here
  const logoUrl = '/imgs/logos/rockstars-la-verne-logo-white.png' // Example, ensure this is correct

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: metadata.title, // Uses the title from your metadata
      description: metadata.description, // Uses the description from your metadata
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
            name: 'Music Programs',
            item: `https://rockstarslaverne.com${pageUrl}`,
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Rockstars of Tomorrow - La Verne',
      url: 'https://rockstarslaverne.com/',
      logo: `https://rockstarslaverne.com${logoUrl}`,
      // IMPORTANT: Copy address, telephone, email, geo, priceRange, sameAs from your homepage structured data for consistency
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2855 Foothill Blvd Ste A102', // Replace with actual if different
        addressLocality: city,
        addressRegion: state,
        postalCode: '91750', // Replace with actual
        addressCountry: 'US',
      },
      telephone: '+1-844-366-8742', // Replace with actual
      email: 'laverne@rockstarsoftomorrow.com', // Replace with actual
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '34.10969514585363', // Replace with actual
        longitude: '-117.7531820340577', // Replace with actual
      },
      priceRange: '$$', // Or your actual price range
      sameAs: [
        // Your social media/directory links
        'https://g.page/r/CR_OFMy86p8OEBM/',
        'https://www.instagram.com/rockstarslaverne/',
        'https://www.facebook.com/rockstarslaverne/',
        'https://www.yelp.com/biz/rockstars-of-tomorrow-la-verne',
      ],
      description: `Music school in ${city}, ${state} offering a variety of programs including band classes, private lessons, and group sessions for all ages and skill levels.`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Band Classes',
      description:
        "We offer a variety of programs designed to ignite your musical passion and turn you into a confident, stage-ready rockstar! Whether you're a young beginner just starting out, or a seasoned player looking to refine your skills and rock out with a band, we have the perfect program to help you achieve your musical goals.",
      provider: {
        '@type': 'EducationalOrganization',
        name: businessName,
        url: 'https://rockstarslaverne.com/', // Main site URL
      },
      courseCode: 'BAND-PROGRAMS',
      audience: {
        '@type': 'Audience',
        audienceType: [
          'Students',
          'Musicians',
          'Beginners',
          'Intermediate Players',
          'Advanced Players',
          'Kids',
          'Teens',
          'Adults',
        ],
      },
      teaches: [
        'performance skills',
        'collaborative music-making',
        'instrumental skills',
        'vocal skills',
        'music theory',
        'songwriting',
        'ensemble playing',
        'music appreciation',
        'improvisation',
        'music history',
        'music genres',
        'music styles',
        'music culture',
        'music technology',
        'music production',
        'composition',
        'arrangement',
        'ear training',
        'sight-reading',
        'rhythm',
        'melody',
        'harmony',
        'dynamics',
        'tempo',
        'phrasing',
        'articulation',
        'expression',
        'performance',
        'rehearsal',
        'practice',
        'performance anxiety',
        'stage presence',
        'audience engagement',
        'collaboration',
        'teamwork',
        'communication',
        'creativity',
        'problem-solving',
        'critical thinking',
        'self-expression',
        'self-confidence',
      ],
      keywords:
        'band classes, rock band, music ensemble, live performance, songwriting, RockStart, JamCore, BandCore, RockStar Pro',
      offers: {
        '@type': 'Offer',
        category: 'Music Program',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://rockstarslaverne.com/pricing#classes_pricing', // Link to relevant pricing section
        seller: {
          '@type': 'EducationalOrganization',
          name: 'Rockstars of Tomorrow - La Verne',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Private Music Lessons',
      description:
        'Rockstars Of Tomorrow lesson plans are custom-tailored for every student’s unique goals. This means no matter what you want to learn, whether it’s rock, pop, punk, blues, acoustic, alternative, metal, reggae, folk, country or anything in between, you know you are going to learn the way the pros do – by studying those great artists who inspire you to succeed. Take a look at a few of the instruments we specialize in.',
      provider: {
        '@type': 'EducationalOrganization',
        name: businessName,
        url: 'https://rockstarslaverne.com/',
      },
      courseCode: 'PRIVATE-LESSONS',
      audience: {
        '@type': 'Audience',
        audienceType: [
          'Students',
          'Musicians',
          'Beginners',
          'Intermediate Players',
          'Advanced Players',
          'Kids',
          'Teens',
          'Adults',
        ],
      },
      teaches: [
        // More specific than keywords for what is taught
        'Guitar',
        'Bass Guitar',
        'Drums',
        'Piano',
        'Keyboard Instruments',
        'Singing',
        'Voice',
        'Ukulele',
        'Music Theory',
        'Songwriting',
        'Performance Skills',
      ],
      keywords:
        'private lessons, music instruction, guitar lessons, drum lessons, piano lessons, voice lessons, ukulele lessons, one-on-one music, personalized music education',
      offers: {
        '@type': 'Offer',
        category: 'Music Lessons',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://rockstarslaverne.com/pricing#lessons_pricing',
        seller: {
          '@type': 'EducationalOrganization',
          name: 'Rockstars of Tomorrow - La Verne',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Group Music Lessons',
      description:
        'Learn music with friends or family! Convert private lessons into group sessions. A fun and collaborative way to develop your musical skills.',
      provider: {
        '@type': 'EducationalOrganization',
        name: businessName,
        url: 'https://rockstarslaverne.com/',
      },
      courseCode: 'GROUP-LESSONS',
      audience: {
        '@type': 'Audience',
        audienceType: [
          'Students',
          'Musicians',
          'Kids',
          'Teens',
          'Adults',
          'Families',
        ],
      },
      teaches: [
        'Guitar',
        'Bass Guitar',
        'Drums',
        'Piano',
        'Keyboard Instruments',
        'Singing',
        'Voice',
        'Ukulele',
      ],
      keywords:
        'group lessons, music classes, collaborative learning, family music lessons',
      offers: {
        '@type': 'Offer',
        category: 'Music Lessons', // Or 'Music Program'
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://rockstarslaverne.com/pricing#lessons_pricing', // Adjust anchor if needed
        seller: {
          '@type': 'EducationalOrganization',
          name: 'Rockstars of Tomorrow - La Verne',
        },
      },
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
      <Header
        title='Programs'
        subtitle='Your path to Rockstardom!'
        customClasses='red-background-4'
      />

      <section id='band_classes' className='background-5 py-24'>
        <div className='text-center container'>
          {/* <Image
            src={rockstarProImage}
            alt='Rockstar Pro'
            className='w-full -mt-24'
          /> */}
          <SectionOverview
            title='Band Classes'
            overviewText="We offer a variety of programs designed to ignite your musical
            passion and turn you into a confident, stage-ready rockstar! Whether
            you're a young beginner just starting out, or a seasoned player
            looking to refine your skills and rock out with a band, we have the
            perfect program to help you achieve your musical goals."
          />
        </div>

        <Programs />
      </section>
      <section className='background-5' id='private_lessons'>
        <div className='container px-5 py-24 mx-auto'>
          <div id='lessons' className='text-center mb-20'>
            <SectionOverview
              title='Private & Group Lessons'
              overviewText='Rockstars Of Tomorrow lesson plans are custom-tailored for every
              student’s unique goals. This means no matter what you want to
              learn, whether it’s rock, pop, punk, blues, acoustic, alternative,
              metal, reggae, folk, country or anything in between, you know you
              are going to learn the way the pros do – by studying those great
              artists who inspire you to succeed. Take a look at a few of the
              instruments we specialize in.'
            />
          </div>
          <InstrumentsSelector />
        </div>
      </section>

      {/* <ProgramsComparisonCards /> */}

      <section className='py-24 background-3'>
        {/* <SectionOverview title='FAQs' /> */}
        <FAQs faqs={faqsForSchema} />
      </section>
      <Script
        id='programs-page-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
