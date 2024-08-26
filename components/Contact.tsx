export default function Contact(): JSX.Element {
  return (
    <section className='text-foreground bg-background body-font relative'>
      <h2 className='sm:text-3xl text-2xl font-medium text-center title-font text-secondary mt-24 mb-4'>
        Contact Us
      </h2>
      <p className='text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4 mx-auto text-secondary'>
        We would love to hear from you. Feel free to visit our studio in person
        or give us a call.
      </p>
      <div className='flex mt-6 justify-center'>
        <div className='w-16 h-1 rounded-full bg-accent inline-flex'></div>
      </div>
      <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
          <iframe
            width='100%'
            height='100%'
            title='map'
            className='absolute inset-0'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.451890819546!2d-117.72068707178822!3d34.10009751624425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32f7d4b2bed15%3A0xe9feabccc14ce1f!2sRockstars%20Of%20Tomorrow!5e0!3m2!1sen!2sus!4v1708116233335!5m2!1sen!2sus'
            style={{ filter: 'grayscale(0.85)', opacity: '0.5' }}
          ></iframe>
          <div className='bg-background relative flex flex-wrap py-6 rounded shadow-md w-full'>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                ADDRESS
              </h2>
              <p className='mt-1'>
                2855 Foothill Boulevard
                <br />
                Suite #A102
                <br />
                La Verne CA 92557
              </p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                EMAIL
              </h2>
              <a className='leading-relaxed'>example@email.com</a>
              <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
                PHONE
              </h2>
              <p className='leading-relaxed'>(951) 456-7890</p>
            </div>
          </div>
        </div>
        <div className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
          <h2 className='text-white text-lg mb-1 font-medium title-font'>
            Feedback
          </h2>
          <p className='leading-relaxed mb-5'>
            Questions, comments, or concerns? Let us know how we can help you.
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-background rounded border border-gray-700 focus:border-white focus:ring-2 focus:ring-white text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-background rounded border border-gray-700 focus:border-white focus:ring-2 focus:ring-white text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='message' className='leading-7 text-sm'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-background rounded border border-gray-700 focus:border-white focus:ring-2 focus:ring-white h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            ></textarea>
          </div>
          <button className='text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary hover:text-black rounded text-lg'>
            Submit
          </button>
          <p className='text-xs text-gray-600 text-opacity-90 mt-3'>
            Questions, comments, or concerns? Let us know how we can help you.
          </p>
        </div>
      </div>
    </section>
  )
}
