// import Script from 'next/script'
import Separator from './Separator'
import LeadConnectorForm from './LeadConnectorForm'

export default function Enroll(): JSX.Element {
  return (
    <section
      className='text-primary text-center bg-black body-font py-24'
      id='enroll'
    >
      <h2 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary'>
        Get Started
      </h2>
      <p className='lg:w-1/3 w-3/4 mx-auto leading-relaxed text-base'>
        Start with a free trial lesson! Fill out the form below to get started.
        We will contact you to schedule your lesson and a tour of our school.
      </p>
      <Separator />
      <LeadConnectorForm />
      {/* <iframe
        className='clickup-embed clickup-dynamic-height'
        src='https://forms.clickup.com/18036276/f/h6dhm-17271/1F8KB0JJC5P1O294YW'
        onWheel=''
        style={{
          width: '100%',
          height: '1000px',
          background: 'black',
        }}
      ></iframe>
      <Script
        async
        src='https://app-cdn.clickup.com/assets/js/forms-embed/v1.js'
      /> */}
      {/* <iframe
        src='https://api.leadconnectorhq.com/widget/form/rfGd5dRFL8gB4WDPke9g'
        style={{
          width: '5000px',
          height: '100%',
          border: 'none',
          borderRadius: '3px',
        }}
        id='inline-rfGd5dRFL8gB4WDPke9g'
        data-layout="{'id':'INLINE'}"
        data-trigger-type='alwaysShow'
        data-trigger-value=''
        data-activation-type='alwaysActivated'
        data-activation-value=''
        data-deactivation-type='neverDeactivate'
        data-deactivation-value=''
        data-form-name='00 La Verne Free Trial Form'
        data-height='1065'
        data-layout-iframe-id='inline-rfGd5dRFL8gB4WDPke9g'
        data-form-id='rfGd5dRFL8gB4WDPke9g'
        title='00 La Verne Free Trial Form'
      ></iframe>
      <Script
        strategy='lazyOnload'
        src='https://link.msgsndr.com/js/form_embed.js'
      /> */}
      {/* <iframe
        id='sb_registration_if'
        src='//app.mymusicstaff.com/Widget/v3/content/en/index.html?id=sch_xPSJS&amp;accentColor=3A0A03&amp;accentTextColor=f0f0f088&amp;SameSite=Lax'
        style={{
          minHeight: '950px',
          width: 'clamp(320px, 95%, 800px)',
        }}
      ></iframe> */}
    </section>
  )
}
