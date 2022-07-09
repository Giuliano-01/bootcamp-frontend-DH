/*

    *Componente stateless o funcional:

        Se llaman componentes stateless porque internamente implementan un
        return con lógica sencilla que entrega una estructura HTML.
        Sin estado.

    *Crear un componente

        Para iniciar la creación de un componente, primero debemos importar React y
        asegurarnos de que estamos exportando el componente que vamos a querer
        implementar.

        // en index.js
        import React, {Component} from "react";
        // en Navbar.js
        export default Navbar;

    *Implementar un componente

        Debemos crear un archivo con extensión .js con el nombre de la función que llevará dentro. 
        En este caso: /src/components/Navbar.js

        import Navbar from "./components/Navbar.js";
        function App() {

            return (
                <div className=“App”>
                 <Navbar />
                </div>
            );
        }
        
*/