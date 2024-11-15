import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import LessonPriceBox from './LessonPriceBox'
import SectionOverview from './SectionOverview'

export default function PricingLessons(): JSX.Element {
  return (
    <section id='lessons_pricing' className='py-24 bg-black body-font'>
      <SectionOverview
        title={'Music Lessons'}
        subtitle={
          'Learn to play your favorite instrument with the guidance of our expert instructors.'
        }
      />
      <div className='lessons-pricing-details'>
        <div className='p-4 md:w-2/3 w-full mx-auto'>
          <h2 className='text-4xl text-white leading-none flex flex-wrap'>
            Private Lessons
          </h2>
          <p
            className='text-sm text-gray-400 mt-2'
            style={{ maxWidth: '60ch' }}
          >
            Private, one-on-one instruction at your own pace, custom-tailored
            for every individual student. You can also share your lesson time in
            private groups with your own family members and friends.
          </p>
          <div className='my-4 border-b border-gray-800 w-full'></div>
          {/* This div marks the pricing data seperated from the textual description */}
          <div className='flex flex-col md:flex-row md:gap-2'>
            <LessonPriceBox
              timeBlockSize={30}
              interval='/month'
              price={159}
              additionalCostText='+$69 / additional student'
              customPrice={false}
              customPriceText={''}
              highlight={false}
              highlightText={''}
              featuresList={[]}
              disclaimers={['Prices & availability are subject to change.']}
              callToActionText={''}
              recurrence={'minutes / week'}
            />
            <LessonPriceBox
              highlight={true}
              highlightText='Most Popular'
              timeBlockSize={45}
              price={237}
              additionalCostText='+$87 / additional student'
              callToActionText={''}
            />
            <LessonPriceBox
              highlight={true}
              highlightText='Best Value'
              highlightColor='primary'
              timeBlockSize={60}
              price={309}
              additionalCostText='+$109 / additional student'
              callToActionText={''}
            />
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
    </section>
  )
}
