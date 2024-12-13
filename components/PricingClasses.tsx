'use client'
import ProgramPriceBox from './ProgramPriceBox'
import { useState } from 'react'
import SectionOverview from './SectionOverview'

interface PricingClassesProps {
  sectionTitle?: string
  sectionDescription?: string
}

export default function PricingClasses(): JSX.Element {
  const [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    setToggled(!toggled)
  }

  return (
    <section
      id='classes_pricing'
      className='bg-background overflow-hidden py-24'
    >
      <SectionOverview
        title='Rock Band Classes'
        subtitle='Choose the best plan for you and your bandmates'
      />
      <div className='container px-0 mx-auto'>
        <div className='flex mx-auto w-11/12 md:w-3/5 xl:w-1/3 h-12 xl:h-auto border-2 border-accent rounded overflow-hidden my-6'>
          <button
            className={
              !toggled ?
                'text-xs md:text-base py-1 px-4 w-full bg-accent text-white focus:outline-none transition-all duration-500'
              : 'text-xs md:text-base py-1 px-4 w-full text-gray-300 focus:outline-none transition-all duration-500'
            }
            onClick={handleToggle}
          >
            Added to private lessons
          </button>
          <button
            className={
              !toggled ?
                'text-xs md:text-base py-1 px-4 w-full text-gray-300 focus:outline-none transition-all duration-500'
              : 'text-xs md:text-base py-1 px-4 w-full bg-accent text-white focus:outline-none transition-all duration-500'
            }
            onClick={handleToggle}
          >
            Without private lessons
          </button>
        </div>
        <div className='flex flex-wrap'>
          {/* <ProgramPriceBox
            name={'Open Jam'}
            price={0}
            currency={'$'}
            interval={'Free Trial'}
            additionalCostText={''}
            highlight={false}
            highlightText={''} // This is the text that will be displayed in the top right corner of the box
            featuresList={[
              '30-minute trial class.',
              'Open to all ages.',
              'No experience required.',
              'No instrument required.',
              'No commitment.',
            ]}
            disclaimers={['']} // This is the text that will be displayed just above the call to action button
            callToActionText={'Sign up now'}
            callToActionPath='/contact'
          /> */}
          <ProgramPriceBox
            name={'RockStart'}
            price={49}
            currency={'$'}
            interval={'/class'}
            additionalCostText={
              toggled ?
                'RockStart program is only available when combined with private lessons.'
              : ''
            }
            highlight={false}
            highlightText={''} // This is the text that will be displayed in the top right corner of the box
            featuresList={[
              '30–120 minutes/class.*',
              'Monthly class.',
              'Students perform up to four songs in-studio as a band.',
              'Open to all levels, but focused on beginners.',
              'Pre-selected songs.',
              'Includes sheet music and audio files.',
            ]}
            disclaimers={['* Time based on number of songs performed.']} // This is the text that will be displayed just above the call to action button
            customPrice={false}
            customPriceText={''}
          />
          <ProgramPriceBox
            name={'JamCore'}
            price={toggled ? 208 : 158}
            interval={'/session'}
            currency={'$'}
            additionalCostText={''}
            highlight={false}
            highlightText={''} // This is the text that will be displayed in the top right corner of the box
            featuresList={[
              '8-week sessions.',
              '30–120 minutes/week.*',
              'Performs at 1 show per session at a local venue.',
              'Open to intermediate level students.**',
              'Students continue the class every session with new bands, different songs, and fresh performances.',
              'Students can also participate in the RockStart program.***',
            ]}
            disclaimers={[
              '* Time based on number of students enrolled.',
              '** Requires instructor approval.',
              '*** Subject to availability.',
            ]} // This is the text that will be displayed just above the call to action button
            customPrice={false}
            customPriceText={''}
          />
          <ProgramPriceBox
            name={'BandCore'}
            price={toggled ? 372 : 297}
            interval={'/session'}
            currency={'$'}
            additionalCostText={''}
            highlight={true}
            highlightText={'Most Popular'} // This is the text that will be displayed in the top right corner of the box
            featuresList={[
              '12-week sessions.',
              '30–120 minutes/week.*',
              'Performs at 2 shows per session at local venues.',
              'Open to advanced level students.**',
              'Students continue the class every session with new bands, different songs, and fresh performances.',
              'Students can also participate in the RockStart & JamCore programs.***',
            ]}
            disclaimers={[
              '* Time based on number of students enrolled.',
              '** Requires instructor approval.',
              '*** Subject to availability.',
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
              'Students can also participate in the RockStart, JamCore, & BandCore programs.*',
            ]}
            disclaimers={['* Subject to availability.']} // This is the text that will be displayed just above the call to action button
            callToActionText={'Contact us for details'}
            callToActionPath='/contact'
          />
        </div>
      </div>
    </section>
  )
}
