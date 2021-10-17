const express = require('express');
const router = express.Router();
const jwtAuth = require('../middleware/jwtAuth');
const databaseController = require('../controllers/databaseController');

router.route('/')
    .get(databaseController.getFavourites)
    .post(jwtAuth, databaseController.addFavourite)