import { getAllBandClasses } from '@/lib/programs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Separator from '@/components/Separator'
import SectionOverview from './SectionOverview'

export function ProgramsComparisonCards(): JSX.Element {
  const bandClasses = getAllBandClasses()
  return (
    <section id='programs_comparison' className='py-24 bg-black'>
      <SectionOverview
        title='Which Program is Right for You?'
        titleColor='white'
        separatorColor='accent'
      />
      <div className='container flex flex-wrap'>
        {bandClasses.map((bandClass, index) => (
          <div key={index} className='px-1 xl:w-1/4 md:w-1/2 w-full'>
            <div className='h-full px-4 pt-6 border-2 border-gray-800 rounded-lg flex flex-col relative overflow-hidden'>
              <h2 className='text-xl text-center tracking-widest text-accent title-font font-medium'>
                {bandClass.programName.toUpperCase()}
              </h2>
              <Separator />
              {bandClass.features.map((feature, index) => (
                <p
                  key={index}
                  className='flex items-top text-gray-300 text-md mb-2'
                >
                  {/* <span className='w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0'>
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
                  </span> */}
                  {feature}
                </p>
              ))}
              {/* White space above disclaimers. Aligns buttons to the bottom of the cards */}
              <div className='h-4 w-full mt-auto'></div>
              {bandClass.disclaimers &&
                bandClass.disclaimers.map((disclaimer, index) => (
                  <p
                    key={index}
                    className='text-xs text-muted-foreground text-center'
                  >
                    {disclaimer}
                  </p>
                ))}
              <Link
                href={`/programs/${bandClass.slug}`}
                className='py-4 text-center text-foreground hover:text-accent'
              >
                Learn More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// export default function ProgramsComparisonTable(): JSX.Element {
//   const bandClasses = getAllBandClasses()
//   return (
//     <aside className='bg-black py-16'>
//       <div className='container mx-auto px-6'>
//         <h2 className='text-3xl font-bold mb-6 text-center'>
//           Which Program is Right for You?
//         </h2>

//         <table className='table-auto w-full text-left bg-background shadow-lg rounded-lg'>
//           <thead className='bg-primary'>
//             <tr>
//               {bandClasses.map((bandClass, index) => (
//                 <th key={index} className='px-4 py-2'>
//                   {bandClass.programName}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {bandClasses.map((bandClass, index) => (
//               <tr key={index}>
//                 {bandClass.features.map((feature, index) => (
//                   <td key={index} className='border px-4 py-2'>
//                     {feature}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </aside>
//   )
// }

export default function ProgramsComparisonTable() {
  const bandClasses = getAllBandClasses()
  // Define the columns (program names)
  const columns = bandClasses.map((bandClass) => bandClass.programName)

  // Define the rows (features)
  const rows = []
  for (let i = 0; i < 8; i++) {
    const row = bandClasses.map((bandClass) => bandClass.features[i] || '')
    rows.push(row)
  }

  return (
    <aside className='py-12'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-6 text-center'>
          Which Program is Right for You?
        </h2>

        <table className='table-auto w-full text-left bg-background shadow-lg rounded-lg'>
          <thead className='bg-primary'>
            <tr>
              {/* <th className='px-4 py-2'>Feature</th> */}
              {columns.map((column, index) => (
                <th key={index} className=''>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* <td className='border px-4 py-2'>Feature {rowIndex + 1}</td> */}
                {row.map((feature, colIndex) => (
                  <td key={colIndex} className=''>
                    {feature}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  )
}
