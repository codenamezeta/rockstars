// Code for FAQs component

interface FAQ {
  question: string
  answer: string
}

interface FAQsProps {
  faqs: FAQ[]
}

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
  return (
    <div className='max-w-screen-lg mx-auto bg-background min-h-screen rounded-xl'>
      <div className='flex flex-col items-center pt-6'>
        <h2 className='font-bold text-5xl mt-5 tracking-tight'>FAQ</h2>
        <p className='text-neutral-500 text-xl mt-3'>
          Frequently Asked Questions
        </p>
      </div>
      <div className='grid divide-y divide-neutral-200 max-w-lg mx-auto mt-8'>
        {faqs.map((faq, index) => (
          <div key={index} className='py-5'>
            <details className='group'>
              <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                <span className='text-xl'>{faq.question}</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shape-rendering='geometricPrecision'
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
        <div className='flex flex-col mt-m py-8'>
          <h2 className='text-primary text-center text-2xl mb-1 font-medium title-font'>
            Still have questions?
          </h2>
          <p className='leading-relaxed text-center mb-5 text-gray-400'>
            Let us know how we can help.
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-background rounded border border-gray-700 focus:border-white focus:ring-2 focus:ring-white text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-background rounded border border-gray-700 focus:border-white focus:ring-2 focus:ring-white text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='message' className='leading-7 text-sm'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-background rounded border border-gray-700 focus:border-white focus:ring-2 focus:ring-white h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            ></textarea>
          </div>
          <button className='text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary hover:text-black rounded text-lg'>
            Submit
          </button>
          <p className='text-xs text-gray-600 text-opacity-90 mt-3'>
            Questions, comments, or concerns? Let us know how we can help you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQs
