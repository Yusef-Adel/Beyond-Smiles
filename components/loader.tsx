"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoaderProps {
  duration?: number
}

export function Loader({ duration = 3000 }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [phase, setPhase] = useState<'drawing' | 'bouncing' | 'complete'>('drawing')

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader")
    if (hasSeenLoader) {
      setIsVisible(false)
      return
    }

    // Mark that user has seen the loader
    sessionStorage.setItem("hasSeenLoader", "true")

    // Phase 1: Drawing the smile (0-2s)
    const drawingTimer = setTimeout(() => {
      setPhase('bouncing')
    }, 2000)

    // Phase 2: Complete animation (3.5s total)
    const completeTimer = setTimeout(() => {
      setPhase('complete')
      setIsVisible(false)
    }, duration)

    return () => {
      clearTimeout(drawingTimer)
      clearTimeout(completeTimer)
    }
  }, [duration])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {/* Complete Logo - jumping together */}
        <div className="logo-bounce-container">
          {/* Smile Icon */}
          <div className="relative mb-6">
            <div className="smile-container">
              <svg
                width="200"
                height="80"
                viewBox="0 0 269 108.8"
                className="smile-svg"
              >
                <path
                  className="smile-path"
                  d="M237.8,0h-.5c-9.5,0-18.4,4.4-24.2,11.8-17.7,22.9-44.8,37-78.5,37s-61.1-14.3-79.3-37.3C49.4,4.2,40.6,0,31.2,0,4.9,0-9.9,31.2,7.5,51c31.1,35.4,76.5,57.8,127,57.8s95.9-22.4,127-57.8c17.4-19.8,2.7-51-23.7-51Z"
                  fill="#72846f"
                />
              </svg>
            </div>
          </div>

          {/* Wordmark - positioned below smile */}
          <div className="wordmark-container">
            <Image
              src="/Beyond Smiles - Wordmark-02.svg"
              alt="Beyond Smiles"
              width={280}
              height={42}
              className="wordmark-image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
