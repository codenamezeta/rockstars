import { getAllBandClasses } from '@/lib/programs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Separator from '@/components/Separator'
import SectionOverview from './SectionOverview'

export default function ProgramsComparison(): JSX.Element {
  const bandClasses = getAllBandClasses()
  return (
    <aside id='programs_comparison' className='py-24 bg-black'>
      <SectionOverview
        title='Which Program is Right for You'
        titleColor='white'
        separatorColor='accent'
      />
      <div className='container flex flex-wrap'>
        {bandClasses.map((bandClass, index) => (
          <div key={index} className='px-1 xl:w-1/4 md:w-1/2 w-full'>
            <div className='h-full px-4 pt-6 border-2 border-gray-800 rounded-lg flex flex-col relative overflow-hidden'>
              <h2 className='text-xl text-center tracking-widest text-accent title-font font-medium'>
                {bandClass.programName.toUpperCase()}
              </h2>
              <Separator />
              {bandClass.features.map((feature, index) => (
                <p
                  key={index}
                  className='flex items-top text-gray-300 text-md mb-2'
                >
                  {/* <span className='w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0'>
                    <svg
                      fill='#ccc'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2.5'
                      className='w-3 h-3'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2L15.09 8.45L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.45L12 2Z'></path>
                    </svg>
                  </span> */}
                  {feature}
                </p>
              ))}
              {/* White space above disclaimers. Aligns buttons to the bottom of the cards */}
              <div className='h-4 w-full mt-auto'></div>
              {bandClass.disclaimers &&
                bandClass.disclaimers.map((disclaimer, index) => (
                  <p
                    key={index}
                    className='text-xs text-muted-foreground text-center'
                  >
                    {disclaimer}
                  </p>
                ))}
              <Link
                href={`/programs/${bandClass.programName}`}
                className='py-4 text-center text-foreground hover:text-accent'
              >
                Learn More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
