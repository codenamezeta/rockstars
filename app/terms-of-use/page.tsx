// import Header from '@/components/Header'
import SectionOverview from '@/components/SectionOverview'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'By accessing or using this site, you agree to be bound by these terms.',
}

export default function TermsOfUsePage() {
  return (
    <>
      <main className='container pt-48 pb-24'>
        <div className='max-w-prose space-y-6'>
          <SectionOverview
            title='Terms of Use'
            overviewText='These terms govern your use of our website and participation in our programs.'
          />

          <h2 className='text-2xl font-bold pt-4'>1. Agreement to Terms</h2>
          <p>
            Welcome to Rockstars of Tomorrow La Verne ("we," "us," or "our").
            These Terms of Use ("Terms") govern your access to and use of our
            website located at rockstarslaverne.com (the "Website") and your
            enrollment and participation in our music lessons, camps, classes,
            and programs (collectively, the "Services"). By accessing the
            Website or using our Services, you agree to be bound by these Terms.
            If you do not agree, please do not use the Website or our Services.
          </p>
          <p>
            These Terms should be read in conjunction with our{' '}
            <Link
              href='/privacy-policy'
              className='underline hover:no-underline'
            >
              Privacy Policy
            </Link>
            , which describes how we handle your personal data.
          </p>

          <h2 className='text-2xl font-bold pt-4'>2. Eligibility</h2>
          <p>
            Our Services are for students of all ages. Students under the age of
            18 must have a parent or legal guardian agree to these Terms on
            their behalf. By enrolling yourself or your child in our Services,
            you represent that you have the authority to agree to these Terms.
          </p>

          <h2 className='text-2xl font-bold pt-4'>3. Accounts and Services</h2>
          <p>
            To access certain Services, you will need to create an account
            through our student management portal (Opus1). You agree to:
          </p>
          <ul className='list-disc pl-6 space-y-1'>
            <li>Provide accurate, current, and complete information.</li>
            <li>Maintain the security of your account password.</li>
            <li>Accept all risks of unauthorized access to your account.</li>
          </ul>

          {/* --- Section significantly improved for clarity --- */}
          <h2 className='text-2xl font-bold pt-4'>
            4. Payments, Cancellations, and Refunds
          </h2>
          <p>
            Tuition for our Services is billed on a recurring basis. By
            providing a payment method, you authorize us or our third-party
            payment processors (Stripe, Fiserv) to charge you on a recurring
            basis.
          </p>
          <ul className='list-disc pl-6 space-y-1'>
            <li>
              <strong>Billing Cycle:</strong> Payments are due according to the
              schedule outlined in your enrollment agreement.
            </li>
            <li>
              <strong>Cancellations:</strong> To cancel your enrollment and stop
              future payments, you must provide written notice in accordance
              with our Studio Policy. Please refer to our{' '}
              <Link href='/policies' className='underline hover:no-underline'>
                Studio Policy
              </Link>{' '}
              for specific notice periods.
            </li>
            <li>
              <strong>Refunds:</strong> All payments are non-refundable, except
              as expressly stated in our Studio Policy or as required by law.
            </li>
          </ul>

          <h2 className='text-2xl font-bold pt-4'>5. Intellectual Property</h2>
          <p>
            All content on this Website and provided as part of our Services,
            including our curriculum, lesson materials, branding, logos, text,
            and images ("Our Content"), is the exclusive property of Rockstars
            of Tomorrow. You may not copy, reproduce, distribute, or create
            derivative works from Our Content without our express written
            permission.
          </p>

          {/* --- Section significantly improved for a music school --- */}
          <h2 className='text-2xl font-bold pt-4'>
            6. User Content and Media Release
          </h2>
          <p>
            If you submit content to us (e.g., testimonials, comments), you
            grant us a license to use it in connection with our business.
            Furthermore, you agree to the following regarding media:
          </p>
          <ul className='list-disc pl-6 space-y-1'>
            <li>
              <strong>Media Release:</strong> You grant Rockstars of Tomorrow
              permission to record, photograph, and videotape you or your child
              during lessons, recitals, performances, and other school-related
              events.
            </li>
            <li>
              <strong>Promotional Use:</strong> You grant us a non-exclusive,
              perpetual, royalty-free, worldwide license to use these images and
              recordings in our promotional materials, including on our website,
              social media, and advertisements, without further consent or
              compensation. If you do not wish for you or your child to be
              featured, please notify us in writing.
            </li>
          </ul>

          <h2 className='text-2xl font-bold pt-4'>
            7. Disclaimers and Limitation of Liability
          </h2>
          <p>
            The Website and Services are provided "as is" without any
            warranties, express or implied. We do not guarantee any specific
            results from participation in our programs. To the fullest extent
            permitted by law, Rockstars of Tomorrow shall not be liable for any
            indirect, incidental, special, or consequential damages, or for any
            personal injury, arising out of your use of the Website or
            participation in our Services.
          </p>

          <h2 className='text-2xl font-bold pt-4'>8. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Rockstars of
            Tomorrow and its employees from any claims, liabilities, damages,
            and expenses (including reasonable attorneys' fees) arising out of
            your violation of these Terms or your use of our Services.
          </p>

          {/* --- New section for added legal protection --- */}
          <h2 className='text-2xl font-bold pt-4'>
            9. Dispute Resolution and Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of the State of California. Any
            dispute arising from these Terms or our Services shall be resolved
            in the state or federal courts located in Los Angeles County,
            California, and you consent to the exclusive jurisdiction of these
            courts.
          </p>

          <h2 className='text-2xl font-bold pt-4'>
            10. Changes to These Terms
          </h2>
          <p>
            We may modify these Terms at any time. We will post the revised
            Terms on the Website, and your continued use of our Website or
            Services after the changes are posted constitutes your acceptance of
            the new Terms.
          </p>

          <h2 className='text-2xl font-bold pt-4'>11. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <address className='not-italic'>
            <strong>Rockstars of Tomorrow La Verne</strong>
            <br />
            2855 Foothill Blvd Ste A102, La Verne, CA 91750
            <br />
            Email: laverne@rockstarsoftomorrow.com
            <br />
            Phone: (844) 366-8742
          </address>
        </div>
      </main>
    </>
  )
}
