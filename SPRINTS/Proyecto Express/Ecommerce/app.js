//dependencias
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;
//rutas
const homeRoutes = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/userRoutes');
const cartRoutes = require('./src/routes/cartRoutes');
const productsRoutes = require('./src/routes/productsRoutes');
//api
const apiRoutes = require('./src/api/apiRoutes');

//config
app.set('view engine', 'ejs');
app.set('views','./src/views');

//middlewares
app.use(express.static(path.join(__dirname,"./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//rutas
app.use('/', homeRoutes);
app.use('/products', productsRoutes);
app.use('/', cartRoutes);
app.use('/', userRoutes);
//api
app.use('/api', apiRoutes);//api

//404
app.use((req,res,next)=>{
    res.status(404).render('pages/404page');
    next();
});


//server
app.listen(PORT, ()=>{});

