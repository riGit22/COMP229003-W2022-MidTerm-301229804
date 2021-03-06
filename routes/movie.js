var express = require('express');
var router = express.Router();

let movieController = require('../controllers/movie');

// Router for lists movies function
router.get('/list', movieController.movieList);

// Router for movie details function
router.get('/details/:id', movieController.details);

// Routers for edit functions
router.get('/add_edit/:id', movieController.displayEditPage);
router.post('/add_edit/:id', movieController.processEditPage);

// Router for Delete function
router.get('/delete/:id', movieController.performDelete);

// Routers for Add functions
router.get('/add_edit', movieController.displayAddPage);
router.post('/add_edit', movieController.processAddPage);


module.exports = router;