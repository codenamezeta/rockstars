import Image from 'next/image'
import bandOfSix from '../public/imgs/Kids/band-of-six.png'
import Link from 'next/link'
import SectionOverview from './SectionOverview'

export default function Benefits(): JSX.Element {
  return (
    <section
      id='benefits'
      className='py-24 px-6 md:px-auto text-white body-font bg-background'
    >
      <SectionOverview
        title='We Make Music Lessons Fun'
        overviewText='At Rockstars of Tomorrow, we know the road to becoming a musician isn’t always easy. That’s why we’ve created programs that eliminate the frustrations and replace them with fun, progress, and excitement.'
      />
      <div className='container px-5 mx-auto flex flex-wrap '>
        <div className='lg:w-1/2 w-full mb-8'>
          <Image
            alt='Band of Six Kids'
            className='object-cover object-center'
            src={bandOfSix}
          />
        </div>
        <div className='flex flex-col flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 text-left text-lg'>
          {/* <div className='flex flex-col mb-10 lg:items-start items-center'>
            <div className='flex-grow'> */}
          <h2 className='text-accent text-2xl title-font font-medium mb-3'>
            Transform Practice Time Into a Rockstar Experience
          </h2>
          <p className='leading-relaxed mb-6 text-xl'>
            Without fresh challenges or variety, practice can feel like a grid –
            making kids lose interest and start to see music as a chore rather
            than a passion. The same dull scales, the same old songs—it’s enough
            to make even the most dedicated young rockstar want to hang up their
            guitar. Boredom sets in, frustration takes over, and before long,
            that spark for music starts to fizzle out.
          </p>
          <p className='leading-relaxed mb-6 text-base'>
            Let’s be real—when practice feels more like a chore than a jam
            session, it’s easy for kids to lose steam. Without the right energy,
            guidance, and excitement, music can quickly go from “dream big” to
            “why bother?” And no parent wants to see their aspiring rock legend
            lose their love for music before they’ve even had their big moment.
          </p>
          <p className='leading-relaxed mb-6 text-base'>
            At Rockstars of Tomorrow, we don’t just teach music—we create a
            stage for your child’s greatness. From jamming in pro-grade
            rehearsal spaces to joining electrifying band classes, we make
            practice feel like a backstage pass to stardom. And when your kid
            steps onto a real stage, guitar slung or mic in hand, they’ll feel
            the rush of performing for a live audience. It’s not just
            practice—it’s where future rockstars are born.
          </p>
        </div>
      </div>
      {/* </div>
      </div> */}
    </section>
  )
}
