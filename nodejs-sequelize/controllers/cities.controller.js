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
    Cyties.create(citiesNew.dataValues).then(result => {
        if (result) {
            res.json('City Created Successfully!')
        } else {
            res.json('There Was an Error Creating the City')
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
            res.json('City Does Not Exist in the DB')
        }
    })
};


exports.update = function (req, res) {
    const citiesNew = new Cyties(req.body);
    Cyties.findOne({
        where: {
            id: req.params.id,
        }
    }).then(cities => {
        if (cities) {
            Cyties.update(citiesNew.dataValues, {
                where: {
                    id: req.params.id,
                }
            }).then(result => {
                if (result) {
                    res.json('City Updated Successfully!')
                } else {
                    res.json('There Was an Error Updating City')
                }
            })
        } else {
            res.json('City Does Not Exist in the DB')
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
                    res.json('City Removed Successfully!')
                } else {
                    res.json('There Was an Error Deleting City')
                }
            })
        } else {
            res.json('City Does Not Exist in the DB')
        }
    })

};
