const knex = require('knex');
const { Model } = require('objection');
const database = require('../knexfile');

const knexConnection = knex(database);
Model.knex(knexConnection);

module.exports = { Model, knex };
