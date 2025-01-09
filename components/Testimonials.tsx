'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import gina from '../public/imgs/testimonial-authors/gina.jpg'
import christine from '../public/imgs/testimonial-authors/christine.jpg'
import kaelyn from '../public/imgs/testimonial-authors/kaelyn.png'
import billie from '../public/imgs/testimonial-authors/billie.jpg'
import krista from '../public/imgs/testimonial-authors/krista.jpg'
import virginia from '../public/imgs/testimonial-authors/virginia.jpg'
import SectionOverview from './SectionOverview'

const testimonials = [
  {
    text: "We love this place. I have 2 kids that take lessons here and they are progressing very well. I love the warm environment and the encouragement they get from their teacher and their owners. This place is definitely expensive but worth it. They're getting the education of a lifetime here. They can play and instrument and they're getting experience performing in front of people. Awesome!!!!",
    author: 'Gina M.',
    image: gina,
  },
  {
    text: 'This place is AMAZING! The whole staff is so nice and really makes learning an instrument so fun. I would totally recommend going here. I personally go here and Michal Zeta is an amazing teacher he will personally connect with you and make going there like a safe space. Everyone there is still super nice I just wanted to give a special shout-out to him. I love Rockstars of Tomorrow and it’s like my second home!',
    author: 'Kaelyn B.',
    image: kaelyn,
  },
  {
    text: 'Our family LOVES the Rockstars of La Verne family. Our instructors, Michael and Kevin, are fun, encouraging, talented and genuinely good guys. The management team of Brian and Robert are always there to welcome you and offer their help in any way possible. Their goal is to make your kid (or adult) a confident musician. Happy, happy customer.',
    author: 'Christine W.',
    image: christine,
  },
  {
    text: "My 6yr old son started group guitar lessons soon after this location opened. The 1st time we walked in for a tour we felt so welcomed and inspired. I wanted my son to have a fun, positive experience and this is exactly what we get here. We come weekly and feel comfortable and supported in this music journey. I highly recommend this location and can't wait to see how my son grows both musically and with his confidence.",
    author: 'Krista C.',
    image: krista,
  },
  {
    text: 'Hands down the best place for music lessons!!!',
    author: 'Billie S.',
    image: billie,
  },
  {
    text: 'Our boys attend Rockstars La Verne and love it. The boys have taken Lessons from Michael Zeta, Kevin Shannon, and Christina and they are all excellent instructors.',
    author: 'Virginia A.',
    image: virginia,
  },
]

export default function Testimonials(): JSX.Element {
  return (
    <section
      id='testimonials'
      className='themed-background-style-2 font-arvo py-24'
    >
      <SectionOverview
        title='Testimonials'
        titleColor='white'
        separatorColor='accent'
      />

      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='hsl(36, 50%, 60%, 10%)'
        className='block w-48 h-48 ml-auto mr-24 -mb-48 -mt-24'
        viewBox='0 0 975.036 975.036'
      >
        <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
      </svg>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={8000}
        showStatus={false}
        swipeable={false}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className='bg-transparent container mt-24'>
            <p
              className='mb-4 mx-auto text-sm md:text-base text-white'
              style={{ maxWidth: '80ch' }}
            >
              {testimonial.text}
            </p>
            <div className='flex flex-row items-center justify-center gap-4 mb-12'>
              <Image
                alt={`image of ${testimonial.author}`}
                src={testimonial.image}
                className='rounded-full object-cover object-center max-w-12 max-h-12'
                width={80}
                height={80}
              />
              <span className='font-medium text-white text-lg'>
                {testimonial.author}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}
