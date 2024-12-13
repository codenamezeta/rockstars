'use client'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/imgs/logos/logo-white-shadow.svg'
import { Button } from './ui/button'
import { IoStarSharp } from 'react-icons/io5'

type Page = {
  name: string // The name of the page
  path: string // The path to the page
}

export default function Nav({ pages }: { pages: Page[] }): JSX.Element {
  const pathname = usePathname() // For the current page path
  const router = useRouter()
  const [scrollTriggered, setScrollTriggered] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileNav = () => {
    const menu = document.querySelector('.navbar-menu')
    menu?.classList.toggle('hidden')
    setMobileNavOpen(!mobileNavOpen)
  }

  useEffect(() => {
    if (scrollTriggered && pathname === '/') {
      scrollToFormWithOffset()
      setScrollTriggered(false) // Reset the trigger
    }
    const navbarTransparencyChange = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', navbarTransparencyChange)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', navbarTransparencyChange)
    }
  }, [scrollTriggered, pathname])

  const scrollToFormWithOffset = () => {
    const element = document.getElementById('free_trial')
    if (element) {
      const offset = 100 // Adjust this value to your desired offset
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top || 0
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      // console.log('Scrolled to form with offset');
    }
  }

  const scrollToTrialRequest = async () => {
    if (mobileNavOpen) {
      toggleMobileNav()
    }
    if (pathname !== '/') {
      setScrollTriggered(true) // Set the trigger for scrolling
      await router.push('/')
    } else {
      scrollToFormWithOffset()
    }
  }

  return (
    <nav
      className={`font-anton fixed top-0 w-full z-50 transition-colors duration-600 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className='container px-4 py-4 flex justify-between items-center'>
        <Link className='text-3xl font-bold leading-none w-24 md:w-40' href='/'>
          <Image alt='The Rockstars of Tomorrow logo' src={Logo} priority />
        </Link>
        <div className='lg:hidden'>
          <button
            className='navbar-burger flex items-center text-white p-3'
            onClick={toggleMobileNav}
          >
            <svg
              className='block h-6 w-6 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Mobile Nav Menu</title>
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
        {/* <Button
          className='hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6'
          variant='outline'
        >
          <a href='tel:9095965556'>Call Us</a>
        </Button> */}

        <Button
          className='hidden lg:flex md:py-6'
          onClick={scrollToTrialRequest}
        >
          <IoStarSharp className='items-baseline mr-2' />
          Free Trial
          <IoStarSharp className='inline ml-2' />
        </Button>
      </div>

      {/* Navbar Backdrop below mobile nav creates a grayish overlay */}
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
                className='h-8 w-8 text-gray-400 cursor-pointer hover:text-gray-500'
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

              <Button size='full' onClick={scrollToTrialRequest}>
                <IoStarSharp className='items-baseline mr-2' />
                Free Trial
                <IoStarSharp className='inline ml-2' />
              </Button>
            </div>
            <p className='font-arvo my-4 text-xs text-center text-gray-400'>
              <span>
                Copyright &copy; {new Date().getFullYear()} A2Zeta Creative
                Design
                <br />
                <a
                  href='https://a2zeta.com'
                  className='text-gray-500 ml-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  @codenamezeta
                </a>
              </span>
            </p>
          </div>
        </nav>
      </div>
    </nav>
  )
}
