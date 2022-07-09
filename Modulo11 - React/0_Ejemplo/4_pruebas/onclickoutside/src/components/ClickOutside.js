import { useState } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'

const styles = {
  modal: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    display: 'block',
    width: '100%',
    maxWidth: '320px',
    height: '160px',
    padding: '16px',
    backgroundColor: '#ccc',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  }
}

const ClickOutside = () => {

  const [ isShown, setIsShown ] = useState(false);

  //envio el modal como referencia al hook
  //envio el setIsshown en false como callback
  const modalRef = useOnClickOutside(() => setIsShown(false));

  return (
    <div>
      <button onClick={() => setIsShown(x => !x)}>Mostrar</button>
      {/*si isShown es true muestra el modal */}
      { isShown && <p ref={modalRef} style={styles.modal}>Soy un modal</p> }
    </div>
  )
}

export default ClickOutside