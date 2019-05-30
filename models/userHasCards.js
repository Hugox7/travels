const { Model } = require('./_connection');

class UserHasCards extends Model {

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
                'idUser',
                'idCard',
            ],

            properties: {
                id:             { type: 'integer' },
                idUser:         { type: 'integer' },
                idCard:         { type: 'integer' },
            }
        }
    }

}

module.exports = UserHasCards;