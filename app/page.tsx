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

// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Rockstars of Tomorrow - La Verne',
//   description:
//     'From music lessons to performance coaching, Rockstars of Tomorrow in La Verne is the neighborhood music school that will unleash your inner rockstar!',
// }

export default function Home() {
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
    </>
  )
}
