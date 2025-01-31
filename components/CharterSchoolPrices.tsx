const tableData = [
  {
    blockSize: 1,
    price: 92,
  },
  {
    blockSize: 2,
    price: 180,
  },
  {
    blockSize: 3,
    price: 264,
  },
  {
    blockSize: 4,
    price: 344,
  },
  {
    blockSize: 6,
    price: 504,
  },
  {
    blockSize: 8,
    price: 656,
  },
  {
    blockSize: 12,
    price: 960,
  },
]

interface TableData {
  blockSize: number
  price: number
}

export default function CharterSchoolPrices(): JSX.Element {
  return (
    <table className='table-auto w-full md:w-2/3 mx-auto text-center bg-background shadow-lg'>
      <thead className='bg-primary text-primary-foreground font-bold text-xl tracking-wider'>
        <tr>
          <th className='text-2xl w-1/2 py-4'>Length of Time</th>
          <th className='text-2xl w-1/2 py-4'>Price</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data: TableData, index: number) => (
          <tr key={index} className='border-b border-gray-700'>
            <td className='text-lg py-3'>
              <span className='text-4xl text-accent font-bold'>
                {data.blockSize}{' '}
              </span>
              Hour
              <span className='block text-sm text-muted-foreground'>
                Block of Time
              </span>
              {index === tableData.length - 1 && (
                <span className='block text-sm text-accent'>Best Value!</span>
              )}
            </td>
            <td className='text-5xl text-accent font-bold'>
              <div className='flex items-start justify-center'>
                <span className='text-lg text-primary-foreground mr-1'>$</span>
                {data.price}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
