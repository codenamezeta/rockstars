// Code for FAQs component

import SectionOverview from './SectionOverview'

interface FAQ {
  question: string
  answer: string
}

interface FAQsProps {
  faqs: FAQ[]
}

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
  return (
    <div className='grid divide-y divide-neutral-200 max-w-lg mx-auto mt-8 py-24'>
      <SectionOverview
        title='FAQ'
        overviewText='Frequently Asked Questions'
        titleColor='white'
        overviewTextColor='neutral-500'
      />
      {faqs.map((faq, index) => (
        <div key={index} className='py-6'>
          <details className='group'>
            <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
              <span className='text-xl'>{faq.question}</span>
              <span className='transition group-open:rotate-180'>
                <svg
                  fill='none'
                  height='24'
                  shapeRendering='geometricPrecision'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  width='24'
                >
                  <path d='M6 9l6 6 6-6'></path>
                </svg>
              </span>
            </summary>
            <p className='text-gray-300 mt-3 group-open:animate-fadeIn'>
              {faq.answer}
            </p>
          </details>
        </div>
      ))}
    </div>
  )
}

export default FAQs
