import { getAllTeachers } from '@/lib/teachers'
import SectionOverview from '@/components/SectionOverview'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import guitarBanner from '@/public/imgs/guitar-04.jpg'
// import FreeTrialForm from '@/components/FreeTrialForm'

// import type { Metadata, ResolvingMetadata } from 'next'

// export async function generateMetadata(
//   { params }: { params: { member: string } },
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const member = (await params).member

//   const teachers = getAllTeachers()
//   const teacher = teachers.find((t) => t.slug === member)

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: member,
//     openGraph: {
//       images: [{ url: teacher?.avatar }, ...previousImages],
//     },
//   }
// }

export default async function teamMemberPage({
  params,
}: {
  params: Promise<{ member: string }>
}) {
  const member = (await params).member
  const teachers = getAllTeachers()
  const teacher = teachers.find((t) => t.slug === member)

  if (!teacher) {
    return (
      <section className='container pt-48 pb-24 md:pt-64 md:pb-96 flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-accent text-center'>
          Oh No! It looks like that team member could not be found.
        </h1>
        <span className='flex flex-row justify-start'>
          <Link
            className={`${buttonVariants({ variant: 'outline' })} mt-4 mr-4`}
            href='/'
          >
            Home Page
          </Link>
          <Link
            className={`${buttonVariants({ variant: 'default' })} mt-4`}
            href='/team'
          >
            View Team Members
          </Link>
        </span>
      </section>
    )
  }
  return (
    <>
      <header className='relative font-anton z-0 px-5 pt-32 pb-24 md:py-56 mx-auto'>
        <Image
          src={guitarBanner}
          alt='Guitar'
          layout='fill'
          className='object-cover object-center'
        />
        <div
          className='absolute inset-0 bg-black'
          style={{
            background:
              'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgb(0, 0, 0, 0.0))',
          }}
        ></div>
      </header>

      <main className='container flex flex-wrap mx-auto px-4 py-24'>
        <Link href='/team' className='text-muted-foreground'>
          &larr; View All Team Members
        </Link>
        <SectionOverview
          title={`${teacher.first_name} ${teacher.last_name}`}
          customClasses='w-full'
        />
        <div className='md:w-1/3 flex flex-col'>
          <div className='relative w-full mb-6' style={{ aspectRatio: '1/1' }}>
            <Image
              src={teacher.avatar}
              alt={`${teacher.first_name}'s avatar`}
              // width={600}
              // height={600}
              fill={true}
              className='bg-gray-100 object-cover object-center rounded-xl mb-6'
            />
          </div>
          <h3 className='text-white text-2xl font-bold tracking-wide'>
            {teacher.first_name} is available for:
          </h3>
          <ul className='flex flex-wrap uppercase text-accent justify-start mb-6'>
            {teacher.instructs.map((subject, index) => (
              <li key={index} className='pr-4 font-bold text-lg'>
                {subject}
                {/* {index < teacher.instructs.length - 1 && ' •'} */}
              </li>
            ))}
          </ul>
          <h3 className='text-white text-2xl font-bold tracking-wide'>
            Check out {teacher.first_name}'s work on:
          </h3>
          <ul className='flex flex-wrap uppercase text-accent justify-start mb-6'>
            {teacher.links.map((link) => (
              <li key={link.label} className='pr-4 font-bold'>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='md:w-2/3 md:pl-8'>
          <h2 className='text-accent text-4xl font-bold tracking-wide'>
            About {teacher.first_name}
          </h2>
          <p className='mt-2 pr-12 text-2xl max-w-prose'>{teacher.bio}</p>
        </div>
      </main>
      <section className='container mx-auto px-4 py-24'>
        <SectionOverview
          title={`Book a Free Trial Lesson with ${teacher.first_name}`}
          overviewText={`Interested in taking lessons with ${teacher.first_name}? Fill out the form below to schedule a free trial lesson and get started on your musical journey!`}
        />
        <div className='flex flex-col items-center justify-center'>
          <iframe
            // allowtransparency='false'
            // frameBorder='0'
            width={'100%'}
            height={'1600px'}
            src='https://rockstarslaverne.opus1.io/w/michael-zeta'
            // scrolling='yes'
            // style='overflow: hidden; height: 647px;'
          ></iframe>
        </div>
      </section>
      {/* <FreeTrialForm
        title={`Interested In Working With ${teacher.first_name}?`}
        overviewText={`${teacher.first_name} ${teacher.last_name} is available for a free trial lesson! To get started, please fill out the form below to get a tour of our school, meet ${teacher.first_name}, and claim your free trial lesson.`}
      /> */}
    </>
  )
}
