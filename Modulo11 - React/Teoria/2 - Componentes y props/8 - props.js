/*

    *¿Que son las props?: 

        -Son entradas de un componente de React.
        -Representan información que es pasada desde un componente padre a un componente hijo. 
        -Pueden recibir propiedades como parámetros para poder insertar valores y eventos en el HTML.
    
        Acepta un solo argumento de objeto “props”:
        function Bienvenido(props) { .. }
    
    *Desestructuración de props:

        function Bienvenido({nombre, email}) { .. } 
    
    *Implementación de props:

        -Las propiedades de un componente reciben sus respectivos valores, cuando el componente es invocado por la aplicación
        
        <Bienvenido nombre = "Victor Luis" />
        
*/