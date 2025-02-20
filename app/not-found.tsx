import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className='container text-center pt-36 pb-16 md:py-64 flex flex-col flex-grow justify-center'>
      <h1 className='text-accent text-9xl themed-text-1'>404</h1>
      <p>We're sorry. We could not find the requested resource.</p>
      <Link
        href='/'
        className={`${buttonVariants({ variant: 'default', size: 'lg' })} mt-4 mx-auto`}
      >
        Return Home
      </Link>
    </main>
  )
}
