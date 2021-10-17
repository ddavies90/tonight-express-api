const express = require('express');
const router = express.Router();
const databaseController = require('../controllers/databaseController');

router.route('/')
    .get(databaseController.getFavourites)
    // .post(jwtAuth, databaseController.addFavourite)

module.exports = router;