const express = require('express');
const router = express.Router();
const checkJwt = require('../middleware/jwtAuth');
const databaseController = require('../controllers/databaseController');

router.route('/')
    .post(checkJwt, databaseController.addFavourite)
    .get(checkJwt, databaseController.getFavourites)

module.exports = router;