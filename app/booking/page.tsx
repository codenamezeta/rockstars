'use client'
import SectionOverview from '@/components/SectionOverview'
import Script from 'next/script'

export default function Enroll() {
  return (
    <div className='container flex flex-col items-center justify-center max-w-3xl min-h-screen pt-32'>
      <Script src='https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF94UFNKUyIsIldlYnNpdGVJRCI6Indic19LbEo4IiwiV2Vic2l0ZUJsb2NrSUQiOiJ3YmJfSEpMVkpoIn0='></Script>
      <SectionOverview title='Booking' />
      <iframe
        id='sb_frame_28042530627'
        // allowtransparency='false'
        // frameBorder='0'
        width='4000px'
        height='4000px'
        src='https://app.mymusicstaff.com/Website/v3/widget.html?settings=eyJTY2hvb2xJRCI6InNjaF94UFNKUyIsIldlYnNpdGVJRCI6Indic19LbEo4IiwiV2Vic2l0ZUJsb2NrSUQiOiJ3YmJfSEpMVkpoIn0%3d&amp;sandboxed=false'
        // scrolling='yes'
        // style='overflow: hidden; height: 647px;'
      ></iframe>
      {/* <iframe
        id='sb_frame_12986816311'
        // allowtransparency='false'
        frameBorder='0'
        width='100%'
        height='4000px'
        src='https://app.mymusicstaff.com/Website/v3/widget.html?settings=eyJTY2hvb2xJRCI6InNjaF94UFNKUyIsIldlYnNpdGVJRCI6Indic19LbEo4IiwiV2Vic2l0ZUJsb2NrSUQiOiJ3YmJfc2xyaEpWIn0%3d&amp;sandboxed=false'
        scrolling='yes'
      ></iframe> */}
    </div>
  )
}
