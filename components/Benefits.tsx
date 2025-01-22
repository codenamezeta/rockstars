import Image from 'next/image'
import rockstar from '../public/imgs/Kids/Teen Girl with Guitar.png'
import Link from 'next/link'
import SectionOverview from './SectionOverview'

export default function Benefits(): JSX.Element {
  return (
    <section
      id='benefits'
      className='py-24 px-6 md:px-auto text-white body-font bg-background'
    >
      <SectionOverview
        title='Learn the Rockstar Way!'
        overviewText="Frustrated with traditional music schools that don't cater to your
            rock n' roll dreams? Rockstars of Tomorrow is different. We're
            dedicated to providing aspiring young musicians like you with
            the unique and immersive learning experience you crave. Here's what
            sets us apart:"
      />
      <div className='container px-5 mx-auto flex flex-wrap '>
        <div className='lg:w-1/2 w-full'>
          <Image
            alt='rockstar kid'
            className='object-cover object-center -mb-32 md:-mb-44 lg:-mb-56'
            src={rockstar}
          />
        </div>
        <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center text-lg'>
          <div className='flex flex-col mb-10 lg:items-start items-center'>
            <div className='flex-grow'>
              <h2 className='text-accent text-2xl title-font font-medium mb-3'>
                Performance Opportunities Galore
              </h2>
              <p className='leading-relaxed'>
                At Rockstars of Tomorrow, we offer regular live performance
                opportunities at top venues in La Verne and nearby communities.
                Build your confidence, gain real-world experience, and captivate
                audiences with your music. It’s your chance to shine and create
                unforgettable memories for both you and your fans.
              </p>
              {/* <Link
                href='/programs#band_classes'
                className='mt-3 text-gray-500 inline-flex items-center hover:text-accent hover:underline'
              >
                Learn More &rarr;
              </Link> */}
            </div>
          </div>
          <div className='flex flex-col mb-10 lg:items-start items-center'>
            <div className='flex-grow'>
              <h2 className='text-accent text-2xl title-font font-medium mb-3'>
                Live Band Classes
              </h2>
              <p className='leading-relaxed'>
                Join forces with fellow musicians in our exclusive JamCore and
                BandCore classes, where the magic of collaboration comes alive.
                Sharpen your communication skills, learn to adapt and sync with
                others. Whether you're jamming for fun or preparing for the
                stage, these classes are designed to help you grow as a musician
                while creating unforgettable musical moments with your
                bandmates.
              </p>
              {/* <Link
                className='mt-3 text-gray-500 inline-flex items-center hover:text-accent hover:underline'
                href={'/programs'}
              >
                Learn More &rarr;
              </Link> */}
            </div>
          </div>
          <div className='flex flex-col mb-10 lg:items-start items-center'>
            <div className='flex-grow'>
              <h2 className='text-accent text-2xl title-font font-medium mb-3'>
                Superstar Music Mentors
              </h2>
              <p className='leading-relaxed'>
                Learn from the best! With diverse backgrounds and years of
                experience, the Rockstars of Tomorrow team includes some of the
                most accomplished and inspiring contemporary music instructors
                around, chosen for their talent, dedication, and ability to
                connect with aspiring musicians. Get personalized guidance and
                transform your skills under their expert tutelage.
              </p>
              {/* <Link
                className='mt-3 text-gray-500 inline-flex items-center hover:text-accent hover:underline'
                href={'/team'}
              >
                Learn More &rarr;
              </Link> */}
            </div>
          </div>
          <div className='flex flex-col mb-0 lg:items-start items-center'>
            <div className='flex-grow'>
              <h2 className='text-accent text-2xl title-font font-medium mb-3'>
                State-of-the-Art Facilities
              </h2>
              <p className='leading-relaxed'>
                Elevate your music journey in our state-of-the-art,
                professional-grade studios, fully equipped to meet the needs of
                aspiring rockstars. Designed for both practice and performance,
                our facilities offer an immersive environment that inspires
                creativity and ensures the best possible learning experience.
                Step into the spotlight and unleash your full potential with
                tools and spaces crafted for greatness.
              </p>
              {/* <Link
                href='/?scrollTo=contact_info'
                className='mt-3 text-gray-500 inline-flex items-center hover:text-accent hover:underline'
              >
                Learn More &rarr;
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
