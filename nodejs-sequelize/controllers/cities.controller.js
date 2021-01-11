const Cyties = require('../models/cities.model');

exports.findAll = function (req, res) {
    Cyties.findAll().then(cities => {
        if (cities) {
            res.json(cities)
        } else {
            res.json('No Cities')
        }
    })
};

exports.create = function (req, res) {
    const citiesNew = new Cyties(req.body);
    Cyties.create({
        name: citiesNew.name
    }).then(result => {
        if (result) {
            res.json('City Created Successfully!')
        } else {
            res.json('There was an Error Creating the City')
        }
    })
};


exports.findOne = function (req, res) {
    Cyties.findOne({
        where: {
            id: req.params.id
        }
    }).then(cities => {
        if (cities) {
            res.json(cities)
        } else {
            res.json('City does not exist in the DB')
        }
    })
};


exports.update = function (req, res) {
    const citiesNew = new Cyties(req.body);
    Cyties.findOne({
        where: {
            id: citiesNew.id,
        }
    }).then(cities => {
        if (cities) {
            Cyties.update({
                name: citiesNew.name
            }, {
                where: {
                    id: citiesNew.id,
                }
            }).then(result => {
                if (result) {
                    res.json('City Updated successfully!')
                } else {
                    res.json('There was an Error Updating City')
                }
            })
        } else {
            res.json('City does not exist in the DB')
        }
    })
};


exports.delete = function (req, res) {
    Cyties.findOne({
        where: {
            id: req.params.id
        }
    }).then(cities => {
        if (cities) {
            Cyties.destroy({
                where: {
                    id: req.params.id
                }
            }).then(result => {
                if (result) {
                    res.json('City removed successfully!')
                } else {
                    res.json('There was an Error Deleting City')
                }
            })
        } else {
            res.json('City does not exist in the DB')
        }
    })

};