//dependencias
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
//rutas
const home = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");
const characterRoutes = require("./routes/characterRoutes");

//config
app.set("view engine", "ejs");
app.set("views", "./views/pages");

//middlewares globales
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/", userRoutes) //entra a la ruta de productos a partir de /register
app.use("/home", home);
app.use("/characters", characterRoutes);

//middleware error 404
app.use((req,res,next)=>{
    res.status(404).send("ERROR 404");
    next();
});

//server
app.listen(PORT, ()=>{
    console.log(`Servidor levantado en ${PORT}`);
});