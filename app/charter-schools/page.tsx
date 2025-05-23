import type { Metadata } from 'next'
import Header from '@/components/Header'
import Script from 'next/script'
import SectionOverview from '@/components/SectionOverview'
import CharterSchoolPrices from '@/components/CharterSchoolPrices'
import FAQs from '@/components/FAQs'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import Link from 'next/link'

const pageUrl = '/charter-schools' // Relative to metadataBase
const businessName = 'Rockstars of Tomorrow - La Verne'
const city = 'La Verne'
const state = 'CA'
const charterImage = '/imagen/band-10.jpg'
const charterImageAlt = `Music lessons for charter school students at ${businessName} in ${city}`

export const metadata: Metadata = {
  title: `Charter School Music Programs in ${city}, ${state} | ${businessName}`,
  description: `Use your charter school funds for music lessons at ${businessName}! We partner with Sage Oak, Granite Mountain, Elite Academic, Blue Ridge, Sky Mountain, Innovations & Peak Prep. Learn guitar, drums, vocals & more.`,
  keywords: [
    'charter school music lessons',
    'homeschool music programs',
    `${city} charter school vendor`,
    'music education charter funds',
    'Sage Oak music vendor',
    'Granite Mountain music vendor',
    'Elite Academic music vendor',
    'Blue Ridge Academy music vendor',
    'Sky Mountain music vendor',
    'Innovations Learning Academy music vendor',
    'Peak Prep Academy music vendor',
    'guitar lessons charter school',
    'drum lessons charter school',
    'piano lessons charter school',
    'voice lessons charter school',
    `${businessName}`,
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Music Lessons with Charter Funds in ${city} | ${businessName}`,
    description: `Partnering with leading charter schools to make music education accessible. Learn about using your funds for lessons in guitar, drums, vocals, and more at ${businessName}.`,
    url: pageUrl, // Next.js will resolve this with metadataBase
    siteName: businessName,
    images: [
      {
        url: charterImage, // Next.js will resolve this with metadataBase
        width: 1200, // Adjust if your image has different dimensions
        height: 630, // Adjust for standard OG image aspect ratio
        alt: charterImageAlt,
        type: 'image/jpeg', // Or image/png
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Charter School Music Programs | ${businessName} ${city}`,
    description: `Learn how to use your charter school funds for awesome music lessons (guitar, drums, vocals & more) at ${businessName} in ${city}!`,
    images: {
      url: charterImage, // Next.js will resolve this with metadataBase
      alt: charterImageAlt,
    },
  },
}

export default function CharterSchoolsPage(): JSX.Element {
  const faqsForSchema = [
    {
      question: 'Do you accept purchase orders (POs)?',
      answer:
        'Yes! Once you let your student’s teacher know you’d like to use charter funds, they will request a PO for you. The charter school will then notify us when the PO is approved.',
    },
    {
      question: 'Can I combine charter funds with out-of-pocket payments?',
      answer:
        'Yes, if your funds don’t fully cover the lessons you want, you can pay the difference out of pocket. Charter students are required to keep a payment card on file to cover any charges not covered by charter funds.',
    },
    {
      question: 'Do I need to renew my PO each semester?',
      answer:
        'This varies by school, so we recommend checking with your charter school to confirm their renewal policies. Important: It is the responsibility of charter school families to submit a valid PO before the billing cycle begins. If no PO is on file at the start of the billing cycle, the student’s stored payment card will automatically be charged for all scheduled services. Late POs: If a PO is submitted after the billing cycle has started, we can issue a refund minus a $25 service charge. Fund Tracking: We do not send reminders about expiring or depleted charter funds. Families are responsible for monitoring their available balance and submitting new POs as needed.',
    },
    {
      question: 'What if my child’s schedule changes?',
      answer: 'No problem! You can adjust your lesson schedule at any time.',
    },
    {
      question: 'Can I switch instructors if needed?',
      answer:
        'Absolutely! We want every student to have the best learning experience possible.',
    },
    {
      question:
        'Will my child receive the same quality of instruction as other students?',
      answer:
        'Yes! Every student at Rockstars of Tomorrow – La Verne gets top-notch instruction from qualified teachers, customized to their unique learning style and goals.',
    },
    {
      question:
        'Do your instructors have experience teaching charter students?',
      answer:
        'Yes! Our teachers have passed all background and screening requirements necessary for charter school partnerships.',
    },
    {
      question: 'What if my funds run out before the end of the term?',
      answer:
        'You can continue lessons by covering the remaining balance out of pocket. Any services not covered by your charter funds will automatically be charged to your stored payment card. You can track your charter funds balance through your monthly invoice (emailed) or by logging into your student portal.',
    },
    {
      question: 'Are there any hidden costs I should be aware of?',
      answer:
        'We keep things transparent! Rockstars of Tomorrow – La Verne has a clear pricing model with no hidden fees. If you have questions about what your charter school covers, we recommend checking with them directly.',
    },
  ]

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
            name: 'Charter Schools',
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
      logo: `/imgs/logos/rockstars-la-verne-logo-white.png`, // Assuming logoUrl is defined like on homepage
      // IMPORTANT: Copy address, telephone, email, geo, priceRange, sameAs from your homepage structured data for consistency
      // Example (replace with your actual data from homepage schema):
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2855 Foothill Blvd Ste A102',
        addressLocality: 'La Verne',
        addressRegion: 'CA',
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
      priceRange: '$$', // Or your actual price range
      sameAs: [
        // Your social media/directory links
        'https://g.page/r/CR_OFMy86p8OEBM/',
        'https://www.instagram.com/rockstarslaverne/',
        'https://www.facebook.com/rockstarslaverne/',
        'https://www.yelp.com/biz/rockstars-of-tomorrow-la-verne',
      ],
      description: `Rockstars of Tomorrow - La Verne is an approved vendor for multiple charter schools, enabling students to use their educational funds for music lessons (guitar, drums, vocals, piano & more) and band programs in ${city}, ${state}.`,
      knowsAbout: [
        // Listing partner schools
        {
          '@type': 'EducationalOrganization',
          name: 'Sage Oak',
          url: 'https://www.sageoak.education/',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Granite Mountain',
          url: 'https://granitemountainschool.com/',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Elite Academy',
          url: 'https://www.eliteacademic.com/',
        }, // Assuming this is Elite Academic
        {
          '@type': 'EducationalOrganization',
          name: 'Blue Ridge Academy',
          url: 'https://theblueridgeacademy.com/',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Sky Mountain',
          url: 'https://skymountaincs.org/',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Innovations Learning Academy',
          url: 'https://innovationslearningacademy.pusd.org/',
        }, // Full name
        {
          '@type': 'EducationalOrganization',
          name: 'Peak Prep Academy',
          url: 'https://peak-prep.org/',
        }, // Full name
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Charter School Music Programs',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Private Music Lessons for Charter School Students',
              description:
                'One-on-one instruction in guitar, bass, drums, piano, vocals, and ukulele, eligible for charter school funding.',
              provider: {
                '@type': 'EducationalOrganization',
                name: 'Rockstars of Tomorrow - La Verne',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Band Programs for Charter School Students',
              description:
                'Join a band and learn to play with others, eligible for charter school funding.',
              provider: {
                '@type': 'EducationalOrganization',
                name: 'Rockstars of Tomorrow - La Verne',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Music Workshops for Charter School Students',
              description:
                'Specialized workshops on various music topics, eligible for charter school funding.',
              provider: {
                '@type': 'EducationalOrganization',
                name: 'Rockstars of Tomorrow - La Verne',
              },
            },
          },
        ],
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

  // Assuming logoUrl is defined globally or passed as a prop if needed for the EducationalOrganization schema
  const logoUrl = '/imgs/logos/rockstars-la-verne-logo-white.png' // Example, ensure this is correct

  return (
    <>
      <Header
        title='Charter Schools'
        subtitle='Your Music Journey, Funded by Your Charter School'
        customClasses='red-background-1'
      />
      <main className='py-24 background-5'>
        <div className='container flex flex-wrap flex-col md:flex-row justify-between space-y-6'>
          <SectionOverview
            title='Welcome Charter School Students & Families!'
            customClasses='w-full'
          />
          <p className='md:max-w-prose text-foreground pr-6 text-xl leading-relaxed tracking-wider font-bold'>
            Rockstars of Tomorrow – La Verne is an approved vendor for multiple
            charter schools, making it easy for students to access high-quality
            music education using their charter funds. Whether you're looking
            for private lessons, group classes, or band programs, we've got you
            covered—with flexible scheduling and a personalized approach that
            fits your learning style.
          </p>
          <div>
            <h2 className='text-4xl title-font font-bold text-foreground tracking-wider'>
              Our Charter School Partners
            </h2>
            <span className='text-lg'>
              We are currently an approved vendor for the following charter
              schools:
            </span>
            <ul className='list-disc list-inside font-bold text-xl tracking-wider space-y-4 mt-4'>
              <li>
                <Link
                  href='https://www.sageoak.education/'
                  className='inline-flex items-center gap-2 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sage Oak
                  <LiaExternalLinkAltSolid />
                </Link>
              </li>
              <li>
                <Link
                  href='https://granitemountainschool.com/'
                  className='inline-flex items-center gap-2 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Granite Mountain
                  <LiaExternalLinkAltSolid />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.eliteacademic.com/'
                  className='inline-flex items-center gap-2 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Elite Academy
                  <LiaExternalLinkAltSolid />
                </Link>
              </li>
              <li>
                <Link
                  href='https://theblueridgeacademy.com/'
                  className='inline-flex items-center gap-2 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blue Ridge Academy
                  <LiaExternalLinkAltSolid />
                </Link>
              </li>
              <li>
                <Link
                  href='https://skymountaincs.org/'
                  className='inline-flex items-center gap-2 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sky Mountain
                  <LiaExternalLinkAltSolid />
                </Link>
              </li>
              <li>
                <Link
                  href='https://innovationslearningacademy.pusd.org/'
                  className='inline-flex items-center gap-2 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Innovations
                  <LiaExternalLinkAltSolid />
                </Link>
              </li>
              <li>
                <Link
                  href='https://peak-prep.org/'
                  className='inline-flex items-center gap-2 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Peak Prep
                  <LiaExternalLinkAltSolid />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <section className='py-24 red-background-4'>
        <div className='container'>
          <SectionOverview
            title='How It Works'
            subtitle='Getting Started Is Simple'
            separatorColor='accent'
          />
          <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8'>
            {/* Step 1 */}
            <div className='bg-background border p-6 rounded-md shadow-lg'>
              <div className='flex items-baseline space-x-4 mb-4'>
                <span className='text-accent font-bold text-4xl'>1</span>
                <h3 className='text-xl font-bold'>
                  Check that we’re an approved vendor
                </h3>
              </div>
              <p className='text-foreground'>
                Ensure your charter school is listed above. If not, let us know,
                and we’ll work to become an approved vendor.
              </p>
            </div>

            {/* Step 2 */}
            <div className='bg-background border p-6 rounded-md shadow-lg'>
              <div className='flex items-baseline space-x-4 mb-4'>
                <span className='text-accent font-bold text-4xl'>2</span>
                <h3 className='text-xl font-bold text-primary-foreground'>
                  Fill out the form below
                </h3>
              </div>
              <p className='text-foreground'>
                Use the form below to request a free trial lesson and let us
                know which charter school you're affiliated with.
              </p>
            </div>

            {/* Step 3 */}
            <div className='bg-background border p-6 rounded-md shadow-lg'>
              <div className='flex items-baseline space-x-4 mb-4'>
                <span className='text-accent font-bold text-4xl'>3</span>
                <h3 className='text-xl font-bold'>
                  We’ll take care of the rest
                </h3>
              </div>
              <p className='text-foreground'>
                We’ll contact you to confirm your free trial, guide you through
                the enrollment process, and coordinate with your charter school.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id='charter_school_trial_form'
        className='py-24 px-4 sm:px-6 lg:px-8 background-1'
      >
        <SectionOverview
          title='Request a Free Trial Lesson'
          overviewText='Fill out the form below to request a free trial lesson and let us know you’re using charter funds. We’ll contact you to confirm your free trial, guide you through the enrollment process, and coordinate with your charter school.'
        />
        <iframe
          src='https://api.leadconnectorhq.com/widget/form/3lYXfZud480reGDqWrQV'
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '3px',
          }}
          id='inline-3lYXfZud480reGDqWrQV'
          data-layout="{'id':'INLINE'}"
          data-trigger-type='alwaysShow'
          data-trigger-value=''
          data-activation-type='alwaysActivated'
          data-activation-value=''
          data-deactivation-type='neverDeactivate'
          data-deactivation-value=''
          data-form-name='00 La Verne Free Trial Form - Charter School'
          data-height='2315'
          data-layout-iframe-id='inline-3lYXfZud480reGDqWrQV'
          data-form-id='3lYXfZud480reGDqWrQV'
          title='00 La Verne Free Trial Form - Charter School'
        ></iframe>
        <Script src='https://link.msgsndr.com/js/form_embed.js'></Script>
      </section>
      <section className='py-24 background-2'>
        <div className='container'>
          <SectionOverview
            title='Charter School Pricing'
            overviewText='We make it easy for Charter School families! Our Charter School lesson blocks can be used for any Private Lesson, Band Class, or Workshop, making scheduling simple and stress-free.'
            separatorColor='accent'
          />
          <CharterSchoolPrices />
        </div>
        {/* <CharterSchoolPricingLessons /> */}
      </section>
      <section className='py-24 background-4' id='charter_policies'>
        <div className='container'>
          <SectionOverview
            title='Charter School Payment Policies'
            overviewText='Here are some important details to be aware of.'
          />
          <ul className='list-disc pl-6 mt-2 space-y-2 max-w-prose mx-auto'>
            <li>
              <strong>POs must be received before attending lessons.</strong>
            </li>
            <li>
              Must choose a block of lesson time (1 to 12 hours) from our
              charter school rate plans. (See above.)
            </li>
            <li>
              A <strong>credit/debit card must be on file</strong> and will be
              auto-charged on the <strong>1st of each month</strong> for any
              balance not covered by charter funds.
            </li>
            <li>
              Families are responsible for ensuring all necessary POs are
              submitted before each billing cycle begins (1st of each month).
            </li>
            <li>
              Track your charter funds balance through your 
              <strong>monthly invoice</strong> (emailed) or by logging into
              your student portal.{' '}
              <strong>No PO reminder notifications are sent.</strong>
            </li>
            <li>
              If a PO is submitted late (after your card has been charged on the
              1st of the month), <strong>a $25 admin fee applies</strong> to
              refund your card, and processing may take up to 
              <strong>5 days.</strong>
            </li>
            <li>
              <strong>Make-up lessons</strong> are available for cancelations
              made <strong>24+ hours in advance.</strong>
            </li>
            <li>
              Lesson cancelations with 72+ hours' notice (or studio closures)
              are <strong>not charged.</strong>
            </li>
          </ul>
        </div>
      </section>
      <section className='pt-24 background-3'>
        <FAQs
          faqs={[
            {
              question: 'Do you accept purchase orders (POs)?',
              answer:
                'Yes! Once you let your student’s teacher know you’d like to use charter funds, they will request a PO for you. The charter school will then notify us when the PO is approved.',
            },
            {
              question:
                'Can I combine charter funds with out-of-pocket payments?',
              answer:
                'Yes, if your funds don’t fully cover the lessons you want, you can pay the difference out of pocket. Charter students are required to keep a payment card on file to cover any charges not covered by charter funds.',
            },
            {
              question: 'Do I need to renew my PO each semester?',
              answer:
                'This varies by school, so we recommend checking with your charter school to confirm their renewal policies. Important: It is the responsibility of charter school families to submit a valid PO before the billing cycle begins. If no PO is on file at the start of the billing cycle, the student’s stored payment card will automatically be charged for all scheduled services. Late POs: If a PO is submitted after the billing cycle has started, we can issue a refund minus a $25 service charge. Fund Tracking: We do not send reminders about expiring or depleted charter funds. Families are responsible for monitoring their available balance and submitting new POs as needed.',
            },
            {
              question: 'What if my child’s schedule changes?',
              answer:
                'No problem! You can adjust your lesson schedule at any time.',
            },
            {
              question: 'Can I switch instructors if needed?',
              answer:
                'Absolutely! We want every student to have the best learning experience possible.',
            },
            {
              question:
                'Will my child receive the same quality of instruction as other students?',
              answer:
                'Yes! Every student at Rockstars of Tomorrow – La Verne gets top-notch instruction from qualified teachers, customized to their unique learning style and goals.',
            },
            {
              question:
                'Do your instructors have experience teaching charter students?',
              answer:
                'Yes! Our teachers have passed all background and screening requirements necessary for charter school partnerships.',
            },
            {
              question: 'What if my funds run out before the end of the term?',
              answer:
                'You can continue lessons by covering the remaining balance out of pocket. Any services not covered by your charter funds will automatically be charged to your stored payment card. You can track your charter funds balance through your monthly invoice (emailed) or by logging into your student portal.',
            },
            {
              question: 'Are there any hidden costs I should be aware of?',
              answer:
                'We keep things transparent! Rockstars of Tomorrow – La Verne has a clear pricing model with no hidden fees. If you have questions about what your charter school covers, we recommend checking with them directly.',
            },
          ]}
        />
      </section>
      <Script
        id='charter-schools-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
