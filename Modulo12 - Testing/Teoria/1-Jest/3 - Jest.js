/*
    -¿Que es Jest?:
        -Un framework mantenido por facebook
        (npm install jest)
        -Ejecutor de pruebas que nos permite acceder al DOM 
        (A través de jsdom, una biblioteca que imita de forma aproximada cómo funciona el navegador.)
        -Sirve tanto para escribir los test como para ejecutarlos-
    
    -¿Como funciona Jest?:
        -Jest detecta automáticamente los archivos que sean de tipo .spec o .test 
        -También los que estén dentro de una carpeta llamada __tests__ 
        (dentro de src que sean del tipo .js)



    -Ejemplo práctico:

        1-Crear el archivo de test ya sea de tipo spec o test
        (o bien generar la carpeta __tests__). 
        
        2-Necesitamos testear esta función (en su respectivo archivo suma.js)
            
            function suma (a, b) {
                return a + b;
            }
            module.exports = suma; (la exportamos)

        3-Importamos la función en el archivo de test y generamos un test
            
            import suma from './suma';
            
            test('sumar 2 números', () => {
                expect(suma(1, 2)).toBe(3);
            });

        4-Correremos npm test en la terminal y Jest correrá todos los test que encuentre.
        Podemos tambien usar npm test "nombre archivo a testear en especifico"
*/