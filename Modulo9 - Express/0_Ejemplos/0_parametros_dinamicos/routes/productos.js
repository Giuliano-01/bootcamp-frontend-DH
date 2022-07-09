let express = require('express');
let router = express.Router();

const productosController = require('../controllers/productosController');


app.get("/:idProducto", productosController.detalle);

app.get("/:idProducto/comentarios", productosController.comentarios );

app.get("/:idProducto/comentarios/:idComentario?", productosController.detalleComentarios);