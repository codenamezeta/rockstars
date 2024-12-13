import SectionOverview from './SectionOverview'

export default function TryoutProcess() {
  return (
    <section className='bg-background py-24'>
      <div className='container mx-auto px-6'>
        <SectionOverview
          title='Tryouts'
          overviewText='Ready to join BandCore? Show off your skills and secure your spot with
          our straightforward tryout process. Whether you’re a vocalist,
          guitarist, drummer, or keyboardist, this is your chance to shine!'
        />

        {/* Step-by-Step Process */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Step 1 */}
          <div className='bg-black p-6 rounded-lg shadow-lg'>
            <div className='flex items-center space-x-6 mb-4'>
              <span className='text-accent font-bold text-xl'>1</span>
              <h3 className='text-xl font-bold'>
                Sign Up and Select Instrument
              </h3>
            </div>
            <p className='text-gray-300'>
              Begin by filling out the signup form. Let us know which
              instrument(s) you want to audition for and share any song
              suggestions.
            </p>
          </div>

          {/* Step 2 */}
          <div className='bg-black p-6 rounded-lg shadow-lg'>
            <div className='flex items-center space-x-4 mb-4'>
              <span className='text-accent font-bold text-xl'>2</span>
              <h3 className='text-xl font-bold'>Pick Your Song</h3>
            </div>
            <p className='text-gray-300'>
              Choose a song from our pre-approved playlist or suggest your own!
              This song will showcase your talent during the tryout.
            </p>
          </div>

          {/* Step 3 */}
          <div className='bg-black p-6 rounded-lg shadow-lg'>
            <div className='flex items-center space-x-4 mb-4'>
              <span className='text-accent font-bold text-xl'>3</span>
              <h3 className='text-xl font-bold'>Practice</h3>
            </div>
            <p className='text-gray-300'>
              Work with your private instructor to prepare for your tryout.
              Perfect your performance and make it your own!
            </p>
          </div>

          {/* Step 4 */}
          <div className='bg-black p-6 rounded-lg shadow-lg'>
            <div className='flex items-center space-x-4 mb-4'>
              <span className='text-accent font-bold text-xl'>4</span>
              <h3 className='text-xl font-bold'>Submit Your Audition</h3>
            </div>
            <p className='text-gray-300'>
              Record a video or audio of your performance and send it to the
              BandCore instructor. Be sure to submit before the deadline!
            </p>
          </div>

          {/* Step 5 */}
          <div className='bg-black p-6 rounded-lg shadow-lg'>
            <div className='flex items-center space-x-4 mb-4'>
              <span className='text-accent font-bold text-xl'>5</span>
              <h3 className='text-xl font-bold'>Get Evaluated</h3>
            </div>
            <p className='text-gray-300'>
              Our instructor will review your submission to evaluate your skill
              level and match you with a band that complements your style.
            </p>
          </div>
        </div>

        {/* Callout Box for FAQs */}
        <div className='mt-16 p-6 rounded-lg shadow-lg'>
          <h3 className='text-2xl font-bold mb-4 text-center text-accent'>
            Tryout FAQs
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h4 className='font-semibold text-lg text-white'>
                Do I need to try out every session?
              </h4>
              <p className='text-gray-300'>
                No! Tryouts are only required for first-time students or
                veterans switching instruments.
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-lg text-white'>
                What instruments can I try out for?
              </h4>
              <p className='text-gray-300'>
                Guitar, bass, keyboards, drums, and vocals. Bonus points for
                singing and playing simultaneously!
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-lg text-white'>
                What formats are accepted for auditions?
              </h4>
              <p className='text-gray-300'>
                Simple phone videos, audio recordings, or social media posts
                (don’t forget to tag us!).
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-lg text-white'>
                What happens after I submit my audition?
              </h4>
              <p className='text-gray-300'>
                The instructor evaluates your skills and starts forming bands
                for the session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
