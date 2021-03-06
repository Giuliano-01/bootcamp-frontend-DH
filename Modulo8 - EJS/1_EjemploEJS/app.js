const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT||8080;


/*importo el js para manejar las rutas*/
const mainRoutes = require('./routes/mainRoutes');


/*Son archivos que pueden ser accedidos de manera publica sin tener que solicitar los mismos desde un request*/
app.use(express.static(path.join(__dirname,"./public")));
/*Indicarle que motor de vista usaremos*/
app.set('view engine', 'ejs');
/*indica donde esta las vistas (si se llama views no hace falta)*/
app.set('views','./views');
/*indica donde se manejan las rutas*/
app.use('/', mainRoutes);

express().use(express.json());
express().use(express.urlencoded({ extended: true }));



app.listen(PORT, ()=>{
    console.log(`servidor levantado en el puerto: ${PORT}`);
});

