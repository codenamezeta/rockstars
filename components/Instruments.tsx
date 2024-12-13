'use client'
import { useState } from 'react'

const instrumentsData = [
  {
    title: 'Guitar',
    description:
      "Today’s most popular instrument – the guitar. Whether it's acoustic or electric, rock or pop, rhythm or lead, we’ve got you covered. Playing guitar is one of those skills that comes in handy in so many situations later in life, you’ll never regret it. The guitar is an incredibly expressive instrument that can be played in a ton of different styles. These days with the selection of guitar types, amps, pedals, and effects, there are so many great sounds a guitar can produce, which makes it the perfect instrument for rock, blues, jazz, metal, reggae, punk, alternative, country and many many more. Come to think of it… if a genre of music debuted in the last 60 years, chances are it was inspired by the electric guitar revolution!",
  },
  {
    title: 'Bass',
    description:
      'The bass guitar is a great instrument for beginners and experts alike. It’s easy enough for anyone to master and there’s really nothing else like it. It rumbles and it roars! Versatile enough for most types of modern music and a staple of blues, rock, metal, and jazz. Like our guitar program, our bass instructors will teach you to master bass techniques like walking, improvising, right hand fingering, slapping, playing with a pick, communicating with the drummer and most importantly of all – holding a song together. In a world full of guitar players, the demand for great bass players is strong. We take this program serious so you will get noticed!',
  },
  {
    title: 'Drums',
    description:
      'The drums are probably the most fun you’ll ever have sitting down. Primal and loud, the drums are a great way to get exercise and release angst. You’ll also improve your coordination and math skills. Playing the drums with other musicians in a band is a kind of fun that can only be understood through experience. Plain and simple, the drums rock and so will you after taking this explosive drum program! You’ll learn rudiments, theory, technique, dynamics and timing all while rockin’ to the beats of your favorite songs. Learn how to rock the kit like John Bonham, Travis Barker, Neil Peart, Keith Moon and Dave Grohl. Great for all types of rock music as well as metal, reggae, pop, and punk. We’ll learn about other types of percussion instruments that go beyond the traditional drum sets as well.',
  },
  {
    title: 'Keyboard',
    description:
      'Great for solo artists and ensemble musicians alike, the keyboard is the modern-day predecessor to the piano which has been around for centuries. The catalog of great piano music is absurdly huge and one that is constantly growing. The enormous array of synthesizers and virtual instruments a keyboard can replicate means there is literally no genre of music that can’t be performed on this amazing instrument. The keyboard’s logical layout makes it easy to learn and it’s large range makes it like having an entire orchestra at your fingertips, which is great for singers or composers. In this program, students can learn music theory, reading music, left and right hand techniques, improvising, counterpoint, and performance skills. Learning the piano is fun again!',
  },
  {
    title: 'Vocals',
    description:
      'Singing is by far the oldest form of musical expression and quite arguably the most challenging and most beautiful instrument of them all. Just about every genre of music includes vocals of some sort. No matter how good a singer gets, there are always new challenges to master but believe it or not, anyone can sing! It’s like learning to ride a bike… a bit scary at first, but once the fundamentals are in place, the sky’s the limit. If you’ve never sang before, no problem… we start with the basics and build up from there. For experienced singers looking to strengthen your gift and increase your range, we will help hone your skills to take it to the next level. Singing is extremely rewarding and is one of the best ways to express yourself through music. Our vocal program will give you a voice to be heard.',
  },
]

export default function Instruments(): JSX.Element {
  const [selected, setSelected] = useState('guitar')
  return (
    <div className='flex-col md:flex-row flex lg:w-2/3 mx-auto'>
      <ul className='flex flex-row md:flex-col flex-wrap text-sm md:text-lg font-medium text-gray-500 dark:text-gray-400'>
        {instrumentsData.map((instrument, index) => (
          <li
            key={index}
            className={`flex w-1/3 md:w-full text-sm px-4 py-3 border-b border-r border-black cursor-pointer hover:text-white hover:bg-primary transition-all duration-700 ${selected === instrument.title.toLowerCase() ? 'font-bold text-white bg-primary' : 'bg-secondary'}`}
            aria-current='page'
            onClick={() => setSelected(instrument.title.toLowerCase())}
          >
            {instrument.title}
          </li>
        ))}
      </ul>
      <div className='p-6 bg-background rounded-lg w-full themed-background-style-3'>
        <h3 className='text-sm text-xl md:text-3xl text-accent font-bold mb-2'>
          {
            instrumentsData.find(
              (item) => item.title.toLowerCase() === selected
            )?.title
          }
        </h3>
        <p className='mb-2 text-sm md:text-xl'>
          {
            instrumentsData.find(
              (item) => item.title.toLowerCase() === selected
            )?.description
          }
        </p>
      </div>
    </div>
  )
}
