import drummerGirl from '@/public/imgs/drummer-girl-1.png'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import ProgramsOverview from '@/components/ProgramsOverview'
// import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import GHLForm from '@/components/GHLForm'
// import FreeTrialForm from '@/components/FreeTrialForm'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rockstars of Tomorrow - La Verne',
  description:
    'From music lessons to performance coaching, Rockstars of Tomorrow in La Verne is the neighborhood music school that will unleash your inner rockstar!',
  openGraph: {
    title: 'Rockstars of Tomorrow - La Verne',
    description:
      'From music lessons to performance coaching, Rockstars of Tomorrow in La Verne is the neighborhood music school that will unleash your inner rockstar!',
    images: [
      {
        url: '/imgs/drummer-girl-1.png',
        width: 800,
        height: 600,
        alt: 'Young Woman Drummer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rockstars of Tomorrow - La Verne',
    description:
      'From music lessons to performance coaching, Rockstars of Tomorrow in La Verne is the neighborhood music school that will unleash your inner rockstar!',
    images: ['/imgs/drummer-girl-1.png'],
  },
}

export default function Home() {
  return (
    <>
      <Hero
        title='Unleash Your Inner Rockstar!'
        subtitle='With Expert Music Lessons and Performance Coaching.'
        text='Real Bands, Real Stages, Real Rockstar Confidence!'
        // list={['Real Bands', 'Real Stages', 'Real Rockstar Confidence!']}
        image={{
          src: drummerGirl,
          alt: 'Young Woman Drummer',
        }}
      />
      <Benefits />
      <ProgramsOverview />
      {/* <Team /> */}
      <Testimonials />
      <Contact />
      <GHLForm />
      {/* <FreeTrialForm /> */}
    </>
  )
}
