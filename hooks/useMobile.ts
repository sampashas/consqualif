import { useState, useEffect, useLayoutEffect } from 'react'

const useMobile = () => {
  const [mobile, setMobile] = useState(false)
  const isClient = typeof window !== 'undefined'

  const handleResize = () => {
    setMobile(window.innerWidth < 768)
  }

  // Если isClient равен true, значит код выполняется на стороне клиента и можно использовать useLayoutEffect
  if (isClient) {
    useLayoutEffect(() => {
      handleResize() // Выполнить проверку сразу при монтировании компонента
      window.addEventListener('resize', handleResize) // Обновлять значение при изменении размера окна

      return () => {
        window.removeEventListener('resize', handleResize) // Очистка обработчика при размонтировании компонента
      }
    }, [])
  }

  return mobile
}

export default useMobile
