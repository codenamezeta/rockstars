import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/imgs/logos/logo-white-shadow.svg'
import { FaYelp, FaInstagram, FaFacebook } from 'react-icons/fa6'
import { GrGoogle } from 'react-icons/gr'

export default function Footer(): JSX.Element {
  return (
    <footer className='text-gray-400 bg-black body-font'>
      <div className='container px-5 py-12 mx-auto'>
        <div className='flex flex-wrap md:text-left text-center order-first'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <div className='flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start'>
              <div className='relative w-40 mb-12 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2'>
                <Image
                  className='w-60'
                  alt='The Rockstars of Tomorrow logo'
                  src={Logo}
                  // width={328}
                  // height={200}
                />
              </div>
            </div>
          </div>
          <nav className='lg:w-1/4 md:w-1/2 w-full px-4 list-none'>
            <h4 className='text-xl'>Get In Touch</h4>
            <hr className='w-16 h-1 rounded-full bg-accent inline-flex mb-2'></hr>
            <li className='mb-2'>
              <a href='tel:9096757580'>(909) 675-7580</a>
            </li>
            <li className='mb-2'>
              <a href='mailto:laverne@rockstarsoftomorrow.com'>
                laverne@rockstarsoftomorrow.com
              </a>
            </li>
            <li className='mb-0'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://maps.app.goo.gl/8YnNEHG3ZJVbneSH8'
              >
                2855 Foothill Blvd. A-102
                <br />
                La Verne, CA 91750
              </a>
            </li>
            <li className='mb-12'>
              <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                <a className='text-gray-400'>
                  <FaInstagram />
                </a>
                <a className='ml-3 text-gray-400'>
                  <FaFacebook />
                </a>
                <a className='ml-3 text-gray-400'>
                  <FaYelp />
                </a>
                <a className='ml-3 text-gray-400'>
                  <GrGoogle />
                </a>
              </span>
            </li>
          </nav>
          <nav className='lg:w-1/4 md:w-1/2 w-full px-4 list-none'>
            <h4 className='text-xl'>Get Support</h4>
            <hr className='w-16 h-1 rounded-full bg-accent inline-flex mb-2'></hr>
            <li className='mb-2'>
              <a href='https://app.mymusicstaff.com/'>Customer Portal</a>
            </li>
            <li className='mb-2'>
              <a href='/policies'>Studio Policies</a>
            </li>
            <li className='mb-2'>
              <a href='#'>FAQ's</a>
            </li>
            <li className='mb-2'>
              <a href='#'>Terms of Use</a>
            </li>
            <li className='mb-12'>
              <a href='#'>Privacy Policy</a>
            </li>
          </nav>
          <nav className='lg:w-1/4 md:w-1/2 w-full px-4 list-none'>
            <h4 className='text-xl'>Get Connected</h4>
            <hr className='w-16 h-1 rounded-full bg-accent inline-flex mb-2'></hr>
            <li className='mb-2'>
              <a href='https://www.rockstarsoftomorrow.com/'>RoT Main Site</a>
            </li>
            <li className='mb-2'>
              <a href='https://www.rockstarsoftomorrow.com/locations'>
                More Locations
              </a>
            </li>
            <li className='mb-2'>
              <a href='https://rockstars-of-tomorrow.myshopify.com/'>
                Merch & Gear
              </a>
            </li>
            <li className='mb-2'>
              <a href='https://www.rockstarsoftomorrow.com/franchising'>
                Franchising
              </a>
            </li>
            <li className='mb-2'>
              <a href='https://www.rockstarsoftomorrow.com/jointheteam'>
                Join Our Team
              </a>
            </li>
          </nav>
        </div>
      </div>
      <div id='socket' className='bg-transparent container'>
        <div className='px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
          <Link
            href='/'
            className='flex title-font font-medium items-center md:justify-start justify-center text-white'
          >
            <span className='sr-only self-center text-2xl font-semibold whitespace-nowrap '>
              Rockstars of Tomorrow
            </span>
          </Link>
          <span className='ml-3 text-xl sr-only'>Rockstars of Tomorrow</span>

          <p className='text-sm text-gray-400 text-center mx-auto'>
            Copyright &copy; {new Date().getFullYear()} Rockstars of Tomorrow La
            Verne
            <br />
            <a
              href='https://a2zeta.com'
              className='text-gray-500 ml-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Web design by @codenamezeta
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
