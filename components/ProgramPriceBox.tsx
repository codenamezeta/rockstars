import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

type ProgramPriceBoxProps = {
  name?: string
  price?: number
  interval?: string
  currency?: string
  customPrice?: boolean
  customPriceText?: string
  additionalCostText?: string
  highlight?: boolean
  highlightText?: string
  featuresList?: string[]
  disclaimers?: string[]
  callToActionText?: string
  callToActionPath?: string
}

const ProgramPriceBox: React.FC<ProgramPriceBoxProps> = ({
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
  callToActionText = '',
  callToActionPath = '',
}: ProgramPriceBoxProps) => {
  return (
    <div className='p-2 xl:w-1/4 md:w-1/2 w-full font-soleil'>
      <div
        className={
          highlight
            ? 'h-full p-4 rounded-lg border-2 border-primary flex flex-col flex-wrap relative overflow-hidden'
            : 'h-full p-4 rounded-lg border-2 border-gray-800 flex flex-col flex-wrap relative overflow-hidden'
        }
      >
        {highlight && (
          <span className='bg-primary text-white px-3 py-1 tracking-widest text-xs absolute m-0 right-0 top-0 rounded-bl uppercase'>
            {highlightText.toUpperCase()}
          </span>
        )}
        <h2 className='text-xl tracking-tight text-accent uppercase'>
          {name.toUpperCase()}
        </h2>

        <h2 className='text-6xl text-white font-bold flex flex-wrap items-baseline my-4 border-b border-gray-800'>
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

        <ul className='text-gray-200 m-0 font-arvo'>
          {featuresList &&
            featuresList.map((feature, index) => (
              <li key={index} className='flex my-2 list-none'>
                <span className='w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-transparent text-accent rounded-full flex-shrink-0'>
                  <svg
                    fill='hsla(0, 100%, 100%, 0.0)'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2L15.09 8.45L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.45L12 2Z'></path>
                  </svg>
                </span>
                {feature}
              </li>
            ))}
        </ul>
        {/* White space above disclaimers. Aligns buttons to the bottom of the cards */}
        <div className='h-2 w-full mt-auto'></div>
        {disclaimers &&
          disclaimers.map((disclaimerLine, index) => (
            <p
              key={index}
              className='text-xs text-gray-400 text-center font-soleil font-thin tracking-wide'
            >
              {disclaimerLine}
            </p>
          ))}

        {callToActionText && (
          <Link
            className={`${buttonVariants({ variant: 'outline' })} bg-transparent mt-4 no-underline border-primary`}
            href={callToActionPath}
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
    </div>
  )
}

export default ProgramPriceBox
