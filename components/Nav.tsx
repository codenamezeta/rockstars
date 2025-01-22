'use client'
import { useEffect, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
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
  const searchParams = useSearchParams()
  const pathname = usePathname() // For the current page path
  const router = useRouter()
  // const [scrollTriggered, setScrollTriggered] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileNav = () => {
    const menu = document.querySelector('.navbar-menu')
    menu?.classList.toggle('hidden')
    setMobileNavOpen(!mobileNavOpen)
  }

  function scrollToSection(scrollTarget: string) {
    const targetEl = document.querySelector(`#${scrollTarget}`)
    if (!targetEl) return
    mobileNavOpen && toggleMobileNav()
    const yOffset = -44 // adjust offset to account for fixed navbar
    const y =
      targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  useEffect(() => {
    //* If the URL has ?scrollTo=free_trial, call the scrolling logic
    const scrollTarget = searchParams.get('scrollTo')
    if (scrollTarget) {
      //- 1. Scroll
      scrollToSection(scrollTarget)

      //- 2. Remove the param
      const newParams = new URLSearchParams(searchParams.toString())
      newParams.delete('scrollTo')
      //? This ensures the URL changes, so next time ?scrollTo=free_trial is added, the effect runs again
      router.replace(`${pathname}?${newParams.toString()}`, { scroll: false })
    }
    // Add scroll event listener to change navbar color on scroll
    function navbarTransparencyChange() {
      setIsScrolled(window.scrollY > 50)
    }

    // Check immediately on mount
    navbarTransparencyChange()

    // Then watch for scroll changes
    window.addEventListener('scroll', navbarTransparencyChange)
    return () => window.removeEventListener('scroll', navbarTransparencyChange)
  }, [searchParams, pathname])

  return (
    <nav
      className={`font-soleil font-bold tracking-wide fixed top-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className='container px-4 py-4 flex justify-between items-center'>
        <Link className='text-3xl font-bold leading-none w-24 md:w-40' href='/'>
          <Image alt='The Rockstars of Tomorrow logo' src={Logo} priority />
        </Link>
        <div className='lg:hidden ml-auto'>
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
        <ul className='hidden list-none lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6'>
          {pages.map((page) => (
            <li key={page.path} className=''>
              <Link
                href={page.path}
                className={`text-xl font-bold text-gray-500 no-underline hover:underline hover:text-foreground hover:tracking-wider transition duration-300 ${
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
        <Link href='/?scrollTo=free_trial'>
          <Button className='hidden lg:flex md:py-6'>
            <IoStarSharp className='items-baseline mr-2' />
            Book A Free Trial
            <IoStarSharp className='inline ml-2' />
          </Button>
        </Link>
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
            <ul className='list-none'>
              {pages.map((page) => (
                <li key={page.path} className='mb-4'>
                  <Link
                    href={page.path}
                    className={`block no-underline p-4 text-2xl font-semibold text-gray-400 hover:bg-accent hover:text-white rounded ${
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
              <Link href='tel:8443668742'>
                <Button
                  variant='outline'
                  className='w-full mb-4 bg-transparent'
                >
                  Call Us
                </Button>
              </Link>

              <Link href='/?scrollTo=free_trial'>
                <Button size='full'>
                  <IoStarSharp className='items-baseline mr-2' />
                  Book A Free Trial
                  <IoStarSharp className='inline ml-2' />
                </Button>
              </Link>
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
