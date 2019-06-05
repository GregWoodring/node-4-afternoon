let users = require('../models/users');
let id = 1;

module.exports={
    login: (req, res) => {
        if(req.body && req.body.username && req.body.password){
            let user = users.find(item => 
                item.username === req.body.username && item.password === req.body.password)
            res.send(user).status(200);
        } else{
            res.sendStatus(500);
        }
    },
    register: (req,res) => {
        const { session } = req;
        const { username, password } = req.body;

        users.push({ id, username, password });
        id++;

        session.user.username = username;
        res.status(200).send(session.user);
    },
    signout: (req, res) => {
        req.session.destroy();
        res.status(200).send(req.session);

    },
    getUser: (req, res) => {
        const { session } = req;
        res.status(200).send(session.user);
    }
    
}


