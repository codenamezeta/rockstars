'use client'
import { Button } from './ui/button'
import Logo from '@/public/imgs/logos/logo-white-shadow.svg'
import { usePathname } from 'next/navigation'
import { IoStarSharp } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'

const toggleMobileNav = () => {
  const menu = document.querySelector('.navbar-menu')
  menu?.classList.toggle('hidden')
}

function scrollToEnroll() {
  // Scroll to the enroll section after the page has finished loading
  document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })
}

type Page = {
  name: string // The name of the page
  path: string // The path to the page
}

export default function Nav({ pages }: { pages: Page[] }): JSX.Element {
  const pathname = usePathname() // For the current page path
  return (
    <nav className='bg-black sticky top-0 z-50'>
      <div className='container relative px-4 py-4 flex justify-between items-center bg-black'>
        <Link className='text-3xl font-bold leading-none w-40' href='/'>
          <Image alt='The Rockstars of Tomorrow logo' src={Logo} priority />
        </Link>
        <div className='lg:hidden'>
          <button
            className='navbar-burger flex items-center text-white p-3'
            onClick={toggleMobileNav}
          >
            <svg
              className='block h-4 w-4 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Mobile menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
        <ul className='hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6'>
          {pages.map((page) => (
            <li key={page.path} className=''>
              <Link
                href={page.path}
                className={`text-lg text-gray-500 hover:text-foreground ${
                  pathname === page.path ? 'text-white' : ''
                }`}
                aria-current='page'
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          className='hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6'
          variant='outline'
        >
          <a href='tel:9095965556'>Call Us</a>
        </Button>

        <Button
          className='hidden lg:inline-block lg:mr-3 py-2 px-6'
          variant='accent'
          onClick={
            pathname === '/'
              ? scrollToEnroll
              : () => {
                  window.location.href = '/#free-trial'
                }
          }
        >
          Get Started <IoStarSharp className='inline' />
        </Button>
        {/* <a
          className='hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200'
          href='http://app.mymusicstaff.com'
        >
          Sign In
        </a>
        <a
          className='hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200'
          href='/#enroll'
        >
          Sign up
        </a> */}
      </div>

      {/* Navbar Backdrop */}
      <div className='navbar-menu relative z-50 hidden'>
        <div
          className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'
          onClick={toggleMobileNav}
        ></div>

        {/* Mobile Nav */}
        <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto'>
          <div className='flex items-center mb-8'>
            <Link href={pages[0].path} onClick={toggleMobileNav}>
              <Image
                className='w-32 h-24 mr-auto'
                alt='The Rockstars of Tomorrow logo'
                src={Logo}
              />
              <span className='sr-only'>
                <h2>Rockstars of Tomorrow</h2>
              </span>
            </Link>
            <button className='navbar-close ml-auto' onClick={toggleMobileNav}>
              <svg
                className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {pages.map((page) => (
                <li key={page.path} className='mb-4'>
                  <Link
                    href={page.path}
                    className={`block p-4 text-2xl font-semibold text-gray-400 hover:bg-accent hover:text-white rounded ${
                      pathname === page.path ? 'text-white' : ''
                    }`}
                    onClick={toggleMobileNav}
                    aria-current='page'
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-auto'>
            <div className='pt-6'>
              <Button variant='outline' className='w-full mb-4'>
                Call Us
              </Button>

              <Button
                className=''
                variant='accent'
                size='full'
                onClick={
                  pathname === '/'
                    ? scrollToEnroll
                    : () => {
                        window.location.href = '/#free-trial'
                      }
                }
              >
                Get Started <IoStarSharp />
              </Button>
            </div>
            <p className='my-4 text-xs text-center text-gray-400'>
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </nav>
  )
}
