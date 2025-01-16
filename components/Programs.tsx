//- Programs Component
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAllBandClasses } from '@/lib/programs'

export default function Programs(): JSX.Element {
  const bandClasses = getAllBandClasses()
  return (
    <section className='container flex flex-col lg:flex-row flex-wrap gap-8'>
      {bandClasses.map((bandClass, index: number) => (
        <div
          key={index}
          id={bandClass.programName}
          className='program-card flex flex-col p-8 rounded-lg border-2 border-primary'
        >
          <h2 className='text-accent text-lg md:text-2xl title-font font-bold'>
            {bandClass.programName}
          </h2>
          <span className='font-bold text-sm md:text-xl my-3'>
            {bandClass.tagline}
          </span>
          <p className='leading-relaxed text-sm md:text-lg mb-3'>
            {bandClass.description}
          </p>
          <ul className='list-none text-sm md:text-lg'>
            {bandClass.features.map((benefit, index) => (
              <li key={index} className='my-2'>
                {benefit}
              </li>
            ))}
          </ul>
          <ul className='list-none mt-auto'>
            {bandClass.disclaimers.map((disclaimer, index) => (
              <li key={index} className='text-muted-foreground text-xs'>
                {disclaimer}
              </li>
            ))}
          </ul>
          {/* <Link href={`/programs/${bandClass.slug}`} className='mt-auto'>
            <Button variant='outline' size='full'>
              Get started
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </Button>
          </Link> */}
        </div>
      ))}
    </section>
  )
}
