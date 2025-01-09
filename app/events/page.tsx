import Header from '@/components/Header'
import { getAllEvents } from '@/lib/strapi'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Rockstars of Tomorrow hosts a variety of events throughout the year. Check out our upcoming events and join us for a rockin’ good time!',
}

export default async function EventsPage() {
  const events = await getAllEvents()

  if (!events || !events.data) {
    return <div>Error loading events.</div>
  }

  return (
    <>
      <Header title='Events' headerStyle={1} />
      <main className='container py-24'>
        <ul>
          {events.data.map((event: any) => (
            <li
              key={event.id}
              className='mb-8 p-4 bg-background border border-gray-200 text-white'
            >
              <span className='text-3xl text-gray-400'>
                {new Date(event.date).toLocaleDateString()}
              </span>
              <h2 className='text-2xl text-accent tracking-wide font-bold'>
                {event.event_name}
              </h2>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
