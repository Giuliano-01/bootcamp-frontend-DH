/*

    *Instalacion:

        npm install react-router-dom;

        import {BrowserRouter, Link, Route} from 'react-router-dom';

    *Componentes:

       -BrowserRouter:
        Este componente es el enrutador general y necesario 
        para administrar las rutas de nuestro proyecto. 
        Es como una envoltura de enrutación para nuestro proyecto.

        Se utiliza de la siguiente manera:

            ReactDOM.render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>,
                document.getElementById("root")
            );

        -Link:
        Este componente es el que define las rutas de nuestro proyecto. 
        Tiene como atributo el to=”/”, 
        que siempre va a llevar a alguna etiqueta <a>
        donde el to=”/” coincida con el href=”/”.
        
        Se implementa de la siguiente manera: 
        <Link to="/">Home</Link>
        // <a href="/">Home</a>

        -Routes / Route:
        Ambos buscan la similitud de rutas entre sí 
        hasta encontrar una que coincida para renderizar. 
        Cuando <Routes /> es renderizado, busca entre sus componentes hijos
        <Route />, hasta que las rutas coinciden y finalmente esa será renderizada.

        <Routes>
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/" element={<Inicio />} />
        </Routes>

*/