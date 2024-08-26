// import Widget from './EnrollWidget'

import Separator from './Separator'

export default function Enroll(): JSX.Element {
  return (
    <section
      className='text-primary text-center bg-black body-font pt-24 flex flex-col items-center'
      id='enroll'
    >
      <h2 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary'>
        Get Started
      </h2>
      <p className='lg:w-1/3 w-3/4 mx-auto leading-relaxed text-base'>
        Start with a free trial lesson! Fill out the form below to get started.
        We will contact you to schedule your lesson and a tour of our school.
      </p>
      <Separator />
      <iframe
        id='sb_registration_if'
        src='//app.mymusicstaff.com/Widget/v3/content/en/index.html?id=sch_xPSJS&amp;accentColor=3A0A03&amp;accentTextColor=f0f0f088&amp;SameSite=Lax'
        style={{
          minHeight: '950px',
          width: 'clamp(320px, 95%, 800px)',
        }}
      ></iframe>
    </section>
  )
}
