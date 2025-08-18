/*
  The summer camp payment intent logic below has been temporarily disabled.
  To re-enable it for the next season, simply remove this block comment
  and the `export {};` line at the very bottom of the file.

import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-07-30.basil',
})

export async function POST(req: Request) {
  try {
    const { amount } = await req.json()

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe requires the amount in cents
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
*/

// This temporary code tells TypeScript that this file is a module,
// which resolves the build error.
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Return a specific error message while camps are not running.
  return NextResponse.json(
    { message: 'The summer camp program is currently closed.' },
    { status: 403 } // 403 Forbidden is an appropriate HTTP status.
  )
}
