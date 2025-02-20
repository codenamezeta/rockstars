//* Programs Page
import Header from '@/components/Header'
// import Instruments from '@/components/Instruments'
import { InstrumentsSelector } from '@/components/Instruments'
import Programs from '@/components/Programs'
import FAQs from '@/components/FAQs'
import SectionOverview from '@/components/SectionOverview'
import { ProgramsComparisonCards } from '@/components/ProgramsComparison'
// import rockstarProImage from '@/public/imgs/band-01.png'
// import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Rockstars of Tomorrow offers a variety of programs designed to ignite your musical passion and turn you into a confident, stage-ready rockstar!',
  keywords: [
    'music programs',
    'rockstar programs',
    'band classes',
    'private lessons',
    'group lessons',
    'music education',
    'learn music',
    'music school',
  ],
  authors: [{ name: 'Rockstars of Tomorrow' }],
  openGraph: {
    type: 'website',
    url: 'https://www.rockstarsoftomorrow.com/programs',
    title: 'Programs - Rockstars of Tomorrow',
    description:
      'Explore a variety of music programs designed to ignite your musical passion and turn you into a confident, stage-ready rockstar!',
    images: [
      {
        url: 'https://www.rockstarsoftomorrow.com/imgs/band-01.png',
        width: 800,
        height: 600,
        alt: 'Rockstar Pro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rockstarsoftomorrow',
    title: 'Programs - Rockstars of Tomorrow',
    description:
      'Explore a variety of music programs designed to ignite your musical passion and turn you into a confident, stage-ready rockstar!',
    images: ['https://www.rockstarsoftomorrow.com/imgs/band-01.png'],
  },
}

export default function ProgramsPage(): JSX.Element {
  return (
    <>
      <Header
        title='Programs'
        subtitle='Your path to Rockstardom!'
        headerStyle={2}
      />

      <section id='band_classes' className='text-foreground body-font py-24'>
        <div className='text-center container'>
          {/* <Image
            src={rockstarProImage}
            alt='Rockstar Pro'
            className='w-full -mt-24'
          /> */}
          <SectionOverview
            title='Band Classes'
            overviewText="We offer a variety of programs designed to ignite your musical
            passion and turn you into a confident, stage-ready rockstar! Whether
            you're a young beginner just starting out, or a seasoned player
            looking to refine your skills and rock out with a band, we have the
            perfect program to help you achieve your musical goals."
          />
        </div>

        <Programs />
      </section>
      <section className='bg-black' id='private_lessons'>
        <div className='container px-5 py-24 mx-auto'>
          <div id='lessons' className='text-center mb-20'>
            <SectionOverview
              title='Private & Group Lessons'
              overviewText='Rockstars Of Tomorrow lesson plans are custom-tailored for every
              student’s unique goals. This means no matter what you want to
              learn, whether it’s rock, pop, punk, blues, acoustic, alternative,
              metal, reggae, folk, country or anything in between, you know you
              are going to learn the way the pros do – by studying those great
              artists who inspire you to succeed. Take a look at a few of the
              instruments we specialize in.'
            />
          </div>
          <InstrumentsSelector />
        </div>
      </section>

      {/* <ProgramsComparisonCards /> */}

      <section className='container'>
        {/* <SectionOverview title='FAQs' /> */}
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
            // {
            //   question: 'What is your cancellation policy?',
            //   answer:
            //     'Cancel your plan, cancel your lesson—whatever. Just give us 24 hours’ notice, and we’ll handle it. Plus, you get a free make-up lesson, because we’re cool like that.',
            // },
            // {
            //   question: 'What is your refund policy?',
            //   answer:
            //     'Had to pump the brakes? No problem. Cancel anytime with 24 hours’ notice, and we’ll refund you for what you didn’t use (minus a 10% processing fee). Or leave your credit with us—it’s waiting whenever you’re ready to make noise again.',
            // },
            // {
            //   question: 'Can I change my billing date?',
            //   answer:
            //     'Absolutely. By default, we hit your card on the 1st of the month to cover all your upcoming lessons, but hey, we’re flexible. Want a different date? No problem. Pick a date that fits your rhythm, and we’ll make sure your payment covers all the lessons between then and your next billing cycle. Easy, breezy, rockstar style.',
            // },
            // {
            //   question: 'Do you offer summer camps or workshops?',
            //   answer:
            //     'Oh, you’re gonna love this. Jam Camp is a week-long shred fest in July and August. You’ll play a new song every day with a live band, then blow minds at the finale concert. We also run killer workshops on everything from gear care to audio production.',
            // },
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
      </section>
    </>
  )
}
