const swag = require('../models/swag');

module.exports = {
    search: (req,res) => {
        let rtnArr = swag.filter(item => item.category == req.query.category);
        if(!rtnArr || rtnArr.length < 1){
            rtnArr = swag;
        }

        res.send(rtnArr).status(200);
    }
}