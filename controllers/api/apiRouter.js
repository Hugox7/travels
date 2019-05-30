require('dotenv').config();

const express = require('express');
const apiRouter = express.Router();

const api = {
    travels: require('./travels'),
    spendings: require('./spendings'),
}

apiRouter.get('/', (req, res) => {
    res.send(`API de Travels - ${process.env.NODE_ENV}`);
});

//------------
// Travels
//------------

apiRouter.get('/travels',           api.travels.list);
apiRouter.get('/travels/:id',       api.travels.read);
apiRouter.post('/travels',          api.travels.create);
apiRouter.patch('/travels/:id',     api.travels.update);

//------------
// Spendings
//------------

apiRouter.get('/spendings',         api.spendings.list);
apiRouter.get('/spendings/:id',     api.spendings.read);
apiRouter.post('/spendings',        api.spendings.create);
apiRouter.patch('/spendings/:id',   api.spendings.update);

module.exports = apiRouter;