//dependencias
let express = require('express');
let router = express.Router(); //genero una instancia del rutas
//controller
const {root} = require('../controllers/searchController');

//rutas
router.get("/", root);



module.exports = router;