const { Model } = require('./_connection');

class SpendingTypes extends Model {

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
            ],

            properties: {
                id:             { type: 'integer' },
                name:           { type: 'string' },
            }
        }
    }

    static get relationMappings() {

        const Spendings = require('./spendings');

        return {
            types: {
                relation: Model.HasOneRelation,
                modelClass: Spendings,
                join: {
                    from: 'spendingTypes.id',
                    to: 'spendings.idSpendingType',
                },
            },
        }
    }

}

module.exports = SpendingTypes;