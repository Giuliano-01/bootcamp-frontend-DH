/*

    Selectores getByX, queryByX y findByX:

        -Ahora que sabemos cómo trabajar con React Testing Library, 
        podemos empezar a probar nuestros componentes. 
        -Para ello, primero tenemos que consultar y extraer los nodos DOM 
        de nuestros componentes virtualmente renderizados 
        -Para comprobar si se han renderizado como se esperaba. 
        
        -Para estas selecciones, React Testing Library
        tiene muchos selectores incorporados que simplifican este proceso: 
        

    Selectores getByX:

        .getByText() se utiliza para extraer un elemento del DOM 
        con un texto que coincide con una cadena especificada:

            import { render, screen } from '@testing-library/react';
 
            const Button = () => {
                return <button type="submit" disabled>Enviar</button>
            };
 
            test('Se renderiza un botón "Enviar"', () => {
            
              // Renderizar el componente Button
              render(<Button/>);
            
              // Obtener el nodo con texto 'Enviar'
              const button = screen.getByText('Enviar'); 
            });


        .getByRole() nos permite obtener un nodo del DOM por su tipo de rol (role). 

            import { render, screen } from '@testing-library/react';

            const Button = () => {
                return <button type="submit" disabled>Enviar</button>
            };

            test('Se renderiza un botón "Enviar"', () => {
            
              // Renderizar el componente Button
              render(<Button/>);
            
              // Obtenemos el nodo de tipo button
              const button = screen.getByRole('button'); 

            });


    Selectores queryByX:

        -Estos métodos, devuelven `null` si no encuentran un nodo del DOM, 
        a diferencia de los métodos `.getByX` que lanzan un error 
        y hacen que la prueba falle. 

        -El siguiente código, presenta un componente que muestra una `h1` 
        con el texto "**¡Hola 😊!**" 
        y luego, 500ms después de que se haga clic en el botón 
        cambia el texto a "**¡Chau 👋!**”.

            import { useState } from 'react';
 
            const App = () => {
 
                const [text, setText] = useState('¡Hola 😊!');
 
                // Cambia el texto luedo de 500ms
                const handleClick = () => {
                  setTimeout(() => {
                      setText('¡Chau 👋!');
                  }, 500);
                };
 
                return (
                  <div>
                    <h1>{text}</h1>
                    <button onClick={handleClick}>Click aquí</button>
                  </div>
                )
            };
 
            export default App;

        -Ahora, supongamos, que queremos confirmar que h1 no contiene 
        (todavía 😅) el texto '¡Chau 👋!':

            import App from './components/App';
            import { render, screen } from '@testing-library/react';
 
            test('El encabezado no dice "¡Chau 👋!"', () => {

                // Renderizamos
                render(<App />);
                // Obtenemos el encabezado con el texto buscado
                const header = screen.queryByText('¡Chau 👋!');
                // Esperamos que el resultado sea null, pues no se ha presionado el botón.
                expect(header).toBeNull();
            
            });

        -Al utilizar el método .queryByText(), con el texto '¡Chau 👋!', 
        se devuelve el valor null 
        y podemos validarlo con éxito con expect(header).toBeNull(). 
        -Si hubiéramos utilizado el método .getByText(), 
        la prueba fallaría inmediatamente debido al error 
        en lugar de continuar con la evaluación de expect().


    Selectores queryByX:
        
        -Se utilizan para consultar elementos asíncronos que aparecerán en el DOM.
        -Estos métodos son muy útiles cuando esperamos a que se resuelva 
        el resultado de una llamada a una API Rest antes de mostrar los datos. 
        -Funcionan devolviendo una Promise 
        que se resuelve cuando el elemento consultado se renderiza en el DOM y, 
        por tanto, 
        la función callback que lleva a cabo la prueba unitaria 
        debe identificarse como async mientras que el método .findByX 
        debe ir precedido de await.

        -Continuando con el ejemplo anterior, 
        podríamos querer validar que, efectivamente, 
        el texto del encabezado cambia al hacer click en el botón. 
       -En este ejemplo, queremos confirmar que el h1 mostrará el texto Adiós 
       después de que se pulse el botón.

        import App from './components/App';
        import { render, screen } from '@testing-library/react';

        test('Debe mostrarse "¡Chau 👋!"', async () => {

            // Renderizamos
            render(<App />);

            // Obtenemos el botón
            const button = screen.getByRole('button');

            // Hacemos click en el botón
            userEvent.click(button); // esto lo aprenderemos pronto 🙂!

            // Esperamos a que aparezca "¡Chau 👋!"
            const header = await screen.findByText('¡Chau 👋!');

            // Verificamos que el nodo exista
            expect(header).toBeInTheDocument();
        });

        -En este ejemplo, .findByText() nos permite esperar a que el texto renderice.
        -⚠️ Hemos usado userEvent para imitar el click en el botón.
        -Más adelante aprenderemos a usar esta biblioteca.
        -React Testing Library tiene un montón de selectores, 
        pero en lugar de revisarlos y memorizarlos todos, 
        podemos ir a la documentación para encontrar el que mejor se adapte 
        a nuestras necesidades.


    Probando componentes:
        
    -Veamos un ejemplo con el comparador toBeDisabled() utilizado para comprobar que
    nuestro button esté deshabilitado.

        import {render} from '@testing-library/react';
        import '@testing-library/jest-dom';

        const Button = () => {
            return <button type="submit" disabled>Enviar</button>
        };
        
        test('El botón debería mostrarse deshabilitado', () => {
        
            // Renderizamos el componente
            render(<Button/>);
        
            // Obtenemos el elemento <button>Enviar</button>
            const button = screen.getByRole('button');
        
            // Verificamos que está deshabilitado
            expect(button).toBeDisabled();

        });

    Tip:

    -Hay muchos comparadores disponibles, por lo que, otra vez, es una buena
    idea dar un vistazo a la documentación de jest-dom para conocer las opciones.

*/