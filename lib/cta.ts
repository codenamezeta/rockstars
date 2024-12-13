'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

export async function scrollToTrialRequest() {
  const pathname = usePathname() // For the current page path
  const router = useRouter()
  const [scrollTriggered, setScrollTriggered] = useState(false)

  useEffect(() => {
    if (scrollTriggered && pathname === '/') {
      scrollToFormWithOffset()
      setScrollTriggered(false) // Reset the trigger
    }
  }, [scrollTriggered, pathname])

  const scrollToFormWithOffset = () => {
    const element = document.getElementById('free_trial')
    if (element) {
      const offset = 100 // Adjust this value to your desired offset
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top || 0
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      // console.log('Scrolled to form with offset');
    }
  }
  if (pathname !== '/') {
    setScrollTriggered(true) // Set the trigger for scrolling
    await router.push('/')
  } else {
    scrollToFormWithOffset()
  }
}
