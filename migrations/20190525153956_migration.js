
exports.up = function(knex, Promise) {

    return Promise.all([
        knex.schema.createTable('travels', (t) => {
            t.increments('id').primary();
            t.string('name').notNullable();
            t.string('picture').nullable();
            t.string('description').nullable();
            t.string('startDate').notNullable();
            t.string('endDate').notNullable();
        }),
        knex.schema.createTable('spendings', (t) => {
            t.increments('id').primary();
            t.string('name').notNullable();
            t.float('price').notNullable();
            t.string('comment').nullable();
            t.string('file').nullable();
            t.float('paid').notNullable();
            t.integer('idTravel').unsigned().notNullable().references('id').inTable('travels');
            t.integer('idUser').unsigned().notNullable().references('id').inTable('users');
            t.integer('idSpendingType').unsigned().notNullable().references('id').inTable('spendingTypes');
        }),
        knex.schema.createTable('spendingTypes', (t) => {
            t.increments('id').primary();
            t.string('name').notNullable();
        }),
        knex.schema.createTable('users', (t) => {
            t.increments('id').primary();
            t.string('name').notNullable();
        }),
        knex.schema.createTable('cards', (t) => {
            t.increments('id').primary();
            t.string('name').notNullable();
        }),
        knex.schema.createTable('userHasCards', (t) => {
            t.increments('id').primary();
            t.integer('idUser').unsigned().notNullable().references('id').inTable('users');
            t.integer('idCard').unsigned().notNullable().references('id').inTable('cards');
        }),
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('fights'),
    knex.schema.dropTable('fighters'),
    knex.schema.dropTable('types'),
  ])
};
