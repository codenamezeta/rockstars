import Image from 'next/image'
import rockstar from '../public/imgs/Kids/Teen Girl with Guitar.png'
import Separator from './Separator'

export default function Benefits(): JSX.Element {
  return (
    <section id='benefits' className='pt-12 text-white body-font bg-background'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='text-center mb-20'>
          <h2 className='sm:text-3xl text-2xl font-medium title-font text-primary mb-4'>
            Learn the Rockstar Way!
          </h2>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-secondary'>
            Frustrated with traditional music schools that don't cater to your
            rock n' roll dreams? Rockstars of Tomorrow is different. We're
            dedicated to providing aspiring young rock musicians like you with
            the unique and immersive learning experience you crave. Here's what
            sets us apart:
          </p>
          <Separator />
        </div>
        <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
          <Image
            alt='rockstar kid'
            className='object-cover object-center w-full -mt-6 -mb-24 lg:-mb-44'
            src={rockstar}
          />
        </div>
        <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
          <div className='flex flex-col mb-10 lg:items-start items-center'>
            <div className='flex-grow'>
              <h2 className='text-primary text-lg title-font font-medium mb-3'>
                Performance Opportunities Galore
              </h2>
              <p className='leading-relaxed text-base'>
                Get ready to rock real stages! We provide regular live
                performance opportunities at venues in the La Verne community.
                Gain valuable experience, build confidence, and thrill the
                audience with your music!
              </p>
              <a className='mt-3 text-gray-500 inline-flex items-center'>
                Learn More
              </a>
            </div>
          </div>
          <div className='flex flex-col mb-10 lg:items-start items-center'>
            <div className='flex-grow'>
              <h2 className='text-primary text-lg title-font font-medium mb-3'>
                Rock Band Group Classes
              </h2>
              <p className='leading-relaxed text-base'>
                Jam with fellow rockers in our exclusive "JamCore" and
                "BandCore" classes. Master collaboration, communication, and
                improvisation, and develop your unique band sound.
              </p>
              <a className='mt-3 text-gray-500 inline-flex items-center'>
                Learn More
              </a>
            </div>
          </div>
          <div className='flex flex-col mb-10 lg:items-start items-center'>
            <div className='flex-grow'>
              <h2 className='text-primary text-lg title-font font-medium mb-3'>
                Seasoned Rock Mentors
              </h2>
              <p className='leading-relaxed text-base'>
                Learn from the best! Our faculty comprises rock music veterans
                with diverse backgrounds and years of experience. Get
                personalized guidance and transform your skills under their
                expert tutelage.
              </p>
              <a className='mt-3 text-gray-500 inline-flex items-center'>
                Learn More
              </a>
            </div>
          </div>
          <div className='flex flex-col mb-0 lg:items-start items-center'>
            <div className='flex-grow'>
              <h2 className='text-primary text-lg title-font font-medium mb-3'>
                State-of-the-Art Facilities
              </h2>
              <p className='leading-relaxed text-base'>
                Practice and perform in our fully equipped, professional-grade
                studios. Our facilities are designed to provide you with the
                best possible learning experience and help you unleash your
                inner rockstar.
              </p>
              <a className='mt-3 text-gray-500 inline-flex items-center'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
