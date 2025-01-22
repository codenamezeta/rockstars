import MapDisplay from '@/components/MapDisplay'
import Header from '@/components/Header'
import SectionOverview from '@/components/SectionOverview'
import FAQs from '@/components/FAQs'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { FiExternalLink } from 'react-icons/fi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'We would love to hear from you. Feel free to visit our studio in person or give us a call.',
}

export default function contactPage(): JSX.Element {
  return (
    <>
      <Header
        title={'Contact Us'}
        headerStyle={2}
        subtitle='We would love to hear from you. Feel free to visit our studio in person or give us a call.'
      />
      <main className='themed-background-style-3 py-24'>
        <SectionOverview title='Contact Information' />
        <MapDisplay />
      </main>
      <section className='container mx-auto px-4 py-24'>
        <SectionOverview
          title='Customer Support'
          overviewText='We are here to help! If you have any questions or concerns, please feel free to reach out to us. Our team is available to assist you with any inquiries you may have.'
        />
        <div className='flex flex-col md:flex-row gap-4 mb-24'>
          <div className='bg-background border border-gray-200 p-4 rounded-lg md:w-1/2'>
            <h3 className='text-3xl font-bold text-white'>Student Portal</h3>
            <p className='text-base text-white'>
              Rockstars of Tomorrow partners with{' '}
              <Link
                href='https://mymusicstaff.com'
                target='_blank'
                rel='noreferrer noopener'
                className='underline hover:text-accent'
              >
                My Music Staff
              </Link>{' '}
              to offer a student portal where you can access your account, view
              your lesson schedule, and manage your billing information. If you
              have any questions about the student portal, please contact us for
              assistance.
            </p>
            <Link
              href='https://app.mymusicstaff.com/'
              className={`${buttonVariants({ variant: 'default' })} mt-4`}
              target='_blank'
              rel='noreferrer noopener'
            >
              Access Student Portal <FiExternalLink />
            </Link>
          </div>
          <div className='bg-background border border-gray-200 p-4 rounded-lg md:w-1/2'>
            <h3 className='text-3xl font-bold text-white'>Studio Policies</h3>
            <p className='text-base text-white'>
              To ensure a positive experience for all students, Rockstars of
              Tomorrow has established studio policies that outline our
              expectations for students, parents, and instructors. Please review
              our studio policies to learn more about our guidelines and
              procedures.
            </p>
            <Link
              href='/policies'
              className={`${buttonVariants({ variant: 'default' })} mt-4`}
            >
              View Our Studio Policies
            </Link>
          </div>
        </div>
        <FAQs
          faqs={[
            {
              question: 'What genres or styles of music do you teach?',
              answer:
                'Whether you’re into smashing power chords or soaring melodies, we’ve got you. Rock, Pop, Metal, Blues, Hip Hop, Jazz—whatever gets you hyped, we’ll teach you how to own it. Your style, your rules.',
            },
            {
              question: 'What is the age range for your students?',
              answer:
                'From diaper drummers to silver-haired shredders, we welcome everyone. Most of our students are 7 to 17, but we say if you’ve got a pulse, you’re ready to rock.',
            },
            {
              question: 'What is your experience level requirement?',
              answer:
                'None. Zero. Zilch. Whether you’ve never touched an instrument or you’re already ripping solos, we’ll meet you where you’re at and take you even further.',
            },
            {
              question: 'What is your cancellation policy?',
              answer:
                'Cancel your plan, cancel your lesson—whatever. Just give us 24 hours’ notice, and we’ll handle it. Plus, you get a free make-up lesson, because we’re cool like that.',
            },
            {
              question: 'What is your refund policy?',
              answer:
                'Had to pump the brakes? No problem. Cancel anytime with 24 hours’ notice, and we’ll refund you for what you didn’t use (minus a 10% processing fee). Or leave your credit with us—it’s waiting whenever you’re ready to make noise again.',
            },
            {
              question: 'Can I change my billing date?',
              answer:
                'Absolutely. By default, we hit your card on the 1st of the month to cover all your upcoming lessons, but hey, we’re flexible. Want a different date? No problem. Pick a date that fits your rhythm, and we’ll make sure your payment covers all the lessons between then and your next billing cycle. Easy, breezy, rockstar style.',
            },
            {
              question: 'Do you offer summer camps or workshops?',
              answer:
                'Oh, you’re gonna love this. Jam Camp is a week-long shred fest in July and August. You’ll play a new song every day with a live band, then blow minds at the finale concert. We also run killer workshops on everything from gear care to audio production.',
            },
            {
              question: 'What methods or curriculum do you use?',
              answer:
                'We’re not here for boring drills and stuffy theory. Our RockStart program gets you stage-ready in six months. You’ll jam out with a real band and master four songs while feeling like an absolute legend. Private lessons + live band vibes = the ultimate rockstar experience.',
            },
            {
              question: 'Can I bring my own instrument?',
              answer:
                'Heck yeah! Unless you’re a drummer or pianist—we’ve got those rigs on lock. But if it’s portable, bring your axe, your sticks, or whatever you need to slay.',
            },
            {
              question: 'What is the typical lesson structure?',
              answer:
                'It’s all about you. Private lessons (30-60 minutes) customized for your goals, plus live band classes to sharpen your skills. No cookie-cutter stuff—just a plan that makes you unstoppable.',
            },
            {
              question: 'Do you offer group lessons?',
              answer:
                'Heck yeah! Why jam alone when you can rock out with your friends or family? Convert any private lesson into a group sesh for a small fee. Because music is a team sport.',
            },
            {
              question: 'How often are lessons?',
              answer:
                'Most of our rockers do one private lesson and one band class a week. Need more? Less? A custom setup? Let’s crank it up to fit your vibe.',
            },
            {
              question: 'What if I need to reschedule a lesson?',
              answer:
                'No sweat. Life happens—just give us 24 hours’ notice, and we’ll reschedule or line up a substitute instructor to keep your groove alive.',
            },
            // {
            //   question: 'Can I get an every-other-week plan?',
            //   answer:
            //     'You bet. Off-peak hours only, and it’s a strict every-two-weeks deal. Some months might have two lessons, some three. Rock and roll is flexible like that.',
            // },
            {
              question: 'What instruments are offered in band classes?',
              answer:
                'We’re all about guitar, bass, drums, keys, and vocals. But if you’ve got a violin, ukulele, or sax that’s itching to join the fun, we’re game.',
            },
            {
              question: 'What is the format of band classes?',
              answer:
                'RockStart: Beginner jams once a month—perfect for new rockers. JamCore: Intermediate bands meet weekly and hit the stage every 8 weeks. BandCore: Advanced rock warriors rehearse weekly and crush two epic gigs every 12 weeks. RockStar Pro: Go custom—your schedule, your band, your dream.',
            },
            {
              question: 'What is the performance schedule for band classes?',
              answer:
                'RockStart: Studio shows every month—your first step to stardom. JamCore: Local venue gigs every 8 weeks. BandCore: Two blowout venue shows every 12 weeks. RockStar Pro: Whenever, wherever—this is your stage to own.',
            },
            {
              question: 'Do you offer ensemble coaching?',
              answer:
                'Absolutely. Whether it’s your band, your group, or just you, we’ll get you stage-ready for your next big gig or recording session.',
            },
          ]}
        />

        {/* <form
          action='https://formspree.io/f/xvovzqzr'
          method='POST'
          className='grid grid-cols-1 gap-4'
        >
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' required />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' required />
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message' required></textarea>
          <button type='submit' className='btn-primary'>
            Submit
          </button>
        </form> */}
      </section>
    </>
  )
}
