import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Studio Policies',
  description:
    'We value clear communication and want to make sure our students and families understand our policies. Below, you will find details about missed lessons, cancelations, and payment procedures.',
}

export default function StudioPolicies(): JSX.Element {
  return (
    <>
      <Header
        title='Studio Policies'
        subtitle='We value clear communication and want to make sure our students and families understand our policies. Below, you will find details about missed lessons, cancelations, and payment procedures.'
        customClasses='background-7'
      />
      <main className='container py-24'>
        {/* <!-- Cancelation Policies Section --> */}
        <section className='mb-8 max-w-3xl'>
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
                <strong>subtitute instructor</strong> or a{' '}
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
                cancelation unless you return or transfer them to another active
                student.
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
              <li>
                A substitute instructor will be assigned, if available, with or
                without advanced notice.
              </li>
              <li>
                If a substitute is unavailable, the lesson can be rescheduled or
                credited with a <strong>non-expiring make-up credit</strong>.
              </li>
              <li>
                Students who opt for cancelation over a substitute instructor,
                will receive a 30-day make-up credit instead.
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
                  <li>You gave 24+ hours notice of cancelation.</li>
                </ul>
              </li>
            </ul>
          </article>
        </section>

        {/* <!-- Account Cancelation Section --> */}
        <section className='mb-8 max-w-3xl'>
          <h2 className='text-3xl font-semibold text-accent mb-4'>
            Account Cancelation
          </h2>
          <ul className='list-disc pl-6 space-y-2'>
            <li>
              Accounts are <strong>month-to-month</strong> and can be canceled
              at any time with at least <strong>24 hours notice</strong>.
            </li>
            <li>
              <strong>Make-up credits</strong> are valid only while your account
              is active and cannot be used after cancelation.
            </li>
            <li>
              <strong>No refunds</strong> for unused balances or make-up credits
              after cancelation.
            </li>
            <li>
              Unused balances and make-up credits can be:
              <ul className='list-disc pl-6 mt-2 space-y-2'>
                <li>Held on your account for future use if you return.</li>
                <li>Transferred to another active student.</li>
              </ul>
            </li>
            <li>
              Open Band Classes: Canceling after the session starts will incur
              charges for the full session.
            </li>
          </ul>
        </section>

        {/* <!-- Payment Policies Section --> */}
        <section className='mb-8 max-w-3xl'>
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
                (calculated over the calendar year), make-up lessons will be
                provided but not a credit or refund.
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
                Make-up lessons are available for cancelations made 24+ hours in
                advance.
              </li>
            </ul>
            <h4 className='text-lg font-semibold mt-6' id='charter_schools'>
              Charter School Payment Plan:
            </h4>
            <ul className='list-disc pl-6 mt-2 space-y-2'>
              <li>
                <strong>POs must be received before attending lessons.</strong>
              </li>
              <li>
                Must choose a block of lesson time (1 to 12 hours) from our
                charter school rate plans.
              </li>
              <li>
                A <strong>credit/debit card must be on file</strong> and will be
                auto-charged on the <strong>1st of each month</strong> for any
                balance not covered by charter funds.
              </li>
              <li>
                Families are responsible for ensuring all necessary POs are
                submitted before each billing cycle begins (1st of each month).
              </li>
              <li>
                Track your charter funds balance through your 
                <strong>monthly invoice</strong> (emailed) or by logging into
                your student portal.{' '}
                <strong>No PO reminder notifications are sent.</strong>
              </li>
              <li>
                If a PO is submitted late (after your card has been charged on
                the 1st of the month), <strong>a $25 admin fee applies</strong>{' '}
                to refund your card, and processing may take up to 
                <strong>5 days.</strong>
              </li>
              <li>
                <strong>Make-up lessons</strong> are available for cancelations
                made <strong>24+ hours in advance.</strong>
              </li>
              <li>
                Lesson cancelations with 72+ hours' notice (or studio closures)
                are <strong>not charged.</strong>
              </li>
            </ul>
            <p className='mt-4'>
              <strong>Default:</strong> All students are enrolled in the Flat
              Rate Plan unless a Block of Time or Charter School Plan is
              specifically requested.
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
