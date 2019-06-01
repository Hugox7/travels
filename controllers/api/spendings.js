const Spendings = require('../../models/spendings');

const list = async (req, res) => {

    try {
        const spendings = await Spendings
            .query();

        return res.status(200).send(spendings);

    } catch (error) {
        return res.status(500).send(error);
    }

}

const read = async (req, res) => {

    const { id } = req.params;

    try {
        const spending = await Spendings
            .query()
            .findById(id)
            .first();
        
        if (spending) {
            return res.status(200).send(spending);
        } else {
            return res.status(404).send("Spending doesn't exist");
        }

    } catch (error) {
        return res.status(500).send(error);
    }

}

const create = async (req, res) => {

    const { name, price, comment, file, paid, idUser, idTravel, date, idSpendingType } = req.body;

    if (!name || !price || !paid || !idUser || !idTravel || !idSpendingType || !date) {
        return res.status(400).send('Missing parameters');
    }

    try {
        const spending = await Spendings
            .query()
            .insert({
                name,
                price: parseFloat(price),
                comment,
                file,
                paid: parseInt(paid),
                date,
                idUser,
                idTravel,
                idSpendingType,
            });

        return res.status(201).send(spending);

    } catch (error) {
        return res.status(500).send(error);
    }

}

const update = async (req, res) => {

    const { name, price, comment, file, paid, idUser, idTravel, idSpendingType, date } = req.body;
    const { id } = req.params;

    try {
        const spending = await Spendings
            .query()
            .patch({
                name,
                price: parseFloat(price),
                comment,
                file,
                paid: parseInt(paid),
                date,
                idUser,
                idTravel,
                idSpendingType,
            })
            .where('id', '=', id);
         
        if (spending) {
            return res.status(201).send('Spending updated successfully')
        } else {
            return res.status(404).send('Spending not found');
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
