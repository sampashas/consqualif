import { useEffect, useState } from 'react'

interface ParallaxScrollState {
  opacity: number
  scale: number
}

interface ParallaxScrollOptions {
  opacityPlus?: boolean
}

const useScaleScroll = (
  inView: boolean,
  shouldUpdate: boolean,
  options: ParallaxScrollOptions = {},
): ParallaxScrollState => {
  const { opacityPlus } = options
  const [opacity, setOpacity] = useState(0.9)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    let requestId: number | null = null
    let totalScroll = 0
    const handleWheel = (e: WheelEvent) => {
      if (!requestId) {
        requestId = requestAnimationFrame(() => {
          totalScroll = Math.max(0, totalScroll + e.deltaY)

          const newOpacity =
            0.75 +
            ((opacityPlus ? 1 : -1) * totalScroll) / (2 * window.innerHeight)
          const newScale = 1 + totalScroll / (30 * window.innerHeight)

          setOpacity(Math.max(0.5, Math.min(.85, newOpacity)))
          setScale(Math.max(1, Math.min(2, newScale)))

          requestId = null
        })
      }
    }

    if (shouldUpdate && inView) {
      window.addEventListener('wheel', handleWheel)
    } else {
      window.removeEventListener('wheel', handleWheel)
      if (requestId) {
        cancelAnimationFrame(requestId)
      }
    }

    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (requestId) {
        cancelAnimationFrame(requestId)
      }
    }
  }, [shouldUpdate, inView, opacityPlus])

  return { opacity, scale }
}

export default useScaleScroll
