const { Model } = require('./_connection');

class Users extends Model {

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
                firstName:      { type: 'string' },
                lastName:       { type: 'string' },
                email:          { type: 'string' },
                password:       { type: 'string' },
            }
        }
    }

    static get relationMappings() {

        const Spendings = require('./spendings');
        const Cards = require('./cards');

        return {
            types: {
                relation: Model.HasManyRelation,
                modelClass: Spendings,
                join: {
                    from: 'users.id',
                    to: 'spendings.idUser',
                },
            },
            cards: {
                relation: Model.ManyToManyRelation,
                modelClass: Cards,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'userHasCards.idUser',
                        to: 'userHasCards.idCard',
                        modelClass: UserHasCards,
                    },
                    to: 'cards.id',
                },
            },
        }
    }

}

module.exports = Users;