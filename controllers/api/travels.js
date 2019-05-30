const Travels = require('../../models/travels');

const list = async (req, res) => {

    try {
        const travels = await Travels
            .query();

        return res.status(200).send(travels);

    } catch (error) {
        return res.status(500).send(error);
    }

}

const read = async (req, res) => {

    const { id } = req.params;

    try {
        const travel = await Travels
            .query()
            .findById(id)
            .first();
        
        if (travel) {
            return res.status(200).send(travel);
        } else {
            return res.status(404).send("Travel doesn't exist");
        }

    } catch (error) {
        return res.status(500).send(error);
    }

}

const create = async (req, res) => {

    const { name, picture, description, startDate, endDate } = req.body;

    if (!name || !startDate || !endDate) {
        return res.status(400).send('Missing parameters');
    }

    try {
        const travel = await Travels
            .query()
            .insert({
                name,
                picture,
                description,
                startDate,
                endDate,
            });

        return res.status(201).send(travel);

    } catch (error) {
        return res.status(500).send(error);
    }

}

const update = async (req, res) => {

    const { name, picture, description, startDate, endDate } = req.body;
    const { id } = req.params;

    try {
        const travel = await Travels
            .query()
            .patch({
                name: name,
                picture: picture,
                description: description,
                startDate: startDate,
                endDate: endDate,
            })
            .where('id', '=', id);
         
        if (travel) {
            return res.status(201).send('Travel updated successfully')
        } else {
            return res.status(404).send('Travel not found');
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