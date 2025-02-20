import type { Metadata } from 'next'
import Header from '@/components/Header'
import Script from 'next/script'
import SectionOverview from '@/components/SectionOverview'
import CharterSchoolPrices from '@/components/CharterSchoolPrices'
import FAQs from '@/components/FAQs'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Studio Policies',
  description: '',
}

export default function StudioPolicies(): JSX.Element {
  return (
    <>
      <Header
        title='Charter Schools'
        subtitle='Your Music Journey, Funded by Your Charter School'
        headerStyle={2}
      />
      <main className='max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8'>
        <SectionOverview title='Welcome Charter School Students & Families!' />
        <div className='mx-auto'>
          <p className='text-foreground text-lg leading-relaxed tracking-wider font-bold my-12'>
            Rockstars of Tomorrow – La Verne is an approved vendor for multiple
            charter schools, making it easy for students to access high-quality
            music education using their charter funds. Whether you're looking
            for private lessons, group classes, or band programs, we've got you
            covered—with flexible scheduling and a personalized approach that
            fits your learning style.
          </p>

          <h2 className='text-4xl title-font font-bold text-accent tracking-wider'>
            Our Charter School Partners
          </h2>
          <span className='text-center text-lg'>
            We are currently an approved vendor for the following charter
            schools:
          </span>
          <ul className='list-disc list-inside font-bold text-xl tracking-wider space-y-4 mt-4'>
            <li>
              <Link
                href='https://www.sageoak.education/'
                className='inline-flex items-center gap-2 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Sage Oak
                <LiaExternalLinkAltSolid />
              </Link>
            </li>
            <li>
              <Link
                href='https://granitemountainschool.com/'
                className='inline-flex items-center gap-2 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Granite Mountain
                <LiaExternalLinkAltSolid />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.eliteacademic.com/'
                className='inline-flex items-center gap-2 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Elite Academy
                <LiaExternalLinkAltSolid />
              </Link>
            </li>
            <li>
              <Link
                href='https://theblueridgeacademy.com/'
                className='inline-flex items-center gap-2 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Blue Ridge Academy
                <LiaExternalLinkAltSolid />
              </Link>
            </li>
            <li>
              <Link
                href='https://skymountaincs.org/'
                className='inline-flex items-center gap-2 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Sky Mountain
                <LiaExternalLinkAltSolid />
              </Link>
            </li>
            <li>
              <Link
                href='https://innovationslearningacademy.pusd.org/'
                className='inline-flex items-center gap-2 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Innovations
                <LiaExternalLinkAltSolid />
              </Link>
            </li>
            <li>
              <Link
                href='https://peak-prep.org/'
                className='inline-flex items-center gap-2 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Peak Prep
                <LiaExternalLinkAltSolid />
              </Link>
            </li>
            {/* <li>
              <Link
                href='https://ileadschools.org/'
                className='inline-flex items-center gap-2 hover:underline'
              >
                iLead
                <LiaExternalLinkAltSolid />
              </Link>
            </li> */}
          </ul>
        </div>
      </main>
      <section className='py-24 themed-background-style-2'>
        <div className='container'>
          <SectionOverview
            title='How It Works'
            subtitle='Getting Started Is Simple'
            separatorColor='accent'
          />
          <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8'>
            {/* Step 1 */}
            <div className='bg-background p-6 rounded-lg shadow-lg'>
              <div className='flex items-baseline space-x-4 mb-4'>
                <span className='text-accent font-bold text-4xl'>1</span>
                <h3 className='text-xl font-bold'>
                  Check that we’re an approved vendor
                </h3>
              </div>
              <p className='text-foreground'>
                Ensure your charter school is listed above. If not, let us know,
                and we’ll work to become an approved vendor.
              </p>
            </div>

            {/* Step 2 */}
            <div className='bg-background p-6 rounded-lg shadow-lg'>
              <div className='flex items-baseline space-x-4 mb-4'>
                <span className='text-accent font-bold text-4xl'>2</span>
                <h3 className='text-xl font-bold text-primary-foreground'>
                  Fill out the form below
                </h3>
              </div>
              <p className='text-foreground'>
                Request a free trial lesson and let us know you're using charter
                funds.
              </p>
            </div>

            {/* Step 3 */}
            <div className='bg-background p-6 rounded-lg shadow-lg'>
              <div className='flex items-baseline space-x-4 mb-4'>
                <span className='text-accent font-bold text-4xl'>3</span>
                <h3 className='text-xl font-bold'>
                  We’ll take care of the rest
                </h3>
              </div>
              <p className='text-foreground'>
                We’ll contact you to confirm your free trial, guide you through
                the enrollment process, and coordinate with your charter school.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-24 themed-background-style-1'>
        <div className='container'>
          <SectionOverview
            title='Program Pricing'
            overviewText='We make it easy for Charter School families! Our lesson blocks can be used for any Private Lesson, Band Class, or Workshop, making scheduling simple and stress-free.'
            separatorColor='accent'
          />
          <CharterSchoolPrices />
        </div>
        {/* <CharterSchoolPricingLessons /> */}
      </section>
      <section>
        <div className='container'>
          <FAQs
            faqs={[
              {
                question: 'Do you accept purchase orders (POs)?',
                answer:
                  'Yes! Once you let your student’s teacher know you’d like to use charter funds, they will request a PO for you. The charter school will then notify us when the PO is approved.',
              },
              {
                question:
                  'Can I combine charter funds with out-of-pocket payments?',
                answer:
                  'Yes, if your funds don’t fully cover the lessons you want, you can pay the difference out of pocket. Charter students are required to keep a payment card on file to cover any charges not covered by charter funds.',
              },
              {
                question: 'Do I need to renew my PO each semester?',
                answer:
                  'This varies by school, so we recommend checking with your charter school to confirm their renewal policies. Important: It is the responsibility of charter school families to submit a valid PO before the billing cycle begins. If no PO is on file at the start of the billing cycle, the student’s stored payment card will automatically be charged for all scheduled services. Late POs: If a PO is submitted after the billing cycle has started, we can issue a refund minus a $25 service charge. Fund Tracking: We do not send reminders about expiring or depleted charter funds. Families are responsible for monitoring their available balance and submitting new POs as needed.',
              },
              {
                question: 'What if my child’s schedule changes?',
                answer:
                  'No problem! You can adjust your lesson schedule at any time.',
              },
              {
                question: 'Can I switch instructors if needed?',
                answer:
                  'Absolutely! We want every student to have the best learning experience possible.',
              },
              {
                question:
                  'Will my child receive the same quality of instruction as other students?',
                answer:
                  'Yes! Every student at Rockstars of Tomorrow – La Verne gets top-notch instruction from qualified teachers, customized to their unique learning style and goals.',
              },
              {
                question:
                  'Do your instructors have experience teaching charter students?',
                answer:
                  'Yes! Our teachers have passed all background and screening requirements necessary for charter school partnerships.',
              },
              {
                question:
                  'What if my funds run out before the end of the term?',
                answer:
                  'You can continue lessons by covering the remaining balance out of pocket. Any services not covered by your charter funds will automatically be charged to your stored payment card.',
              },
              {
                question: 'Are there any hidden costs I should be aware of?',
                answer:
                  'We keep things transparent! Rockstars of Tomorrow – La Verne has a clear pricing model with no hidden fees. If you have questions about what your charter school covers, we recommend checking with them directly.',
              },
            ]}
          />
        </div>
      </section>
      <section
        id='charter_school_trial_form'
        className='pt-8 pb-24 px-4 sm:px-6 lg:px-8'
      >
        <SectionOverview
          title='Request a Free Trial Lesson'
          overviewText='Fill out the form below to request a free trial lesson and let us know you’re using charter funds. We’ll contact you to confirm your free trial, guide you through the enrollment process, and coordinate with your charter school.'
        />
        <iframe
          src='https://api.leadconnectorhq.com/widget/form/3lYXfZud480reGDqWrQV'
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '3px',
          }}
          id='inline-3lYXfZud480reGDqWrQV'
          data-layout="{'id':'INLINE'}"
          data-trigger-type='alwaysShow'
          data-trigger-value=''
          data-activation-type='alwaysActivated'
          data-activation-value=''
          data-deactivation-type='neverDeactivate'
          data-deactivation-value=''
          data-form-name='00 La Verne Free Trial Form - Charter School'
          data-height='2315'
          data-layout-iframe-id='inline-3lYXfZud480reGDqWrQV'
          data-form-id='3lYXfZud480reGDqWrQV'
          title='00 La Verne Free Trial Form - Charter School'
        ></iframe>
        <Script src='https://link.msgsndr.com/js/form_embed.js'></Script>
      </section>
    </>
  )
}
