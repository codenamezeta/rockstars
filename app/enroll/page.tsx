'use client'
import SectionOverview from '@/components/SectionOverview'
import Script from 'next/script'

export default function Enroll() {
  return (
    <div className='container flex flex-col items-center justify-center min-h-screen max-w-3xl pt-32'>
      <SectionOverview title='Enroll' />
      <iframe
        id='sb_frame_97489628384'
        width='100%'
        height={800}
        scrolling='yes'
        src='https://app.mymusicstaff.com/Website/v3/widget.html?settings=eyJTY2hvb2xJRCI6InNjaF94UFNKUyIsIldlYnNpdGVJRCI6Indic19LbEo4IiwiV2Vic2l0ZUJsb2NrSUQiOiJ3YmJfQno3V0p6In0%3d&amp;sandboxed=false'
      ></iframe>
    </div>
  )
}
