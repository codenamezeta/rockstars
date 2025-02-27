import SectionOverview from './SectionOverview'
import Image from 'next/image'
import Link from 'next/link'
import { getAllTeachers } from '@/lib/teachers'

export default function Team(): JSX.Element {
  const teachers = getAllTeachers()
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <SectionOverview
          title='Our Team'
          overviewText='Learn from the best! Our faculty comprises rock music veterans with diverse backgrounds and years of experience. Get personalized guidance and transform your skills under their expert tutelage.'
        />
        <div className='flex flex-wrap'>
          {teachers.map((teacher) => (
            <Link
              href={`/team/${teacher.slug}`}
              className='block p-2 lg:w-1/3 md:w-1/2 w-full'
              key={teacher.slug}
            >
              <div className='h-full flex items-center border-muted-foreground border p-4 rounded-lg bg-background'>
                <Image
                  alt='team'
                  className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://dummyimage.com/80x80'
                  width={80}
                  height={80}
                  loading='lazy'
                  placeholder='blur'
                />
                <div className='flex-grow'>
                  <h2 className='text-accent title-font font-medium text-lg'>
                    {`${teacher.first_name} ${teacher.last_name}`}
                  </h2>
                  <p className='text-foreground text-sm'>
                    {teacher.instructs.slice(0, 5).join(' • ')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
