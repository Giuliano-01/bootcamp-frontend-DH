const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
//Rutas exigidas para la creación del CRUD
router.get('/movies/add', moviesController.add);

module.exports = router;