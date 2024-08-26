import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

type PriceBoxProps = {
  name: string
  price: number
  interval: string
  currency: string
  customPrice: boolean
  customPriceText: string
  additionalCostText: string
  highlight: boolean
  highlightText: string
  featuresList: string[]
  disclaimers: string[]
  callToActionText: string
}

const PriceBox: React.FC<PriceBoxProps> = ({
  name = 'Coming Soon',
  price = 0,
  interval = '/session',
  currency = '$',
  customPrice = false,
  customPriceText = 'Fully customized pricing based on your needs',
  additionalCostText = 'Additional costs may apply.',
  highlight = false,
  highlightText = 'Most Popular',
  featuresList = [
    'Details for this program are coming soon.',
    'Please check back later for more information.',
  ],
  disclaimers = ['Prices & availability are subject to change.'],
  callToActionText = 'Get Started',
}: PriceBoxProps) => {
  return (
    <div className='p-3 xl:w-1/4 md:w-1/2 w-full'>
      <div
        className={
          highlight
            ? 'h-full p-6 rounded-lg border-2 border-accent flex flex-col flex-wrap relative overflow-hidden'
            : 'h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col flex-wrap relative overflow-hidden'
        }
      >
        {highlight && (
          <span className='bg-accent text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl'>
            {highlightText.toUpperCase()}
          </span>
        )}
        <h2 className='text-sm tracking-widest text-gray-400 title-font mb-1 font-medium'>
          {name.toUpperCase()}
        </h2>
        <h2 className='text-5xl text-white leading-none flex flex-wrap items-baseline pb-4 mb-4 border-b border-gray-800'>
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
        </h2>
        {/* <hr className='border-b border-gray-800' /> */}
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
      </div>
    </div>
  )
}

export default PriceBox
