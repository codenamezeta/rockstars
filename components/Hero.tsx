'use client'
import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
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
          <h1 className='text-xl md:text-4xl xl:text-6xl font-soleil uppercase text-accent tracking-tighter font-bold'>
            {title}
          </h1>
          <h2
            className='mt-3 font-bold text-sm md:text-md xl:text-xl text-white tracking-tight'
            // style={{ textShadow: '1px -1px hsl(36, 25%, 50%)' }}
          >
            {subtitle}
          </h2>
          <p className='my-4 text-sm md:text-md font-arvo tracking-tight'>
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
              className='lg:text-xl tracking-widest uppercase py-8 mt-4'
              size='full'
            >
              <IoStarSharp className='mr-2 text-secondary' />
              {ctaText}
              <IoStarSharp className='ml-2 text-secondary' />
            </Button>
          </Link>
        </div>
        <div className='self-end hidden xl:block w-2/3 overflow-hidden'>
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={image.classNames}
            />
          )}
        </div>
      </div>
    </header>
  )
}
