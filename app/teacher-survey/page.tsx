import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teacher Survey',
  description:
    'Rockstars of Tomorrow is committed to providing the best music education experience for our students. We value your feedback and appreciate your time in completing this survey.',
}

export default function teacherSurveyPage() {
  return (
    <section className='container mx-auto px-4 py-24'>
      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSd0WmJXzQTSHOlUmtGOSOB4q0wl8Yzll6bxSG32gAqTgeGeww/viewform?embedded=true'
        width='1200'
        height='1200'
        frameBorder='0'
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </section>
  )
}
