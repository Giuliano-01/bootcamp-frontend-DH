/*

*Tests unitarios de hooks:

    -Los hooks no pueden ejecutarse fuera de los componentes. 
    -Pero por suerte, tenemos una biblioteca que nos ayuda en esta tarea. 
        
    Se llama react-hooks-testing-library, y la instalamos así:

        npm install --save-dev @testing-library/react-hooks

*Veamos cómo usarla con un ejemplo:
    
    1 - Hook a testear:

        import { useState, useCallback } from 'react'
 
        export default function useCounter() {

            const [count, setCount] = useState(0)
            const increment = useCallback(() => setCount((x) => x + 1), [])
            return { count, increment }

        }

    2 - Para poder probarlo, necesitamos renderizarlo fuera de un componente
        (pues no tiene sentido crear un componente sólo para poder testear este hook.)
    -El método renderHook de React Hooks Testing Library nos ayuda con esta tarea:
        
        import { renderHook } from '@testing-library/react-hooks'
        import useCounter from './useCounter'
 
        test('use counter', () => {

            //Renderizamos el hook
          	const { result } = renderHook(() => useCounter())
            
            // Esperamos que el conteo inicial sea 0, en coincidencia con el estado inicial.
        	expect(result.current.count).toBe(0);
        	
            //Esperamos que increment sea una función.
          	expect(typeof result.current.increment).toBe('function')
        
        })


        // Hasta acá, nuestra prueba verifica que el estado inicial del conteo sea 0 
        y que increment sea una función. 
        //Pero no prueba realmente la funcionalidad de nuestro contador. 
    
    3 - Podemos mejorar esta prueba llamando a la función increment 
        y validando que aumente el valor de count:

        import { renderHook, act } from '@testing-library/react-hooks'
        import useCounter from './useCounter'

        test('should increment counter', () => {

          const { result } = renderHook(() => useCounter())
        
          act(() => {
            result.current.increment()
          })
      
          expect(result.current.count).toBe(1)
        
        })

        //Ahora, luego de renderizar nuestro hook, invocamos al método increment 
        envuelto en la llamada a act, 
        // act simula cómo actuará nuestro hook en un navegador,
        permitiéndonos actualizar sus valores.
        //Después de llamar a increment, esperamos que el valor actual de count 
        refleje el incremento devuelto por el hook.



*Pasando Props:

    1 - A veces, un hook recibe info en las props para establecer un valor inicial. 

        import { useState, useCallback } from 'react'
 
        export default function useCounter(initialValue = 0) {

          const [count, setCount] = useState(initialValue)
          const increment = useCallback(() => setCount((x) => x + 1), [])
          return { count, increment }
        
        }

    2 - Entonces, en nuestra prueba, simplemente tenemos que pasar el valor de la prop 
    initialValue en la llamada al hook:
    
        import { renderHook, act } from '@testing-library/react-hooks'
        import useCounter from './useCounter'
 
        test('should increment counter from custom initial value', () => {

            const { result } = renderHook(() => useCounter(9000))
            
            act(() => {
              result.current.increment()
            })
        
            expect(result.current.count).toBe(9001)

        })

        //Estos son sólo algunos casos de testeo de hooks. 
        En la documentación oficial de React Hooks Testing Library, 
        hay ejemplos que cubren un amplio espectro de casos de uso.


*/