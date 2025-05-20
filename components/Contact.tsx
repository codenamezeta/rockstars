'use client'

import SectionOverview from './SectionOverview'
// import MapDisplay from './MapDisplay' //? Not used because of dynamic import instead
import { Button } from '@/components/ui/button'
import { FaPhone } from 'react-icons/fa'
import { MdOutlineMail, MdMessage } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'

import dynamic from 'next/dynamic'

const DynamicMapDisplay = dynamic(() => import('@/components/MapDisplay'), {
  ssr: false,
  loading: () => (
    <div
      className='lg:w-2/3 md:w-1/2 rounded-r-xl overflow-hidden relative flex justify-center items-center bg-muted' // Adjusted classes
      style={{ aspectRatio: 16 / 9 }} // Added aspect ratio to match
    >
      <p>Loading map...</p>
    </div>
  ),
})

export default function Contact(): JSX.Element {
  return (
    <div className='container mx-auto flex sm:flex-nowrap flex-wrap mb-12'>
      <address className='background-8 border rounded-lg border-1 border-primary md:rounded-none md:rounded-l-xl w-full md:w-1/2 lg:w-1/3 p-6 pr-1 not-italic'>
        <ul className='flex flex-col justify-between tracking-wide list-none'>
          <li className=''>
            <h3 className='text-lg uppercase text-white font-bold tracking-wide'>
              Phone
            </h3>
            <span className='text-accent block w-max tracking-widest text-xl'>
              (844) 36-MUSIC
              <sub className='block text-right text-sm text-muted-foreground tracking-wider -mt-3 pr-1'>
                {`6   8   7   4   2   `}
              </sub>
            </span>
            <a href='tel:8443668742' className='text-white'>
              <Button variant='outline' className='mb-4'>
                Call <FaPhone className='text-xl inline' />
              </Button>
            </a>
            <a href='sms:8443668742' className='text-white'>
              <Button variant='outline' className='mt-4 mb-2 ml-4'>
                Text <MdMessage className='text-xl inline' />
              </Button>
            </a>
          </li>
          <li className=''>
            <h3 className='text-lg uppercase text-white font-bold tracking-wide'>
              Email
            </h3>
            <span className='text-accent block truncate text-xs xl:text-base tracking-widest'>
              laverne@rockstarsoftomorrow.com
            </span>
            <a
              href='mailto:laverne@rockstarsoftomorrow.com'
              className='text-white'
            >
              <Button variant='outline' className='my-4 mr-4'>
                Email <MdOutlineMail className='text-xl inline' />
              </Button>
            </a>
          </li>
          {/* <li className=''>
            <h3 className='text-lg uppercase text-white font-bold tracking-wide'>
              Chat
            </h3>
            <span className='text-accent block tracking-widest'>Live Chat</span>
            <a
              href='https://app.mymusicstaff.com/'
              className='text-white'
            >
              <Button variant='outline' className='my-4 mr-4'>
                Connect <IoChatbubblesOutline className='text-xl inline' />
              </Button>
            </a>
          </li> */}
          <li className=''>
            <h3 className='text-lg uppercase text-white font-bold tracking-wide'>
              Visit
            </h3>
            <span className='text-accent block tracking-widest'>
              2855 Foothill Blvd Ste A102, La Verne, CA 91750
            </span>
            <a
              href='https://maps.app.goo.gl/cP1WQ4s371cQdKbK8'
              className='text-white'
            >
              <Button variant='outline' className='my-4 mr-4'>
                Get Directions <FaLocationDot className='text-xl inline' />
              </Button>
            </a>
          </li>
          <li className=''>
            <h3 className='text-lg uppercase text-white font-bold tracking-wide'>
              Hours
            </h3>
            <span className='text-accent block tracking-widest'>
              <strong>Mon - Thu:</strong> 11:00am - 8:00pm
              <br />
              <strong>Fri:</strong> 11:00am - 7:00pm
              <br />
              <strong>Sat:</strong> 10:00am - 4:00pm
              <br />
              <strong>Sun:</strong> Closed
            </span>
          </li>
        </ul>
      </address>
      <DynamicMapDisplay />
    </div>
  )
}
