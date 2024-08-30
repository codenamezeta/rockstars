import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

type LessonPriceBoxProps = {
  timeBlockSize: number
  recurrence?: string
  price: number
  interval?: string
  currency?: string
  customPrice?: boolean
  customPriceText?: string
  additionalCostText?: string
  highlight?: boolean
  highlightText?: string
  highlightColor?: string
  featuresList?: string[]
  disclaimers?: string[]
  callToActionText?: string
}

const LessonPriceBox: React.FC<LessonPriceBoxProps> = ({
  timeBlockSize = 45,
  recurrence = 'minutes / week',
  price = 237,
  interval = '/month',
  currency = '$',
  customPrice = false,
  customPriceText = 'Fully customized pricing based on your needs',
  additionalCostText = '+$87 / additional student',
  highlight = false,
  highlightText = 'Most Popular',
  highlightColor = 'accent',
  featuresList = [
    // 'Details for this program are coming soon.',
    // 'Please check back later for more information.',
    // '45 minutes/week',
  ],
  disclaimers = ['Prices & availability are subject to change.'],
  callToActionText = 'Get Started',
}: LessonPriceBoxProps) => {
  return (
    <div
      className={
        highlight
          ? `h-full p-6 rounded-lg border-2 border-${highlightColor} flex flex-col flex-wrap relative overflow-hidden mb-4 md:w-1/3 bg-background`
          : 'h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col flex-wrap relative overflow-hidden mb-4 md:w-1/3 bg-background'
      }
    >
      {highlight && (
        <span
          className={`bg-${highlightColor} text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl`}
        >
          {highlightText.toUpperCase()}
        </span>
      )}
      <div className='flex flex-wrap justify-center border-b border-accent py-2 mt-4 mb-2'>
        <h2 className='text-5xl w-full text-primary font-bold text-center leading-none'>
          {timeBlockSize}
        </h2>
        <span
          className='text-lg mb-4 w-full text-center font-normal text-foreground'
          style={{ minWidth: 'fit-content' }}
        >
          {recurrence}
        </span>
        <h2 className='text-5xl text-foreground font-bold leading-none'>
          {customPrice ? (
            customPriceText
          ) : price <= 0 ? (
            'Free'
          ) : (
            <span className='flex justify-center md:justify-start'>
              <span className='text-2xl'>{currency}</span>
              {price}
              <span className='text-lg ml-1 mt-auto font-normal text-gray-400'>
                {price <= 0 ? '' : `${interval}`}
              </span>
            </span>
          )}
        </h2>
      </div>
      {additionalCostText && (
        <p className='text-sm text-foreground mb-4 ml-auto'>
          {additionalCostText}
        </p>
      )}
      {/* <h2 className='text-5xl text-white leading-none flex flex-wrap items-baseline pb-4 my-2 border-b border-gray-800'>
        {customPrice ? (
          customPriceText
        ) : price <= 0 ? (
          'Free'
        ) : (
          <>
            <span className='text-2xl self-start'>{currency}</span>
            {price}
          </>
        )}
        <span
          className='text-lg ml-1 mt-auto font-normal text-gray-400'
          style={{ minWidth: 'fit-content' }}
        >
          {price <= 0 ? '' : `${interval}`}
        </span>
        {additionalCostText && (
          <p
            className='text-xs text-gray-400 mb-1 ml-auto mt-2'
            style={{ minWidth: 'fit-content' }}
          >
            {additionalCostText}
          </p>
        )}
      </h2> */}

      {featuresList &&
        featuresList.map((feature, index) => (
          <p key={index} className='flex items-top text-gray-300 mb-2'>
            <span className='w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0'>
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
            </span>
            {feature}
          </p>
        ))}
      {/* White space above disclaimers. Aligns buttons to the bottom of the cards */}
      <div className='h-2 w-full mt-auto'></div>
      {disclaimers &&
        disclaimers.map((disclaimerLine, index) => (
          <p key={index} className='text-xs text-gray-400 text-center'>
            {disclaimerLine}
          </p>
        ))}

      {callToActionText && (
        <Link
          className={`${buttonVariants({ variant: 'accent' })} mt-4`}
          href='/'
        >
          {callToActionText}
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
      )}
    </div>
  )
}

export default LessonPriceBox
