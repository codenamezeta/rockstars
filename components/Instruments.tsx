'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { IoStarSharp } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
//- AI Music Marketing Images
import Guitarist from '@/public/imgs/AI Music Marketing/Electric Guitarists/ElectricGuitar1.png'
import Bassist from '@/public/imgs/AI Music Marketing/Bassists/Bass1.png'
import Drummer from '@/public/imgs/AI Music Marketing/Drummers/Drummer1.png'
import Pianist from '@/public/imgs/AI Music Marketing/Pianists/Piano3.png'
import Vocalist from '@/public/imgs/AI Music Marketing/Vocalists/Vocalist1.png'

const instrumentsData = [
  {
    title: 'Guitar',
    heading: 'Unleash Your Inner Rockstar with Guitar Lessons',
    description: [
      'The guitar: the ultimate symbol of musical rebellion and creativity. Whether you’re shredding electric riffs or strumming soulful acoustic chords, we’ve got the know-how to get you rocking. From rhythm to lead, rock to pop, and everything in between, the guitar is your gateway to pure musical freedom.',
      'This isn’t just an instrument – it’s your ticket to a lifetime of epic jams, impromptu singalongs, and unforgettable moments. With today’s arsenal of guitars, amps, pedals, and effects, you can create jaw-dropping sounds for any genre – rock, blues, metal, punk, reggae, alternative, country, and more.',
      "In fact, if a music genre exploded onto the scene in the last six decades, chances are it was inspired by the electric guitar revolution. Ready to make some noise? Let's turn it up to 11!",
    ],
    thumbnail: Guitarist,
  },
  {
    title: 'Bass',
    heading: 'Feel the Rumble with Bass Guitar Lessons',
    description: [
      'The bass guitar: the heartbeat of every band and the unsung hero of every epic track. Whether you’re a total beginner or a seasoned player, the bass is your chance to command the groove and bring the low-end thunder. It rumbles, it roars, and it’s the glue that holds the music together!',
      'Versatile and essential, the bass drives modern music – from blues to rock, metal to jazz, and beyond. Our bass instructors will teach you everything from right-hand fingering and slapping to walking basslines, improvisation, and locking in tight with the drummer. Most importantly, you’ll master the art of holding a song together like a pro.',
      'In a world overflowing with guitarists, great bass players are rare and in high demand. Ready to take your place as the backbone of the band? Let’s turn up the low end and make you unforgettable!',
    ],
    thumbnail: Bassist,
  },
  {
    title: 'Drums',
    heading: 'Ignite the Beat with Drum Lessons',
    description: [
      'The drums: the ultimate powerhouse of music and the most fun you’ll ever have sitting down. Raw, primal, and electrifying, the drums are your go-to outlet for energy, creativity, and a little controlled chaos. Plus, it’s a killer workout and a secret weapon for mastering coordination and rhythm.',
      'Nothing compares to the adrenaline rush of playing drums in a band – it’s pure, unfiltered fun you have to feel to believe. Our explosive drum program will have you rocking the kit like legends John Bonham, Travis Barker, Neil Peart, Keith Moon, and Dave Grohl. You’ll nail rudiments, theory, technique, dynamics, and timing while grooving to the beats of your favorite songs.',
      'Whether you’re into rock, metal, punk, reggae, or pop, we’ll help you bring the thunder. And it doesn’t stop at the kit – we’ll explore other percussion instruments to expand your skills. Ready to lead the charge and make some noise? Let’s drum up something epic!',
    ],
    thumbnail: Drummer,
  },
  {
    title: 'Piano',
    heading: 'Command the Keys with Piano & Keyboard Lessons',
    description: [
      'The piano and keyboard: timeless, powerful, and endlessly versatile. From centuries-old classics to cutting-edge modern hits, this instrument has done it all – and now it’s your turn. Whether you’re performing solo, rocking with a band, or crafting your next masterpiece, the keyboard gives you the ultimate musical edge.',
      'With its intuitive layout and massive range, the keyboard is like having an entire orchestra at your fingertips. And thanks to today’s synthesizers and virtual instruments, there’s no genre you can’t conquer – from rock and pop to classical, electronic, jazz, and beyond.',
      'In this program, you’ll master music theory, reading, hand techniques, improvisation, counterpoint, and performance skills. Whether you’re a budding singer-songwriter, a future composer, or just looking to have fun, the keyboard is your gateway to endless possibilities. It’s time to unleash your inner maestro and make piano lessons fun again!',
    ],
    thumbnail: Pianist,
  },
  {
    title: 'Vocals',
    heading: 'Find Your Voice with Vocal Lessons',
    description: [
      'Singing: the oldest, most powerful, and most breathtaking instrument of all. From soulful ballads to rock anthems, vocals are the heart of almost every genre. And the best part? Anyone can learn to sing!  It’s like learning to ride a bike… a bit scary at first, but once the fundamentals are in place, the sky’s the limit.',
      'For beginners, we’ll start with the essentials – building confidence, pitch, and control. For seasoned vocalists, our program is all about pushing your limits, expanding your range, and refining your unique sound.',
      'Singing is more than just a skill – it’s the ultimate form of self-expression and connection. Whether you’re chasing the thrill of the stage or just singing your heart out for the love of music, our vocal program will help you unlock your true potential and make sure your voice is heard loud and clear. Ready to hit the high notes? Let’s make it happen!',
    ],
    thumbnail: Vocalist,
  },
]

export default function Instruments() {
  const [selected, setSelected] = useState('guitar')

  // Find the currently selected instrument once
  const activeInstrument = instrumentsData.find(
    (item) => item.title.toLowerCase() === selected
  )

  return (
    <div className='flex-col md:flex-row flex lg:w-2/3 mx-auto'>
      <ul className='flex flex-row md:flex-col flex-wrap text-sm md:text-lg font-medium text-muted-foreground'>
        {instrumentsData.map((instrument, index) => (
          <li
            key={index}
            className={`flex w-1/3 md:w-full text-sm px-4 py-3 border-b border-r border-black cursor-pointer hover:text-primary-foreground hover:bg-primary transition-all duration-700 ${
              selected === instrument.title.toLowerCase()
                ? 'font-bold text-primary-foreground bg-primary'
                : 'bg-secondary'
            }`}
            onClick={() => setSelected(instrument.title.toLowerCase())}
          >
            {instrument.title}
          </li>
        ))}
      </ul>

      <div className='p-6 bg-background rounded-lg w-full themed-background-style-3'>
        <h3 className='text-sm text-xl md:text-3xl text-accent font-bold mb-2'>
          {activeInstrument?.heading}
        </h3>
        {activeInstrument?.description.map((paragraph, idx) => (
          <p key={idx} className='mb-4 text-sm md:text-xl'>
            {paragraph}
          </p>
        ))}
        <Link href='/?scrollTo=free_trial'>
          <Button size='full'>
            <IoStarSharp className='items-baseline mr-2' />
            Book A Free Trial
            <IoStarSharp className='inline ml-2' />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export function InstrumentsSelector() {
  const [selected, setSelected] = useState('guitar')

  // Find the currently selected instrument once
  const activeInstrument = instrumentsData.find(
    (item) => item.title.toLowerCase() === selected
  )

  return (
    <div className='p-6 background-7 rounded-sm mx-auto'>
      <ul className='flex md:justify-between'>
        {instrumentsData.map((instrument, index) => (
          <li
            key={index}
            className={`transition-all cursor-pointer hover:scale-105 border hover:border-white p-2 w-1/5 md:w-1/6 ${
              selected === instrument.title.toLowerCase()
                ? 'border-accent'
                : 'border-primary'
            }`}
            onClick={() => setSelected(instrument.title.toLowerCase())}
          >
            <Image
              src={instrument.thumbnail}
              alt={`Image of ${instrument.title} player`}
              loading='lazy'
              placeholder='blur'
            />
            <span
              className={`text-base md:text-2xl lg:text-4xl tracking-tighter font-bold block w-full text-right -mt-2 -mb-4 md:-mt-6 lg:-mt-12 mr-4 lg:mb-2 z-20 ${
                selected === instrument.title.toLowerCase()
                  ? 'themed-text-3'
                  : 'themed-text-2'
              }`}
            >
              {instrument.title}
            </span>
          </li>
        ))}
      </ul>
      <div className=''>
        <h3 className='text-lg text-xl md:text-3xl lg:text-5xl text-accent font-bold mt-12 mb-6'>
          {activeInstrument?.heading}
        </h3>
        {activeInstrument?.description.map((paragraph, idx) => (
          <p key={idx} className='mb-6 text-sm md:text-xl'>
            {paragraph}
          </p>
        ))}
        <Link href='/?scrollTo=free_trial'>
          <Button size='full' className='text-xl py-8 mt-4'>
            <IoStarSharp className='items-baseline mr-2' />
            Book A Free Trial
            <IoStarSharp className='inline ml-2' />
          </Button>
        </Link>
      </div>
    </div>
  )
}
