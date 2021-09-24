const express = require("express");
const app = express();
const apiRouter = require('./src/routes/apiRouter');

app.use(express.json());

app.use('/', apiRouter);

app.listen(4000, () => console.log('App listening on port 4000'));
