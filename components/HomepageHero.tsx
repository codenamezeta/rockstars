'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Photo from '@/public/imgs/drummer-girl-1.png'
import { IoStarSharp } from 'react-icons/io5'

function scrollToTrialRequest() {
  const element = document.getElementById('free_trial')
  const offset = 100 // Adjust this value to your desired offset
  const bodyRect = document.body.getBoundingClientRect().top
  const elementRect = element?.getBoundingClientRect().top || 0
  const elementPosition = elementRect - bodyRect
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

export default function HomepageHero(): JSX.Element {
  return (
    <main className='hero flex -mt-28 xl:-mt-28'>
      <div className='container flex flex-col xl:flex-row pt-24 xl:items-center'>
        <div className='z-10 mx-auto mt-12 w-full md:w-3/4 lg:w-2/3'>
          <h1 className='text-3xl md:text-6xl font-bold'>
            Unleash Your Inner Rockstar!
          </h1>
          <p className='my-4 text-md md:text-xl'>
            From playing your first chord to recording your debut album,
            Rockstars of Tomorrow in La Verne is the neighborhood music studio
            that brings out the rockstar in everyone.
          </p>
          <Button
            className='text-xl py-8'
            size='full'
            onClick={scrollToTrialRequest}
          >
            <IoStarSharp className='mr-2 text-secondary' />
            Free Trial
            <IoStarSharp className='ml-2 text-secondary' />
          </Button>
        </div>
        <div className='xl:self-end xl:w-3/4'>
          <Image alt='Girl Playing Drums' src={Photo} />
        </div>
      </div>
    </main>
  )
}
