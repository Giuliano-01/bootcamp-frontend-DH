/*
    *¿Por qué React?:

        Tanto React como Vue son parecidas - Angular es mas un framework que una libreria y pide poner cada cosa en su lugar especifico para que todo funcione.
        -React tiene un poco mas de libertad. Permite escribir todo el codigo html en archivos js llamados jsx
        -Es una biblioteca para JavaScript pensada para crear proyectos del lado del frontend. 
        -Usa reutilizacion de codigo (componentes)
        -No tiene nada que ver con backend, controladores, rutas, bases de datos, es 100% frontend

    *¿Cómo inició?:
        
        -Vio la luz en marzo de 2013 de la mano de Jordan Walke, Ingeniero de Software en Facebook. 
        -Escrita 100% en javascript
        -Su primera implementación fue en el timeline de Facebook, ya que en su momento buscaban una manera óptima y rápida de cargar los contenidos en su red social.

    *¿Cómo funciona?:

        -Esta construido en torno a hacer funciones que tomarán actualizaciones del estado de la aplicación y traducir esos cambios en una representacion virtual de la misma.
        -Siempre que react es iformado de un cambio de estado va a ejecutar todas las funciones necesarias para generar una nueva representacion virtual del documento lo que produce
        que ese resultado sea reflejado directamente en el DOM y por lo tanto la pagina muestre informacion actualizada.

        -Para que react pueda generar esos cambios: 
        -La libreria trabaja con un Virtual DOM que es una copia del DOM original y compararlas, 
        -Luego cuando cambia el estado de la aplicacion
        -Dicha copia sera actualizada. y asi sabe cual es la parte del DOM que debe actualizar y no actualizará la vista completa. 
        (La comparacion se llama diffing) 
        (La actualizacion se llama reconciliation)


*/