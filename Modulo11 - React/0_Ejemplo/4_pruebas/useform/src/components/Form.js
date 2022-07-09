import React from 'react'
import useForm from '../hooks/useForm'

const Form = () => {

    const formHook = useForm();
    const [values, handleChage, resetValues] = formHook;

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e);
    }

    return (
      <div>
          <form onSubmit={handleSubmit}>
              <input name='nombre' type="text" placeholder='Ingrese su nombre' autoComplete='off'></input>
              <input name='apellido' type="text" placeholder='Ingrese su apellido' autoComplete='off'></input>
              <button type='submit'>ENVIAR</button>
          </form>
      </div>
    )
}

export default Form