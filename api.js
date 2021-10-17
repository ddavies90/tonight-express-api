const serverless = require("serverless-http");
const express = require("express");
const app = express();
const apiRouter = require('./src/routes/apiRouter');
const databaseRouter = require('./src/routes/databaseRouter');

app.use(express.json());

app.use('/user', databaseRouter);
app.use('/', apiRouter);


module.exports.api = serverless(app);

