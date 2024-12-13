import SectionOverview from './SectionOverview'

export default function Commitments(): JSX.Element {
  return (
    <section className='bg-black py-16'>
      <SectionOverview
        title='Commit to Greatness'
        overviewText='BandCore is an exciting journey, but it comes with responsibilities. Here is what you need to know about the schedule and commitment before signing up.'
      />

      {/* Scheduling Details */}
      <div className='container grid md:grid-cols-2 gap-8 mb-16'>
        {/* Class Schedule */}
        <div className='bg-background p-6 rounded-lg shadow-lg'>
          <h3 className='text-xl font-bold mb-4 text-accent'>
            Rehearsals Schedule
          </h3>
          <ul className='text-gray-300 space-y-2'>
            <li>
              <strong>Day:</strong> Tuesdays
            </li>
            <li>
              <strong>Time:</strong> 6:00 PM - 8:00 PM
            </li>
            <li>
              <strong>Duration:</strong> 12-week sessions
            </li>
            <li>
              <strong>Instructor:</strong> Kevin Shannon
            </li>
            <li>
              <strong>Room:</strong> Live Room
            </li>
          </ul>
        </div>

        {/* Pricing and Commitment */}
        <div className='bg-background p-6 rounded-lg shadow-lg'>
          <h3 className='text-xl font-bold mb-4 text-accent'>
            Pricing and Commitment
          </h3>
          <ul className='text-gray-300 space-y-2'>
            <li>
              <strong>Price:</strong> $297 per session
            </li>
            <li>
              <strong>Commitment:</strong> Students are expected to attend all
              rehearsals and participate in two live shows.
            </li>
            <li>
              <strong>Flexibility:</strong> Students can continue with new bands
              and performances each session or cancel at the end of a session.
            </li>
          </ul>
        </div>
      </div>

      {/* Key Dates */}
      <div className='bg-background container p-8 rounded-lg shadow-lg'>
        <h3 className='text-2xl font-bold mb-4 text-center text-accent'>
          Key Dates
        </h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='text-center'>
            <h4 className='text-lg font-bold text-white mb-2'>
              Current Session
            </h4>
            <p className='text-gray-300'>
              <strong>Start Date:</strong> January 15, 2024 <br />
              <strong>End Date:</strong> April 2, 2024
            </p>
          </div>
          <div className='text-center'>
            <h4 className='text-lg font-bold text-white mb-2'>Next Session</h4>
            <p className='text-gray-300'>
              <strong>Start Date:</strong> April 16, 2024 <br />
              <strong>End Date:</strong> July 2, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
