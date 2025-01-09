//- FAQs component
import SectionOverview from './SectionOverview'

interface FAQ {
  question: string
  answer: string
}

interface FAQsProps {
  faqs: FAQ[]
}

//* Default single column FAQs component
const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
  return (
    <div className='grid divide-y divide-neutral-200 max-w-lg mx-auto mt-8 pb-24'>
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
              <span className='transition group-open:-rotate-180'>
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

//* Multi-column FAQs component
const FAQColumns: React.FC<FAQsProps> = ({ faqs }) => {
  //- Split the faqs array into three columns
  const faqsColumn1 = faqs.filter((_, index) => index % 3 === 0)
  const faqsColumn2 = faqs.filter((_, index) => index % 3 === 1)
  const faqsColumn3 = faqs.filter((_, index) => index % 3 === 2)

  return (
    <aside className=''>
      <div className='flex flex-wrap container'>
        {/* Loop through the faqs array and display every third array item in this column */}
        {/* Column 1 of 3 */}
        <div className='w-full md:w-1/2 xl:w-1/3 px-4 py-2'>
          {faqsColumn1.map((faq, index) => (
            <div key={index} className='py-6'>
              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='text-xl'>{faq.question}</span>
                  <span className='transition group-open:-rotate-180'>
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
        {/* Column 2 of 3 */}
        <div className='w-full md:w-1/2 xl:w-1/3 px-4 py-2'>
          {faqsColumn2.map((faq, index) => (
            <div key={index} className='py-6'>
              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='text-xl'>{faq.question}</span>
                  <span className='transition group-open:-rotate-180'>
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
        {/* Column 3 of 3 */}
        <div className='w-full md:w-1/2 xl:w-1/3 px-4 py-2'>
          {faqsColumn3.map((faq, index) => (
            <div key={index} className='py-6'>
              <details className='group'>
                <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                  <span className='text-xl'>{faq.question}</span>
                  <span className='transition group-open:-rotate-180'>
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
      </div>
    </aside>
  )
}

export { FAQs as default, FAQColumns }
