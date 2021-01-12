const Work = require('../models/work.model');


exports.create = async (req, res) => {
    Work.findById(req.body.id, (err, result) => {
        if (result) {
            res.json('The Work Already Exists in the DB')
        } else {
            const work = new Work(req.body);
            work.save().then(result => {
                if (result) {
                    res.json('Work Created Successfully!');
                } else {
                    res.json('There was an Error Creating the Work')
                }
            })
        }
    });
};

exports.update = async (req, res) => {
    Work.findById(req.params.id, (err, result) => {
        if (!result) {
            res.json('There is no work with that ID');
        } else {

            result.client = req.body.client;
            result.comment = req.body.comment;

            result.save().then(result => {
                if (result) {
                    res.json('Work Update Successfully!');
                } else {
                    res.json('There was an Error Modifying the Work')
                }
            })
        }
    });
};

exports.delete = async (req, res) => {
    Work.findByIdAndDelete(req.params.id, (err, result) => {
        if (result) {
            res.json('Work Remove Successfully!')
        } else {
            res.json('The Work Does Not Exist in the DB');
        }
    });
};

exports.findAll = async (req, res) => {
    Work.find(function (err, result) {
        if (result) {
            res.json(result);
        } else {
            res.json('No works')
        }
    });
};


exports.findOne = async (req, res) => {
    var id = req.params.id;
    Work.findById(id, (err, result) => {
        if (result) {
            res.json(result)
        } else {
            res.json('The Work Does Not Exist in the DB')
        }
    });
};

