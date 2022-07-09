/*

*Imitando interacciones:
    -Hemos aprendido a consultar y obtener los nodos del DOM de nuestros componentes, 
    -Y en uno de los ejemplos usamos por primera vez userEvent para imitar un click. 

    1 - recurrimos a una biblioteca: 
        
        npm install --save-dev @testing-library/user-event

    (exporta un único objeto, userEvent, que puede ser importado)

    2 - importamos el objeto userEvent:

        import { userEvent } from '@testing-library/user-event';
    
    -El objeto userEvent contiene muchos métodos incorporados 
    -Que nos permiten imitar las interacciones, con una sintaxis como la siguiente:

        userEvent.tipoDeInteracción(nodoConElQueSeInteractúa);

    

*EJEMPLO: 
    
    -Imitaremos la acción de completar un input de texto, acá nuestro componente:

        const GreetingForm = () => {

            return(
                <form>
                <label htmlFor="greeting"> Saludo: </label>
                <input type="text" id="greeting" />
                <input type="submit" value="Enviar" />
                </form>
            );
        };
    
    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import '@testing-library/jest-dom';

    test('Debe mostrarse "Buen día!"', () => {

        // Renderizamos el componente
        render(<GreetingForm />);

        // Obtenemos el input
        const textbox = screen.getByRole('textbox');
        
        // Simulamos la escritura "Buen día!"
        userEvent.type(textbox, 'Buen día!');
        
        // Verificamos que el input tiene el texto 'Buen día!'
        expect(textbox).toHaveValue('Buen día!');

    });

*Hint: 
    -userEvent también tiene tiene métodos para simular clicks, hover y otros
    eventos de mouse entre muchos otros. Es recomendable leer la
    documentación para encontrar el método que mejor se adapte a nuestras
    necesidades.



    //aria-label:
    necesitamos para que funcione name: "greeting"

    pero con un input podemos usar getByLabelText("name")
    el input que coincida con el label que se relaciona

    getByDisplayValue("Buen día!")
*/