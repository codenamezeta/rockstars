//* Programs Component
import Separator from '@/components/Separator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Program = {
  name: string
  tagline: string
  description: string
  details: string[]
}

type ProgramsProps = {
  programs: Program[]
}

export default function Programs({ programs }: ProgramsProps): JSX.Element {
  return (
    <section className='container flex flex-col lg:flex-row flex-wrap gap-8'>
      {programs.map((program: Program, index: number) => (
        <div
          key={index}
          id={program.name}
          className='program-card flex flex-col p-8 rounded-lg border-2 border-accent'
        >
          <h2 className='text-primary text-lg md:text-2xl title-font font-bold'>
            {program.name}
          </h2>
          <span className='font-bold text-sm md:text-xl my-3'>
            {program.tagline}
          </span>
          <p className='leading-relaxed text-sm md:text-lg'>
            {program.description}
          </p>
          <Separator />
          <ul className='title-font font-medium mb-8 flex flex-wrap gap-2 text-left justify-start'>
            {program.details.map((detail: String, i: number) => (
              <li
                key={i}
                className='bg-accent p-3 rounded-lg border-1 border-gray-300 text-xs'
              >
                {detail}
              </li>
            ))}
          </ul>
          <Link href='/#enroll' className='mt-auto'>
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
          </Link>
        </div>
      ))}
    </section>
  )
}
