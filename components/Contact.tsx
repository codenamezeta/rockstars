import SectionOverview from './SectionOverview'
import MapDisplay from './MapDisplay'
export default function Contact(): JSX.Element {
  return (
    <section id='contact_info' className='pt-24 pb-12 background-2'>
      <SectionOverview
        title='Contact Us'
        overviewText='We would love to hear from you. Feel free to visit our studio in person or give us a call.'
        customClasses='container'
      />
      <MapDisplay />
    </section>
  )
}
