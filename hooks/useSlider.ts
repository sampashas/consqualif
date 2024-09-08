import { useEffect, useState } from 'react'

export function useSlider(sliderArray: any[], intervalTime: number = 5000) {
  const [sliderIndex, setSliderIndex] = useState<number>(0)
  const totalSlides = sliderArray.length

  const handlePrevClick = () => {
    setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : totalSlides - 1)
  }

  const handleNextClick = () => {
    setSliderIndex((sliderIndex + 1) % totalSlides)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevSliderIndex: number) =>
        prevSliderIndex === totalSlides - 1 ? 0 : prevSliderIndex + 1,
      )
    }, intervalTime)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevClick()
      } else if (event.key === 'ArrowRight') {
        handleNextClick()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearInterval(interval)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [
    totalSlides,
    intervalTime,
    setSliderIndex,
    handlePrevClick,
    handleNextClick,
  ])

  // Обработка событий свайпа здесь (если они вызывают проблему, попробуйте отключить их и проверить, будет ли ошибка воспроизводиться)

  return { sliderIndex, setSliderIndex, handlePrevClick, handleNextClick }
}
