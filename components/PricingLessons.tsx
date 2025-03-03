'use client'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import LessonPriceBox from './LessonPriceBox'
import SectionOverview from './SectionOverview'
import { useState } from 'react'

export default function PricingLessons(): JSX.Element {
  const [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    setToggled(!toggled)
  }
  return (
    <section id='lessons_pricing' className='themed-background-style-4'>
      <div className='container py-24'>
        <SectionOverview
          title={'Music Lessons'}
          subtitle={
            'Learn to play your favorite instrument with the guidance of our expert instructors.'
          }
        />
        <div className='lessons-pricing-details'>
          <h2 className='text-4xl text-white leading-none flex flex-wrap'>
            Private Lessons
          </h2>
          <p
            className='text-sm text-gray-400 mt-2'
            style={{ maxWidth: '65ch' }}
          >
            Private, one-on-one instruction at your own pace, custom-tailored
            for every individual student. You can also share your lesson time in
            private groups with your own family members and friends.
            <br />
            <Link
              href={'/charter-schools'}
              className='underline hover:text-accent font-bold'
            >
              For Charter School pricing, see here.
            </Link>
          </p>
          {/* <div className='my-4 border-b border-gray-800 w-full'></div> */}
          {/* <h2 className='sm:text-3xl text-2xl font-medium title-font mb-2'>
            {sectionTitle}
          </h2>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-primary'>
            {sectionDescription}
          </p> */}
          <div className='flex md:w-2/5 lg:w-1/4 mx-auto border-2 border-accent rounded overflow-hidden my-6'>
            <button
              className={
                !toggled
                  ? 'text-xs md:text-base py-1 px-4 w-full bg-accent text-white focus:outline-none transition-all duration-500'
                  : 'text-xs md:text-base py-1 px-4 w-full text-muted-foreground focus:outline-none transition-all duration-500'
              }
              onClick={handleToggle}
            >
              Flat Rate
            </button>
            <button
              className={
                !toggled
                  ? 'text-xs md:text-base py-1 px-4 w-full text-muted-foreground focus:outline-none transition-all duration-500'
                  : 'text-xs md:text-base py-1 px-4 w-full bg-accent text-white focus:outline-none transition-all duration-500'
              }
              onClick={handleToggle}
            >
              Hourly Rate
            </button>
          </div>
          {/* This div marks the pricing data seperated from the textual description */}
          <div className='flex flex-col md:flex-row md:gap-2'>
            <LessonPriceBox
              timeBlockSize={toggled ? 2 : 30}
              interval={toggled ? '' : '/month'}
              price={159}
              additionalCostText='+$69 each additional student'
              customPrice={false}
              customPriceText={''}
              highlight={false}
              highlightText={''}
              featuresList={
                !toggled
                  ? ['Fifth week free', 'Free trial lesson']
                  : ['Flexible scheduling']
              }
              disclaimers={['Prices & availability are subject to change.']}
              callToActionText={''}
              recurrence={toggled ? 'Hour Block' : 'minutes per week'}
            />
            <LessonPriceBox
              highlight={!toggled}
              highlightText='Most Popular'
              timeBlockSize={toggled ? 3 : 45}
              interval={toggled ? '' : '/month'}
              recurrence={toggled ? 'Hour Block' : 'minutes per week'}
              price={237}
              additionalCostText='+$87 each additional student'
              callToActionText={''}
              featuresList={
                !toggled ? ['Fifth week free'] : ['Flexible scheduling']
              }
            />
            <LessonPriceBox
              highlight={true}
              highlightText='Best Value'
              highlightColor='accent'
              timeBlockSize={toggled ? 4 : 60}
              interval={toggled ? '' : '/month'}
              recurrence={toggled ? 'Hour Block' : 'minutes per week'}
              price={309}
              additionalCostText='+$109 each additional student'
              callToActionText={''}
              featuresList={
                !toggled ? ['Fifth week free'] : ['Flexible scheduling']
              }
            />
          </div>
          <Link
            className={`${buttonVariants({ variant: 'default', size: 'lg' })} mt-4`}
            href='/?scrollTo=free_trial'
          >
            <span className='text-lg'>Book A Free Trial</span>
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
    </section>
  )
}
