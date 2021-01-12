const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkSchema = new Schema({
    client: {
        type: String
    },
    comment: {
        type: String
    }
}, {
    collection: 'work'
});

module.exports = mongoose.model('Work', WorkSchema);