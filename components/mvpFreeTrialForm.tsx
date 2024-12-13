'use client'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'

interface FormData {
  first_name: string
  last_name: string
  email: string
  phone: string
  sources: string[]
  self_signup: boolean
  student_1_first_name: string
  student_1_last_name: string
  student_1_dob: string
  student_1_age: number
  student_1_interests: string[]
  student_2_first_name: string
  student_2_last_name: string
  student_2_dob: string
  student_2_age: number
  student_2_interests: string[]
  student_3_first_name: string
  student_3_last_name: string
  student_3_dob: string
  student_3_age: number
  student_3_interests: string[]
  comments: string
}

export default function FreeTrialForm(): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false) // State for submission status
  const [isSelf, setIsSelf] = useState(false) // State for adding self as a student
  const [studentCount, setStudentCount] = useState(1) // State for adding additional students

  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    sources: [],
    self_signup: false,
    student_1_first_name: '',
    student_1_last_name: '',
    student_1_dob: '',
    student_1_age: 0,
    student_1_interests: [],
    student_2_first_name: '',
    student_2_last_name: '',
    student_2_dob: '',
    student_2_age: 0,
    student_2_interests: [],
    student_3_first_name: '',
    student_3_last_name: '',
    student_3_dob: '',
    student_3_age: 0,
    student_3_interests: [],
    comments: '',
  })

  useEffect(() => {
    // This effect will run whenever the `formData` state changes
    console.log('formData changed:', formData)
  }, [formData])

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--
    }
    return age
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value, type } = e.target

    if (id === 'self_signup') {
      setIsSelf((prevState) => !prevState)
      setFormData((prevState) => ({
        ...prevState,
        self_signup: !prevState.self_signup,
        student_1_first_name: prevState.self_signup ? '' : prevState.first_name,
        student_1_last_name: prevState.self_signup ? '' : prevState.last_name,
      }))
    } else if (type === 'checkbox') {
      const target = e.target as HTMLInputElement
      setFormData((prevState) => ({
        ...prevState,
        [id]: target.checked,
      }))
    } else if (type === 'select-multiple') {
      // We don't have a select-multiple field in the form but this is how you would handle it
      const target = e.target as HTMLSelectElement
      const values = Array.from(target.selectedOptions).map(
        (option) => option.value
      )
      setFormData((prevState) => ({
        ...prevState,
        [id]: values,
      }))
    } else if (type === 'date') {
      const studentNumber = id.split('_')[1] // Extract the student number from the ID
      const age = calculateAge(value)

      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
        [`student_${studentNumber}_age`]: age, // Dynamically target the age field
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted') // Check if handleSubmit is called
    console.log('Form data:', formData) // Check the formData
    try {
      const response = await fetch(
        'https://services.leadconnectorhq.com/hooks/401tGZcoz0SM6s61g5JO/webhook-trigger/f6cf1a53-bfe7-49ce-a5f3-1b636a44fd81',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      const result = await response.json()
      console.log('Server response:', result) // Check the server response
      setIsSubmitted(true) // Update submission status
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section
      id='free-trial'
      className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'
    >
      <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center'>
        Free Trial Lesson
      </h2>
      <p className='mb-8 lg:mb-16 font-light text-center sm:text-xl'>
        Start with a free trial lesson! Fill out the form below to get started.
        We will contact you to schedule your lesson and a tour of our school.
      </p>

      {isSubmitted ? (
        <div className='text-center'>
          <p className='mb-4 text-xl font-bold'>
            Thank you for submitting your information!
          </p>
          <p className='mb-8'>
            We will contact you shortly to schedule your free trial lesson.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className='mb-4 text-2xl font-bold'>Your Contact Information</h3>

          <label
            htmlFor='first_name'
            className='block mb-2 text-sm font-medium'
          >
            Your First Name *
          </label>

          <input
            type='text'
            id='first_name'
            className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
            placeholder='Your First Name'
            required
            onChange={handleChange}
          />

          <label htmlFor='last_name' className='block mb-2 text-sm font-medium'>
            Your Last Name *
          </label>
          <input
            type='text'
            id='last_name'
            className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
            placeholder='Your Last Name'
            required
            onChange={handleChange}
          />
          <label htmlFor='email' className='block mb-2 text-sm font-medium'>
            Your Email *
          </label>
          <input
            type='email'
            id='email'
            className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
            placeholder='youremail@address.com'
            required
            onChange={handleChange}
          />
          <label htmlFor='phone' className='block mb-2 text-sm font-medium'>
            Your Phone Number *
          </label>
          <input
            type='tel'
            id='phone'
            className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
            placeholder='(555) 555-5555'
            required
            onChange={handleChange}
          />
          <div className='mb-8'>
            <p className='block mb-2 text-sm font-medium'>
              How did you hear about us?
            </p>
            {[
              'Drive / walk by',
              'Referral / friend',
              'Internet search',
              'Social media',
              'Yelp',
              'Charter school',
              'Live performance',
              'Rockstar van',
              'Other',
            ].map((source) => (
              <div key={source} className='flex items-center mb-2'>
                <input
                  type='checkbox'
                  id={source}
                  value={source}
                  className='w-4 h-4'
                  onChange={(e) => {
                    const { checked, value } = e.target
                    setFormData((prevState) => {
                      const sources = checked
                        ? [...prevState.sources, value]
                        : prevState.sources.filter((item) => item !== value)
                      return { ...prevState, sources }
                    })
                  }}
                />
                <label htmlFor={source} className='ml-2 text-sm'>
                  {source}
                </label>
              </div>
            ))}
          </div>
          <hr className='border-1 border-white mb-4' />
          <h3 className='mb-3 text-2xl font-bold'>
            {studentCount > 1 ? "First Student's Details" : 'Student Details'}
          </h3>
          <div className='mb-4'>
            <input
              type='checkbox'
              id='self_signup'
              className='w-4 h-4'
              checked={formData.self_signup}
              onChange={handleChange}
            />
            <label htmlFor='self_signup' className='ml-2 text-lg'>
              I am signing up for myself
            </label>
          </div>

          <label
            htmlFor='student_1_first_name'
            className='block mb-2 text-sm font-medium'
          >
            {studentCount > 1
              ? "First Student's First Name *"
              : "Student's First Name *"}
          </label>
          <input
            type='text'
            id='student_1_first_name'
            className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
            placeholder={
              formData.self_signup && formData.first_name
                ? formData.first_name
                : "Student's First Name"
            }
            required={!formData.self_signup}
            disabled={formData.self_signup}
            value={
              formData.self_signup
                ? formData.first_name
                : formData.student_1_first_name
            }
            onChange={handleChange}
          />
          <label
            htmlFor='student_1_last_name'
            className='block mb-2 text-sm font-medium'
          >
            {studentCount > 1
              ? "First Student's Last Name *"
              : "Student's Last Name *"}
          </label>
          <input
            type='text'
            id='student_1_last_name'
            className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
            placeholder={
              formData.self_signup && formData.last_name
                ? formData.last_name
                : "Student's Last Name"
            }
            required={!formData.self_signup}
            disabled={formData.self_signup}
            value={
              formData.self_signup
                ? formData.last_name
                : formData.student_1_last_name
            }
            onChange={handleChange}
          />

          <label
            htmlFor='student_1_dob'
            className='block mb-2 text-sm font-medium'
          >
            {formData.student_1_first_name
              ? `${formData.student_1_first_name}'s `
              : "Student's "}
            Date of Birth *
          </label>
          <input
            type='date'
            id='student_1_dob'
            className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
            required
            onChange={handleChange}
          />

          <div className='mb-8'>
            <p className='block mb-2 text-sm font-medium'>
              Which programs{' '}
              {formData.student_1_first_name && !formData.self_signup
                ? `is ${formData.student_1_first_name} `
                : 'are you '}
              interested in?
            </p>
            {[
              'Guitar',
              'Bass',
              'Drums',
              'Piano / keyboard',
              'Vocals',
              'Band / performance',
              'Songwriting',
              'Audio recording & production',
              'Other',
            ].map((program) => (
              <div key={program} className='flex items-center mb-2'>
                <input
                  type='checkbox'
                  id={`student_1_${program}`}
                  value={program}
                  className='w-4 h-4'
                  onChange={(e) => {
                    const { checked, value } = e.target
                    setFormData((prevState) => {
                      const student_1_interests = checked
                        ? [...prevState.student_1_interests, value]
                        : prevState.student_1_interests.filter(
                            (item) => item !== value
                          )
                      return { ...prevState, student_1_interests }
                    })
                  }}
                />
                <label
                  htmlFor={`student_1_${program}`}
                  className='ml-2 text-sm'
                >
                  {program}
                </label>
              </div>
            ))}
          </div>
          {studentCount >= 2 && (
            <>
              <hr className='border-1 border-white mb-4' />
              <h3 className='mb-3 text-2xl font-bold'>
                Second Student's Details
              </h3>
              <label
                htmlFor='student_2_first_name'
                className='block mb-2 text-sm font-medium'
              >
                Second Student's First Name
              </label>
              <input
                type='text'
                id='student_2_first_name'
                className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                placeholder="Second Student's First Name"
                onChange={handleChange}
              />
              <label
                htmlFor='student_2_last_name'
                className='block mb-2 text-sm font-medium'
              >
                Second Student's Last Name
              </label>
              <input
                type='text'
                id='student_2_last_name'
                className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                placeholder="Second Student's Last Name"
                onChange={handleChange}
              />

              <label
                htmlFor='student_2_dob'
                className='block mb-2 text-sm font-medium'
              >
                {formData.student_2_first_name
                  ? `${formData.student_2_first_name}'s`
                  : "Second Student's"}{' '}
                Date of Birth
              </label>
              <input
                type='date'
                id='student_2_dob'
                className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                required
                onChange={handleChange}
              />

              <div className='mb-8'>
                <p className='block mb-2 text-sm font-medium'>
                  Which programs{' '}
                  {formData.student_2_first_name
                    ? `is ${formData.student_2_first_name}`
                    : 'are you'}{' '}
                  interested in?
                </p>
                {[
                  'Guitar',
                  'Bass',
                  'Drums',
                  'Piano / keyboard',
                  'Vocals',
                  'Band / performance',
                  'Songwriting',
                  'Audio recording & production',
                  'Other',
                ].map((program) => (
                  <div key={program} className='flex items-center mb-2'>
                    <input
                      type='checkbox'
                      id={`student_2_${program}`}
                      value={program}
                      className='w-4 h-4'
                      onChange={(e) => {
                        const { checked, value } = e.target
                        setFormData((prevState) => {
                          const student_2_interests = checked
                            ? [...prevState.student_2_interests, value]
                            : prevState.student_2_interests.filter(
                                (item) => item !== value
                              )
                          return { ...prevState, student_2_interests }
                        })
                      }}
                    />
                    <label
                      htmlFor={`student_2_${program}`}
                      className='ml-2 text-sm'
                    >
                      {program}
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}
          {studentCount >= 3 && (
            <>
              <hr className='border-1 border-white mb-4' />
              <h3 className='mb-3 text-2xl font-bold'>
                Third Student's Details
              </h3>
              <label
                htmlFor='student_3_first_name'
                className='block mb-2 text-sm font-medium'
              >
                Third Student's First Name
              </label>
              <input
                type='text'
                id='student_3_first_name'
                className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                placeholder="Third Student's First Name"
                onChange={handleChange}
              />
              <label
                htmlFor='student_3_last_name'
                className='block mb-2 text-sm font-medium'
              >
                Third Student's Last Name
              </label>
              <input
                type='text'
                id='student_3_last_name'
                className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                placeholder="Third Student's Last Name"
                onChange={handleChange}
              />

              <label
                htmlFor='student_3_dob'
                className='block mb-2 text-sm font-medium'
              >
                {formData.student_3_first_name
                  ? `${formData.student_3_first_name}'s`
                  : "Second Student's"}{' '}
                Date of Birth
              </label>
              <input
                type='date'
                id='student_3_dob'
                className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                required
                onChange={handleChange}
              />

              <div className='mb-8'>
                <p className='block mb-2 text-sm font-medium'>
                  Which programs{' '}
                  {formData.student_3_first_name
                    ? `is ${formData.student_3_first_name}`
                    : 'are you'}{' '}
                  interested in?
                </p>
                {[
                  'Guitar',
                  'Bass',
                  'Drums',
                  'Piano / keyboard',
                  'Vocals',
                  'Band / performance',
                  'Songwriting',
                  'Audio recording & production',
                  'Other',
                ].map((program) => (
                  <div key={program} className='flex items-center mb-2'>
                    <input
                      type='checkbox'
                      id={`student_3_${program}`}
                      value={program}
                      className='w-4 h-4'
                      onChange={(e) => {
                        const { checked, value } = e.target
                        setFormData((prevState) => {
                          const student_3_interests = checked
                            ? [...prevState.student_3_interests, value]
                            : prevState.student_3_interests.filter(
                                (item) => item !== value
                              )
                          return { ...prevState, student_3_interests }
                        })
                      }}
                    />
                    <label
                      htmlFor={`student_3_${program}`}
                      className='ml-2 text-sm'
                    >
                      {program}
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}
          <hr className='border-1 border-white mb-4' />
          <Button
            type='button'
            variant='outline'
            disabled={studentCount >= 3} // Use the disabled attribute to disable the button
            className=''
            onClick={() => setStudentCount((prevState) => prevState + 1)}
          >
            {studentCount < 3
              ? 'Add Another Student'
              : 'Maximum Students Added'}
          </Button>

          <label
            htmlFor='comments'
            className='block mt-4 mb-2 text-sm font-medium'
          >
            Comments
          </label>
          <textarea
            id='comments'
            rows={6}
            className='block p-3 mb-8 w-full text-black bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
            placeholder='Any additional information you would like to provide?'
            onChange={handleChange}
          ></textarea>

          <Button
            type='submit'
            className='py-3 px-5 font-medium text-center text-white rounded-sm bg-accent sm:w-fit hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300'
          >
            Submit
          </Button>
        </form>
      )}
    </section>
  )
}
