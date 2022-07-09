/*

Testeando componentes interactivos:

    -Para testear este tipo de componentes, aplicaremos lo aprendido con userEvent.


PRACTICA: 
    
    Vamos a escribir algunas pruebas para nuestro ejemplo de useHover 
    para imitar las interacciones, que aprendimos con Custom Hooks.

    Para poder trabajar con el ejemplo de base, es necesario descargar el proyecto. 
    Se encuentra disponible en Play Ground.
    
    Vamos a crear un archivo App.test.js 
    y vamos a importar userEvent desde @testing-library/user-event. 
    
    Nuestro archivo tendrá dos pruebas: 
        por un lado vamos a imitar el evento mouse over 
        y luego vamos a imitar el evento mouse out.

        . . .

        test('Hover' , async () => {
          render(<App/>); 
          . . .
        });

        test('Unhover' , () => {
          render(<App/>); 
          . . .
        });
 
    En el primer test, para probar que mouse over funciona correctamente, 
    debemos validar que el div con la clase hoverable muestra ✅ 
    (emoji de marca de verificación) cuando el mouse se posiciona encima. 
    
    Pero, dado que la existencia de una clase es parte de la implementación, 
    no sería correcto buscar un elemento por su clase. 
    En su lugar, le hemos asignado un data-testid con valor hoverable, 
    que podemos usar para obtener el elemento.

    Escribe el código necesario dentro de la prueba Hover para validar 
    este caso usando userEvent.


    En el segundo test del archivo App.test.js vamos a imitar el comportamiento inverso: 
    deseamos verificar que cuando el mouse se encuentra fuera de nuestro 
    elemento hoverable, se renderiza ❎ (emoji de cruz).

    Escribe el código necesario dentro de la prueba Unhover 
    para validar este caso usando userEvent.


    Como último paso, probemos qué resultados obtenemos al hacer npm test.

*/