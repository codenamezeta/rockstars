import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Studio Policies',
  description:
    'We value clear communication and want to make sure our students and families understand our policies. Below, you will find details about missed lessons, cancellations, and payment procedures.',
}

export default function PricingLessons(): JSX.Element {
  return (
    <>
      <Header
        title='Studio Policies'
        subtitle='We value clear communication and want to make sure our students and families understand our policies. Below, you will find details about missed lessons, cancellations, and payment procedures.'
        headerStyle={2}
      />
      <main className='max-w-4xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:px-8'>
        {/* <!-- Cancellation Policies Section --> */}
        <section className='mb-8'>
          <h2 className='text-3xl font-semibold text-accent mb-4'>
            Missed Lesson Policies
          </h2>

          {/* <!-- Private Lessons --> */}
          <article className='mb-6'>
            <h3 className='text-xl font-bold mb-2 text-gray-400'>
              Private Lessons (Individual or Group) & Private Band Classes
              (Rockstar Pro)
            </h3>

            <h4 className='text-lg font-semibold mt-4'>
              If the Student Cancels with 24+ Hours Notice:
            </h4>
            <ul className='list-disc pl-6 mt-2 space-y-2'>
              <li>
                The lesson can either be <strong>rescheduled</strong> (subject
                to availability) or exchanged for a{' '}
                <strong>make-up credit</strong>.
              </li>
              <li>
                Make-up credits must be used within <strong>30 days</strong> and
                will not receive expiration reminders.
              </li>
              <li>
                Limit:{' '}
                <strong>
                  One reschedule or make-up credit per month/billing cycle
                </strong>
                , subject to availability.
              </li>
              <li>
                If no workable time is available, a{' '}
                <strong>digital lesson</strong> may be provided (not
                guaranteed).
              </li>
              <li>
                <strong>No refunds or credits</strong> for canceled/missed
                lessons or expired make-up credits.
              </li>
              <li>
                <strong>Active accounts only:</strong> Make-up credits are valid
                only while your account is active and cannot be used after
                cancellation unless you return or transfer them to another
                active student.
              </li>
              <li>No makes-ups for unpaid future lessons.</li>
            </ul>

            <h4 className='text-lg font-semibold mt-6'>
              If the Student Cancels with Less Than 24 Hours Notice or No-Shows:
            </h4>
            <ul className='list-disc pl-6 mt-2 space-y-2'>
              <li>
                <strong>No make-ups, rescheduling, refunds, or credits</strong>{' '}
                for any reason, including emergencies.
              </li>
              <li>
                A digital lesson may be offered at the teacher’s discretion but
                is not guaranteed.
              </li>
            </ul>

            <h4 className='text-lg font-semibold mt-6'>
              If the Instructor/Studio Cancels:
            </h4>
            <ul className='list-disc pl-6 mt-2 space-y-2'>
              <li>A substitute instructor will be assigned, if available.</li>
              <li>
                If a substitute is unavailable, the lesson can be rescheduled or
                credited with a <strong>non-expiring make-up credit</strong>.
              </li>
              <li>
                {/* TODO: Add link to the calendar when that feature becomes ready */}
                No make-ups or credits for lessons canceled due to studio
                holidays or closures.
              </li>
            </ul>
          </article>

          {/* <!-- Open Group Classes --> */}
          <article className='mb-6'>
            <h3 className='text-xl font-bold mb-2 text-gray-400'>
              Open Group Lessons & Open Band Classes
              (RockStart/JamCore/BandCore)
            </h3>
            <h4 className='text-lg font-semibold mt-4'>
              Missed Group Lessons or Band Classes:
            </h4>
            <ul className='list-disc pl-6 mt-2 space-y-2'>
              <li>
                <strong>No make-ups, rescheduling, refunds, or credits</strong>{' '}
                for missed open group lessons or open band classes.
              </li>
              <li>
                For open group lessons only (not band classes), you may attend
                another open group lesson within 30 days, provided:
                <ul className='list-disc pl-6 mt-2 space-y-2'>
                  <li>The group is not empty or full.</li>
                  <li>You give 24+ hours notice.</li>
                </ul>
              </li>
            </ul>
          </article>
        </section>

        {/* <!-- Account Cancellation Section --> */}
        <section className='mb-8'>
          <h2 className='text-3xl font-semibold text-accent mb-4'>
            Account Cancellation
          </h2>
          <ul className='list-disc pl-6 space-y-2'>
            <li>
              Accounts are <strong>month-to-month</strong> and can be canceled
              at any time with at least <strong>24 hours notice</strong>.
            </li>
            <li>
              Unused balances can be:
              <ul className='list-disc pl-6 mt-2 space-y-2'>
                <li>Held on your account for future use if you return.</li>
                <li>Transferred to another active student.</li>
              </ul>
            </li>
            <li>
              <strong>No refunds</strong> for unused balances or make-up credits
              after cancellation.
            </li>
            <li>
              <strong>Make-up credits</strong> are valid only while your account
              is active and cannot be used after cancellation unless you return
              or transfer them to another active student.
            </li>
            <li>
              Open Band Classes: Cancelling after the session starts will incur
              charges for the full session.
            </li>
          </ul>
        </section>

        {/* <!-- Payment Policies Section --> */}
        <section>
          <h2 className='text-3xl font-semibold text-accent mb-4'>
            Payment Policies
          </h2>

          {/* <!-- General Payment Guidelines --> */}
          <article className='mb-6'>
            <h3 className='text-xl font-bold mb-2 text-gray-400'>
              General Payment Guidelines
            </h3>
            <ul className='list-disc pl-6 mt-2 space-y-2'>
              <li>
                Payments are due <strong>before the first lesson</strong> of
                each month/billing cycle.
              </li>
              <li>
                Late payments are subject to a <strong>10% late fee</strong>.
                Returned payments incur a <strong>$25 fee</strong>.
              </li>
              <li>
                A <strong>credit/debit card must be on file</strong> for all
                accounts and will be auto-charged for balances due.
              </li>
              <li>
                Auto-payments are processed on the{' '}
                <strong>first day of each month</strong> unless otherwise
                arranged. Additional fees may apply for manual payments.
              </li>
            </ul>
          </article>

          {/* <!-- Private Lesson Payment Plans --> */}
          <article className='mb-6'>
            <h3 className='text-xl font-bold mb-2 text-gray-400'>
              Private Lesson Payment Plans
            </h3>
            <h4 className='text-lg font-semibold mt-4'>Flat Rate Plan:</h4>
            <ul className='list-disc pl-6 mt-2 space-y-2'>
              <li>
                Charged the same rate monthly, regardless of the number of
                lessons in the month.
              </li>
              <li>
                There are no additional charges for months with five weeks
                (resulting in five lessons) and no credits or refunds for
                holidays or studio closures.
              </li>
              <li>
                Over a calendar year, the extra lessons in months with five
                weeks typically balance out with holidays and studio closures.
              </li>
              <li>
                If you receive fewer than four lessons per month on average
                (calculated over the year), make-up lessons will be provided but
                not a credit or refund.
              </li>
            </ul>

            <h4 className='text-lg font-semibold mt-6'>Block of Time Plan:</h4>
            <ul className='list-disc pl-6 mt-2 space-y-2'>
              <li>
                Charged for a specific block of time (e.g., 4, 6, or 8 hours).
              </li>
              <li>
                Lessons canceled with 72+ hours notice or by the studio (e.g.,
                holiday closures) are not deducted from your balance.
              </li>
              <li>
                Make-up lessons are available for cancellations made between 24
                and 72 hours in advance.
              </li>
            </ul>
            <p className='mt-4'>
              <strong>Default:</strong> All students are enrolled in the Flat
              Rate Plan unless the Block of Time Plan is specifically requested.
            </p>
          </article>
          {/* Group and Band Classes Payment Plans */}
          <article>
            <h3 className='text-xl font-bold mb-2 text-gray-400'>
              Open Group &amp; Open Band Class Payment
            </h3>
            <h4 className='text-lg font-semibold mt-4'>Open Group Classes</h4>
            <ul className='list-disc pl-6 mt-2 space-y-2'>
              <li>
                Monthly charges depend on the number of classes in the month (3,
                4, or 5).
              </li>
              <li>
                No charges for classes canceled by studio or for holiday
                closures.
              </li>
            </ul>
            <h4 className='text-lg font-semibold mt-4'>
              Open Band Classes (RockStart/JamCore/BandCore)
            </h4>
            <ul className='list-disc pl-6 mt-2 space-y-2'>
              <li>
                Monthly charges are consistent, unaffected by holidays or 5th
                weeks.
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}
