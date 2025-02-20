import lineLogo from '@/public/imgs/logos/Black-Line-Logo.png'
import drummerGirl from '@/public/imgs/drummer-girl-1.png'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
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

export default function Home() {
  return (
    <>
      <Hero
        title='The Ultimate Music Experience for Your Child'
        subtitle='Discover a music school that nurtures talent and builds life skills through the power of live performance'
        text='At Rockstars of Tomorrow, we believe every child deserves a moment in the spotlight. That’s why we offer more than lessons—we provide an experience that transforms their love of music into confidence, creativity, and a lifelong sense of achievement.'
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
    </>
  )
}
