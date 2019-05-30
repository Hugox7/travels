const { Model } = require('./_connection');

class Spendings extends Model {

    static get tableName() {
        return 'spendings';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'name',
                'price',
                'paid',
                'idTravel',
                'idUser',
                'idSpendingType',
            ],

            properties: {
                id:             { type: 'integer' },
                name:           { type: 'string' },
                price:          { type: 'float' },
                comment:        { type: 'string' },
                file:           { type: 'string' },
                paid:           { type: 'float' },
                idTravel:       { type: 'float' },
                idUser:         { type: 'float' },
                idSpendingType: { type: 'float' },
            }
        }
    }

    static get relationMappings() {

        const Travels = require('./travels');
        const SpendingTypes = require('./spendingTypes');
        const Users = require('./users');

        return {
            travel: {
                relation: Model.BelongsToOneRelation,
                modelClass: Travels,
                join: {
                    from: 'spendings.idTravel',
                    to: 'travels.id',
                },
            },
            spendingType: {
                relation: Model.BelongsToOneRelation,
                modelClass: SpendingTypes,
                join: {
                    from: 'spendings.idSpendingTypes',
                    to: 'spendingTypes.id',
                },
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: 'spendings.idUser',
                    to: 'users.id',
                },
            },
        }
    }

}

module.exports = Spendings;