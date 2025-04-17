// //- FAQs component

import React from 'react'
import SectionOverview from './SectionOverview'

interface FAQ {
  question: string
  answer: React.ReactNode // Changed from string to ReactNode to support rich content
}

interface FAQsProps {
  faqs: FAQ[]
  title?: string
  overviewText?: string
  titleColor?: string
  overviewTextColor?: string
}

//* Default single column FAQs component
const FAQs: React.FC<FAQsProps> = ({
  faqs,
  title = 'FAQ',
  overviewText = 'Frequently Asked Questions',
  titleColor = 'white',
  overviewTextColor = 'muted-foreground',
}) => {
  return (
    <div className='container max-w-3xl divide-y divide-neutral-400 my-8'>
      <SectionOverview
        title={title}
        overviewText={overviewText}
        titleColor={titleColor}
        overviewTextColor={overviewTextColor}
      />
      {faqs.map((faq, index) => (
        <div key={index} className='py-6'>
          <details className='group'>
            <summary className='flex justify-between items-start font-medium cursor-pointer list-none'>
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
            <div className='mt-3 text-gray-300 group-open:animate-fadeIn'>
              {faq.answer}
            </div>
          </details>
        </div>
      ))}
    </div>
  )
}

//* Multi-column FAQs component
const FAQColumns: React.FC<FAQsProps> = ({
  faqs,
  title = 'FAQ',
  overviewText = 'Frequently Asked Questions',
  titleColor = 'white',
  overviewTextColor = 'muted-foreground',
}) => {
  //- Split the faqs array into three columns
  const faqsColumn1 = faqs.filter((_, index) => index % 3 === 0)
  const faqsColumn2 = faqs.filter((_, index) => index % 3 === 1)
  const faqsColumn3 = faqs.filter((_, index) => index % 3 === 2)

  return (
    <aside className=''>
      {title && overviewText && (
        <div className='container mb-6'>
          <SectionOverview
            title={title}
            overviewText={overviewText}
            titleColor={titleColor}
            overviewTextColor={overviewTextColor}
          />
        </div>
      )}
      <div className='flex flex-wrap container'>
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
                <div className='mt-3 text-gray-300 group-open:animate-fadeIn'>
                  {faq.answer}
                </div>
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
                <div className='mt-3 text-gray-300 group-open:animate-fadeIn'>
                  {faq.answer}
                </div>
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
                <div className='mt-3 text-gray-300 group-open:animate-fadeIn'>
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export { FAQs as default, FAQColumns }

// import SectionOverview from './SectionOverview'

// interface FAQ {
//   question: string
//   answer: string
// }

// interface FAQsProps {
//   faqs: FAQ[]
// }

// //* Default single column FAQs component
// const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
//   return (
//     <div className='container max-w-3xl divide-y divide-neutral-400 my-8'>
//       <SectionOverview
//         title='FAQ'
//         overviewText='Frequently Asked Questions'
//         titleColor='white'
//         overviewTextColor='muted-foreground'
//       />
//       {faqs.map((faq, index) => (
//         <div key={index} className='py-6'>
//           <details className='group'>
//             <summary className='flex justify-between items-start font-medium cursor-pointer list-none'>
//               <span className='text-xl'>{faq.question}</span>
//               <span className='transition group-open:-rotate-180'>
//                 <svg
//                   fill='none'
//                   height='24'
//                   shapeRendering='geometricPrecision'
//                   stroke='currentColor'
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth='1.5'
//                   viewBox='0 0 24 24'
//                   width='24'
//                 >
//                   <path d='M6 9l6 6 6-6'></path>
//                 </svg>
//               </span>
//             </summary>
//             <p className='text-gray-300 mt-3 group-open:animate-fadeIn'>
//               {faq.answer}
//             </p>
//           </details>
//         </div>
//       ))}
//     </div>
//   )
// }

// //* Multi-column FAQs component
// const FAQColumns: React.FC<FAQsProps> = ({ faqs }) => {
//   //- Split the faqs array into three columns
//   const faqsColumn1 = faqs.filter((_, index) => index % 3 === 0)
//   const faqsColumn2 = faqs.filter((_, index) => index % 3 === 1)
//   const faqsColumn3 = faqs.filter((_, index) => index % 3 === 2)

//   return (
//     <aside className=''>
//       <div className='flex flex-wrap container'>
//         {/* Loop through the faqs array and display every third array item in this column */}
//         {/* Column 1 of 3 */}
//         <div className='w-full md:w-1/2 xl:w-1/3 px-4 py-2'>
//           {faqsColumn1.map((faq, index) => (
//             <div key={index} className='py-6'>
//               <details className='group'>
//                 <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
//                   <span className='text-xl'>{faq.question}</span>
//                   <span className='transition group-open:-rotate-180'>
//                     <svg
//                       fill='none'
//                       height='24'
//                       shapeRendering='geometricPrecision'
//                       stroke='currentColor'
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth='1.5'
//                       viewBox='0 0 24 24'
//                       width='24'
//                     >
//                       <path d='M6 9l6 6 6-6'></path>
//                     </svg>
//                   </span>
//                 </summary>
//                 <p className='text-gray-300 mt-3 group-open:animate-fadeIn'>
//                   {faq.answer}
//                 </p>
//               </details>
//             </div>
//           ))}
//         </div>
//         {/* Column 2 of 3 */}
//         <div className='w-full md:w-1/2 xl:w-1/3 px-4 py-2'>
//           {faqsColumn2.map((faq, index) => (
//             <div key={index} className='py-6'>
//               <details className='group'>
//                 <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
//                   <span className='text-xl'>{faq.question}</span>
//                   <span className='transition group-open:-rotate-180'>
//                     <svg
//                       fill='none'
//                       height='24'
//                       shapeRendering='geometricPrecision'
//                       stroke='currentColor'
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth='1.5'
//                       viewBox='0 0 24 24'
//                       width='24'
//                     >
//                       <path d='M6 9l6 6 6-6'></path>
//                     </svg>
//                   </span>
//                 </summary>
//                 <p className='text-gray-300 mt-3 group-open:animate-fadeIn'>
//                   {faq.answer}
//                 </p>
//               </details>
//             </div>
//           ))}
//         </div>
//         {/* Column 3 of 3 */}
//         <div className='w-full md:w-1/2 xl:w-1/3 px-4 py-2'>
//           {faqsColumn3.map((faq, index) => (
//             <div key={index} className='py-6'>
//               <details className='group'>
//                 <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
//                   <span className='text-xl'>{faq.question}</span>
//                   <span className='transition group-open:-rotate-180'>
//                     <svg
//                       fill='none'
//                       height='24'
//                       shapeRendering='geometricPrecision'
//                       stroke='currentColor'
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth='1.5'
//                       viewBox='0 0 24 24'
//                       width='24'
//                     >
//                       <path d='M6 9l6 6 6-6'></path>
//                     </svg>
//                   </span>
//                 </summary>
//                 <p className='text-gray-300 mt-3 group-open:animate-fadeIn'>
//                   {faq.answer}
//                 </p>
//               </details>
//             </div>
//           ))}
//         </div>
//       </div>
//     </aside>
//   )
// }

// export { FAQs as default, FAQColumns }
