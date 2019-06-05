let swag = require('../models/swag');

module.exports = {
    read: (req,res,next) => {
        res.send(swag).status(200);
    }
}