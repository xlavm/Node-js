const User = require('../models/user.model');
//JWT for Security
const jwt = require('jsonwebtoken')

process.env.SECRET_KEY = 'secret'

exports.create = function (req, res) {
    User.findOne({
        where: {
            user: req.body.user
        }
    }).then(user => {
        if (user) { res.json('User already exists in the DB') }
        else {
            const userNew = new User(req.body);
            User.create(userNew.dataValues).then(result => {
                if (result) {
                    res.json('User Created Successfully!')
                } else {
                    res.json('There was an Error Creating the User')
                }
            })
        }
    })
};

exports.update = function (req, res) {
    const userNew = new User(req.body);
    User.findOne({
        where: {
            id: userNew.id
        }
    }).then(user => {
        if (user) {
            User.update(userNew.dataValues, { where: { id: userNew.id, } }).then(result => {
                if (result) {
                    res.json('User Updated successfully!')
                } else {
                    res.json('There was an Error Updating User')
                }
            })
        } else {
            res.json('User does not exist in the DB')
        }
    })
};

exports.delete = function (req, res) {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        if (user) {
            User.destroy({
                where: {
                    id: req.params.id
                }
            }).then(result => {
                if (result) {
                    res.json('User removed successfully!')
                } else {
                    res.json('There was an Error Deleting User')
                }
            })
        } else {
            res.json('User does not exist in the DB')
        }
    })

};

exports.findAll = function (req, res) {
    User.findAll().then(user => {
        if (user) {
            res.json(user)
        } else {
            res.json('No Users')
        }
    })
};

exports.findOne = function (req, res) {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        if (user) {
            res.json(user)
        } else {
            res.json('User does not exist in the DB')
        }
    })
};

exports.findForUsername = function (req, res) {
    User.findOne({
        where: {
            user: req.params.username
        }
    }).then(user => {
        if (user) {
            res.json(user)
        } else {
            res.json('User does not exist in the DB')
        }
    })
};

exports.login = function (req, res) {
    User.findOne({
        where: {
            user: req.body.user,
            pass: req.body.pass
        }
    })
        .then(user => {
            if (user) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.json({ token: token })
            } else {
                res.json('Incorrect Username or Password')
            }
        })
        .catch(err => {
            res.json('error: ' + err)
        })
};