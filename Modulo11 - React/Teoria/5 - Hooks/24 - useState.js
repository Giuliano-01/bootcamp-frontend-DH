/*

    Antes:
        Usar el constructor de la clase 
        Llamar al método super() 
        Luego, cuando queríamos actualizar el estado, se hacía necesario usar el método setState(), perteneciente a la misma clase.

    Ahora:
        Usar useState()
    
    
    *Como se usa:

        -useState() le permite asignarle un estado a un componente funcional,

        import {useState} from 'react';

        -Es una funcion tradicional de js que al ser ejecutada nos dará un array con 2 elementos.
            -En el indice 0 se almacenara el valor inicial que le habremos dado al estado.
                -puede ser cualquier tipo de dato: numero objeto array 
            -En el indice 1 se almacenara una funcion que nos permitirá actualizar el estado.

            *sin destructuring*
            const estado = useState(["manzana","pera","banana"]);
            const listadoFrutas = estado[0];
            const setListadoFrutas = estado[1];

            *con destructuring*
            const [listadoFrutas, setListadoFrutas] = useState(["manzana","pera","banana"]);
                    aca puedo destructurar

    *Como se usa el setListadoFrutas:

        *funcion que pongo en el onClick*
        ()=>{
            setListadoFrutas([...listadoFrutas, "Naranja","Uva","Sandia"]);
                            si esta destructurado lo anterior
                            pongo un callback dentro del corchete o llaves
                            (prev)=>{(...prev, counter1: counter1+1)}
        }
        Usando el spread operator actualizo agregando las frutas a lo que ya tenia
    
    
*/