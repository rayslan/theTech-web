import { useState, useEffect } from "react"

export default function useWindowSize() {
  let defaultHeight
let defaultWidth

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}

  const [windowSize, setWindowSize] = useState({
    windowHeight: defaultHeight,
    windowWidth: defaultWidth,

  })

  useEffect(() => {
    const handleResize = () => setWindowSize ({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    })

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}