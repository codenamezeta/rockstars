import Script from 'next/script'
import SectionOverview from './SectionOverview'

export default function GHLForm() {
  return (
    <section id='free_trial' className='themed-background-style-1 py-24'>
      <div className='container'>
        <SectionOverview
          title='Free Trial Lesson'
          overviewText='Start with a free trial lesson! Fill out the form below to get started. We will contact you to schedule your lesson and a tour of our school.'
        />
      </div>
      <iframe
        src='https://api.leadconnectorhq.com/widget/form/rfGd5dRFL8gB4WDPke9g'
        style={{
          width: '100%',
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
        data-height='1021'
        data-layout-iframe-id='inline-rfGd5dRFL8gB4WDPke9g'
        data-form-id='rfGd5dRFL8gB4WDPke9g'
        title='00 La Verne Free Trial Form'
      ></iframe>
      <Script src='https://link.msgsndr.com/js/form_embed.js'></Script>
    </section>
  )
}
