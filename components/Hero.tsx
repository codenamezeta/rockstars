'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Photo from '@/public/imgs/drummer-girl-1.png'
import { IoStarSharp } from 'react-icons/io5'

function scrollToEnroll() {
  document.getElementById('free-trial')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero(): JSX.Element {
  return (
    <main className='hero flex'>
      <div className='container flex flex-col lg:flex-row pt-24 lg:items-center'>
        <div className='z-10 lg:w-2/3'>
          <h1 className='text-6xl font-bold'>Unleash Your Inner Rockstar!</h1>
          <p className='my-4 text-xl'>
            From playing your first chord to recording your debut album,
            Rockstars of Tomorrow in La Verne is the neighborhood music studio
            that brings out the rockstar in everyone.
          </p>
          <Button
            className='text-xl py-8 px-12'
            variant='accent'
            size='lg'
            onClick={scrollToEnroll}
          >
            Get Started <IoStarSharp className='ml-2 text-primary' />
          </Button>
        </div>
        <div className='lg:self-end lg:w-full'>
          <Image alt='Girl Playing Drums' src={Photo} />
        </div>
      </div>
    </main>
  )
}
