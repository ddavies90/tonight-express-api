const serverless = require("serverless-http");
const express = require("express");
const app = express();
const cors = require('cors');
const apiRouter = require('./src/routes/apiRouter');
const databaseRouter = require('./src/routes/databaseRouter');

app.use(express.json());
app.use(cors());

app.use('/user', databaseRouter);
app.use('/', apiRouter);


// module.exports.api = serverless(app);

app.listen(3001, console.log('listening'));