import { useRef, useEffect } from 'react'

const useOnClickOutside = (callbackFn) => {
  const ref = useRef()

  useEffect(() => {
    const handleClick = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callbackFn(event)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  })

  return ref
}

export default useOnClickOutside