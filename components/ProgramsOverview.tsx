import { Button } from '@/components/ui/button'
import Image from 'next/image'
import privateLessonsImg from '@/public/imgs/drums-02.jpg'
import bandClassImg from '@/public/imgs/band-02-crop-01.png'
import rockstarProImg from '@/public/imgs/stage-02.jpg'
import workshopsImg from '@/public/imgs/audio-01.jpg'
import SectionOverview from './SectionOverview'
import Link from 'next/link'

export default function ProgramsOverview(): JSX.Element {
  return (
    <section className='body-font py-24 themed-gradient-1'>
      <div className='container'>
        <SectionOverview
          customId='programs_overview'
          title='Programs'
          overviewText='
          Rockstars of Tomorrow offers a variety of programs to help students develop their skills, build confidence, and have fun. Whether you are a beginner or an experienced musician, we have a program that is right for you. Our programs are designed to help students learn to play music, write songs, perform in a band, and more. We offer private lessons, band classes, workshops, and our exclusive Rockstar Pro program.
        '
        />
        <div className='flex flex-wrap -mx-4 -mb-10 text-left'>
          <div className='sm:w-1/2 mb-24 px-4'>
            <div className='rounded-lg h-64 overflow-hidden'>
              <Image
                alt='content'
                className='object-cover object-center h-full w-full'
                src={privateLessonsImg}
              />
            </div>
            <h2 className='title-font text-2xl font-medium mt-6 mb-3'>
              Private Lessons
            </h2>
            <p className='leading-relaxed text-base'>
              Learn to play guitar, bass, drums, piano, ukulele, or sing with
              our experienced instructors. Our private and group lessons are
              tailored to fit your needs and goals. We offer lessons for all
              ages and skill levels.
            </p>
            <Link href='/programs#private_lessons'>
              <Button className='bg-white text-black hover:text-white mt-6'>
                Learn More &rarr;
              </Button>
            </Link>
          </div>
          <div className='sm:w-1/2 mb-24 px-4'>
            <div className='rounded-lg h-64 overflow-hidden'>
              <Image
                alt='content'
                className='object-cover object-center h-full w-full'
                src={bandClassImg}
              />
            </div>
            <h2 className='title-font text-2xl font-medium mt-6 mb-3'>
              Join a Band
            </h2>
            <p className='leading-relaxed text-base'>
              Our band classes are designed to help students develop the skills
              they need to play in a band. Students are placed in a band with
              other students of similar age and skill level, and work with a
              coach to learn songs, write original music, and perform at
              concerts.
            </p>
            <Link href='/programs#band_classes'>
              <Button className='bg-white text-black hover:text-white mt-6'>
                Learn More &rarr;
              </Button>
            </Link>
          </div>
          <div className='sm:w-1/2 mb-24 px-4'>
            <div className='rounded-lg h-64 overflow-hidden'>
              <Image
                alt='content'
                className='object-cover object-center h-full w-full'
                src={rockstarProImg}
              />
            </div>
            <h2 className='title-font text-2xl font-medium mt-6 mb-3'>
              Rockstar Pro
            </h2>
            <p className='leading-relaxed text-base'>
              Become a part of a professional, working band! This fully
              customizable and open-ended program allows students to choose
              their bandmates, coach, and setlists. Band members develop
              performance skills, write original songs, and headline at
              exclusive concerts!
            </p>
            <Link href='/programs#band_classes'>
              <Button className='bg-white text-black hover:text-white mt-6'>
                Learn More &rarr;
              </Button>
            </Link>
          </div>
          <div className='sm:w-1/2 mb-24 px-4'>
            <div className='rounded-lg h-64 overflow-hidden'>
              <Image
                alt='content'
                className='object-cover object-center h-full w-full'
                src={workshopsImg}
              />
            </div>
            <h2 className='title-font text-2xl font-medium mt-6 mb-3'>
              Workshops
            </h2>
            <p className='leading-relaxed text-base'>
              Our workshops are designed to help students develop specific
              skills and knowledge in a short period of time. Workshops are
              offered on a variety of topics, including songwriting, music
              theory, recording, and more. Workshops are open to all ages and
              skill levels.
            </p>
            <Link href='/programs'>
              <Button className='bg-white text-black hover:text-white mt-6'>
                Learn More &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
