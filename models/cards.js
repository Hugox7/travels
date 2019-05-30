const { Model } = require('./_connection');

class Cards extends Model {

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

        const Users = require('./users');
        const UserHasCards = require('./userHasCards');

        return {
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: Users,
                join: {
                    from: 'cards.id',
                    through: {
                        from: 'userHasCards.idCard',
                        to: 'userHasCards.idUser',
                        modelClass: UserHasCards,
                    },
                    to: 'users.id',
                },
            },

        }
    }

}

module.exports = Cards;