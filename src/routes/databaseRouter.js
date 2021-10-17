const express = require('express');
const router = express.Router();
const checkJwt = require('../middleware/jwtAuth');
const databaseController = require('../controllers/databaseController');

router.route('/')
    .get(checkJwt, databaseController.getFavourites)
    // .post(jwtAuth, databaseController.addFavourite)

module.exports = router;