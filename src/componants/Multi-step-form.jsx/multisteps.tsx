'use client'
import { useState } from 'react'

export function useMultistepform(steps) {
  const [currentStepIndex, setCurrentStepindex] = useState(0)

  function next() {
    setCurrentStepindex((i) => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function back() {
    setCurrentStepindex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo(index) {
    setCurrentStepindex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,

    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  }
}
