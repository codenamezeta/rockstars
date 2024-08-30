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
      <section id='quick_connect' className='py-24 bg-black body-font'>
        <div className='container'>
          {/* <h2 className='text-3xl text-center text-primary pb-6'>
            Quick Connect
          </h2> */}
          <ul className='flex flex-col md:flex-row gap-2 justify-between'>
            <li className='text-center'>
              <a href='https://app.mymusicstaff.com/'>
                <FiExternalLink className='mx-auto text-5xl mb-4' />
                <h3 className='text-xl'>Client Portal:</h3>MyMusicStaff.com
              </a>
            </li>
            <li className='text-center'>
              <a href='tel:9514567890'>
                <FaPhone className='mx-auto text-5xl mb-4' />
                <h3 className='text-xl'>Call Us:</h3>(951) 456-7890
              </a>
            </li>
            <li className='text-center'>
              <a href='mailto:laverne@rockstarsoftomorrow.com'>
                <MdOutlineMail className='mx-auto text-5xl mb-4' />
                <h3 className='text-xl'>Email Us:</h3>
                laverne@rockstarsoftomorrow.com
              </a>
            </li>
            <li className='text-center'>
              <a className='' href='https://maps.app.goo.gl/cP1WQ4s371cQdKbK8'>
                <FaLocationDot className='mx-auto text-5xl mb-4' />
                <h3 className='text-xl'>Visit Us:</h3>
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
