/*
    *¿Que es context?: 

        -Es un hook de React que permite englobar componentes 
         para compartir información entre ellos.
        (como si fuera un contenedor de componentes)
        -Generando un contexto en donde todos los componentes encapsulados 
         puedan suscribirse y consumir datos.
    
    *¿Qué problema viene a solucionar?:
        
        -Resuelve un problema conocido como props drilling. 
        -Cuando tenemos un árbol de componentes grande 
         se vuelve difícil poder compartir información entre ellos utilizando props. Context permite pasar datos de un componente a otro sin tener que enviarlos por props, ya que crea un entorno común para estos componentes al cual pueden suscribirse y simplemente obtener la información que necesitan de ahí, sin importar lo cerca o lejos que estén entre sí dentro del árbol de React.
     
    *¿Como funciona context?:
        
        -Todo valor definido y actualizado en el contexto 
        podrá ser usado por los componentes incluídos dentro de tal contexto.

            import React from "react";
            function App {

                return (
                                <- ambos subárboles de componentes (Left y Main) 
                                podrán consumir el contexto TitleContext
                    <TitleContext.Provider value="Soy un título" >
                        <Left />
                        <Main />
                    </TitleContext.Provider >
                )
            }


    *¿Para qué suele usarse principalmente Context?

        -Manejo de theming (implementación de modo oscuro o temas alternativos).
        -Autenticación 2 de usuarios.
        - Internacionalización (el idioma)


    *Pasos para la implementación de Context

        1-Creación mediante el método createContext
        2-Usar un context Provider para encapsular un árbol de componentes.
        3-Poner cualquier valor en el Provider usando la propiedad value.
        4-Leer esta propiedad en cualquier componente encapsulado usando el context Consumer.


        1 - createContext:

            Un objeto Context se crea 
            pasando por defecto un valor al método de React, createContext. 
            Si bien createContext acepta un valor inicial, este no es obligatorio.
            Como resultado de crear el contexto, obtendremos dos propiedades 
            que, a la vez, se declaran como componentes: Provider y Consumer

            import { createContext } from "react";
            const peopleMood = "Happy";
            export const PeopleContext = createContext(peopleMood);
        
        2 - Provider:

            El contexto debe ser global para los componentes que lo consumen, 
            es por esto por lo que Context nos brinda un Provider. 
            Este es un componente que toma una propiedad llamada value, 
            es decir, el valor dado al contexto, 
            y lo inyecta a los componentes englobados por él.
            Este valor puede ser el que se desee,
            hasta un objeto con múltiples valores. 

            ● No todos los componentes descendientes del contexto
            estarán suscritos al contexto, salvo que declaren la suscripción
            al contexto. 
            Esto es debido a que no todos los componentes necesitarán estos datos.
            ● Cuando un componente suscrito se renderice, leerá el valor actual del
            contexto provisto por el Provider, por lo que la responsabilidad del
            Provider será dar acceso a los datos almacenados en el contexto.
            
            <PeopleContext.Provider value=”mucha”>
                <World />
            </PeopleContext.Provider>

        3 - Consumer:

            Para que un componente pueda recibir el valor de un contexto,
            el componente debe estar suscrito al mismo. 
            La suscripción se realiza mediante el componente Consumer.
            ➔ Este componente deberá incluir una función como hijo o children.
            ➔ Esta función recibirá el argumento value 
            con el valor actual del contexto, retornará un nodo React (JSX) 
            y estará a la escucha de cambios.
            ➔ Respecto al árbol de componentes, 
            el Consumer estará debajo del Provider.
            Esta función será llamada en el momento de renderizar.
            ➔ Debemos pensar a Context como un canal para compartir datos.
            ➔ Por cada Provider habrá un Consumer que sólo se relacionarán 
            entre sí.
            
            import React, { Component } from "react";
            import { ConsumerDeLaVida } from "./ContextDeLaVida";
            
            function App {
             
                return (
             
                    <ConsumerDeLaVida>
                        {(props) => {
                            return <div>{props.laVida}</div>;
                        }}
                    </ConsumerDeLaVida>
             );
            }



    
*/