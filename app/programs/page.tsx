//* Programs Page
import Header from '@/components/Header'
import Instruments from '@/components/Instruments'
import Programs from '@/components/Programs'
import FAQs from '@/components/FAQs'
import Separator from '@/components/Separator'
import Image from 'next/image'
import rockstarProImage from '@/public/imgs/band-01.png'

export default function ProgramsPage(): JSX.Element {
  return (
    <>
      <Header
        title='Programs'
        subtitle='Your path to Rockstardom!'
        headerStyle={2}
      />
      <section className='bg-black' id='private_lessons'>
        <div className='container px-5 py-24 mx-auto'>
          <div id='lessons' className='text-center mb-20'>
            <h2 className='sm:text-3xl text-2xl font-medium title-font text-primary mb-4'>
              Private & Group Lessons
            </h2>
            <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-secondary'>
              Rockstars Of Tomorrow lesson plans are custom-tailored for every
              student’s unique goals. This means no matter what you want to
              learn, whether it’s rock, pop, punk, blues, acoustic, alternative,
              metal, reggae, folk, country or anything in between, you know you
              are going to learn the way the pros do – by studying those great
              artists who inspire you to succeed. Take a look at a few of the
              instruments we specialize in.
            </p>
            <div className='flex mt-6 justify-center'>
              <div className='w-16 h-1 rounded-full bg-accent inline-flex'></div>
            </div>
          </div>
          <Instruments />
        </div>
      </section>

      <section id='band_classes' className='text-foreground body-font'>
        <div className='text-center my-24 container'>
          {/* <Image
            src={rockstarProImage}
            alt='Rockstar Pro'
            className='w-full -mt-24'
          /> */}
          <h2 className='sm:text-3xl text-2xl font-medium title-font text-primary mb-4'>
            Band Classes
          </h2>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-secondary'>
            We offer a variety of programs designed to ignite your musical
            passion and turn you into a confident, stage-ready rockstar! Whether
            you're a young beginner just starting out, or a seasoned player
            looking to refine your skills and rock out with a band, we have the
            perfect program to help you achieve your musical goals.
          </p>
          <Separator />
        </div>

        <Programs
          programs={[
            {
              name: 'JamCore',
              tagline:
                'Experience the excitement of playing live with other musicians!',
              description:
                "Have you been playing your instrument for a few years and are ready to take the stage? JamCore is your chance to experience the excitement of playing live with other musicians! In this program, you'll collaborate with classmates of similar skill levels to learn assigned songs chosen by your instructor. Each week, you'll rehearse these songs in a structured environment, focusing on developing your musicianship and teamwork. The program culminates in a live performance at a local venue, giving you the ultimate payoff – the thrill of rocking out in front of a real audience!",
              details: [
                'Beginner & Intermediate',
                "Wednesday's 5:00-7:00pm",
                '8-weeks sessions',
                'One Show',
                'Instructor assigned songs',
                'Instructor: Kevin Shannon',
                '$79/month',
              ],
            },
            {
              name: 'BandCore',
              tagline: 'Take your musical journey to the next level!',
              description:
                "Are you an experienced musician looking to push your boundaries and develop your own unique sound? BandCore is designed to take your musical journey to the next level! This program is all about collaboration and creative expression. You'll get to form your own band with classmates who share your musical tastes, allowing you to choose songs you're passionate about (with guidance from your instructor). BandCore offers extended rehearsal periods compared to JamCore, giving you more time to hone your skills as a band and truly own your sound. The program culminates in not just one, but two electrifying live shows at local venues, putting your hard work on display for the world to see!",
              details: [
                'Intermediate & Advanced',
                "Tuesday's 6:00-8:00pm",
                '12-weeks sessions',
                'Instructor: Michael Zeta',
                'Choose your songs',
                'Two Shows',
                '$99/month',
              ],
            },
            {
              name: 'Rockstar Pro',
              tagline: 'The ultimate program for serious musicians.',
              description:
                "Are you and your band ready to take center stage and become the next big thing? Rockstar Pro is the ultimate program for serious musicians who want to be treated like rockstars! This fully customizable program allows you to take complete creative control. Choose your bandmates, collaborate on writing original music or perfecting your favorite covers, and receive personalized coaching from our experienced instructors who will help you refine your sound and performance skills. Rockstar Pro bands have exclusive access to performance opportunities beyond the typical Rockstars of Tomorrow shows. You'll get priority booking for shows, and even have the chance to perform at festivals and other exciting events! We'll also provide you with access to recording studios and photoshoot opportunities to create professional-looking promotional materials to help you take your band to the next level.",
              details: [
                'Fully customizable',
                'Priority booking',
                'Any songs',
                'Any instructor',
                'Any schedule',
                'All skill levels',
                'On-going',
                'Customized Pricing',
              ],
            },
            {
              name: 'Rockshop',
              tagline: 'The perfect first step on their musical journey!',
              description:
                "Is your child drumming on every available surface and air-guitaring to their favorite tunes? Rock Shop is the perfect first step on their musical journey! In this fun and interactive program, young musicians will learn the fundamentals of their chosen instrument (guitar, drums, keys, or vocals) in a supportive group setting. Our experienced instructors will guide them through their first musical steps, using engaging exercises and age-appropriate songs. All the learning materials they need are included, and the program culminates in a bi-annual student showcase where they can proudly perform what they've learned for friends and family!",
              details: [
                'On-going weekly practice',
                "Tuesday's 6:00-8:00pm",
                'Instructor: Michael Zeta',
                'Beginners',
                'In studio recital',
                'Pre-selected songs',
                '$49/month',
              ],
            },
          ]}
        />
      </section>
      <section className='container'>
        <FAQs
          faqs={[
            {
              question: 'Can I change plans or cancel anytime?',
              answer:
                'There are no contracts and you can always cancel at anytime. To discontinue lessons and stop automatic payments, simply notify the front desk at two business days before the date of your next charge. Notice given to the instructors only, verbally or otherwise as well as continued non-attendance does not constitute withdrawal from lessons or classes. Please make sure you visit the front desk or email your studio location directly.',
            },
            {
              question: 'What if I need to reschedule?',
              answer:
                'We understand that life happens and sometimes you need to reschedule. We ask that you give us a 24 hour notice of lesson cancellation and we’ll gladly issue your account a free makeup lesson that you can schedule at a later date. We know your time is valuable and rescheduling can be difficult both with an in demand instructors schedule and your own personal schedule so in some cases, an instructor may create a custom video in place of a face to face make up lesson for convenience.',
            },
            {
              question: 'Are short months prorated?',
              answer:
                'Yes. We consider three to five lessons taught per month as a full month. Invoices are prorated for two or fewer lessons per month. We typically close on the following days each year: New Year’s Day, Labor Day, Independence Day, Thanksgiving, and the day after, Christmas, including any days between Christmas and New Year’s Day.',
            },
            {
              question: 'Can I get a bi-weekly (two per month) plan?',
              answer:
                'In certain circumstances, clients can do bi-weekly lesson plans. We will try our absolute best to accommodate all scheduling requests you have. Please be aware that this is not always possible and largely depends on your availability, instructor’s availability, and operation hours.',
            },

            {
              question: 'Can I learn more than one instrument at a time?',
              answer:
                'Yes! We encourage students to learn multiple instruments. Learning multiple instruments can help you become a more well-rounded musician and can help you understand music in a more comprehensive way. If this is something you’re interested in, please let us know. We will do our best to fit you with an instructor who can teach the instruments you’re interested in learning. You don’t need to pay extra or schedule additional lessons as your time with your instructor is yours to do with as you wish. However, please be aware that not all instructors can teach multiple instruments. In certain instances, you may need to sign up for additional classes if there is no instructor available to teach the combination of instruments you’re looking to learn.',
            },
          ]}
        />
      </section>
    </>
  )
}
