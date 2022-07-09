/*

    Antes:
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount()

    Ahora:
        useEffect()
    
    
    *Como se usa:

        -useEffect() le permite gestionar el ciclo de vida de un componente,

        import {useEffect} from 'react';

        -Es una funcion tradicional de js que recibe dos argumentos:
            -El primero sera un callback,
                -acción del codigo, dependiendo de un escenario
            -El segundo un array,
                -para definir en que momento queremos que se ejecute esta función.

            
    *Igualdades:

        componentDidMount()
        ===
        useEffect(()=>{//accion del codigo},[]);

        -El array vacio es para indicar que no queremos que haga seguimiento a niguna dependencia
         y por lo tanto se ejecutara una sola vez cuando el componente se monta
        
        componentDidUpdate()
        ===
        useEffect(()=>{//accion del codigo},[miEstado,otroEstado,etc]);
        
        -Le indica al hook que siempre que ese estado cambie se debera ejecutar lo que esta dentro del callback
        -Conviene usar varios useEffect para distintos updates

        componentWillUnmount()
        ===
        useEffect(()=>{ return ()=>{ console.log(se desmontó) } },[]);
                puedo hacer el return en el didMount para que quede mas chico el codigo
        setForm({
            ...form,
            [e.target.name]: e.target.value
            el primero hace referencia a la propiedad name del input
            que sera nombre o email que sera lo que tenemos en el objeto de useState que quiero que cambie
        })

  
        
        window.addEvent

        return()=>{
            window.removeEvent
            para borrar el evento cuando se desmonta el componente
        }

    
*/