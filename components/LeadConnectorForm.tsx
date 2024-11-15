'use client'
// import Script from "next/script";
import { useEffect } from 'react'

export default function LeadConnectorForm(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <iframe
      src='https://api.leadconnectorhq.com/widget/form/rfGd5dRFL8gB4WDPke9g'
      style={{
        width: '100%',
        height: '1025px',
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
  )
}
