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
import { Button, buttonVariants } from '@/components/ui/button'
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Separator from './Separator'
import { FaUserPlus } from 'react-icons/fa'
import SectionOverview from './SectionOverview'
import { FaUserMinus } from 'react-icons/fa6'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import Link from 'next/link'

// Replace with your Stripe publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
)

const studentCountLimit = 5 // Maximum number of students allowed.

const campSessions = [
  {
    id: 'session1',
    label: 'Session 1: June 16th – June 20th',
    dates: '2025-06-16',
    price: 379,
    materialsFee: 49,
    soldOut: false,
  },
  {
    id: 'session2',
    label: 'Session 2: July 7th – July 11th',
    dates: '2025-07-07',
    price: 379,
    materialsFee: 49,
    soldOut: true,
  },
  {
    id: 'session3',
    label: 'Session 3: August 11th – August 15th',
    dates: '2025-08-11',
    price: 379,
    materialsFee: 49,
    soldOut: false,
  },
] as const

// Define your form schema using zod
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
        instruments: z
          .array(z.string())
          .min(1, { message: 'Please select at least one instrument.' }),
        campSessions: z
          .array(z.string())
          .min(1, { message: 'Please select at least one camp session.' }),
      })
    )
    .min(1, { message: 'At least one student is required.' })
    .max(studentCountLimit, { message: 'Maximum students reached.' }),
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

const instruments = [
  { id: 'Guitar', label: ' Guitar' },
  { id: 'Bass', label: ' Bass' },
  { id: 'Drums', label: ' Drums' },
  { id: 'Piano / Keyboard', label: ' Piano / Keyboard' },
  { id: 'Lead Vocals', label: ' Vocals' },
  { id: 'Backup Vocals', label: ' Backing Vocals' },
  { id: 'Unsure', label: ' Unsure' },
  // { id: 'Songwriting', label: ' Songwriting' },
  // { id: 'Audio', label: ' Audio Recording & Production' },
] as const

type CampSignupFormProps = {
  title?: string
  overviewText?: string
}

// Payment form component that needs access to Stripe
function CheckoutForm({
  formData,
  totalAmount,
  onPaymentSuccess,
  onPaymentError,
  onBackToEdit,
  earlyBirdDiscounts,
}: {
  formData: z.infer<typeof formSchema>
  totalAmount: number
  earlyBirdDiscounts: {
    studentIndex: number
    sessionId: string
    amount: number
  }[]
  onPaymentSuccess: (paymentIntent: any) => void
  onPaymentError: (error: any) => void
  onBackToEdit: () => void
}) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return
    }

    setIsProcessing(true)

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin + '/camp-registration-success',
          payment_method_data: {
            billing_details: {
              name: `${formData.contact.firstName} ${formData.contact.lastName}`,
              email: formData.contact.email,
            },
          },
        },
        redirect: 'if_required',
      })

      if (error) {
        setPaymentError(
          error.message || 'Something went wrong with your payment.'
        )
        onPaymentError(error)
      } else if (paymentIntent) {
        onPaymentSuccess(paymentIntent)
      }
    } catch (err) {
      console.error('Payment error:', err)
      setPaymentError('An unexpected error occurred.')
      onPaymentError(err)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div>
      {/* Cost breakdown section */}
      <div className='mb-8 p-6 border rounded-lg bg-background'>
        <h3 className='text-2xl font-bold mb-4'>Order Summary</h3>
        {/* Modify the order summary to show multiple sessions per student */}
        <div className='space-y-4'>
          {formData.students.map((student, index) => {
            // Calculate total for this student across all sessions
            let studentTotal = 0

            return (
              <div key={index} className='border-b pb-4'>
                <h4 className='font-medium text-lg'>
                  {student.firstName} {student.lastName}
                </h4>

                {/* Display each session separately */}
                {student.campSessions.map((sessionId) => {
                  const sessionInfo = campSessions.find(
                    (s) => s.id === sessionId
                  )
                  const hasDiscount = earlyBirdDiscounts.some(
                    (d) => d.studentIndex === index && d.sessionId === sessionId
                  )
                  const discount = hasDiscount ? 50 : 0
                  const materialsFee = sessionInfo?.materialsFee || 0
                  const finalPrice = sessionInfo
                    ? sessionInfo.price - discount + materialsFee
                    : 0

                  // Add to student total
                  studentTotal += finalPrice

                  return (
                    <div key={sessionId} className='ml-4 mb-2'>
                      <p>Session: {sessionInfo?.label}</p>
                      <div className='mt-1 text-right'>
                        <p>Regular Price: ${sessionInfo?.price.toFixed(2)}</p>
                        {materialsFee > 0 && (
                          <p>
                            Registration & Materials Fee: +$
                            {materialsFee.toFixed(2)}
                          </p>
                        )}
                        {hasDiscount && (
                          <p className='text-green-600'>
                            Early Bird Discount: -$50.00
                          </p>
                        )}
                        <p>Session Price: ${finalPrice.toFixed(2)}</p>
                      </div>
                    </div>
                  )
                })}

                <p>Instruments: {student.instruments.join(', ')}</p>
                <div className='mt-2 text-right border-t pt-2'>
                  <p className='font-semibold'>
                    Student Subtotal: ${studentTotal.toFixed(2)}
                  </p>
                </div>
              </div>
            )
          })}

          <div className='text-right pt-2 border-t border-dashed'>
            <p className='text-xl font-bold'>
              Total: ${totalAmount.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3 className='text-2xl font-bold mb-4'>Payment Details</h3>

        <PaymentElement className='mb-6' />

        {paymentError && (
          <div className='text-red-500 mb-4'>{paymentError}</div>
        )}

        <div className='flex space-x-4'>
          <Button
            type='button'
            variant='outline'
            onClick={onBackToEdit}
            className='flex-1'
          >
            Edit Order
          </Button>

          <Button
            type='submit'
            disabled={!stripe || isProcessing}
            className='flex-1'
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default function CampSignupFormWithStripe({
  title = 'Summer Camp Enrollment',
  overviewText = 'Enroll your child in our exciting summer rock camp! Choose from two sessions and various instruments. Early bird discount of $50 is automatically applied when enrolling 30+ days before camp starts.',
}: CampSignupFormProps): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [studentCount, setStudentCount] = useState<number>(1)
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(
    null
  )
  const [earlyBirdDiscounts, setEarlyBirdDiscounts] = useState<
    { studentIndex: number; sessionId: string; amount: number }[]
  >([])

  const calculateTotalAmount = (data: z.infer<typeof formSchema>) => {
    const now = new Date()
    let total = 0
    const discounts: {
      studentIndex: number
      sessionId: string // Track which session got the discount
      amount: number
    }[] = []

    data.students.forEach((student, studentIndex) => {
      // Loop through each selected session for this student
      student.campSessions.forEach((sessionId) => {
        const sessionInfo = campSessions.find((s) => s.id === sessionId)

        if (sessionInfo) {
          const sessionStartDate = new Date(sessionInfo.dates)
          const daysDifference = Math.floor(
            (sessionStartDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
          )

          // Apply early bird discount if more than 30 days before camp
          const sessionPrice = sessionInfo.price
          const discount = daysDifference >= 30 ? 50 : 0
          const materialsFee = sessionInfo.materialsFee || 0

          if (discount > 0) {
            discounts.push({
              studentIndex,
              sessionId,
              amount: discount,
            })
          }

          total += sessionPrice - discount + materialsFee
        }
      })
    })

    setEarlyBirdDiscounts(discounts)
    return total
  }

  // Create payment intent and get client secret
  const createPaymentIntent = async (amount: number) => {
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      })

      const data = await response.json()
      setClientSecret(data.clientSecret)
    } catch (error) {
      console.error('Error creating payment intent:', error)
    }
  }

  const initialStudents = Array.from({ length: studentCount }, () => ({
    firstName: '',
    lastName: '',
    dob: '', // Ensure this is an empty string, not undefined
    age: 0,
    instruments: [],
    campSessions: [],
  }))

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contact: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        sources: [],
      },
      students: initialStudents,
      comments: '',
    },
  })

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob)
    if (birthDate > new Date()) return 0
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Calculate age for each student
      values.students.forEach((student, index) => {
        if (student.dob) {
          values.students[index].age = calculateAge(student.dob)
        }
      })

      // Calculate total amount
      const total = calculateTotalAmount(values)
      setTotalAmount(total)
      setFormData(values)

      // Create payment intent
      await createPaymentIntent(total)

      // Show payment form
      setShowPaymentForm(true)

      console.log('Form data ready for payment:', values)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handlePaymentSuccess = async (paymentIntent: any) => {
    try {
      // Combine form data with payment info
      const submissionData = {
        ...formData,
        payment: {
          amount: totalAmount,
          paymentIntentId: paymentIntent.id,
          status: paymentIntent.status,
        },
      }

      // Send data to GHL
      const response = await fetch('https://formspree.io/f/mqkyrrry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()
      console.log('GHL response:', result)

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error sending data to GHL:', error)
    }
  }

  const handlePaymentError = (error: any) => {
    console.error('Payment failed:', error)
    // Handle payment error (you might want to display an error message)
  }

  // Function to go back from payment to edit form
  const handleBackToEdit = () => {
    setShowPaymentForm(false)
  }

  // Update form when student count changes
  useEffect(() => {
    const currentStudents = form.getValues().students
    if (currentStudents.length < studentCount) {
      // Add new students with properly initialized values
      const newStudents = Array.from(
        { length: studentCount - currentStudents.length },
        () => ({
          firstName: '',
          lastName: '',
          dob: '',
          age: 0,
          instruments: [],
          campSessions: [],
        })
      )
      form.setValue('students', [...currentStudents, ...newStudents])
    } else if (currentStudents.length > studentCount) {
      // Remove students
      form.setValue('students', currentStudents.slice(0, studentCount))
    }
  }, [studentCount, form])

  return (
    <section id='camp_registration' className='themed-background-style-1 py-24'>
      <div className='max-w-screen-md mx-auto px-6'>
        <SectionOverview title={title} overviewText={overviewText} />

        {isSubmitted ? (
          <div className='text-center'>
            <h3 className='mb-4 text-3xl font-bold'>Success!</h3>
            <p className='mb-8'>
              Your payment and information has been received. Thank you for
              enrolling in summer camp! We look forward to seeing you there! Our
              staff will follow up with you ASAP. In the meantime, if you need
              any additional assisatnce please feel free to contact us.
            </p>
            <Link
              href='/contact'
              className={`${buttonVariants({ variant: 'default', size: 'lg' })}`}
            >
              Register Now
            </Link>
          </div>
        ) : showPaymentForm && clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm
              formData={formData!}
              totalAmount={totalAmount}
              earlyBirdDiscounts={earlyBirdDiscounts}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
              onBackToEdit={handleBackToEdit}
            />
          </Elements>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-6 font-arvo'
              role='camp enrollment'
            >
              <h3 className='mb-2 text-3xl font-bold'>
                Parent / Guardian Information
              </h3>
              <div className='flex flex-wrap justify-between'>
                <FormField
                  control={form.control}
                  name='contact.firstName'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 md:pr-4 mb-4'>
                      <FormLabel className='text-lg'>First Name *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder='First name'
                          type='text'
                          autoComplete='given-name'
                          className='h-12'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='contact.lastName'
                  render={({ field }) => (
                    <FormItem className='w-full md:w-1/2 mb-4'>
                      <FormLabel className='text-lg'>Last Name *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder='Last name'
                          type='text'
                          autoComplete='family-name'
                          className='h-12'
                        />
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
                      <FormLabel className='text-lg'>Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type='email'
                          autoComplete='email'
                          placeholder='youremail@address.com'
                          className='h-12'
                        />
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
                      <FormLabel className='text-lg'>Phone Number *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type='tel'
                          placeholder='(909) 555-0123'
                          autoComplete='tel'
                          className='h-12'
                        />
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
                      <FormLabel className='text-lg'>
                        How did you hear about our camp program?
                      </FormLabel>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                      {sources.map((source) => (
                        <FormField
                          key={source.id}
                          control={form.control}
                          name='contact.sources'
                          render={({ field }) => (
                            <FormItem
                              key={source.id}
                              className='flex flex-row items-baseline space-x-3 space-y-0'
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(source.id)}
                                  className='w-4 h-4'
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
                              <FormLabel className='text-lg'>
                                {source.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </FormItem>
                )}
              />

              <Separator />

              {/* Student Details */}
              {Array.from({ length: studentCount }).map((_, index) => (
                <div key={index} className='space-x-3 space-y-4'>
                  <h3 className='mb-2 text-3xl font-bold'>
                    {form.watch(`students.${index}.firstName`)
                      ? form.watch(`students.${index}.firstName`) + "'s "
                      : studentCount > 1
                        ? `Student ${index + 1}'s `
                        : 'Student'}{' '}
                    Details
                  </h3>
                  <div className='flex flex-wrap justify-between'>
                    <FormField
                      control={form.control}
                      name={`students.${index}.firstName`}
                      render={({ field }) => (
                        <FormItem className='w-full md:w-1/2 md:pr-4 mb-4'>
                          <FormLabel className='text-lg'>
                            First Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Student's first name"
                              type='text'
                              value={field.value || ''}
                              className='h-12'
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
                        <FormItem className='w-full md:w-1/2 mb-4'>
                          <FormLabel className='text-lg'>Last Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type='text'
                              placeholder="Student's last name"
                              value={field.value || ''}
                              className='h-12'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name={`students.${index}.dob`}
                    render={({ field }) => (
                      <FormItem className='mb-4'>
                        <FormLabel className='text-lg'>
                          Date of Birth *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type='date'
                            onChange={(e) => field.onChange(e.target.value)}
                            value={field.value || ''} // Ensure value is never undefined
                            className='h-12'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`students.${index}.campSessions`}
                    render={() => (
                      <FormItem className='mb-4'>
                        <FormLabel className='text-lg'>
                          Camp Sessions *
                        </FormLabel>
                        <FormDescription>
                          Select which sessions{' '}
                          {form.watch(`students.${index}.firstName`) ||
                            'the student'}{' '}
                          will be attending.
                        </FormDescription>
                        <div className='space-y-2'>
                          {campSessions.map((session) => (
                            <FormField
                              key={session.id}
                              control={form.control}
                              name={`students.${index}.campSessions`}
                              render={({ field }) => (
                                <FormItem
                                  key={session.id}
                                  className='flex items-center space-x-3 space-y-0'
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(
                                        session.id
                                      )}
                                      disabled={session.soldOut}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...(field.value || []),
                                              session.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== session.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className='text-lg'>
                                    <span
                                      className={`font-bold tracking-wider ${session.soldOut ? 'text-gray-400' : ''}`}
                                    >
                                      {session.label}
                                    </span>{' '}
                                    {session.soldOut ? (
                                      <span className='ml-2 text-red-500 font-bold text-sm'>
                                        SOLD OUT
                                      </span>
                                    ) : (
                                      `- $${session.price}`
                                    )}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`students.${index}.instruments`}
                    render={() => (
                      <FormItem>
                        <div className='mb-4'>
                          <FormLabel className='text-lg'>
                            Instruments *
                          </FormLabel>
                          <FormDescription>
                            Which instruments would{' '}
                            {form.watch(`students.${index}.firstName`) ||
                              'the student'}{' '}
                            like to try?
                          </FormDescription>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                          {instruments.map((instrument) => (
                            <FormField
                              key={instrument.id}
                              control={form.control}
                              name={`students.${index}.instruments`}
                              render={({ field }) => (
                                <FormItem
                                  key={instrument.id}
                                  className='flex flex-row items-start space-x-3 space-y-0'
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(
                                        instrument.id
                                      )}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...(field.value ?? []),
                                              instrument.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) =>
                                                  value !== instrument.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className='text-lg'>
                                    {instrument.label}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <hr className='border-b-2 border-t-0 border-dashed border-primary my-8 mx-auto w-full' />
                </div>
              ))}

              <div className='flex flex-wrap items-center'>
                <p className='pb-6 w-full text-center'>Add / Remove Students</p>
                <Button
                  type='button'
                  variant='outline'
                  disabled={studentCount <= 1}
                  className={`ml-auto mr-2 block ${studentCount <= 1 ? 'hidden' : ''}`}
                  onClick={() => setStudentCount((prevState) => prevState - 1)}
                >
                  {studentCount <= 1 ? (
                    'At least one student is required'
                  ) : (
                    <>
                      <FaUserMinus className='inline-block mr-2' />
                      Remove Student
                    </>
                  )}
                </Button>
                <Button
                  type='button'
                  variant='outline'
                  disabled={studentCount >= studentCountLimit}
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
                    <FormLabel className='text-lg'>
                      Additional Comments
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Any special requests or information we should know?'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' size='lg' className='w-full'>
                Continue to Payment
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  )
}
