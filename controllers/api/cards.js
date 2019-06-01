const Cards = require('../../models/cards');

const list = async (req, res) => {

    try {
        const cards = await Cards
            .query();

        return res.status(200).send(cards);

    } catch (error) {
        return res.status(500).send(error);
    }

}

const read = async (req, res) => {

    const { id } = req.params;

    try {

        const card = await Cards    
            .query()
            .findById(id)
            .first();

        if (!card) {
            return res.status(404).send('Card not found');
        } else {
            return res.status(200).send(card);
        }

    } catch (error) {
        return res.status(500).send(error);
    }

}

const create = async (req, res) => {

    const name = req.body.name;

    if (!name) {
        return res.status(400).send('Missing parameter');
    }

    try {

        const card = await Cards
            .query()
            .insert({
                name,
            });
        
        return res.status(201).send(card);

    } catch (error) {
        return res.status(500).send(error);
    }

}

const update = async (req, res) => {

    const { id } = req.params;
    const { name } = req.body;

    try {

        const card = await Cards
            .query()
            .patch({
                name,
            })
            .where('id', '=', id);

        if (card) {
            return res.status(201).send(card);
        } else {
            return res.status(404).send('Card not found');
        }

    } catch (error) {
        return res.status(500).send(error);
    }

}

module.exports = {
    list,
    read,
    create,
    update,
}