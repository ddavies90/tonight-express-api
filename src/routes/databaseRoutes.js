const express = require('express');
const router = express.Router();
const jwtAuth = require('../middleware/jwtAuth');

router.route('/user')
    .get(jwtAuth, databaseController.getFavourites)
    .post(jwtAuth, databaseController.addFavourite)