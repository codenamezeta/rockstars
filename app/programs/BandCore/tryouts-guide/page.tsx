import SectionOverview from '@/components/SectionOverview'
import { Button } from '@/components/ui/button'

export default function TryoutsGuidePage() {
  return (
    <main className='bg-background text-white'>
      {/* Header Section */}
      <header className='bg-primary py-16'>
        <div className='container mx-auto px-6 text-center'>
          <h1 className='text-4xl font-bold mb-4'>BandCore Tryouts Guide</h1>
          <p className='text-lg text-muted-foreground'>
            Everything you need to know to ace your BandCore tryout and join our
            elite program!
          </p>
        </div>
      </header>

      {/* 1. Overview */}
      <section className='py-16'>
        <div className='container mx-auto px-6'>
          <SectionOverview
            title='Overview of Tryouts'
            overviewText='BandCore is looking for committed and skilled musicians ready to take their craft to the next level. This guide will help you prepare and stand out.'
            separatorColor='accent'
          />
        </div>
      </section>

      {/* 2. What We're Looking For */}
      <section className='py-16 bg-black'>
        <div className='container mx-auto px-6'>
          <SectionOverview
            title="What We're Looking For"
            overviewText='We’re searching for musicians with strong fundamentals, performance skills, and a commitment to excellence. Show us your passion and potential!'
          />
          <ul className='space-y-6 mt-8'>
            {[
              'Solid understanding of your instrument and music basics.',
              'Ability to play songs from start to finish with confidence.',
              'Stage presence and an engaging performance style.',
              'Commitment to teamwork and a positive attitude.',
            ].map((item, index) => (
              <li
                key={index}
                className='bg-background p-6 rounded-lg shadow-lg flex items-start space-x-4'
              >
                <span className='text-accent font-bold text-2xl'>
                  {index + 1}
                </span>
                <p className='text-muted-foreground'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. How Tryouts Work */}
      <section className='py-16'>
        <div className='container mx-auto px-6'>
          <SectionOverview
            title='How Tryouts Work'
            overviewText='Here’s a step-by-step guide to ensure you’re fully prepared to impress.'
            separatorColor='accent'
          />

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
            {[
              {
                title: 'Step 1: Pick a Song',
                description:
                  'Choose a song that showcases your style and skill level. Play the entire song from memory—no sheet music or chord charts allowed!',
              },
              {
                title: 'Step 2: Practice',
                description:
                  'Work with your private lessons teacher to refine your performance. Use your lessons to perfect every detail, from timing to tone.',
              },
              {
                title: 'Step 3: Record Your Performance',
                description:
                  'Record a video of your full performance. This is your time to shine—demonstrate your musical ability and stage presence.',
              },
              {
                title: 'Step 4: Submit Your Tryout',
                description:
                  'Upload your video and fill out the tryout form before the deadline. We’ll review your submission and notify selected students.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className='bg-background p-6 rounded-lg shadow-lg'
              >
                <div className='flex items-center space-x-4 mb-4'>
                  <span className='text-accent font-bold text-2xl'>
                    {index + 1}
                  </span>
                  <h3 className='text-xl font-bold'>{step.title}</h3>
                </div>
                <p className='text-muted-foreground'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Key Tips */}
      <section className='bg-black py-16'>
        <div className='container mx-auto px-6'>
          <SectionOverview
            title='Key Tips for Success'
            overviewText='Stand out from the crowd with these pro tips!'
          />

          <ul className='space-y-6 mt-8'>
            {[
              'Choose a song you’re confident with and practice until it’s flawless.',
              'Focus on your timing, tone, and expression—these are key to making an impression.',
              'Dress the part! A touch of stage presence can make you memorable.',
              'Avoid overthinking—stay relaxed and have fun!',
            ].map((tip, index) => (
              <li
                key={index}
                className='bg-background p-6 rounded-lg shadow-lg flex items-start space-x-4'
              >
                <span className='text-accent font-bold text-2xl'>
                  {index + 1}
                </span>
                <p className='text-muted-foreground'>{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Submission Process */}
      <section className='py-16'>
        <div className='container mx-auto px-6'>
          <SectionOverview
            title='Submission Process'
            overviewText='Submitting your tryout is easy. Follow these steps to complete your application.'
          />
          <ul className='space-y-6 mt-8'>
            {[
              'Double-check your video to ensure it meets the guidelines.',
              'Fill out the tryout form with all required information.',
              'Submit your form and video before the deadline.',
            ].map((step, index) => (
              <li
                key={index}
                className='bg-background p-6 rounded-lg shadow-lg flex items-start space-x-4'
              >
                <span className='text-accent font-bold text-2xl'>
                  {index + 1}
                </span>
                <p className='text-muted-foreground'>{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className='bg-black py-16'>
        <div className='container mx-auto px-6'>
          <SectionOverview
            title='Frequently Asked Questions'
            overviewText='Got questions? We’ve got answers.'
          />
          <ul className='space-y-6 mt-8'>
            {[
              {
                question: 'What kind of songs should I choose?',
                answer:
                  'Pick a song that highlights your strengths and fits your instrument. Aim for something you can perform confidently.',
              },
              {
                question: 'Can I use a backing track?',
                answer:
                  'Yes! Backing tracks are allowed, but make sure your instrument or voice is clearly audible.',
              },
              {
                question: 'What if I make a mistake?',
                answer:
                  'Minor mistakes are okay. Show resilience and keep playing without stopping.',
              },
            ].map((faq, index) => (
              <li
                key={index}
                className='bg-background p-6 rounded-lg shadow-lg'
              >
                <h4 className='text-xl font-bold mb-2'>{faq.question}</h4>
                <p className='text-muted-foreground'>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className='bg-primary py-16 text-center'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-4 text-white'>
            Ready to Join BandCore?
          </h2>
          <p className='text-lg text-muted-foreground mb-6'>
            Take the first step and submit your tryout today!
          </p>
          <Button className='px-6 py-3'>Submit Your Tryout</Button>
        </div>
      </section>
    </main>
  )
}
