const express = require("express");
const app = express();
const apiRouter = require('./src/routes/apiRouter');

app.use(express.json());

app.use('/', apiRouter);

module.exports = app;
