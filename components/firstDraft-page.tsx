// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
import Hero from '@/components/Hero'
import SectionOverview from '@/components/SectionOverview'
import { getClass } from '@/lib/programs'
import ProgramsComparison from '@/components/ProgramsComparison'
import TryoutProcess from '@/components/TryoutProcess'
import Commitments from '@/components/Commitments'
import Testimonials from '@/components/Testimonials'
import FreeTrialForm from '@/components/FreeTrialForm'
// import drummerGirl from '@/public/imgs/drummer-girl-1.png'
// import FAQs from '@/components/FAQs'

interface BandCoreInfoPageProps {
  programName: string
  tagline: string
  description: string
  details: string[] | { name: string; value: string; disclaimer?: string }[]
}

// const BandCoreInfo: BandCoreInfoPageProps =

export default function BandCoreInfoPage(): JSX.Element {
  const BandCore = getClass('BandCore')
  return (
    <>
      <Hero
        title={'BandCore'}
        // subtitle={'The Ultimate Band Experience'}
        text={
          'Take Your Musical Journey to the Next Level! Join an elite group of musicians collaborating, performing, and evolving together.'
        }
        list={[
          'Play 2 live shows per session',
          'Collaborate with other musicians',
          'Take your music to the next level',
        ]}
        ctaText='Enroll'
        ctaLink='#free_trial'
        // imageSrc={drummerGirl}
      />
      <main id='bandcore_benifits' className='container py-24'>
        <SectionOverview
          title='What is BandCore?'
          subtitle='The Ultimate Band Experience'
        />
        <div className='flex gap-x-12'>
          <p className='leading-relaxed tracking-wide text-lg md:text-xl max-w-prose'>
            {BandCore.description}
          </p>
          <ul className='title-font font-medium tracking-wider list-disc ml-auto'>
            {BandCore.features.map((feature, index) => (
              <li key={index} className='text-accent text-sm md:text-base'>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <TryoutProcess />
      <Commitments />
      <ProgramsComparison />
      <Testimonials />
      <FreeTrialForm />
    </>
  )
}
