import MapDisplay from '@/components/MapDisplay' // MapDisplay doesn't have a section overview sub component like the contact component does
import Header from '@/components/Header'
import { FiExternalLink } from 'react-icons/fi'
import { FaPhone } from 'react-icons/fa'
import { MdOutlineMail, MdMessage } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'

export default function contactPage(): JSX.Element {
  return (
    <>
      <Header
        title={'Contact Us'}
        headerStyle={2}
        subtitle='We would love to hear from you. Feel free to visit our studio in person or give us a call.'
      />
      <section
        id='quick_connect'
        className='py-6 bg-background body-font mb-12'
      >
        <div className='container'>
          <ul className='flex flex-col md:flex-row gap-6 justify-between space-x-2'>
            <li className='text-center flex-1'>
              <a
                href='https://app.mymusicstaff.com/'
                className='text-xs tracking-tighter'
              >
                <FiExternalLink className='mx-auto mb-4 text-3xl text-white' />
                <h3 className='text-sm text-accent'>Student Portal:</h3>
                MyMusicStaff.com
              </a>
            </li>
            {/* <li className='text-center'>
              <a href='tel:8443668742' className='text-xs tracking-tighter'>
                <FaPhone className='mx-auto mb-4 text-3xl text-white' />
                <h3 className='text-xl text-accent'>Call Us:</h3>(844) 36-MUSIC
              </a>
            </li> */}
            <li className='text-center  flex-1'>
              <a href='sms:8443668742' className='text-xs tracking-tighter'>
                <MdMessage className='mx-auto mb-4 text-3xl text-white' />
                <h3 className='text-sm text-accent'>Text or Call Us:</h3>(844)
                36-MUSIC
              </a>
            </li>
            <li className='text-center'>
              <a
                href='mailto:laverne@rockstarsoftomorrow.com'
                className='text-xs tracking-tighter'
              >
                <MdOutlineMail
                  className='mx-auto mb-4 text-3xl text-white'
                  color='accent'
                />
                <h3 className='text-sm text-accent'>Email Us:</h3>
                laverne@rockstarsoftomorrow.com
              </a>
            </li>
            <li className='text-center  flex-1'>
              <a
                href='https://maps.app.goo.gl/cP1WQ4s371cQdKbK8'
                className='text-xs tracking-tighter'
              >
                <FaLocationDot className='mx-auto mb-4 text-3xl text-white' />
                <h3 className='text-sm text-accent'>Visit Us:</h3>
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
