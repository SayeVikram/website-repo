'use client'
import { useEffect, useRef, useState } from 'react'
import anime from 'animejs'
import Image from 'next/image'

export default function SplashScreen({ onComplete }) {
  const splashRef = useRef(null)
  const circleRef = useRef(null)
  const logoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const splashElement = splashRef.current
    const circleElement = circleRef.current
    const logoElement = logoRef.current

    if (!splashElement || !circleElement || !logoElement) return

    const tl = anime.timeline({
      easing: 'easeInOutQuad',
      complete: () => {
        anime({
          targets: splashElement,
          opacity: 0,
          duration: 300,
          easing: 'easeOutQuad',
          complete: () => {
            if (onComplete) onComplete()
          }
        })
      }
    })

    tl.add({
      targets: logoElement,
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 300,
      easing: 'easeOutQuad'
    })

    tl.add({
      targets: circleElement,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1000,
      easing: 'easeInOutQuad'
    }, '-=100')

    tl.add({
      duration: 200
    })

    return () => {
      tl.pause()
    }
  }, [onComplete])

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]"
    >
      <div className="relative flex items-center justify-center">
        <div ref={logoRef} className="opacity-0 z-10">
          <Image
            src="/svk.png"
            alt="SVK Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        
        <svg
          className="absolute"
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <circle
            ref={circleRef}
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ strokeDasharray: '502.65' }}
          />
        </svg>
      </div>
    </div>
  )
}