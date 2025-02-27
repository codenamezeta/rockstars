'use client'
import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
// import Photo from '@/public/imgs/drummer-girl-1.png'
import { IoStarSharp } from 'react-icons/io5'

interface HeroProps {
  title: string
  subtitle?: string
  text?: string
  list?: string[]
  ctaText?: string
  ctaLink?: string
  image?: {
    src: string | StaticImageData
    alt: string
    width?: number
    height?: number
    classNames?: string
  }
}

export default function Hero({
  title = 'Rockstars of Tomorrow',
  subtitle,
  text,
  list,
  ctaText = 'Book A Free Trial',
  ctaLink = '/?scrollTo=free_trial',
  image,
}: HeroProps): JSX.Element {
  // Start with isXlScreen as undefined (not true or false)
  const [isXlScreen, setIsXlScreen] = useState<boolean | undefined>(undefined)
  // Add a state to track if we've mounted on the client
  const [hasMounted, setHasMounted] = useState(false)

  // Check viewport size on client side
  useEffect(() => {
    // Mark that we've mounted on client
    setHasMounted(true)

    const checkViewportSize = () => {
      setIsXlScreen(window.innerWidth >= 1280) // 1280px is the xl breakpoint in Tailwind
    }

    // Initial check
    checkViewportSize()

    // Listen for resize events
    window.addEventListener('resize', checkViewportSize)
    return () => window.removeEventListener('resize', checkViewportSize)
  }, [])
  return (
    <header className='hero xl:h-screen'>
      <div className='container flex flex-col justify-center xl:justify-end h-full xl:flex-row'>
        <div className='z-10 lg:self-center lg:w-2/3 lg:h-auto pb-8 pt-44'>
          {/* <h1 className='text-4xl lg:text-8xl font-bold text-primary uppercase tracking-tighter'>
            {title}
          </h1> */}
          {/* <span className='mt-3 font-bold lg:text-xl text-white tracking-wider'>
            From Lessons to Live Performances
          </span> */}
          <h1 className='themed-text-1 text-xl md:text-4xl lg:text-5xl xl:text-7xl font-soleil uppercase text-accent tracking-tight font-bold'>
            {title}
          </h1>
          <h2
            className='mt-3 font-arvo font-bold text-sm md:text-md xl:text-xl text-white tracking-tight'
            // style={{ textShadow: '1px -1px hsl(36, 25%, 50%)' }}
          >
            {subtitle}
          </h2>
          <p className='my-4 text-sm md:text-md xl:text-lg font-soleil tracking-tight'>
            {text}
          </p>
          {list && (
            <ul className='tracking-tight font-arvo space-y-1 md:space-y-2'>
              {list.map((item, index) => (
                <li
                  key={index}
                  className='text-xs md:text-base text-foreground flex items-center'
                >
                  <IoStarSharp className='text-accent mr-2 themed-text-effect-2' />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <Link href={ctaLink}>
            <Button
              className='lg:text-xl tracking-widest uppercase text-primary-foreground py-8 mt-4'
              size='full'
            >
              <IoStarSharp className='mr-2' />
              {ctaText}
              <IoStarSharp className='ml-2' />
            </Button>
          </Link>
        </div>

        {/* Image section - only rendered if we're mounted on client and on XL screens */}
        <div className='self-end hidden xl:block w-2/3 overflow-hidden'>
          {image && hasMounted && isXlScreen === true && (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 1000}
              height={image.height || 1000}
              className={image.classNames}
              priority={true}
              quality={33}
            />
          )}
        </div>
      </div>
    </header>
  )
}
