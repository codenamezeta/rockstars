'use client'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Separator from './Separator'
import { FaUserPlus } from 'react-icons/fa'
import SectionOverview from './SectionOverview'
import { FaUserMinus } from 'react-icons/fa6'

const studentCountLimit = 5 // Maximum number of students allowed.

// Define your form schema using zod. This is used for validation.
const formSchema = z.object({
  contact: z.object({
    firstName: z
      .string()
      .regex(/^[a-zA-Z\s-]{2,50}$/, {
        message: 'First name must only contain letters.',
      })
      .min(2, { message: 'First name must be at least 2 characters.' })
      .max(50, { message: 'First name must be at most 50 characters.' }),
    lastName: z
      .string()
      .regex(/^[a-zA-Z\s-]{2,50}$/, {
        message: 'Last name must only contain letters.',
      })
      .min(2, { message: 'Last name must be at least 2 characters.' })
      .max(50, { message: 'Last name must be at most 50 characters.' }),
    email: z
      .string()
      .email({
        message: "Oops! This doesn't appear to be a valid email address.",
      })
      .nonempty({ message: 'Email is required.' }),
    phone: z
      .string()
      .min(10)
      .max(15)
      .nonempty({ message: 'Phone number is required.' }),
    sources: z.array(z.string()).optional(),
    selfSignup: z.boolean().optional(),
    adultStudent: z.enum(['Yes', 'No']).optional(), // AdultStudent (instead of selfSignup) is only necessary because GHL is using a sting instead of a boolean.
  }),
  students: z
    .array(
      z.object({
        firstName: z
          .string()
          .regex(/^[a-zA-Z\s]*$/, {
            message: 'First name must only contain letters.',
          })
          .min(2, { message: 'First name must be at least 2 characters.' })
          .max(50, { message: 'First name must be at most 50 characters.' }),
        lastName: z
          .string()
          .regex(/^[a-zA-Z\s]*$/, {
            message: 'Last name must only contain letters.',
          })
          .min(2, { message: 'Last name must be at least 2 characters.' })
          .max(50, { message: 'Last name must be at most 50 characters.' }),
        dob: z.string({ message: 'Date of birth is required.' }),
        age: z.number().optional(),
        interests: z.array(z.string()).optional(),
      })
    )
    .min(1, { message: 'At least one student is required.' })
    .max(studentCountLimit, { message: 'Maximum students reached.' }),
  // .transform((students, ctx) => {
  //   if (students.length > studentCount) {
  //     return students.slice(0, studentCount)
  //   }
  //   return students
  // }),
  comments: z.string().max(1500).optional(),
})

const sources = [
  { id: 'drive_by', label: ' Drive / walk by' },
  { id: 'referral', label: ' Referral / friend' },
  { id: 'internet_search', label: ' Internet search' },
  { id: 'social_media', label: ' Social media' },
  { id: 'yelp', label: ' Yelp' },
  { id: 'charter_school', label: ' Charter school' },
  { id: 'live_performance', label: ' Live performance' },
  { id: 'rockstar_van', label: ' Rockstar van' },
  { id: 'other', label: ' Other' },
] as const

const interests = [
  { id: 'Guitar', label: ' Guitar' },
  { id: 'Bass', label: ' Bass' },
  { id: 'Drums', label: ' Drums' },
  { id: 'Piano / Keyboard', label: ' Piano / Keyboard' },
  { id: 'Vocals', label: ' Vocals' },
  { id: 'Songwriting', label: ' Songwriting' },
  { id: 'Audio', label: ' Audio Recording & Production' },
  { id: 'Band', label: ' Band' },
  { id: 'Unsure / Other', label: ' Unsure / Other' },
] as const

type FreeTrialFormProps = {
  title?: string
  overviewText?: string
}

export default function FreeTrialForm({
  title = 'Free Trial Lesson',
  overviewText = 'Start with a free trial lesson! Fill out the form below to get started. We will contact you to schedule your lesson and a tour of our school.',
}: FreeTrialFormProps): JSX.Element {
  // Define a state to track if the form has been submitted.
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [studentCount, setStudentCount] = useState<number>(1)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      values.students.forEach((student, index) => {
        if (student.dob) {
          values.students[index].age = calculateAge(student.dob)
        }
        if (selfSignup) {
          values.contact.adultStudent = 'Yes'
          // AdultStudent (instead of selfSignup) is only necessary because GHL is using a sting instead of a boolean.
        }
      })
      console.log('Form Submitted:', values)
      setIsSubmitted(true)
      const response = await fetch(
        // 'https://services.leadconnectorhq.com/hooks/401tGZcoz0SM6s61g5JO/webhook-trigger/cc6bcdad-b94f-4ef7-a127-b6f5bc4e43bd', // GHL
        'https://hooks.zapier.com/hooks/catch/21791073/2ggzky3/', //Zapier
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      )
      const result = await response.json()
      console.log('Server response:', result) // Check the server response
      setIsSubmitted(true) // Update submission status
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob)
    if (birthDate > new Date()) return 0 // Invalid if future date
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

  const initialStudents = Array.from({ length: studentCount }, () => ({
    firstName: '',
    lastName: '',
    dob: '',
    age: 0,
    interests: [],
  }))

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contact: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        sources: [],
        selfSignup: false,
        adultStudent: 'No', // AdultStudent (instead of selfSignup) is only necessary because GHL is using a sting instead of a boolean.
      },
      students: initialStudents,
      comments: '',
    },
  })

  // Watch the contact.self_signup field
  const selfSignup = form.watch('contact.selfSignup')
  const contactFirstName = form.watch('contact.firstName')
  const contactLastName = form.watch('contact.lastName')

  // Update students.0.firstName when selfSignup changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (selfSignup) {
        form.setValue('students.0.firstName', contactFirstName)
        form.setValue('students.0.lastName', contactLastName)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [selfSignup, contactFirstName, contactLastName])

  return (
    <section id='free_trial' className='themed-background-style-1 py-24'>
      <div className='max-w-screen-md mx-auto px-6'>
        <SectionOverview title={title} overviewText={overviewText} />
        <Form {...form}>
          {isSubmitted ? (
            <div className='text-center'>
              <p className='mb-4 text-2xl font-bold'>
                Thank you for submitting your information!
              </p>
              <p className='mb-8'>
                We will contact you shortly to schedule your free trial lesson.
              </p>
            </div>
          ) : (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-6 font-arvo'
              role='trial signup'
            >
              <h3 className='mb-2 text-3xl font-bold'>
                Your Contact Information
              </h3>
              <span className='mb-8 text-foreground'>
                {`We'll start with your contact info so we can get in touch with
                you. Next, we'll get some details for up to ${studentCountLimit} students. We
                do not sell or share your information.`}
              </span>
              <div className='flex flex-wrap justify-between'>
                <FormField
                  control={form.control}
                  name='contact.firstName'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 md:pr-4 mb-4'>
                      <FormLabel>Your First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder='First name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='contact.lastName' // Use the correct path for the nested field
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 mb-4'>
                      <FormLabel>Your Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder='Last name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='contact.email'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 md:pr-4 mb-4'>
                      <FormLabel>Your Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder='youremail@address.com' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='contact.phone'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 mb-4'>
                      <FormLabel>Your Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder='(909) 555-0123' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='contact.sources'
                render={() => (
                  <FormItem>
                    <div className='mb-4'>
                      <FormLabel>How did you hear about us?</FormLabel>
                      <FormDescription>Check all that apply.</FormDescription>
                    </div>
                    {sources.map((source) => (
                      <FormField
                        key={source.id}
                        control={form.control}
                        name='contact.sources'
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={source.id}
                              className='flex flex-row items-start space-x-3 space-y-0'
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(source.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...(field.value ?? []),
                                          source.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== source.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className='font-medium'>
                                {source.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='contact.selfSignup'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        // checked={field.value}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className='mr-2'
                      />
                    </FormControl>
                    <FormLabel className='font-bold text-xl'>
                      I am signing up for myself
                    </FormLabel>
                    <FormDescription>
                      Adult students can sign up for themselves, additional
                      students will be added after.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator />
              {/* Student Details */}
              {Array.from({ length: studentCount }).map((_, index) => (
                <div key={index} className='space-x-3 space-y-4'>
                  <h3 className='mb-2 text-3xl font-bold'>
                    {studentCount > 1 ? `Student ${index + 1}'s ` : 'Student'}{' '}
                    Details
                  </h3>
                  <FormField
                    control={form.control}
                    name={`students.${index}.firstName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student's First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Student's first name"
                            {...field}
                            value={
                              selfSignup && index === 0
                                ? contactFirstName
                                : field.value
                            }
                            onChange={(e) => {
                              field.onChange(e)
                              if (selfSignup && index === 0) {
                                form.setValue(
                                  'contact.firstName',
                                  e.target.value
                                )
                              }
                            }}
                            {...(selfSignup ? { disabled: index === 0 } : {})}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`students.${index}.lastName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student's Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Student's last name"
                            {...field}
                            value={
                              selfSignup && index === 0
                                ? contactLastName
                                : field.value
                            }
                            onChange={(e) => {
                              field.onChange(e)
                              if (selfSignup && index === 0) {
                                form.setValue(
                                  'contact.lastName',
                                  e.target.value
                                )
                              }
                            }}
                            {...(selfSignup ? { disabled: index === 0 } : {})}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`students.${index}.dob`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {form.watch(`students.${index}.firstName`)
                            ? form.watch(`students.${index}.firstName`)
                            : 'Student'}
                          {"'s "}
                          Date of Birth
                        </FormLabel>
                        <FormControl>
                          <Input
                            type='date'
                            placeholder='MM/DD/YYYY'
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`students.${index}.interests`}
                    render={() => (
                      <FormItem>
                        <div className='mb-4'>
                          <FormLabel>Interests</FormLabel>
                          <FormDescription>
                            Which programs{' '}
                            {form.watch(`students.${index}.firstName`)
                              ? 'is ' +
                                form.watch(`students.${index}.firstName`)
                              : 'are you'}{' '}
                            interested in?
                          </FormDescription>
                        </div>
                        {interests.map((interest) => (
                          <FormField
                            key={interest.id}
                            control={form.control}
                            name={`students.${index}.interests`}
                            render={({ field }) => (
                              <FormItem
                                key={interest.id}
                                className='flex flex-row items-center space-x-3 space-y-0'
                              >
                                <FormControl>
                                  <Checkbox
                                    className=''
                                    checked={field.value?.includes(interest.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...(field.value ?? []),
                                            interest.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== interest.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className=''>
                                  {interest.label}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <hr className='border-b-2 border-t-0 border-dashed border-primary my-8 mx-auto w-full' />
                  {/* <Separator /> */}
                </div>
              ))}
              <div className='flex flex-wrap items-center'>
                <p className='pb-6 w-full text-center'>Add / Remove Students</p>
                <Button
                  type='button'
                  variant='outline'
                  disabled={studentCount <= 1} // Use the disabled attribute to disable the button
                  className={`ml-auto mr-2 block ${studentCount <= 1 ? 'hidden' : ''}`}
                  onClick={() => setStudentCount((prevState) => prevState - 1)}
                >
                  {studentCount <= 1 ? (
                    'At least one student is required'
                  ) : (
                    <>
                      <FaUserMinus className='inline-block mr-2' />
                      Remove
                    </>
                  )}
                </Button>
                <Button
                  type='button'
                  variant='outline'
                  disabled={studentCount >= studentCountLimit} // Use the disabled attribute to disable the button
                  className={`mr-auto block ${studentCount <= 1 ? 'mx-auto' : ''}`}
                  onClick={() => setStudentCount((prevState) => prevState + 1)}
                >
                  {studentCount < studentCountLimit ? (
                    <>
                      <FaUserPlus className='inline-block mr-2' /> Add Student
                    </>
                  ) : (
                    'Maximum Students Reached'
                  )}
                </Button>
              </div>
              <FormField
                control={form.control}
                name='comments'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comments</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Anything else you would like us to know?'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                size='lg'
                // disabled={!form.formState.isValid}
              >
                Submit
              </Button>
            </form>
          )}
        </Form>
      </div>
    </section>
  )
}
