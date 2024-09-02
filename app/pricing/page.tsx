import PricingClasses from '@/components/PricingClasses'
import PricingLessons from '@/components/PricingLessons'
import FAQs from '@/components/FAQs'
import Header from '@/components/Header'

export default function pricing() {
  return (
    <>
      <Header title='Pricing' headerStyle={2} />
      <PricingClasses />
      <PricingLessons />
      <section className='w-full bg-black'>
        <FAQs
          faqs={[
            {
              question: 'Can I change plans or cancel anytime?',
              answer:
                'There are no contracts and you can always cancel at anytime. To discontinue lessons and stop automatic payments, simply notify the front desk at two business days before the date of your next charge. Notice given to the instructors only, verbally or otherwise as well as continued non-attendance does not constitute withdrawal from lessons or classes. Please make sure you visit the front desk or email your studio location directly.',
            },
            {
              question: 'What if I need to reschedule?',
              answer:
                'We understand that life happens and sometimes you need to reschedule. We ask that you give us a 24 hour notice of lesson cancellation and we’ll gladly issue your account a free makeup lesson that you can schedule at a later date. We know your time is valuable and rescheduling can be difficult both with an in demand instructors schedule and your own personal schedule so in some cases, an instructor may create a custom video in place of a face to face make up lesson for convenience.',
            },
            {
              question: 'Are short months prorated?',
              answer:
                'Yes. We consider three to five lessons taught per month as a full month. Invoices are prorated for two or fewer lessons per month. We typically close on the following days each year: New Year’s Day, Labor Day, Independence Day, Thanksgiving, and the day after, Christmas, including any days between Christmas and New Year’s Day.',
            },
            {
              question: 'Can I get a bi-weekly (two per month) plan?',
              answer:
                'In certain circumstances, clients can do bi-weekly lesson plans. We will try our absolute best to accommodate all scheduling requests you have. Please be aware that this is not always possible and largely depends on your availability, instructor’s availability, and operation hours.',
            },

            {
              question: 'Can I learn more than one instrument at a time?',
              answer:
                'Yes! We encourage students to learn multiple instruments. Learning multiple instruments can help you become a more well-rounded musician and can help you understand music in a more comprehensive way. If this is something you’re interested in, please let us know. We will do our best to fit you with an instructor who can teach the instruments you’re interested in learning. You don’t need to pay extra or schedule additional lessons as your time with your instructor is yours to do with as you wish. However, please be aware that not all instructors can teach multiple instruments. In certain instances, you may need to sign up for additional classes if there is no instructor available to teach the combination of instruments you’re looking to learn.',
            },
          ]}
        />
      </section>
    </>
  )
}
