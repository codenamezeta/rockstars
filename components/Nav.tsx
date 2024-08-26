'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Logo from '@/public/imgs/logos/logo-white-shadow.svg'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

type Page = {
  name: string // The name of the page
  path: string // The path to the page
}

export default function Nav({ pages }: { pages: Page[] }): JSX.Element {
  const [isSolid, setIsSolid] = useState(false) // Inside the component
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsSolid(false)
      } else {
        setIsSolid(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [isNavOpen, setIsNavOpen] = useState(true)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav className='w-full sticky top-0 z-20 bg-black'>
      {/* <div className='container py-2 flex flex-row justify-between items-center h-24'> */}
      <div
        className={`transition-all duration-700 ease-in-out container py-2 flex flex-row justify-between items-center ${isSolid ? 'h-24' : 'h-36'}`}
      >
        <Link
          href={pages[0].path}
          // className={`transition-all duration-700 ease-in-out ${isSolid ? 'lg:w-24 w-2/12' : 'lg:w-44 w-3/12'}`}
          className=''
        >
          <Image
            className='transition-all duration-700 ease-in-out'
            alt='The Rockstars of Tomorrow logo'
            src={Logo}
            width={isSolid ? 100 : 120}
            height={isSolid ? 97 : 97}
          />
          <span className='sr-only'>
            <h2>Rockstars of Tomorrow</h2>
          </span>
        </Link>
        <ul
          className={`flex flex-col bg-black w-full font-medium mt-4 absolute top-24 left-0 md:static md:w-auto md:flex-row md:p-0 md:mt-0 md:border-0 ${
            isNavOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          {pages.map((page) => (
            <li
              key={page.path}
              className='py-4 my-2 mx-4 text-center rounded border border-gray-400 md:border-0'
            >
              <Link
                href={page.path}
                className={`text-xl text-gray-400 hover:text-white hover:font-bold ${
                  pathname === page.path ? 'text-white' : ''
                }`}
                onClick={toggleNav}
                aria-current='page'
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href='/#enroll' className='ml-auto md:ml-0 mr-4'>
          <Button variant='accent'>Get started</Button>
        </Link>
        <button
          onClick={toggleNav}
          data-collapse-toggle='main_nav'
          type='button'
          className='inline-flex items-center p-0 m-0 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='main_nav'
          aria-expanded={isNavOpen}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-8 h-8'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
