/*

  *COMPARADORES:
  -Jest utiliza “matchers” para probar valores.
  -Para la lista completa, es buena idea consultar la API de expect.

    *Marcadores más comunes:
      
      -Matcher toBe:
        Ej.
          test('nombre del test', () => { 	
              expect(2 + 2).toBe(4);
          });

        -Usa Object.is para probar la igualdad exacta.
        -Object.is() determina si dos valores son iguales.

        -¿Cuando dos valores son iguales?:
          ambos son undefined
          ambos son null 
          ambos son true o false
          ambos son strings y tienen la misma longitud con los mismos carácteres
          ambos son el mismo objeto
          ambos son números y
            ambos +0 (mayores que 0)
            ambos -0 (menores que 0)
          ambos son NaN
          o 
          ambos no son cero o no son de tipo NaN y tienen el mismo valor

      -Matcher toEqual:
        Ej.
          test('asignación de un objeto', () => { 	
              const datos = {uno: 1}; 	
              datos['dos'] = 2;
              expect(datos).toEqual({uno: 1, dos: 2}); 
          });
        
        -Verifica recursivamente cada campo de un objeto o de un arreglo
        
      -Matcher not:
        Ej.
          test('agregando un número positivo que no sea 0', () => { 	
              for (let a = 1; a < 10; a++) { 		
                  for (let b = 1; b < 10; b++) { 			
                      expect(a + b).not.toBe(0); 		
                  } 	
              } 
          });

        -Podemos comprobar lo contrario de lo que espera el comparador.

      -Matchers de Veracidad:
        Ej.
            test('null', () => { 
              const n = null;                
              expect(n).toBeNull();          coincide solo con null
              expect(n).toBeDefined();       opuesto a toBeUndefined
              expect(n).not.toBeUndefined(); coincide solo con undefined
              expect(n).not.toBeTruthy();    coincide con lo que sea que el condicional if devuelva como verdadero
              expect(n).toBeFalsy();         coincide con lo que sea que el condicional if devuelva como falso
            }); 

        -A veces es necesario distinguir entre undefined, null, y false, 
        -Pero en otras ocasiones quizás nos sea útil tratar todos estos casos por igual. 
        -Jest contiene helpers que nos permitirán explicitar lo que queremos:
    
      -Matchers para números:
        Ej.
            test('dos más dos', () => { 
              const value = 2 + 2; 
              expect(value).toBeGreaterThan(3);
              expect(value).toBeGreaterThanOrEqual(3.5); 
              expect(value).toBeLessThan(5); 
              expect(value).toBeLessThanOrEqual(4.5); 

              // toBe y toEqual son equivalentes para números 
              expect(value).toBe(4); 
              expect(value).toEqual(4); 
            });

        -Igualdad de puntos flotantes. 
        -Porque podríamos no querer que una prueba 
        dependa de un pequeño error de redondeo.
          Ej.
            test('agregando números de punto flotante', () => { 
              const value = 0.1 + 0.2; 
              expect(value).toBe(0.3); 
              // ❎ No funcionará debido al error de redondeo. 
              expect(value).toBeCloseTo(0.3); 
              // ✅ Funciona. 
            });

      -Matchers de Cadenas de Texto:
        Ej.
            test('hay "stop" en Christoph', () => {
              expect('Christoph').toMatch(/stop/); 
            });
        
        -Podemos probar strings usando expresiones regulares con toMatch:
            test('no hay I en Team', () => { 
              expect('team').not.toMatch(/I/); 
            }); 
        -En una expresion regular /stop/i : la i significa 
        que la expresión es case insensitive.



      -Matchers para Arrays e Iterables:
        Ej.
            const personasDelEquipo = [ 'Walter Molina', 'Joaquín Lumelsky', 'Tobías Corradi', 'Olivia' ]; 
            test('Walter Molina se encuentra en el equipo', () => {
              expect(personasDelEquipo).toContain('Walter'); 
              expect(new Set(personasDelEquipo)).toContain('Walter'); 
            });

        -Podemos comprobar si un array o iterable 
        contiene un elemento en particular usando toContain:
 

      -Matchers para Excepciones
        Ej.
          function miFuncionQueFalla() { 
            throw new ConfigError('Estas usando el código incorrecto'); 
          } 

          test('La compilación de android va por buen camino', () => { 	
            // ⚠️Debemos envolver la función en otra para evitar que 
            // toThrow falle siempre. 
                    
            expect(() => miFuncionQueFalla()).toThrow(); // Verificamos si falla
            // Verificamos una excepción en particular 
            expect(() => miFuncionQueFalla()).toThrow(ConfigError); 
                    
            // Podemos testear el mensaje de error: 
            expect(() => miFuncionQueFalla()).toThrow('Usted está usando el código incorrecto'); // exacto 
            expect(() => miFuncionQueFalla()).toThrow(/Error/); // o con una expresión regular 
          });
        -Con Jest también podemos probar si una función lanza un error al ser invocada 
        usando toThrow.


Lider 
Lector 
Comparte pantalla
Explica la resolucion

Sala 5
Damian Perez Martin
Giulano De Palma
Erik Sucasaire
Sofia Garbett


funcion pura, siempre que pase x valores devuelve lo mismo
una funcion impura es una fetch que no se que va a devolver
o una que diga la hora porque siempre va a dar un valor distinto



utils.test.js

import { setAppData, getAppTitle } from './utils'; 

describe('utils', ()=>{
  
  beforeEach(()=>{
    setAppData();
  });
  
  test('renderiza correctamente el titulo',()=>{
    expect(getAppTitle()).toBe(' * Tareas Pendientes');
  })
  
})


npm run dev

*/