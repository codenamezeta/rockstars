export default function BandCoreLandingPage() {
  return (
    <div className='font-sans text-gray-800'>
      {/* Hero Section */}
      <section className='bg-gray-900 text-white text-center py-20'>
        <div className='container mx-auto px-6'>
          <h1 className='text-4xl font-bold mb-4'>
            BandCore: Take Your Musical Journey to the Next Level!
          </h1>
          <p className='text-lg mb-8'>
            Join an elite group of musicians collaborating, performing, and
            evolving together.
          </p>
          <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg'>
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Program Overview */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-6 text-center'>
            What Makes BandCore Unique?
          </h2>
          <p className='text-center mb-8'>
            BandCore is all about collaboration, creativity, and electrifying
            performances.
          </p>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <h3 className='text-xl font-bold'>Program Highlights</h3>
              <ul className='list-disc list-inside text-gray-600'>
                <li>
                  <strong>Level:</strong> Intermediate & Advanced
                </li>
                <li>
                  <strong>Schedule:</strong> Tuesdays, 6:00–8:00 PM
                </li>
                <li>
                  <strong>Duration:</strong> 12 weeks
                </li>
                <li>
                  <strong>Performances:</strong> 2 live shows
                </li>
                <li>
                  <strong>Price:</strong> $297/session
                </li>
                <li>
                  <strong>Instructor:</strong> Kevin Shannon
                </li>
              </ul>
            </div>
            <div>
              <img
                src='/images/bandcore-live.jpg'
                alt='BandCore live performance'
                className='rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-6 text-center'>
            Which Program is Right for You?
          </h2>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full text-left bg-white shadow-lg rounded-lg'>
              <thead className='bg-gray-200'>
                <tr>
                  <th className='px-4 py-2'>Feature</th>
                  <th className='px-4 py-2'>BandCore</th>
                  <th className='px-4 py-2'>JamCore</th>
                  <th className='px-4 py-2'>RockStart</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>Level</td>
                  <td className='border px-4 py-2'>Intermediate & Advanced</td>
                  <td className='border px-4 py-2'>Beginner & Intermediate</td>
                  <td className='border px-4 py-2'>Beginner</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>Rehearsal Time</td>
                  <td className='border px-4 py-2'>Extended</td>
                  <td className='border px-4 py-2'>Standard</td>
                  <td className='border px-4 py-2'>Short</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>Performances</td>
                  <td className='border px-4 py-2'>2 live shows</td>
                  <td className='border px-4 py-2'>1 live show</td>
                  <td className='border px-4 py-2'>None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tryout Process */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-6 text-center'>
            How the Tryouts Work
          </h2>
          <p className='text-center mb-8'>
            Show off your skills and secure your spot in BandCore with our
            simple tryout process.
          </p>
          <div className='space-y-4'>
            <h3 className='text-xl font-bold'>Steps to Tryout</h3>
            <ol className='list-decimal list-inside text-gray-600 space-y-2'>
              <li>Sign up and select your instrument(s).</li>
              <li>Choose songs from the playlist or suggest your own.</li>
              <li>Work with your teacher to prepare.</li>
              <li>Submit your video or audio audition before the deadline.</li>
              <li>Get evaluated individually by the instructor.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section className='bg-gray-900 text-white py-16'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Join BandCore Today!</h2>
          <form className='space-y-6 max-w-lg mx-auto'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full px-4 py-2 text-gray-900 rounded-lg'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='w-full px-4 py-2 text-gray-900 rounded-lg'
            />
            <input
              type='text'
              placeholder='Instrument(s)'
              className='w-full px-4 py-2 text-gray-900 rounded-lg'
            />
            <textarea
              placeholder='Song Suggestions (Optional)'
              className='w-full px-4 py-2 text-gray-900 rounded-lg'
              rows={3}
            ></textarea>
            <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
