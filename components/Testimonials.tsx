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
import janice from '../public/imgs/testimonial-authors/janice.png'
import marcellus from '../public/imgs/testimonial-authors/marcellus.jpg'
import samii from '../public/imgs/testimonial-authors/samii.jpg'
import trina from '../public/imgs/testimonial-authors/trina.jpg'
import janelle from '../public/imgs/testimonial-authors/janelle.jpg'
import randy from '../public/imgs/testimonial-authors/randy.png'
import susie from '../public/imgs/testimonial-authors/susie.png'
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
  {
    text: "I'm so so happy I found this place! I am taking voice and guitar here with Kevin and so far have just been focusing on voice. I chose a random song, \"Peaches\" from Super Mario Bros and he knew it, and was able to play it in the correct key on the keyboard for me to sing to. I had so much fun and I surprised myself when following his modeling. He used his voice so skillfully and brings the passion through the dynamics. Such a good price for how much I'm getting out of it! I know voice lessons in general aren't cheap. I hope he gets nicely compensated, because he deserves it.",
    author: 'Janice T.',
    image: janice,
  },
  {
    text: "My time spent in this studio was epic. Each person was truly a thrill to play with, I wouldn't change a thing. Thanks Guys",
    author: 'Marcellus M.',
    image: marcellus,
  },
  {
    text: 'I work next door to the rock star crew and let me just say they are just that.... rock stars! Not only are they trained in music and sound great!! but are some of the friendliest people ever! Brian is a Forsure sell, always has the biggest smile and a great personality. I recently started bringing my 4 year old son here to the tiny bopper class. He loves it and has so much fun! Looking forward to all the great things he will learn! Thanks guys!!',
    author: 'Samii W.',
    image: samii,
  },
  {
    text: "Kevin is not only highly knowledgeable but he shows his passion for music. My son is taking both guitar & drum lessons with him. He's so excited to come to lessons and feels like he connects with his teacher on a personal level too. Kevin has traveled all over the world playing music & doing what he loves, so he has practical knowledge in addition to helping my son learn the chords.",
    author: 'Trina W.',
    image: trina,
  },
  {
    text: 'Great Establishment. My son loves his weekly session and loved playing outside at their little concert they have after learning 2 songs and has gotten so much better and more confident. Jesse is also very patient with my son. Thanks guys!',
    author: 'Janelle T.',
    image: janelle,
  },
  {
    text: 'Our son has been attending RockStars Of Tomorrow for six years now. This music school is the best thing we could have done for our son. He started on piano then graduated to drums and is now practicing drums and bass. Music is such a great gift to have and I’m glad we found RockStars.',
    author: 'Randy K.',
    image: randy,
  },
  // {
  //   text: "Can’t say enough about this place-it’s where I have watched children(my own included) find their passion, talent and confidence thru music. The staff is amazing-shout out Michael! Thanks you for the good vibe and all you do to teach and inspire",
  //   author: "Susie W.",
  //   image: susie,
  // }
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
