const mongoose = require('mongoose')

const Algorithm = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('algorithms', Algorithm)