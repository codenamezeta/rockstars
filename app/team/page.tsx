import Header from '@/components/Header'
import { getAllTeachers } from '@/lib/teachers'
import Link from 'next/link'
import Image from 'next/image'
import SectionOverview from '@/components/SectionOverview'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Rockstars La Verne Team',
  description:
    'View and browse the instructors and staff that comprise the Rockstars of Tomorrow in La Verne Team',
}

export default function TeamPage() {
  const teachers = getAllTeachers()
  return (
    <>
      <Header title='Meet the Team' headerStyle={3} />
      <section className='mx-auto px-4 py-24'>
        <SectionOverview
          title='Instructors'
          overviewText='Our instructors are the heart of Rockstars of Tomorrow. They bring years of experience and a passion for music to every lesson, helping students develop their skills and reach their full potential. Get to know our talented team and discover the perfect instructor for you!'
        />
        <ul className='container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {teachers.map((teacher) => (
            <li
              key={teacher.slug}
              className='flex flex-col border border-primary p-4 rounded-lg bg-background'
            >
              <div className='w-full'>
                <Link href={`/team/${teacher.slug}`}>
                  <Image
                    src={teacher.avatar}
                    alt={`${teacher.first_name}'s profile`}
                    width={80}
                    height={80}
                    className='w-40 h-40 float-left bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4'
                  />
                </Link>
                <Link href={`/team/${teacher.slug}`}>
                  <h2 className='inline text-accent font-bold text-3xl'>{`${teacher.first_name} ${teacher.last_name}`}</h2>
                </Link>

                <ul className='uppercase text-muted-foreground text-sm tracking-tighter'>
                  {teacher.instructs.map((subject, index) => (
                    <li key={index} className='inline mr-1'>
                      {subject}
                      {index < teacher.instructs.length - 1 && ' •'}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='clear-both my-2 flex flex-col h-full'>
                <p className='w-full max-w-prose tracking-wide text-medium'>
                  {teacher.bio.substring(0, 500)}...
                </p>
                <Link
                  href={`/team/${teacher.slug}`}
                  className='block w-full mt-auto text-center text-accent'
                >
                  Read More &rarr;
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
