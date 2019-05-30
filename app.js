require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const serverConfig = require('./knexfile');
const apiRouter = require('./controllers/api/apiRouter');

const app = express();
const PORT = serverConfig.port;
const middlewares = require('./controllers/middlewares')

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', middlewares.cors),
app.use('/api/', middlewares.checkApiKey, apiRouter);

app.get('/', (req, res) => {
    return res.status(200).send(`Travels Backend - ${process.env.NODE_ENV}`);
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is listening on ${PORT}`)
});