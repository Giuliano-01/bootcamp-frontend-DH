import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

const BreakingBad = () => {

const {counter, suMar, resTar} = useCounter();
const personaje = useFetch(counter);



    return (
        personaje?
        <>       
            <h3>
                {personaje[0].name}
            </h3>
            <img src={personaje[0].img} alt="Sin imagen" width="200" />
            <h2>
                <button onClick={suMar}>+</button>
                <p>{counter}</p>
                <button onClick={resTar}>-</button>
            </h2>
        </>
        :"Cargando..."
    )
}

export default BreakingBad;