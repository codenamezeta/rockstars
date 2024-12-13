import PricingClasses from '@/components/PricingClasses'
import PricingLessons from '@/components/PricingLessons'
import FAQs from '@/components/FAQs'
import Header from '@/components/Header'

export default function pricing() {
  return (
    <>
      <Header title='Pricing' headerStyle={2} />
      <PricingLessons />
      <PricingClasses />
      <section className='container'>
        <FAQs
          faqs={[
            {
              question: 'What is your cancellation policy?',
              answer:
                'Cancel your plan, cancel your lesson—whatever. Just give us 24 hours’ notice, and we’ll handle it. Plus, you get a free make-up lesson, because we’re cool like that.',
            },
            {
              question: 'What is your refund policy?',
              answer:
                'Had to pump the brakes? No problem. Cancel anytime with 24 hours’ notice, and we’ll refund you for what you didn’t use (minus a 10% processing fee). Or leave your credit with us—it’s waiting whenever you’re ready to make noise again.',
            },
            {
              question: 'Can I change my billing date?',
              answer:
                'Absolutely. By default, we hit your card on the 1st of the month to cover all your upcoming lessons, but hey, we’re flexible. Want a different date? No problem. Pick a date that fits your rhythm, and we’ll make sure your payment covers all the lessons between then and your next billing cycle. Easy, breezy, rockstar style.',
            },
            {
              question: 'Do you offer group lessons?',
              answer:
                'Hell yeah! Why jam alone when you can rock out with your friends or family? Convert any private lesson into a group sesh for a small fee. Because music is a team sport.',
            },
            {
              question: 'How often are lessons?',
              answer:
                'Most of our rockers do one private lesson and one band class a week. Need more? Less? A custom setup? Let’s crank it up to fit your vibe.',
            },
            {
              question: 'What if I need to reschedule a lesson?',
              answer:
                'No sweat. Life happens—just give us 24 hours’ notice, and we’ll reschedule or line up a substitute instructor to keep your groove alive.',
            },
          ]}
        />
      </section>
    </>
  )
}
