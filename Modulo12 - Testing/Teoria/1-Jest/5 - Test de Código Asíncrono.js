/*

    Si tenemos código que se ejecuta de forma asíncrona, 
    Jest debe saber cuándo ha terminado de ejecutarse el código de prueba, 
    antes de poder pasar a otro test.

    -Callbacks:
        Ej.
            test('el texto es tarea cumplida', done => { 
                function callback(data) { 
                    try { 
                        expect(data).toBe('tarea cumplida'); 
                        done(); 
                    } catch (error) { 
                        done(error); 
                    } 
                } 
                fetchData(callback); 
            });
        -fetchData(callback) que trae algunos datos 
        y llama a callback(data) cuando termina 
        y queremos comprobar que devuelve 'tarea cumplida'.
    
    -Promesas:
        Ej.
            test('el texto es tarea cumplida', () => { 
                return fetchData().then(data => { 
                    expect(data).toBe('tarea cumplida'); 
                }); 
            });

        -Podemos devolver una promesa desde el test, 
        y Jest esperará a que esa promesa se resuelva. 
        -Si se rechaza la promesa, la prueba fallará automáticamente.
        -Es importante que nos aseguremos de devolver la promesa: 
        si olvidamos este return, 
        el test se completará antes que la promesa devuelta de fetchData resuelva 
        y then() ejecutará el callback.

       -Si esperamos que una promesa sea rechazada, 
       entonces usamos el método catch y añadimos expect.assertions 
       para verificar que un cierto número de afirmaciones están siendo chequeadas. 
       De lo contrario, una promesa cumplida no hará que el test falle.
        Ej.
            test('el texto es tarea cumplida', () => { 
                expect.assertions(1); 
                return fetchData().catch(e => expect(e).toMatch('error')); 
            });
    
    -Resolves/Rejects:
        Ej.
            test('el texto es tarea cumplida', () => { 
                return expect(fetchData()).resolves.toBe('tarea cumplida'); 
            });
        -También podemos utilizar el matcher .resolves en nuestra declaración de expect 
        y Jest esperará a que esa promesa se resuelva. 
        -Si se rechaza la promesa, la prueba fallará automáticamente.

        -Si esperamos que la promesa sea rechazada usamos el matcher rejects 
        en reemplazo de resolves. 
        Si se cumple la promesa, el test fallará automáticamente.
            test('the fetch fails with an error', () => { 
                return expect(fetchData()).rejects.toMatch('error'); 
            });


    -Async/Await:
        Ej.
            test('el texto es tarea cumplida', async () => { 
                const data = await fetchData(); 
                expect(data).toBe('tarea cumplida'); 
            }); 
        -Como alternativa para escribir un test asíncrono. }
        -Sólo necesitamos usar la palabra clave async al frente de la función pasada al test. 
        
 
            test('the fetch fails with an error', async () => { 
                expect.assertions(1); 
                try { 
                    await fetchData(); 
                } catch (e) { 
                    expect(e).toMatch('error'); 
                } 
            });

        -Podemos combinar async y await con resolves o rejects.

            test('the data is peanut butter', async () => { 
                await expect(fetchData()).resolves.toBe('peanut butter'); 
            }); 
 
            test('the fetch fails with an error', async () => { 
                await expect(fetchData()).rejects.toMatch('error'); 
            });

        -En estos casos, async y await son simplemente una mejora sintáctica 
        para la misma lógica usada en los ejemplos de las promesas.
        -Ninguna de estas formas es particularmente superior a las demás, 
        y se pueden mezclar y combinar dentro de un proyecto o incluso en un solo archivo.


*/