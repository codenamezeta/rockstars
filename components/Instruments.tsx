'use client'
import { useState } from 'react'

const data = [
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
    <div className='md:flex lg:w-2/3 mx-auto'>
      <ul className='flex-column space-y space-y-4 text-lg font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0'>
        <li>
          <a
            className={`inline-flex px-4 py-3 rounded-lg w-full cursor-pointer hover:text-white hover:bg-accent transition-all duration-700 ${selected === 'guitar' ? 'font-bold text-white bg-accent' : 'bg-secondary'}`}
            aria-current='page'
            onClick={() => setSelected('guitar')}
          >
            Guitar
          </a>
        </li>
        <li>
          <a
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full cursor-pointer hover:text-white hover:bg-accent transition-all duration-700 ${selected === 'bass' ? 'text-white bg-accent' : 'bg-secondary'}`}
            onClick={() => setSelected('bass')}
          >
            {/* <svg
              className='w-4 h-4 me-2 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 18 18'
            >
              <path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
            </svg> */}
            Bass
          </a>
        </li>
        <li>
          <a
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full cursor-pointer hover:text-white hover:bg-accent transition-all duration-700 ${selected === 'drums' ? 'text-white bg-accent' : 'bg-secondary'}`}
            onClick={() => setSelected('drums')}
          >
            {/* <svg
              className='w-4 h-4 me-2 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z' />
            </svg> */}
            Drums
          </a>
        </li>
        <li>
          <a
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full cursor-pointer hover:text-white hover:bg-accent transition-all duration-700 ${selected === 'keyboard' ? 'text-white bg-accent' : 'bg-secondary'}`}
            onClick={() => setSelected('keyboard')}
          >
            {/* <svg
              className='w-4 h-4 me-2 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z' />
              <path d='M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z' />
            </svg> */}
            Keyboard
          </a>
        </li>
        <li>
          <a
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full cursor-pointer hover:text-white hover:bg-accent transition-all duration-700 ${selected === 'vocals' ? 'text-white bg-accent' : 'bg-secondary'}`}
            onClick={() => setSelected('vocals')}
          >
            {/* <svg
              className='w-4 h-4 me-2 text-gray-400 dark:text-gray-500'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z' />
            </svg> */}
            Vocals
          </a>
        </li>
      </ul>
      <div className='p-6 bg-background text-foreground rounded-lg w-full'>
        <h3 className='text-3xl text-primary font-bold mb-2'>
          {data.find((item) => item.title.toLowerCase() === selected)?.title}
        </h3>
        <p className='mb-2'>
          {
            data.find((item) => item.title.toLowerCase() === selected)
              ?.description
          }
        </p>
      </div>
    </div>
  )
}
