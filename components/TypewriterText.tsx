"use client"
import { useEffect, useState } from "react"

export default function TypewriterText() {
  const fullText = "Frontend Engineer"
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(interval)
    }, 200) // adjust speed here
    return () => clearInterval(interval)
  }, [])

  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-sans tracking-tight text-blue-900 dark:text-blue-300">
      {displayedText}
      <span className="animate-pulse inline-block"></span>
    </h2>
  )
}
