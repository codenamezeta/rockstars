import Image from 'next/image'
import Logo from '@/public/imgs/logos/logo-white-shadow.svg'
import { FaYelp, FaInstagram, FaFacebook } from 'react-icons/fa6'
import { GrGoogle } from 'react-icons/gr'

export default function Footer(): JSX.Element {
  return (
    <footer className='text-muted-foreground'>
      <div className='container pt-12 mx-auto'>
        <div className='flex flex-col md:flex-row md:flex-wrap gap-y-12'>
          <div className='w-full md:w-1/4 md:m-auto lg:w-1/3'>
            <Image
              className='px-12 md:px-0 lg:pr-24 brightness-75'
              alt='The Rockstars of Tomorrow logo'
              src={Logo}
            />
          </div>
          <nav className='w-full md:w-1/2 lg:w-1/6 text-center lg:text-left lg:tracking-tighter'>
            <h4 className='text-xl font-anton tracking-wider'>Get Connected</h4>
            <hr className='w-16 h-1 rounded-full bg-primary border-0 inline-flex mb-2'></hr>
            <ul className='list-none'>
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
              <li>
                <a href='https://www.rockstarsoftomorrow.com/jointheteam'>
                  Join Our Team
                </a>
              </li>
            </ul>
          </nav>
          <nav className='w-full md:w-1/2 lg:w-1/6 mx-auto list-none text-center lg:text-left lg:tracking-tighter'>
            <h4 className='text-xl font-anton tracking-wider'>Get Support</h4>
            <hr className='w-16 h-1 rounded-full bg-primary border-0 inline-flex mb-2'></hr>
            <ul className='list-none'>
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
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
          </nav>

          <nav className='w-full md:w-1/2 lg:w-1/5 list-none text-center lg:text-left lg:tracking-tighter'>
            <h4 className='text-xl font-anton tracking-wider'>Get In Touch</h4>
            <hr className='w-16 h-1 rounded-full bg-primary border-0 inline-flex mb-2'></hr>
            <ul className='list-none'>
              <li className='mb-2'>
                <a href='sms:8443668742'>
                  (844) 36-MUSIC
                  <br />
                  <span className='md:text-sm'>(844) 366-8742</span>
                </a>
              </li>
              <li className='mb-2 md:text-sm'>
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
              <li>
                <span className='flex mt-2 justify-center lg:justify-start'>
                  <a className='mr-2'>
                    <FaInstagram />
                  </a>
                  <a className='mx-2'>
                    <FaFacebook />
                  </a>
                  <a className='mx-2'>
                    <FaYelp />
                  </a>
                  <a className='ml-2'>
                    <GrGoogle />
                  </a>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id='socket' className='bg-transparent'>
        <div className='py-6 mt-6 mx-auto flex items-center sm:flex-row flex-col'>
          <p className='text-xs text-gray-600 text-center mx-auto tracking-tight'>
            Copyright &copy; {new Date().getFullYear()} A2Zeta Creative Design
            <br />
            <a
              href='https://a2zeta.com'
              className='text-gray-600 ml-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              @codenamezeta
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
