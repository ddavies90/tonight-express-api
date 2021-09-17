const serverless = require("serverless-http");
const express = require("express");
const app = express();
const apiRouter = require('./src/routes/apiRouter');

app.use(express.json());

app.use('/', apiRouter);

module.exports.api = serverless(app);
