/*

    React Testing Library:
        
        -Existen dos herramientas de jest para React que son muy conocidas
            -Enzyme y Testing Library.

    Enzyme vs React Testing Library:
        
        -Enzyme es una utilidad de pruebas de JavaScript para React 
            -facilita la prueba de la salida de los componentes 
            -permite escribir aserciones que simulan acciones 
                que confirman si la UI está funcionando correctamente. 
            -Tiene una API que imita a la de jQuery para la manipulación 
                y el recorrido del DOM, de esta forma logra ser intuitivo y flexible.
        -Airbnb la lanzó en 2016 como herramienta de testing 
            orientada directamente a React. 

    React Testing Library:
        
        -La opción recomendada oficialmente por React.
        -Es un conjunto de herramientas que nos permiten 
        probar los componentes sin depender, a diferencia de Enzyme, 
        de sus detalles de implementación. 

    Usando React Testing Library:
        
        -Una prueba típica de React Testing Library consiste 
            -en renderizar un árbol de componentes exactamente como lo verían 
            nuestras personas usuarias en sus navegadores. 
            A esta técnica, se la llama montaje, mounting o renderización completa.

        -De esta forma, los equipos de desarrollo pueden revisar el contenido generado, 
        recrear user events y observar los cambios tal cual lo harían las personas.

        -React Testing Library usa ReactDOM.render 
        para renderizar un componente en nuestra aplicación, 
        ¡el mismo método que usamos quienes desarrollamos! 
        -Entonces, cuando se renderiza un componente durante las pruebas, 
        podemos asegurar que pasa por los mismos ciclos de vida 
        que cuando se renderiza en un “caso real”.
    
    
    Primeros pasos:

        1-Los proyectos creados con Create React App tienen soporte de fábrica para
        React Testing Library. }
        -Pero, si ese no fuera nuestro caso, podemos añadir esta
        biblioteca a través de npm de esta manera:

            npm install @testing-library/react --save-dev
        
        2-Una vez que hemos añadido @testing-library/react a nuestro proyecto,
        podemos importar render y screen, esenciales para nuestras pruebas.

            import {render, screen} from "@testing-library/react";

        
        OBS:    
            -El método render() es una función que podemos 
            utilizar para renderizar virtualmente componentes 
            y hacerlos disponibles en nuestras pruebas unitarias.
            
            -El objeto screen puede considerarse como una representación 
            de la ventana del navegador.
            -Tiene algunos otros métodos muy útiles que cubriremos 
            en los próximos ejercicios. 
        
    Empecemos por el ejemplo más básico y necesario: 
        
        1-Vamos a escribir un test para un componente muy sencillo, 
        sobre el cual podemos probar que se renderiza bien 
        y que tiene alguna característica determinada.

        const Greeting = () => {
            return (<h1>Hola</h1>);
        };
        export default Greeting;

        2-Nuestro componente a probar, tiene sólo un título con la palabra “Hola” 
        y ninguna funcionalidad. 
        
            import { render, screen } from '@testing-library/react';
            import { Greet } from 'components';

            describe('Greeting', () => {

                test('renderiza correctamente', () => {
                    
                    // 1-Renderizamos el componente
                    render(<Greeting />)
                    
                    // 2-Visualizamos el Virtual DOM renderizado
                    screen.debug();
                
                    // 3-Buscamos que exista la palabra Hola en el documento
                    expect(screen.getByText(/Hola/i)).toBeInTheDocument()
                })
            })

    Tip:

        -Existe una dependencia que permite implementar más cantidad de
        matchers para facilitar los expect. 
        
        -En el ejemplo anterior utilizamos el matcher toBeInTheDocument 
        el cual viene de instalar esta dependencia.
        
        -Para aprovechar los matchers extra podemos copiar este comando en la
        terminal:
        
            npm install --save-dev @testing-library/jest-dom
        
        -Y luego importar la librería, así: 
            
            import '@testing-library/jest-dom';
        
        -Acá les facilitamos un link para conocer todos los matchers que provee
        jest-dom: 
            
            https://github.com/testing-library/jest-dom
        
        -Es importante notar que la salida muestra el contenido renderizado de
        <Greeting>, que es un <h1>, y no el componente en sí. 
        
        -Recordemos que React Testing Library se esfuerza 
        por producir un entorno de pruebas que sea lo más parecido 
        a la experiencia del usuario, 
        -Por lo que es importante que evitemos testear los siguientes casos, 
        pues son detalles de implementación:
            
            1. Estado interno de un componente
            2. Métodos internos de un componente
            3. Métodos del ciclo de vida de un componente
            4. Componentes hijos

*/