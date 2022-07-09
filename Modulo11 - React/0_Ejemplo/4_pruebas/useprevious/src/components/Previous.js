import { useRef, useState } from 'react'
import usePrevious from '../hooks/usePrevious'

const Previous = () => {

  const [ counter, setCounter ] = useState(0)

  const previous = usePrevious(counter)

  const newRef = useRef(1)

  const updateNewRef = () => {
    newRef.current++
  }

  return (
    <div>
      <h1 onClick={updateNewRef}>{newRef.current}</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(x => x + 1)}>Incrementar</button>
      <h2>Previo: {previous}</h2>
    </div>
  )
}

export default Previous