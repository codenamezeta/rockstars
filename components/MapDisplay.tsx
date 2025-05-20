'use client'

export default function MapDisplay(): JSX.Element {
  return (
    <div
      className='lg:w-2/3 md:w-1/2 rounded-r-xl overflow-hidden relative'
      style={{ aspectRatio: 16 / 9 }}
    >
      <iframe
        width='100%'
        height='100%'
        title='map'
        className='absolute inset-0'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.451890819546!2d-117.72068707178822!3d34.10009751624425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32f7d4b2bed15%3A0xe9feabccc14ce1f!2sRockstars%20Of%20Tomorrow!5e0!3m2!1sen!2sus!4v1708116233335!5m2!1sen!2sus'
        style={{ filter: 'grayscale(0.5)', opacity: '0.85' }}
      ></iframe>
    </div>
  )
}
