const { Model } = require('./_connection');

class Travels extends Model {

    static get tableName() {
        return 'travels';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'name',
                'startDate',
                'endDate',
            ],

            properties: {
                id:             { type: 'integer' },
                name:           { type: 'string' },
                picture:        { type: 'string' },
                description:    { type: 'string' },
                startDate:      { type: 'string' },
                endDate:        { type: 'string' },
            }
        }
    }

    static get relationMappings() {

        const Spendings = require('./spendings');

        return {
            spendings: {
                relation: Model.HasManyRelation,
                modelClass: Spendings,
                join: {
                    from: 'travels.id',
                    to: 'spendings.idTravels'
                },
            },
        }
    }

}

module.exports = Travels;