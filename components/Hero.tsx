import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { IoStarSharp } from 'react-icons/io5'

interface HeroProps {
  title: string
  subtitle?: string
  eyebrow?: string
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
    <header
      className='hero xl:h-screen'
      style={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('/assets/Fold-Overlay-Wide.webp') no-repeat center center/cover, url('/assets/Vine-Background.png') repeat center center/contain`,
      }}
    >
      <div className='container flex flex-col justify-center xl:justify-end h-full xl:flex-row'>
        <div className='z-10 lg:self-center lg:w-2/3 lg:h-auto pb-8 pt-44 space-y-6'>
          {/* <h1 className='text-4xl lg:text-8xl font-bold text-primary uppercase tracking-tighter'>
            {title}
          </h1> */}
          {/* <span className='mt-3 font-bold lg:text-xl text-white tracking-wider'>
            From Lessons to Live Performances
          </span> */}
          <h1 className='themed-text-1 text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-soleil uppercase text-accent tracking-tight font-bold'>
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
              className='lg:text-xl tracking-widest uppercase text-primary-foreground py-8 mt-8'
              size='full'
            >
              <IoStarSharp className='mr-2' />
              {ctaText}
              <IoStarSharp className='ml-2' />
            </Button>
          </Link>
        </div>

        {/* Image section - only rendered if we're mounted on client and on XL screens */}
        {image && (
          <div className='self-end hidden xl:block overflow-hidden'>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={image.classNames}
              priority={true}
              quality={50}
            />
          </div>
        )}
      </div>
    </header>
  )
}

export function HeroMedium({
  title = 'Rockstars of Tomorrow',
  subtitle,
  eyebrow,
  text,
  list,
  ctaText = 'Book A Free Trial',
  ctaLink = '/?scrollTo=free_trial',
  image,
}: HeroProps): JSX.Element {
  return (
    <header
      className='hero xl:h-screen pt-32'
      style={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('/assets/Fold-Overlay-Wide.webp') no-repeat center center/cover, url('/assets/Vine-Background.png') repeat center center/contain`,
      }}
    >
      <div className='container flex flex-col justify-center items-center gap-6 xl:justify-end h-full xl:flex-row'>
        <div className='z-10 lg:w-1/2 space-y-6'>
          {/* <h1 className='text-4xl lg:text-8xl font-bold text-primary uppercase tracking-tighter'>
            {title}
          </h1> */}
          {/* <span className='mt-3 font-bold lg:text-xl text-white tracking-wider'>
            From Lessons to Live Performances
          </span> */}
          <h2
            className='mt-3 font-arvo font-bold text-sm md:text-md xl:text-xl text-white tracking-tight'
            // style={{ textShadow: '1px -1px hsl(36, 25%, 50%)' }}
          >
            {eyebrow}
          </h2>
          <h1 className='themed-text-1 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-soleil uppercase text-accent tracking-tight font-bold'>
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
              className='lg:text-xl tracking-widest uppercase text-primary-foreground py-8 mt-8'
              size='full'
            >
              <IoStarSharp className='mr-2' />
              {ctaText}
              <IoStarSharp className='ml-2' />
            </Button>
          </Link>
        </div>
        {image && (
          <div className='lg:w-1/2'>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={image.classNames}
              priority={true}
              quality={50}
            />
          </div>
        )}
      </div>
    </header>
  )
}
