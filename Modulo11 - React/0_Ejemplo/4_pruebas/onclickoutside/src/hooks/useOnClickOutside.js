import { useRef, useEffect } from 'react'

const useOnClickOutside = (callbackFn) => {

  const ref = useRef()

  useEffect(() => {

    const handleClick = (event) => {
        //si no existe ref (no se muestra el modal) o el target del evento click es el ref
        //no hago nada
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        //sino hago lo que diga la funcion del callback con el evento
        //(el callback setea isShown en false por lo que cierra el modal)
        callbackFn(event)
    }
    //escucha el click y ejecuta handleclick
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)
    //cuando no esta este componente no escucha mas el click
    
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  })

  return ref
}

export default useOnClickOutside