import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Rockstars of Tomorrow in La Verne is committed to protecting your privacy. Read our policy to learn how we collect, use, and protect your information, including for informational and marketing SMS text messages.',
}

export default function PrivacyPolicyPage() {
  // Remember to update this date whenever you make changes
  const lastUpdatedDate = 'June 5, 2025'

  return (
    <main className='container mt-24 py-24'>
      <div className='max-w-prose space-y-8 text-xl'>
        <h1 className='text-5xl text-accent font-bold'>
          Privacy Policy & Terms of Service
        </h1>
        <p className='text-muted-foreground'>
          Last updated:{' '}
          <time dateTime={lastUpdatedDate}>{lastUpdatedDate}</time>
        </p>
        <p>
          Rockstars of Tomorrow ("we," "us," or "our") is committed to
          protecting your privacy. This Privacy Policy & Terms of Service
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website, enroll at our school, use our services, or
          communicate with us, including via SMS (text message).
        </p>

        <h2 className='text-3xl font-bold border-t pt-8'>
          SMS/Text Messaging Terms & Conditions
        </h2>
        <p>
          By providing your mobile phone number and opting in, you consent to
          receive both informational and marketing text messages from Rockstars
          of Tomorrow La Verne.
        </p>
        <ul className='list-disc pl-8 space-y-3'>
          <li>
            <strong>Informational messages</strong> may include appointment
            reminders, account notifications, scheduling updates, and other
            communications related to your lessons.
          </li>
          <li>
            <strong>Marketing messages</strong> may include promotional offers,
            event announcements, and information about new programs or services.
          </li>
          <li>
            You can opt-out of all text messages at any time by replying{' '}
            <strong>STOP</strong>.
          </li>
          <li>
            For help, reply <strong>HELP</strong> or contact us at{' '}
            <a
              href='mailto:laverne@rockstarsoftomorrow.com'
              className='underline hover:no-underline'
            >
              laverne@rockstarsoftomorrow.com
            </a>
            .
          </li>
          <li>Message frequency varies.</li>
          <li>Message and data rates may apply.</li>
        </ul>
        <p className='font-bold text-accent'>
          Your privacy is our priority. Mobile opt-in information will not be
          shared, sold, or rented to third parties for their marketing purposes.
          All the above categories exclude text messaging originator opt-in data
          and consent; this information will not be shared with any third
          parties.
        </p>

        <h2 className='text-3xl font-bold border-t pt-8'>
          Information We Collect
        </h2>
        <p>
          We may collect personally identifiable information from you in a
          variety of ways, including when you fill out forms on our website,
          enroll in-person at our studio, or use our student management software
          (Opus1). This information may include:
        </p>
        <ul className='list-disc pl-8 space-y-2'>
          <li>
            <strong>Personal Data:</strong> Parent/guardian names, student
            names, email addresses, mailing addresses, and phone numbers.
          </li>
          <li>
            <strong>Payment Data:</strong> Payment card information necessary to
            process transactions, handled by our secure payment processors.
          </li>
          <li>
            <strong>Usage Data:</strong> Information automatically collected
            when you visit our website, such as your IP address, browser type,
            and pages visited.
          </li>
        </ul>

        <h2 className='text-3xl font-bold border-t pt-8'>
          How We Use Your Information
        </h2>
        <p>
          We use the information we collect for various purposes, including to:
        </p>
        <ul className='list-disc pl-8 space-y-2'>
          <li>Provide, operate, and maintain our services.</li>
          <li>Manage your account, lessons, and scheduling.</li>
          <li>
            Communicate with you via email, phone calls, or SMS for both
            informational and marketing purposes.
          </li>
          <li>
            Process payments securely and prevent fraudulent transactions.
          </li>
          <li>Improve and personalize our services and website experience.</li>
        </ul>

        <h2 className='text-3xl font-bold border-t pt-8'>
          Sharing Your Personal Information
        </h2>
        <p className='font-bold'>We do not sell or rent your personal data.</p>
        <p>
          We only share your information with trusted third-party service
          providers who perform services on our behalf. These partners are
          contractually obligated to protect your data and are prohibited from
          using it for any other purpose. These include:
        </p>
        <ul className='list-disc pl-8 space-y-2'>
          <li>
            <strong>Student Management Software:</strong> We use Opus1 to manage
            scheduling, billing, and communications.
          </li>
          <li>
            <strong>Payment Processors:</strong> We use Stripe and Fiserv to
            securely process payments. We do not store your credit card details.
          </li>
          <li>
            <strong>Analytics Providers:</strong> We use Google Analytics to
            understand website traffic and improve our user experience.
          </li>
          <li>
            <strong>Marketing & Communication Platforms:</strong> We may use
            services like Mailchimp or the tools within Opus1 to send email and
            SMS communications.
          </li>
        </ul>

        <h2 className='text-3xl font-bold border-t pt-8'>
          Your California Privacy Rights
        </h2>
        <p>
          As a California resident, you have rights under the California
          Consumer Privacy Act (CCPA), including the right to know what personal
          data we have collected, the right to request deletion of your data,
          and the right to opt-out of the sale of your data (which we do not
          do). To exercise these rights, please contact us.
        </p>

        <h2 className='text-3xl font-bold border-t pt-8'>Children's Privacy</h2>
        <p>
          We are committed to complying with the Children's Online Privacy
          Protection Act (COPPA). We only collect personal information from
          children under 13 with verifiable parental consent. If you are a
          parent and believe your child has provided us with information without
          your consent, please contact us immediately.
        </p>

        <h2 className='text-3xl font-bold border-t pt-8'>
          Security of Your Data
        </h2>
        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure your data, no security system is impenetrable.
        </p>

        <h2 className='text-3xl font-bold border-t pt-8'>
          Changes to This Policy
        </h2>
        <p>
          We may update this policy from time to time. We will notify you of any
          changes by posting the new policy on this page and updating the "Last
          updated" date.
        </p>

        <h2 className='text-3xl font-bold border-t pt-8'>Contact Us</h2>
        <p>If you have any questions, you can contact us:</p>
        <ul className='list-none space-y-2'>
          <li>
            By email:{' '}
            <a
              href='mailto:laverne@rockstarsoftomorrow.com'
              className='underline hover:no-underline'
            >
              laverne@rockstarsoftomorrow.com
            </a>
          </li>
          <li>
            By phone:{' '}
            <a
              href='tel:8443668742'
              rel='internal'
              className='underline hover:no-underline'
            >
              844-366-8742
            </a>
          </li>
          <li>
            By visiting:{' '}
            <a
              href='https://rockstarslaverne.com/contact'
              rel='internal'
              className='underline hover:no-underline'
            >
              https://rockstarslaverne.com/contact
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}
