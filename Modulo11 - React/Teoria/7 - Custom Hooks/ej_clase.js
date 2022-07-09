/*

    ////COUNTER:

    **carpeta de hooks:

    const useCounter = ()=>{

        const [counter, setCounter] = useState(1);

        sumar = ()=>{
            setCounter(counter+1)
        }
        restar = ()=>{
            setCounter(counter-1)
        }

        return {
            counter,
            sumar,
            restar
        }
    }

    export default useCounter


    **otra carpeta:

    import useCounter from "../hooks/useContador";

    const Contador = ()=>{
        const counter1 = useCounter();
        const counter2 = useCounter();

        return(
            <>
                <button onClick={counter1.sumar}>+</button>
                <p>{counter1}</p>
                <button onClick={counter1.restar}>-</button> 
            
                <button onClick={counter2.sumar}>+</button>
                <p>{counter2}</p>
                <button onClick={counter2.restar}>-</button> 

            </>
        )
    }




    La misma funcion en otro componente sera individual, 
    no cambias todos en los que esta la funcion.
    Se crea una instancia nueva por cada componente que importas.


    ////FETCH:

    import {useState} from 'react'

    const useFetch (id=1)=>{

        const [personaje, setPersonaje] = useState({});
        
        //hace el fetch cuando aparece el hook
        useEffect(()=>{
            fetch("https://www.breakingbadapi.com/api/characters/${id}")
            .then(data => data.json())
            .then(info => setPersonaje(info))
        },[id]);

    }

    export default useFetch;

    const BreakingBad () =>{
        
        //para sumar el id y ver los distintos personajes
        const [counter,sumar, restar] = useCounter(1);

        //uso la variable del useFetch para ir cambiando los personajes
        const personaje = useFetch(counter);


        return (
            personaje ?
            <>
                <h3>{personaje[0].name}</h3>
                <img src={personaje[0].img}></img>

                <Contador/> // no se puede usar por que es otra instancia
                
                <button onClick={counter.sumar}>+</button>
                <p>{counter}</p>
                <button onClick={counter.restar}>-</button> 

            </>
            :
            "cargando"
        )
    }


    ////Hook para traer un estado o propiedad previa:

    import ref .....

    const usePrevious = (value)=>{
        
        //como useRef es mutable y persistente al ciclo de vida..
        //el cambio lo vere en el siguiente renderizado del componente
        const previous = useRef()

        useEffect(()=>{
            console.log("antes: ${previous.current}")
            previous.current = value
            console.log("despues: ${previous.current}")
        })
        
        return previous.current

    }

    export default usePrevious;




    import usePrevious from "..."
    
    const App = ()=>{


        const [counter, setCounter] = useState(0)

        const previous = usePrevious(counter);

        return(

            <div>
                <h1>Couter: {counter}</h1>
                <button onClick={()=>setCounter(x => x+1)}>Incrementar</button>
                
                <h2>Previo: {previous.current}</h2>
            </div>

        )

    }



    // CLICK fuera del elemento

    import {useState, useRef} from 'react'

    const useOnClickOutside = (callbackFn)=>{
        const ref = useRef()

        useEffect(()=>{
            //cuando se monta
            const handleClick = (event)=>{
                if(!ref.current || ref.current.contains(event.target)){
                    //si el elemento no existe o el elemento que guardo en current tiene el elemento al que se le hizo click
                    return
                }

                callbackFn(event)
            }
            document.addEventListener('mousedown', handleClick);
            
            //cuando se desmonta
            return () => {
                document.removeEventListener('mousedown', handleClick);
            }
        }, [ref,callbackFn])
        return ref
    }

    const App2 ()=>{

        const [isShown, setIsShown] = useState(false);
        const modalRef = useOnclickOutside(()=> setIsShown(false));

        return (
            
            <div>
                <button onClick={()=> setIsShown(x=> !x)}>Mostrar</button>
                {isShown && <p ref={modalRef}>Soy un modal</p>}
            </div>

        )
    }



    const useForm = (initialState = {}){


        const [values, setValues] = useState(initialState);

        const handleChange = (e) =>{
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }
    }

    return [values, handleChange, resetValues];



    const [form, handleChange] = useForm({
        nombre: "",
        email: ""
    })
    const {nombre, email} = form;
    const handleSubmit()
    ...
*/