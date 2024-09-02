'use client'
import ProgramPriceBox from './ProgramPriceBox'
import { useState } from 'react'
import SectionOverview from './SectionOverview'

interface PricingClassesProps {
  sectionTitle?: string
  sectionDescription?: string
}

export default function PricingClasses({
  sectionTitle = 'Rock Band Classes',
  sectionDescription = 'Choose the best plan for you and your bandmates',
}: PricingClassesProps): JSX.Element {
  const [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    setToggled(!toggled)
  }

  return (
    <section id='classes_pricing' className='bg-background overflow-hidden'>
      <SectionOverview
        title='Rock Band Classes'
        subtitle='Choose the best plan for you and your bandmates'
      />
      <div className='container px-5 mx-auto'>
        <div className='flex flex-col text-center w-full'>
          {/* <h2 className='sm:text-3xl text-2xl font-medium title-font mb-2'>
            {sectionTitle}
          </h2>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-primary'>
            {sectionDescription}
          </p> */}
          <div className='flex mx-auto border-2 border-accent rounded overflow-hidden my-6'>
            <button
              className={
                !toggled
                  ? 'py-1 px-4 bg-accent text-white focus:outline-none transition-all duration-500'
                  : 'py-1 px-4 text-gray-300 focus:outline-none transition-all duration-500'
              }
              onClick={handleToggle}
            >
              With active lessons enrollment
            </button>
            <button
              className={
                !toggled
                  ? 'py-1 px-4 text-gray-300 focus:outline-none transition-all duration-500'
                  : 'py-1 px-4 bg-accent text-white focus:outline-none transition-all duration-500'
              }
              onClick={handleToggle}
            >
              Without active lessons enrollment
            </button>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <ProgramPriceBox
            name={'Rock Shop'}
            price={49}
            interval={'/month'}
            currency={'$'}
            additionalCostText={''}
            highlight={false}
            highlightText={''} // This is the text that will be displayed in the top right corner of the box
            featuresList={[
              '30–120 minutes/class.*',
              'On-going weekly classes.',
              'Students perform every six months here at the school.',
              'Open to all levels, but focused on beginners.',
              'Songs are pre-selected by the instructor.',
              'Includes sheet music and audio files.**',
            ]}
            disclaimers={[
              '* Time based on number of students enrolled.',
              '** One-time cost of $15 for materials.',
            ]} // This is the text that will be displayed just above the call to action button
            customPrice={false}
            customPriceText={''}
          />
          <ProgramPriceBox
            name={'JamCore'}
            price={toggled ? 104 : 79}
            interval={'/month'}
            currency={'$'}
            additionalCostText={''}
            highlight={false}
            highlightText={''} // This is the text that will be displayed in the top right corner of the box
            featuresList={[
              '30–120 minutes/week.*',
              '8-week sessions.',
              'Performs a show at the end of each session at a local venue.',
              'Open to intermediate level students.',
              'Students continue the class every session with new bands, different songs, and fresh performances.',
              'Students can also participate in the Rock Shop program.',
            ]}
            disclaimers={['* Time based on number of students enrolled.']} // This is the text that will be displayed just above the call to action button
            customPrice={false}
            customPriceText={''}
          />
          <ProgramPriceBox
            name={'BandCore'}
            price={toggled ? 124 : 99}
            interval={'/month'}
            currency={'$'}
            additionalCostText={''}
            highlight={true}
            highlightText={'Most Popular'} // This is the text that will be displayed in the top right corner of the box
            featuresList={[
              '30–120 minutes/week.*',
              '12-week sessions.',
              'Performs at 2 shows per session at a local venue.',
              'Open to advanced level students.**',
              'Students continue the class every session with new bands, different songs, and fresh performances.',
              'Students can also participate in the Rock Shop & JamCore programs.',
            ]}
            disclaimers={[
              '* Time based on number of students enrolled.',
              '** Requires instructor approval.',
            ]} // This is the text that will be displayed just above the call to action button
            customPrice={false}
            customPriceText={''}
          />
          <ProgramPriceBox
            name={'Rockstar Pro'}
            price={150}
            customPrice={true}
            customPriceText='Custom'
            interval={''}
            currency={'$'}
            additionalCostText={'Fully customized pricing based on your needs.'}
            highlight={false}
            highlightText={''} // This is the text that will be displayed in the top right corner of the box
            featuresList={[
              'Perform at local venues, festivals, and more.',
              'Priority booking for shows.',
              'Build your ideal setlist and work on any music you want, including originals.',
              'Personalized instruction and guidance from instructor of your choice.',
              'On-going for as long as you and your bandmates wish.',
              'Discounts on recording time, photoshoots, and more.',
              'Open to all skill levels.',
              'Students can also participate in the Rock Shop, JamCore, & BandCore programs.',
            ]}
            disclaimers={['']} // This is the text that will be displayed just above the call to action button
            callToActionText={'Contact us for details'}
            callToActionPath='/contact'
          />
        </div>
      </div>
    </section>
  )
}
