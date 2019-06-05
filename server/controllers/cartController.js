let swag = require('../models/swag');

module.exports = {
    add: (req,res) => {
        let { user } = req.session
        if(req.params.id){
            let item = user.cart.find(item => {
                return item.id === req.params.id
            });
            if(!item){
                item = swag.find(item => +item.id === +req.params.id)
                user.cart.push(item);
                user.total += item.price
                
            }
            res.send(user).status(200);
        } else {
            res.send('invalid request (does not contain id)').status(500);
        }
        
    },

    delete: (req,res) => {
        let { user } = req.session
        if(req.params.id){
            let index = user.cart.findIndex(item => {
                return +item.id === +req.params.id
            });
            if(index != undefined){
                let item = user.cart.splice(index, 1);
                user.total = user.total - item[0].price;
                res.send(user).status(200);
            } else {
                res.send('item not found in cart').status(404);
            }
            
        } else {
            res.send('invalid request (does not contain id)').status(500);
        }
    },

    checkout: (req, res) => {
        let { user } = req.session;
        user.total = 0;
        user.cart = [];
        res.sendStatus(200);
    }
}