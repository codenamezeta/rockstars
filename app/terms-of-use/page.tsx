import Header from '@/components/Header'
import SectionOverview from '@/components/SectionOverview'
import Link from 'next/link'

export default function TermsOfUsePage() {
  return (
    <>
      <main className='container pt-48'>
        <div className='max-w-prose'>
          <SectionOverview
            title='Terms of Use'
            overviewText='By accessing or using this site, you agree to be bound by these terms'
          />
          <h2 className='text-xl font-bold'>1. Introduction</h2>
          <p>
            Welcome to the Rockstars of Tomorrow website ("Website"), owned and
            operated by Rockstars of Tomorrow ("we," "our," or "us"). By
            accessing or using this Website, you agree to comply with these
            Terms of Use ("Terms"). If you do not agree with these Terms, please
            do not use the Website.
          </p>

          <h2 className='text-xl font-bold mt-8'>2. Eligibility</h2>
          <p>
            You must be at least 18 years old or have the consent of a parent or
            legal guardian to use our Website and services. By using the
            Website, you represent and warrant that you meet these requirements.
          </p>

          <h2 className='text-xl font-bold mt-8'>3. Use of the Website</h2>
          <p>
            You agree to use the Website only for lawful purposes and in
            compliance with these Terms. You agree not to:
          </p>
          <ul>
            <li>
              Use the Website in a way that violates any applicable laws or
              regulations.
            </li>
            <li>
              Upload or distribute malicious software, spam, or unauthorized
              advertisements.
            </li>
            <li>
              Attempt to gain unauthorized access to the Website or its systems.
            </li>
          </ul>

          <h2 className='text-xl font-bold mt-8'>4. User Accounts</h2>
          <p>If you create an account on our Website:</p>
          <ul>
            <li>
              You are responsible for maintaining the confidentiality of your
              login credentials.
            </li>
            <li>
              You agree to provide accurate and complete information during
              registration.
            </li>
            <li>
              We reserve the right to terminate or suspend accounts that violate
              these Terms.
            </li>
          </ul>

          <h2 className='text-xl font-bold mt-8'>5. Payments and Refunds</h2>
          <p>For services such as lessons, camps, classes, or programs:</p>
          <ul>
            <li>
              Payments must be made in accordance with the terms outlined at the
              time of purchase.
            </li>
            <li>
              Refunds or cancellations are subject to our{' '}
              <Link href='/policies' className='underline'>
                Studio Policy
              </Link>
              .
            </li>
          </ul>

          <h2 className='text-xl font-bold mt-8'>6. Intellectual Property</h2>
          <p>
            All content on this Website, including text, images, videos, and
            designs, is owned by Rockstars of Tomorrow or licensed to us. You
            may not reproduce, distribute, or use any content without our prior
            written consent.
          </p>

          <h2 className='text-xl font-bold mt-8'>7. User Submissions</h2>
          <p>
            If you submit content to the Website (e.g., videos, forms, or
            comments):
          </p>
          <ul>
            <li>
              You grant us a non-exclusive, royalty-free, worldwide license to
              use, display, and distribute your content as part of our services.
            </li>
            <li>
              You represent that you own or have the rights to any content you
              submit and that it does not infringe on third-party rights.
            </li>
          </ul>

          <h2 className='text-xl font-bold mt-8'>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Rockstars of Tomorrow shall
            not be liable for any indirect, incidental, or consequential damages
            arising from your use of the Website or participation in our
            programs.
          </p>

          <h2 className='text-xl font-bold mt-8'>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Rockstars of Tomorrow, its
            employees, and affiliates from any claims, liabilities, or expenses
            arising out of your use of the Website or violation of these Terms.
          </p>

          <h2 className='text-xl font-bold mt-8'>10. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Changes will
            be effective immediately upon posting. Your continued use of the
            Website after changes are posted constitutes acceptance of the
            updated Terms.
          </p>

          <h2 className='text-xl font-bold mt-8'>11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of California,
            without regard to its conflict of laws principles.
          </p>

          <h2 className='text-xl font-bold mt-8'>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <address>
            <strong>Rockstars of Tomorrow</strong>
            <br />
            2855 Foothill Blvd, A102, La Verne CA 91750
            <br />
            laverne@rockstarsoftomorrow.com
            <br />
            (844) 366-8742
          </address>

          <hr className='my-4' />
          <p className='text-lg font-bold'>
            By using this Website, you acknowledge that you have read,
            understood, and agreed to these Terms of Use.
          </p>
        </div>
      </main>
    </>
  )
}
