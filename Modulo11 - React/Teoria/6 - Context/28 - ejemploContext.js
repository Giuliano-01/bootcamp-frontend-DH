/*

    1. Crear un componente y un contexto:

        -Crear un contexto utilizando createContext.
        
            import React, {createContext} from 'react';
            const contexto = createContext();

        -Crear un componente que retorne los provider del contexto.
        (Esto se hace porque: más adelante envolveremos los componentes 
        que queremos que accedan al context, 
        y necesitamos permitirles el acceso a los valores que tengamos en el context. 
        De esta manera declaramos que contexto sera el proveedor de esos valores.)

            const ProductContext = () =>{
                return(
                    <contexto.Provider>
                        //componentes dentro del contexto que recibiran los valores que tengamos en context
                    <contexto.Provider>
                )
            }

    2. Declarar los values del context y agregar children:
        
        -Recibir children por props.
        -Retornar children envolviéndolo en el provider del
context. De esta manera cualquier componente
que sea envuelto con este context podrá acceder
a los values de su provider. Utilizamos children
porque nos permite tener la cantidad de
componentes que querramos consumiendo este
context sin necesidad de saber exactamente
cuáles son. Tal vez en un futuro queremos agregar
más componentes o quitar alguno que esté
suscrito al context y con children no nos va a
generar ningún problema.
3. Declarar value dentro del provider y guardar el
array de productos para que esté disponible en
todos los componentes que sean envueltos en
este contexto  
*/