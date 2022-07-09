//dependencias
let express = require('express');
let router = express.Router(); //genero una instancia del rutas
//controller
const {getCharByID, getCharByName} = require('../controllers/searchController');

//rutas
router.get("/char/:id?", getCharByID);
router.get("/list/:name?", getCharByName);



module.exports = router;