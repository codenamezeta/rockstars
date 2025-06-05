'use client'

import SelfBooking from '@/components/Opus1Embeds'
import SectionOverview from '@/components/SectionOverview'

export default function Enroll() {
  return (
    <section className='pt-32 h-screen flex flex-col items-center justify-center container'>
      <SectionOverview
        title='Book Your Free Trial Lesson'
        overviewText='Experience the joy of music with a free trial lesson at Rockstars of Tomorrow. Our expert instructors are here to guide you every step of the way, whether you’re a beginner or looking to refine your skills.'
      />
      <SelfBooking path='free-trial' />
    </section>
  )
}
