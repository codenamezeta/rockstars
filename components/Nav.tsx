'use client'
import { useEffect, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/imgs/logos/rockstars-la-verne-logo-white.png'
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
    const yOffset = -48 // adjust offset to account for fixed navbar
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
      className={`font-soleil font-bold tracking-wide fixed top-0 w-full z-50 border-primary transition-colors duration-500 ${
        isScrolled ? 'bg-black border-b' : 'bg-transparent'
      }`}
    >
      <div className='container px-4 py-2 flex justify-center items-center'>
        <Link
          className='text-3xl font-bold leading-none w-24 md:w-40 mr-auto lg:mr-0'
          href='/'
        >
          <div className='relative h-[60px] md:h-[80px]'>
            <Image
              alt='The Rockstars of Tomorrow logo'
              src={Logo}
              quality={50}
              fill
              style={{ objectFit: 'contain' }}
              sizes='180px' // This is critical - specify the exact max size
              priority={true}
            />
          </div>
        </Link>

        <ul className='hidden list-none lg:flex lg:mx-auto lg:flex lg:items-center lg:justify-between'>
          {pages.map((page) => (
            <li key={page.path} className=''>
              <Link
                href={page.path}
                className={`mx-3 text-xl font-bold no-underline hover:underline hover:text-primary-foreground hover:tracking-wider transition duration-300 ${
                  pathname === page.path
                    ? 'text-foreground'
                    : 'text-muted-foreground'
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
        <Link
          href={
            pathname === '/charter-schools'
              ? '/charter-schools?scrollTo=charter_school_trial_form'
              : '/?scrollTo=free_trial'
          }
        >
          <Button
            className='flex text-xs ml-4 tracking-tight md:tracking-normal md:py-6 md:text-lg md:ml-0'
            style={{ minHeight: '24px', minWidth: '24px' }}
          >
            <IoStarSharp className='items-baseline md:mr-2' />
            {pathname === '/charter-schools'
              ? 'Book Charter School Free Trial'
              : 'Book A Free Trial'}
            <IoStarSharp className='inline md:ml-2' />
          </Button>
        </Link>
        <div className='lg:hidden'>
          <button
            className='navbar-burger flex items-center text-white p-3 ml-4'
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
      </div>

      {/* Navbar Backdrop below mobile nav creates a grayish overlay */}
      <div className='navbar-menu relative z-50 hidden'>
        <div
          className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'
          onClick={toggleMobileNav}
        ></div>

        {/* Mobile Nav */}
        <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r border-primary overflow-y-auto'>
          <div className='flex items-center mb-8'>
            <Link href={pages[0].path} onClick={toggleMobileNav}>
              <div className='relative w-[128px] h-[96px]'>
                <Image
                  alt='The Rockstars of Tomorrow logo'
                  src={Logo}
                  quality={50}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes='128px'
                  loading='lazy' // Explicitly lazy load this one
                />
              </div>
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
              {/* <Link href='tel:8443668742'>
                <Button
                  variant='outline'
                  className='w-full mb-4 bg-transparent'
                >
                  Call Us
                </Button>
              </Link> */}

              <Link
                href={
                  pathname === '/charter-schools'
                    ? '/charter-schools?scrollTo=charter_school_trial_form'
                    : '/?scrollTo=free_trial'
                }
              >
                <Button size='full'>
                  <IoStarSharp className='items-baseline mr-2' />
                  {pathname === '/charter-schools'
                    ? 'Book Charter School Free Trial'
                    : 'Book A Free Trial'}
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
