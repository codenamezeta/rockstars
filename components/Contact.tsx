import SectionOverview from './SectionOverview'
import MapDisplay from './MapDisplay'
export default function Contact(): JSX.Element {
  return (
    <section className='text-foreground bg-background body-font relative'>
      <SectionOverview
        title='Contact Us'
        subtitle='We would love to hear from you. Feel free to visit our studio in person or give us a call.'
      />
      <MapDisplay />
    </section>
  )
}
