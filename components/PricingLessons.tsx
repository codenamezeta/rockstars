import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function PricingLessons(): JSX.Element {
  return (
    <section className='px-5 py-24 bg-black body-font'>
      <div className='container flex flex-col text-center w-full mb-8'>
        <h2 className='sm:text-3xl text-2xl font-medium title-font mb-2'>
          Music Lessons
        </h2>
        <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-primary'>
          Learn to play your favorite instrument with the guidance of our expert
          instructors.
        </p>
      </div>
      <div className=''>
        <div className='p-4 md:w-2/3 w-full mx-auto'>
          <div className='h-full p-6 rounded-lg border-2 border-primary flex flex-col flex-wrap relative overflow-hidden grid grid-cols-12'>
            <span className='bg-primary text-black px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl grid-end'>
              MOST POPULAR
            </span>
            <h2 className='text-4xl text-white leading-none flex flex-wrap items-baseline pb-4 mb-4 border-b border-gray-800'>
              Private Lessons
              <span className='text-sm text-gray-400 mt-2'>
                Private, one-on-one instruction at your own pace,
                custom-tailored for every individual student. You can also share
                your lesson time in private groups with your own family members
                and friends.
              </span>
            </h2>
            <div className='flex flex-col mb-4'>
              <span className='flex items-baseline justify-between text-3xl border-b border-dashed border-accent mb-4'>
                <span>
                  20
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    minutes/week
                  </span>
                </span>
                <span className='text-right font-bold text-xl'>
                  $127
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    /month
                  </span>
                </span>
                <span className='text-right font-bold text-xl'>
                  +$57
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    /add'l student
                  </span>
                </span>
              </span>
              <span className='flex items-baseline justify-between text-3xl border-b border-dashed border-accent mb-4'>
                <span>
                  30
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    minutes/week
                  </span>
                </span>
                <span className='text-right font-bold text-xl'>
                  $159
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    /month
                  </span>
                </span>
                <span className='text-right font-bold text-xl'>
                  +$69
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    /add'l student
                  </span>
                </span>
              </span>
              <span className='flex items-baseline justify-between text-3xl border-b border-dashed border-accent mb-4'>
                <span>
                  45
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    minutes/week
                  </span>
                </span>
                <span className='text-right font-bold text-xl'>
                  $237
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    /month
                  </span>
                </span>
                <span className='text-right font-bold text-xl'>
                  +$87
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    /add'l student
                  </span>
                </span>
              </span>
              <span className='flex items-baseline justify-between text-3xl border-b border-dashed border-accent mb-4'>
                <span>
                  60
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    minutes/week
                  </span>
                </span>
                <span className='text-right font-bold text-xl'>
                  $309
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    /month
                  </span>
                </span>
                <span className='text-right font-bold text-xl'>
                  +$109
                  <span className='text-sm ml-1 font-normal text-gray-400'>
                    /add'l student
                  </span>
                </span>
              </span>
            </div>

            <Link
              className={`${buttonVariants({ variant: 'outline' })} mt-4`}
              href='/'
            >
              Schedule a free trial lesson
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-auto'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  )
}
