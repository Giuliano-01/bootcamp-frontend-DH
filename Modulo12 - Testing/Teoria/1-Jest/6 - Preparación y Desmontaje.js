/*

    -Si necesitamos realizar algún trabajo de configuración 
    antes de que se ejecuten las pruebas o después de que se ejecuten. 
    Jest nos proporciona funciones de ayuda para manejar estos casos.

    Repetir la configuración para muchas pruebas:
        Ej.
        
        -Debe ser llamado antes de cada test
            beforeEach(() => {
              initializeCityDatabase();
            });
        -Debe ser llamado despues de cada test
            afterEach(() => {
              clearCityDatabase();
            });
        
        -Pueden manejar código asíncrono de la misma manera que los tests. 
        -Por ejemplo, si initializeCityDatabase() devolviera una promesa
        que resolviera cuando la base de datos fuera inicializada, 
        querríamos devolver esa promesa:

            beforeEach(() => {
              return initializeCityDatabase();
            });

    Configuración por única vez:

        -En algunos casos, sólo necesitamos hacer la configuración una vez, 
        al principio de un archivo. 
        -Esto puede ser especialmente molesto cuando la configuración es asíncrona, 
        por lo que no se puede hacer inline. 
        -Jest nos proporciona beforeAll y afterAll para manejar esta situación.
        
        -Por ejemplo, si initializeCityDatabase y clearCityDatabase 
        devolvieran promesas, 
        y la base de datos de ciudades pudiera ser reutilizada entre pruebas, 
        podríamos cambiar nuestro código de prueba a:

            beforeAll(() => {
              return initializeCityDatabase();
            });

            afterAll(() => {
              return clearCityDatabase();
            });

            test('Vienna está en la DB', () => {
              expect(isCity('Vienna')).toBeTruthy();
            });

            test('Villa Mercedes está en la DB', () => {
              expect(isCity('Villa Mercedes')).toBeTruthy();
            });
 
 

    Scoping:

        -Por defecto, los bloques beforeAll y afterAll 
        se aplican a todas las pruebas de un archivo, 
        -Pero también se pueden agrupar las pruebas mediante un bloque describe, 
        de manera que los bloques beforeAll y afterAll
        sólo se aplican a las pruebas dentro de ese bloque.

        -Supongamos que no sólo tenemos una base de datos de ciudades, 
        sino también de alimentos. 
        -Podríamos hacer una configuración diferente para las distintas pruebas:

            // Aplica a todos los test
            beforeEach(() => {
              return initializeCityDatabase();
            });

            test('Vienna está en la DB', () => {
              expect(isCity('Vienna')).toBeTruthy();
            });

            test('Villa Mercedes está en la DB', () => {
              expect(isCity('Villa Mercedes')).toBeTruthy();
            });

            describe('relacionar las ciudades con comida', () => {

                // Aplica solo a los test dentro de este bloque

                beforeEach(() => {
                  return initializeFoodDatabase();
                });
              
                test('Vienna ❤️ pan dulce', () => {
                  expect(isValidCityFoodPair('Vienna', 'Schnitzel de     Viena')).toBe(true);
                });
              
                test('Villa Mercedes ❤️ asado', () => {
                  expect(isValidCityFoodPair('Villa Mercedes', 'Asado')).toBe(true);
                });
                
            });

        -El beforeEach de nivel superior se ejecuta antes del beforeEach 
        dentro del bloque describe.


    Orden de ejecución de los bloques:

        -Jest ejecuta todos los manejadores de descripción 
        en un archivo de prueba antes de ejecutar cualquiera de las pruebas. 
        -Esta es otra razón para hacer 
        la configuración y el desmontaje dentro de los manejadores before* y after* 
        en lugar de dentro de los bloques describe.
        -Una vez que los bloques describe se han completado, 
        Jest ejecuta todas las pruebas en serie 
        en el orden en que se encontraron en la fase de recopilación, 
        esperando a que cada una termine antes de seguir adelante.

    Consejos Generales:
        
        -Si una prueba está fallando, 
        una de las primeras cosas a comprobar debería ser 
        si la prueba está fallando cuando es la única prueba que se ejecuta. 
        -Para ejecutar sólo un test con Jest, 
        podemos cambiar temporalmente ese comando test por test.only:

            test.only('esta será la única prueba que se ejecutará', () => { 
                expect(true).toBe(false); 
            });

            test('este test no se ejecutará', () => { 
                expect('A').toBe('A'); 
            });


*/