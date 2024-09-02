import MapDisplay from '@/components/MapDisplay' // MapDisplay doesn't have a section overview sub component like the contact component does
import Header from '@/components/Header'
import { FiExternalLink } from 'react-icons/fi'
import { FaPhone } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
export default function contactPage(): JSX.Element {
  return (
    <>
      <Header
        title={'Contact Us'}
        headerStyle={2}
        subtitle='We would love to hear from you. Feel free to visit our studio in person or give us a call.'
      />
      <section id='quick_connect' className='py-4 bg-black body-font'>
        <div className='container'>
          <ul className='flex flex-col md:flex-row gap-12 justify-between'>
            <li className='text-center'>
              <a
                href='https://app.mymusicstaff.com/'
                className='text-xs tracking-tighter'
              >
                <FiExternalLink className='mx-auto mb-4 text-3xl' />
                <h3 className='text-xl text-primary'>Client Portal:</h3>
                MyMusicStaff.com
              </a>
            </li>
            <li className='text-center'>
              <a href='tel:9514567890' className='text-xs tracking-tighter'>
                <FaPhone className='mx-auto mb-4 text-3xl text-accent outlined-icon' />
                <h3 className='text-xl text-primary'>Call Us:</h3>(951) 456-7890
              </a>
            </li>
            <li className='text-center'>
              <a
                href='mailto:laverne@rockstarsoftomorrow.com'
                className='text-xs tracking-tighter'
              >
                <MdOutlineMail
                  className='mx-auto mb-4 text-3xl'
                  color='accent'
                />
                <h3 className='text-xl text-primary'>Email Us:</h3>
                laverne@rockstarsoftomorrow.com
              </a>
            </li>
            <li className='text-center'>
              <a
                href='https://maps.app.goo.gl/cP1WQ4s371cQdKbK8'
                className='text-xs tracking-tighter'
              >
                <FaLocationDot className='mx-auto mb-4 text-3xl outlined-icon' />
                <h3 className='text-xl text-primary'>Visit Us:</h3>
                2855 Foothill Blvd, A-102, La Verne, CA 91750
              </a>
            </li>
          </ul>
        </div>
      </section>
      <MapDisplay />
    </>
  )
}
