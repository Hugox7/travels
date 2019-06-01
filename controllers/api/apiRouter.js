require('dotenv').config();

const express = require('express');
const apiRouter = express.Router();

const api = {
    travels: require('./travels'),
    spendings: require('./spendings'),
    spendingTypes: require('./spendingTypes'),
    users: require('./users'),
    cards: require('./cards'),
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

//------------
// SpendingTypes
//------------

apiRouter.get('/types',             api.spendingTypes.list);
apiRouter.get('/types/:id',         api.spendingTypes.read);
apiRouter.post('/types',            api.spendingTypes.create);
apiRouter.patch('/types/:id',       api.spendingTypes.update);

//------------
// Users
//------------

apiRouter.get('/users',             api.users.list);
apiRouter.get('/users/:id',         api.users.read);
apiRouter.post('/users',            api.users.create);
apiRouter.patch('/users/:id',       api.users.update);

//------------
// Cards
//------------

apiRouter.get('/cards',             api.cards.list);
apiRouter.get('/cards/:id',         api.cards.read);
apiRouter.post('/cards',            api.cards.create);
apiRouter.patch('/cards/:id',       api.cards.update);

module.exports = apiRouter;