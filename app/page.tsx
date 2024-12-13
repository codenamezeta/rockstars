import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import ProgramsOverview from '@/components/ProgramsOverview'
// import Team from '@/components/Team'
import Contact from '@/components/Contact'
// import Enroll from '@/components/Enroll'
import FreeTrialForm from '@/components/FreeTrialForm'
import drummerGirl from '@/public/imgs/drummer-girl-1.png'
// import photo from '@/public/imgs/Kids/Teen Blue Guitar Girl.png'

export default function Home() {
  return (
    <>
      <Hero
        title='Your Rockstar Moment!'
        // subtitle='A Real Rockstar Experience that Breaks the Mold!'
        text='With our proprietary Rockstar Method, you will learn to play real songs on real stages with real bands. Our unique approach to music education will have you performing like a pro in just six months!'
        // list={['Real Bands', 'Real Stages', 'Real Rockstar Confidence!']}
        imageSrc={drummerGirl}
      />
      <Benefits />
      <ProgramsOverview />
      {/* <Team /> */}
      <Testimonials />
      <Contact />
      <FreeTrialForm />
    </>
  )
}
