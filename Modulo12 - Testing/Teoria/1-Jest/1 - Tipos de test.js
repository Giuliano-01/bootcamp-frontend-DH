/*

    Partes de un TEST:
        - (arrange) Primero, nuestra app está en su estado original.
        - (act) Luego, sucede algo, generalmente un evento como un click o la introducción de info en un input,
        - (assert) A partir del cual podemos hacer una hipótesis o afirmación sobre el nuevo estado de la app y si se cumple la hipótesis, entonces nuestro test pasará.
    
    1-Pruebas Unitarias:
        -Verifica si una parte pequeña y aislada del código (unidad) 
        se comporta como se pretendía
        -Una prueba no es una prueba unitaria si:
            -Habla con la base de datos 
            (ya que depender de estructuras como la base de datos o el sistema de archivos las hace lentas.)
            -Se comunica a través de la red. 
            (Una prueba no debería empezar a fallar si antes no fallaba por ende no debería depender de dependencias externas.)
            -Toca el sistema de archivos 
            (porque si este tiene algún error podría trasladarse a nuestros tests.)
            -No puede ejecutarse al mismo tiempo que cualquiera de tus otras pruebas unitarias,
            -Tenemos que hacer cosas especiales en nuestro entorno para ejecutarlas.

    2-Pruebas de Integración:
        -Suelen implicar la comprobación de una funcionalidad concreta, 
        normalmente denominada módulo, que tiene dependencias de otra funcionalidad
        -Enfoques:
            -Enfoque ascendente: 
                Los tester se centran en la integración de los módulos más pequeños. 
                La principal ventaja de este enfoque es la posibilidad de fallar rápidamente, 
                ya que los errores en los módulos más pequeños son más fáciles de detectar 
                y más rápidos de solucionar.
            -Enfoque descendente: 
                Se da prioridad a los módulos más grandes y complejos, y se simulan los de menor nivel.
            -Enfoque Big Bang: 
                Todos los módulos se prueban juntos al mismo tiempo. 
                La detección de errores puede ser un poco más difícil en comparación con los otros enfoques, 
                pero en una aplicación pequeña puede ser una gran opción.

    3-Pruebas End to End (E2E)
        -Se busca probar el producto de la misma manera que lo experimenta una persona usuaria real.
            -Pruebas horizontales: 
                Replican los casos de uso típico de las aplicaciones 
                y los recorren de principio a fin. 
                (Por ejemplo el proceso de registro de un nuevo usuario.)
            -Pruebas Verticales: 
                Tienen como objetivo probar los componentes del sistema 
                siguiendo los datos a través de las capas de la interfaz de usuario, 
                la API y la base de datos. 
                (Por ejemplo el proceso de compra en un ecommerce.)

*/