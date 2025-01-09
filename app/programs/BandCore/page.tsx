import { FAQColumns } from '@/components/FAQs'
import Hero from '@/components/Hero'
import ProgramsComparisonTable, {
  ProgramsComparisonCards,
} from '@/components/ProgramsComparison'
import SectionOverview from '@/components/SectionOverview'
import Testimonials from '@/components/Testimonials'
import { Button } from '@/components/ui/button'
import guitarGirl from '@/public/imgs/Kids/Teen Blue Guitar Girl.png'
import { getClass } from '@/lib/programs'

export default function BandCoreLandingPage() {
  const bandcore = getClass('BandCore')
  return (
    <>
      {/* Hero Section */}
      <Hero
        title='BandCore'
        subtitle='Take Your Musical Journey to the Next Level!'
        text='Join an elite group of musicians collaborating, performing, and
            evolving together.'
        ctaText='Sign Up Now'
        ctaLink='/programs/bandcore/?scrollTo=BandCore_Signup'
        image={{
          src: guitarGirl,
          alt: 'Teen Girl Playing Guitar',
          height: 800,
          width: 550,
          classNames: 'ml-auto',
        }}
      />

      {/* Program Overview */}
      <section className='bg-background py-24'>
        <div className='container mx-auto px-6'>
          <SectionOverview
            title='About BandCore'
            overviewText='BandCore is all about collaboration, creativity, and electrifying
            performances'
          />
          <div className='flex flex-wrap gap-8 justify-center'>
            <p className='text-white tracking-wide text-lg max-w-prose'>
              {bandcore.description}
            </p>
            <div className='w-1/2'>
              <ul className='space-y-2'>
                {bandcore.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            {/* Pricing and Commitment */}
            {/* <div className='w-1/4'>
              <h3 className='text-xl font-bold mb-4 text-accent'>
                Participation
              </h3>
              <ul className='space-y-2'>
                <li>
                  <strong>Attendance:</strong> Students are expected to attend
                  all rehearsals and participate in two live shows.
                </li>
                <li>
                  <strong>Flexibility:</strong> Students can continue with new
                  bands and performances each session or cancel at the end of a
                  session.
                </li>
                <li>
                  <strong>Price:</strong> $297 per session
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      <section className='py-24'>
        <SectionOverview
          title='Upcoming BandCore Events'
          overviewText='Check out our upcoming events featuring BandCore performances.'
        />
        <div className='container mx-auto px-6'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-background p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-bold text-accent mb-4'>
                Summer Jam
              </h3>
              <p className='text-muted-foreground'>
                Join us for our annual Summer Jam! This is a great opportunity
                to see BandCore students in action. Enjoy live music, food, and
                games. All proceeds go towards our scholarship fund.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-bold text-accent mb-4'>
                Winter Jam
              </h3>
              <p className='text-muted-foreground'>
                Our Winter Jam is a holiday tradition. Celebrate the season with
                live music, hot cocoa, and a silent auction. All proceeds go
                towards our scholarship fund.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-bold text-accent mb-4'>
                Spring Jam
              </h3>
              <p className='text-muted-foreground'>
                Spring Jam is a celebration of the end of the school year. Enjoy
                live music, food, and games. All proceeds go towards our
                scholarship fund.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-24'>
        <div className='container px-6'>
          <SectionOverview
            title='Commit to Greatness'
            overviewText="BandCore is an exciting journey, but it comes with responsibilities. Here's what you need to know before signing up."
            customClasses='w-full'
          />
          {/* Upcoming Session */}
          <h3 className='text-3xl font-bold text-white mb-4 w-full'>
            Upcoming Session:
          </h3>
          <div className='flex flex-wrap md:flex-nowrap gap-8'>
            <div className='bg-background p-6 rounded-lg border w-full md:w-1/3'>
              <h4 className='text-xl font-bold text-accent mb-4'>
                Performance Weekend
              </h4>
              <h5 className='text-2xl font-bold text-white mb-4'>
                June 27th - June 29th
              </h5>
              <p className='text-muted-foreground'>
                Students will perform in two shows durning the designated
                performance weekend. As we approach the performance weekend, we
                will provide more details on the exact times and locations on
                our events page.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg border w-full md:w-1/3'>
              <h4 className='text-xl font-bold text-accent mb-4'>Rehearsals</h4>
              <h5 className='text-2xl font-bold text-white mb-4'>
                April 8th - June 24th
              </h5>
              <ul className='mb-4 flex flex-wrap justify-start gap-x-4'>
                <li>
                  <strong>Day: </strong>Tuesdays
                </li>
                <li>
                  <strong>Time: </strong>6:00 PM - 8:00 PM
                </li>
                <li>
                  <strong>Classroom: </strong>Live Room
                </li>
                <li>
                  <strong>Instructor: </strong>Kevin Shannon
                </li>
              </ul>
              <p className='text-muted-foreground'>
                Students are expected to attend all rehearsals. If you have a
                scheduling conflict, please let us know as soon as possible.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg border w-full md:w-1/3'>
              <h4 className='text-xl font-bold text-accent mb-4'>
                Tryouts Deadline
              </h4>
              <h5 className='text-2xl font-bold text-white mb-4'>April 1st</h5>
              <p className='text-muted-foreground'>
                Tryouts are required for new students and for returning students
                who wish to qualify on additional instruments. BandCore is an
                elite program, and we want to ensure that all students are
                placed in the appropriate band.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tryout Process */}
      <section className='themed-background-style-2 py-16'>
        <div className='container mx-auto px-6'>
          <SectionOverview
            title='BandCore Tryouts'
            overviewText='Ready to join BandCore? Show off your skills and secure your spot
            with our straightforward tryout process. Whether you’re a vocalist,
            guitarist, drummer, or keyboardist, this is your chance to shine!'
            separatorColor='accent'
          />

          {/* Step-by-Step Process */}
          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {/* Step 1 */}
            <div className='bg-background p-6 rounded-lg shadow-lg'>
              <div className='flex items-baseline space-x-4 mb-4'>
                <span className='text-accent font-bold text-4xl'>1</span>
                <h3 className='text-xl font-bold'>
                  Pick Your Song and Instrument
                </h3>
              </div>
              <p className='text-foreground'>
                Begin by filling out the signup form. Let us know which
                instrument(s) you want to audition for and share any song
                suggestions.
              </p>
            </div>

            {/* Step 2 */}
            <div className='bg-background p-6 rounded-lg shadow-lg'>
              <div className='flex items-baseline space-x-4 mb-4'>
                <span className='text-accent font-bold text-4xl'>2</span>
                <h3 className='text-xl font-bold text-primary-foreground'>
                  Prepare with Your Teacher
                </h3>
              </div>
              <p className='text-foreground'>
                Share your choice with your private lessons teacher—they’ll help
                you prepare for the big moment. Spend a few weeks practicing
                your song during your private lessons. Your teacher can offer
                guidance and support with all the tryout requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className='bg-background p-6 rounded-lg shadow-lg'>
              <div className='flex items-baseline space-x-4 mb-4'>
                <span className='text-accent font-bold text-4xl'>3</span>
                <h3 className='text-xl font-bold'>Record Your Performance</h3>
              </div>
              <p className='text-foreground'>
                When you’re ready, record your tryouts performance. Demonstrate
                your musically skills as well as performance abilities so you
                can secure your spot in the BandCore class. Need help with the
                recording? No problem—your private lessons teacher can assist
                during your lesson.
              </p>
            </div>
            {/* Step 4 */}
            <div className='bg-background p-6 rounded-lg shadow-lg'>
              <div className='flex items-baseline space-x-4 mb-4'>
                <span className='text-accent font-bold text-4xl'>4</span>
                <h3 className='text-xl font-bold'>
                  Signup and Submit Your Tryout
                </h3>
              </div>
              <p className='text-foreground'>
                Once you’re ready, create your recording, fill out the signup
                form, and submit your tryout. Make sure to submit before the
                deadline. We'll announce who made it into the BandCore before
                the the first class.
              </p>
            </div>
          </div>

          {/* Callout Box for FAQs */}
          <div className='bg-background mt-16 p-6 rounded-lg shadow-lg'>
            <h3 className='text-3xl font-bold mb-4 text-center text-accent'>
              Tryout FAQs
            </h3>
            {/* <FAQs
              faqs={[
                {
                  question: 'Do I need to try out every session?',
                  answer:
                    'No! Tryouts are only required for first-time students or veterans switching instruments.',
                },
              ]}
            /> */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h4 className='font-semibold text-lg text-accent'>
                  Do I need to try out every session?
                </h4>
                <p className='text-foreground'>
                  No! Tryouts are only required for first-time students or
                  veterans switching instruments.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-lg text-accent'>
                  What instruments can I try out for?
                </h4>
                <p className='text-foreground'>
                  Guitar, bass, keyboards, drums, and vocals. Bonus points for
                  singing and playing simultaneously!
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-lg text-accent'>
                  What formats are accepted for auditions?
                </h4>
                <p className='text-foreground'>
                  Simple phone videos, audio recordings, or social media posts
                  (don’t forget to tag us!).
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-lg text-accent'>
                  What happens after I submit my audition?
                </h4>
                <p className='text-foreground'>
                  The instructor evaluates every students' skills and song
                  suggestions to start forming bands for the upcoming session.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-lg text-accent'>
                  How long does it take to hear back?
                </h4>
                <p className='text-foreground'>
                  You’ll receive an email with your results within a week of
                  submitting your audition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Comparison */}
      <ProgramsComparisonTable />
      <ProgramsComparisonCards />

      <Testimonials />

      {/* Signup Section */}
      <section id='BandCore_Signup' className='bg-background text-white py-16'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold mb-6 text-accent'>
            Join BandCore Today!
          </h2>
          <form className='space-y-6 max-w-lg mx-auto'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full px-4 py-2 text-gray-900 rounded-lg'
            />
            <input
              type='phone'
              placeholder='Your Phone Number'
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
            <label htmlFor='recording' className='block text-left text-accent'>
              Upload Your Tryout Recording
            </label>
            <input
              type='file'
              name='recording'
              className='w-full px-4 py-2 text-white'
              placeholder='Your Tryout Recording'
            />
            <Button size='full'>Submit Tryout</Button>
          </form>
        </div>
      </section>
    </>
  )
}
