/*

    *Componentes stateful:

        -Están atentos a los eventos que los rodean y saben reaccionar a los mismos. 
        -En función de esos eventos, el componente podrá cambiar su contenido interno.
        -Estos componentes ya no serán funciones nativas de JavaScript, sino que
        
        -Los trabajaremos como un nuevo tipo de dato: una clase.
        (esto se usa para poder usar estados, ahora los estados son hooks y todo se hace con componentes funcionales)

        class Producto extends Component {
            //...
        }

        import React, { Component } from 'react';   -> Queremos traer el objeto Component.
        
        class NombreComponente extends Component { -> Usamos la palabra reservada class para empezar a definir nuestro componente y le asignamos el nombre.
                                                   ->  extends, hace referencia al objeto que trajimos cuando importamos React.
            
            render () {             -> Para poder renderizar los elementos visuales del componente, usamos el método render().

                return (
                    // código a renderizar ...
                );
            };
        }
        
        export default NombreComponente;   -> Exportamos el componente

        Solemos utilizar los componentes stateful cuando esperamos cierta interacción del usuario y, en base a eso, queremos que el interior de nuestro componente cambie. 
        Los componentes stateful son reactivos y por ende el DOM se actualiza cuando es necesario. 


*/