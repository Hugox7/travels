const Users = require('../../models/users');
const UserHasCards = require('../../models/userHasCards');

const list = async (req, res) => {

    try {
        const users = await Users
            .query();

        return res.status(200).send(users);

    } catch (error) {
        return res.status(500).send(error);
    }
}

const read = async (req, res) => {

    const { id } = req.params;

    try {
        const user = await Users
            .query()
            .findById(id)
            .first();
        
        if (user) {
            return res.status(200).send(user);
        } else {
            return res.status(404).send('User not found');
        }

    } catch (error) {
        return res.status(500).send(error);
    }
}

const create = async (req, res) => {

    const { name, cards } = req.body;

    if (!name) {
        return res.status(400).send('Missing parameter');
    }

    try {
        const user = await Users 
            .query()
            .insertAndFetch({
                name,
            });
        
        // Attribution d'une ou plusieurs cartes déjà existantes - Non obligatoire
        if (cards.length) {
            for (card of cards) {
                await UserHasCards
                    .query()
                    .insert({
                        idUser: user.id,
                        idCard: card.idCard,
                    });
            }
        }

        return res.status(201).send(user);

    } catch (error) {
        return res.status(500).send(error);
    }
}

const update = async (req, res) => {

    const { name } = req.body;
    const { id } = req.params;

    try {
        const user = await Users
            .query()
            .patch({
                name,
            })
            .where('id', '=', id);

        

        if (user) {
            return res.status(201).send(user);
        } else {
            return res.status(404).send('User not found');
        }

    } catch (error) {
        return res.status(500).send()
    }

}

module.exports = {
    list,
    read,
    create,
    update,
}