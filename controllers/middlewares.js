const Cors = require('cors');
const serverConfig = require('../knexfile');

const cors = Cors(serverConfig.cors);

const { API_KEY } = require('../config/constants')

const checkApiKey = (req, res, next) => {
    const apiKey = req.headers[ 'x-travels-api-key' ];

    if (!apiKey) throw new Error("API KEY required");
    if (apiKey !== API_KEY) throw new Error("Invalid API KEY");

    return next();
}

module.exports = {
    checkApiKey,
    cors,
}

