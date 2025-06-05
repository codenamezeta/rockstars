'use client'

interface SelfBookingProps {
  path: string
}

export default function SelfBooking({ path }: SelfBookingProps): JSX.Element {
  return (
    <iframe
      src={`https://rockstarslaverne.opus1.io/w/${path}`}
      width='100%'
      height='100%'
      style={{ border: 'none', overflow: 'hidden' }}
      frameBorder='0'
      scrolling='yes'
      title='Opus1 Trial Self Booking'
    ></iframe>
  )
}
