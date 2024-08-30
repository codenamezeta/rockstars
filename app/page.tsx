import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import ProgramsOverview from '@/components/ProgramsOverview'
// import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Enroll from '@/components/Enroll'
import SectionOverview from '@/components/SectionOverview'
export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ProgramsOverview />
      {/* <Team /> */}
      <Testimonials />
      <Contact />
      <Enroll />
    </>
  )
}
