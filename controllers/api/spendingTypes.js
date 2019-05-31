const SpendingTypes = require('../../models/spendingTypes');

const list = async (req, res) => {

    try {
        const spendingTypes = await SpendingTypes
            .query();

        return res.status(200).send(spendingTypes);
    } catch (error) {
        return res.status(500).send(error);
    }
}

const read = async (req, res) => {

    const { id } = req.params;

    try {
        const spendingType = await SpendingTypes
            .query()
            .where('id', '=', id)
            .first();
        
        if (spendingType) {
            return res.status(200).send(spendingType);
        } else {
            return res.status(404).send("spendingType not found");
        }

    } catch (error) {
        return res.status(500).send(error);
    }

}

const create = async (req, res) => {

    const { name } = req.body;

    if (!name) {
        return res.status(400).send('Missing parameter');
    }

    try {
        const spendingType = await SpendingTypes
            .query()
            .insert({
                name,
            });

        return res.status(201).send(spendingType);
    } catch (error) {
        return res.status(500).send(error);
    }
}

const update = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    if (!name) {
        return res.status(400).send('Missing parameter');
    }

    try {
        const spendingType = await SpendingTypes
            .query()
            .patch({
                name,
            })
            .where('id', '=', id);
    
        if (spendingType) {
            return res.status(201).send(spendingType);
        } else {
            return res.status(404).send('spendingType not found');
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