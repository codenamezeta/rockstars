import SectionOverview from '@/components/SectionOverview'
import CampSignupFormWithStripe from '@/components/CampSignupFormWithStripe'
import Contact from '@/components/MapDisplay'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import {
  CalendarDays,
  MapPin,
  Music,
  Clock,
  User,
  DollarSign,
  CheckCircle,
  Star,
  ExternalLink,
} from 'lucide-react'
import Header from '@/components/Header'
import Image from 'next/image'

export default function SummerCamp() {
  return (
    <>
      <Header
        title='Rock & Roll Summer Camp'
        subtitle='Where future rockstars are born!'
        customClasses='red-background-1'
      />
      <main className='background-5 pb-24'>
        <div className='container'>
          <Image
            src='/imgs/ai/live-band/kid-band-05.jpg'
            alt='JamCamp Band'
            width={1600}
            height={1000}
            className='rounded-lg shadow-lg mx-auto my-6'
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            placeholder='blur'
            blurDataURL='/imgs/ai/live-band/kid-band-05.jpg'
            quality={100}
          />
          <SectionOverview
            title='JamCamp'
            subtitle='A one-week summer music adventure for kids who were born to
                rock!'
            customClasses='mt-24'
          />
          <div className='flex flex-col lg:flex-row gap-6 align-top justify-center'>
            <div
              id='camp-description'
              className='prose prose-lg space-y-2 max-w-3xl'
            >
              <p className='text-2xl'>
                JamCamp is a one-of-a-kind, high-energy week-long music camp
                where kids ages 7 and up join real bands, learn real songs, and
                put on a live performance by the end of the week. It’s more than
                a camp—it’s a full-blown rockstar experience.
              </p>
              <p className='text-2xl'>
                Campers can choose their musical weapon—guitar, bass, drums,
                piano, or vocals—and switch it up as much as they want. Whether
                your child is brand new to music or already has stage dreams,
                JamCamp is the perfect space to learn, play, and perform with
                confidence.
              </p>
              <p className='text-2xl pb-3'>
                We keep it fun, supportive, and electrifying from start to
                finish—because learning music should be just as awesome as
                playing it. No experience needed. Just bring the attitude—we’ll
                handle the rest. Spots fill up fast—book your JamCamp experience
                today!
              </p>
              <Link
                href='/summer-camp?scrollTo=camp_registration'
                className={`${buttonVariants({ variant: 'default', size: 'full' })} text-lg font-bold`}
              >
                Register Now
              </Link>
            </div>
            <div
              id='camp-details'
              className='bg-muted/30 p-6 rounded-lg self-start min-w-96 mx-auto'
            >
              <h3 className='text-xl font-bold mb-3 flex items-center'>
                <Music className='h-5 w-5 mr-2 text-accent' />
                Camp Highlights
              </h3>
              <ul className='mb-6 space-y-2'>
                <li className='flex items-center mb-2'>
                  <CheckCircle className='h-5 w-5 mr-3 text-accent' />
                  <span>Join a real band and rehearse every day</span>
                </li>
                <li className='flex items-center mb-2'>
                  <CheckCircle className='h-5 w-5 mr-3 text-accent' />
                  <span>Choice of multiple instruments (or stick to one!)</span>
                </li>
                <li className='flex items-center mb-2'>
                  <CheckCircle className='h-5 w-5 mr-3 text-accent' />
                  <span>Learn up to four full songs with their bandmates</span>
                </li>
                <li className='flex items-center mb-2'>
                  <CheckCircle className='h-5 w-5 mr-3 text-accent' />
                  <span>
                    Daily mini-lessons, jam sessions & performance coaching
                  </span>
                </li>
                <li className='flex items-center mb-2'>
                  <CheckCircle className='h-5 w-5 mr-3 text-accent' />
                  <span>RockStar Showcase concert at the end of the week</span>
                </li>
                <li className='flex items-center mb-2'>
                  <CheckCircle className='h-5 w-5 mr-3 text-accent' />
                  <span>
                    Cool swag, new friendships, and epic summer memories
                  </span>
                </li>
              </ul>
              <h3 className='text-xl font-bold flex items-center mb-3'>
                <Music className='h-5 w-5 mr-2 text-accent' />
                Instruments You Can Choose From
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                <div className='flex items-center'>
                  <Star className='h-4 w-4 mr-2 text-accent' />
                  <span>Electric Guitar</span>
                </div>
                <div className='flex items-center'>
                  <Star className='h-4 w-4 mr-2 text-accent' />
                  <span>Bass Guitar</span>
                </div>
                <div className='flex items-center'>
                  <Star className='h-4 w-4 mr-2 text-accent' />
                  <span>Drums</span>
                </div>
                <div className='flex items-center'>
                  <Star className='h-4 w-4 mr-2 text-accent' />
                  <span>Acoustic Guitar</span>
                </div>
                <div className='flex items-center'>
                  <Star className='h-4 w-4 mr-2 text-accent' />
                  <span>Piano &amp; Keyboard</span>
                </div>
                <div className='flex items-center'>
                  <Star className='h-4 w-4 mr-2 text-accent' />
                  <span>Vocals</span>
                </div>
              </div>
              {/* <hr className='my-2' />
              <span>
                We keep it fun, supportive, and electrifying from start to
                finish—because learning music should be just as awesome as
                playing it.
              </span> */}
            </div>
          </div>

          {/* Details at a Glance */}
          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* When */}
            <div className='bg-muted/30 p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <CalendarDays className='h-6 w-6 mr-2 text-primary' />
                <h3 className='text-xl font-bold'>When</h3>
              </div>
              <p className='mb-4'>Choose from three exciting sessions:</p>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <CheckCircle className='h-4 w-4 mr-2 text-primary' />
                  <span>Session 1: June 16th – June 20th, 2025</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='h-4 w-4 mr-2 text-primary' />
                  <span className='text-gray-400'>
                    Session 2: July 7th – July 11th, 2025
                  </span>
                  <span className='ml-2 text-red-800 font-bold text-xs'>
                    SOLD OUT
                  </span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='h-4 w-4 mr-2 text-primary' />
                  <span>Session 3: August 11th – August 15th, 2025</span>
                </li>
              </ul>
              <p className='mt-4'>Daily schedule: 10:00 AM - 2:00 PM</p>
            </div>

            {/* Where */}
            <div className='bg-muted/30 p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <MapPin className='h-6 w-6 mr-2 text-primary' />
                <h3 className='text-xl font-bold'>Where</h3>
              </div>
              <p className='mb-4'>
                Join us at our fully-equipped music studio:
              </p>
              <address className='not-italic mb-4'>
                2855 Foothill Blvd A-102
                <br />
                La Verne, CA 91750
              </address>
              <p className='text-sm'>Free parking available on-site</p>
            </div>

            {/* Who */}
            <div className='bg-muted/30 p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <User className='h-6 w-6 mr-2 text-primary' />
                <h3 className='text-xl font-bold'>Who</h3>
              </div>
              <p className='mb-4'>Our camp is perfect for:</p>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <CheckCircle className='h-4 w-4 mr-2 text-primary' />
                  <span>Young musicians aged 7-17</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='h-4 w-4 mr-2 text-primary' />
                  <span>All skill levels welcome</span>
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='h-4 w-4 mr-2 text-primary' />
                  <span>No prior experience needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Camp Experience */}
      {/* <section className='py-16 container'>
        
      </section> */}

      {/* Daily Schedule */}
      <section className='py-16 red-background-5'>
        <div className='container'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            A Day at JamCamp
          </h2>

          <div className='max-w-3xl mx-auto space-y-8'>
            <div className='bg-card p-6 rounded-lg shadow-md'>
              <div className='flex items-start'>
                <div className='bg-primary text-primary-foreground p-3 rounded-lg mr-4'>
                  <Clock className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    10:00 AM - 11:00 AM
                  </h3>
                  <ul className='space-y-1'>
                    <li>• Check-in</li>
                    <li>• Select song of the day</li>
                    <li>
                      • Break off with instructors for each instrument to learn
                      and practice song of the day
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-card p-6 rounded-lg shadow-md'>
              <div className='flex items-start'>
                <div className='bg-primary text-primary-foreground p-3 rounded-lg mr-4'>
                  <Clock className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    11:00 AM - 11:30 AM
                  </h3>
                  <ul className='space-y-1'>
                    <li>
                      • Song of the day 1st run-thru Jam Session with the whole
                      band in the Live Room
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-card p-6 rounded-lg shadow-md'>
              <div className='flex items-start'>
                <div className='bg-primary text-primary-foreground p-3 rounded-lg mr-4'>
                  <Clock className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    11:30 AM - 12:30 PM
                  </h3>
                  <ul className='space-y-1'>
                    <li>• Break for lunch</li>
                    <li className='text-sm italic'>
                      (Students should bring their own lunch)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-card p-6 rounded-lg shadow-md'>
              <div className='flex items-start'>
                <div className='bg-primary text-primary-foreground p-3 rounded-lg mr-4'>
                  <Clock className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>12:30 PM - 1:30 PM</h3>
                  <ul className='space-y-1'>
                    <li>
                      • Break off with instructors again to tighten up song with
                      a focus on any trouble spots
                    </li>
                    <li>
                      • Possible instrument switching and song modifications to
                      fit the group's skills
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-card p-6 rounded-lg shadow-md'>
              <div className='flex items-start'>
                <div className='bg-primary text-primary-foreground p-3 rounded-lg mr-4'>
                  <Clock className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>1:30 PM - 2:00 PM</h3>
                  <ul className='space-y-1'>
                    <li>
                      • 2nd run-thru Jam Session with the whole band in the Live
                      Room
                    </li>
                    <li className='font-bold'>
                      • Friday: Special performance for families!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Portal */}
      <section className='py-16 background-2'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Practice Resources
          </h2>

          <div className='bg-muted/30 border border-primary/50 p-8 rounded-lg'>
            <p className='mb-4'>
              Self-practice at home will make your band sound
              <em> even better </em>
              and is <strong> highly recommended. </strong>All music and lesson
              materials are available on your student portal for convenient
              access anytime on any device.
            </p>

            <h3 className='text-xl font-bold mb-4'>
              Your Student Portal Includes:
            </h3>

            <ul className='space-y-3 mb-6'>
              <li className='flex items-center'>
                <CheckCircle className='h-5 w-5 mr-3 text-primary mt-1' />
                <span>Song recordings and sheet music for each instrument</span>
              </li>
              <li className='flex items-center'>
                <CheckCircle className='h-5 w-5 mr-3 text-primary mt-1' />
                <span>
                  Special focus tracks that bring your instrument to the
                  foreground
                </span>
              </li>
              <li className='flex items-center'>
                <CheckCircle className='h-5 w-5 mr-3 text-primary mt-1' />
                <span>Karaoke versions for vocalists</span>
              </li>
              <li className='flex items-center'>
                <CheckCircle className='h-5 w-5 mr-3 text-primary mt-1' />
                <span>
                  Playback controls to slow down, speed up, or loop sections
                </span>
              </li>
              <li className='flex items-center'>
                <CheckCircle className='h-5 w-5 mr-3 text-primary mt-1' />
                <span>Downloadable content for offline practice</span>
              </li>
            </ul>

            <p className='text-sm italic'>
              You'll receive an email with instructions to set up your student
              portal after enrollment. No app needed—just access through any web
              browser with your email and password.
            </p>
            <Link
              href='https://app.mymusicstaff.com/Student/v3/en/online-resources'
              className={`${buttonVariants({ variant: 'outline', size: 'full' })} text-lg font-bold mt-6`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Go to Student Portal'
            >
              Go To Student Portal
              <ExternalLink className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className='py-16 background-4'>
        <div className='container'>
          <h2 className='text-3xl font-bold text-center mb-8'>Camp Pricing</h2>

          <div className='max-w-md mx-auto bg-black p-8 rounded-lg shadow-lg border-t-4 border-primary'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='text-2xl font-bold'>Regular Price</h3>
              <span className='text-2xl font-bold'>$379</span>
            </div>

            <div className='flex justify-between items-center mb-6 text-green-600'>
              <h3 className='text-xl font-bold flex items-center'>
                <DollarSign className='h-5 w-5 mr-1' />
                Early Bird Discount
              </h3>
              <span className='text-xl font-bold'>- $50</span>
            </div>

            {/* <div className='h-px bg-muted my-6'></div> */}

            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-xl font-bold'>Early Bird Price</h3>
              <span className='text-2xl font-bold text-green-600'>$329</span>
            </div>

            <p className='text-md text-muted-foreground mb-6'>
              Early bird discount applies when enrolling 30+ days before camp
              starts
            </p>

            {/* <div className='h-px bg-muted my-6'></div> */}

            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-xl font-bold'>Materials</h3>
              <span className='text-xl font-bold'>$49</span>
            </div>

            <p className='text-md text-muted-foreground mb-6'>
              A materials fee covers all sheet music, practice resources, and
              camp supplies. Includes a voucher for
              <strong> $50 off </strong>a future band class.
            </p>

            <div className='h-px bg-muted my-6'></div>

            {/* <p className='text-center'>
              Enroll in multiple sessions for even more fun!
            </p> */}

            <div className='bg-muted/20 p-4 rounded-lg mb-6 space-y-2 mt-6'>
              {/* <p className='text-sm'>
                <strong>Note:</strong> A one-time $49 materials and registration
                fee applies per student. This covers all sheet music, practice
                resources, and camp supplies. Includes a voucher for
                <strong> $50 off </strong>a future band class.
              </p> */}
              <p className='text-sm'>
                <strong>Refund Policy: </strong>
                Full refund 30+ days before camp start date. Partial refund
                (75%) 15–30 days before camp start date. No refund if fewer than
                15 days before camp start date.
              </p>
            </div>

            <Link
              href='/summer-camp?scrollTo=camp_registration'
              className={`${buttonVariants({ variant: 'default', size: 'full' })} text-lg font-bold`}
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className='py-16 red-background-5'>
        <h2 className='text-3xl font-bold text-center mb-8'>Our Location</h2>

        <Contact />
      </section>

      {/* Enrollment Form */}
      <section id='enroll' className='background-5'>
        <CampSignupFormWithStripe
          title='Secure Your Spot Today'
          overviewText='Spaces fill quickly! Complete the form below to enroll your child in our exciting summer rock camp. Remember, early bird discount of $50 applies when enrolling 30+ days before camp starts.'
        />
      </section>

      {/* Testimonials or FAQ section could go here if needed */}
    </>
  )
}
