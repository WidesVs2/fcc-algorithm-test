const mongoose = require('mongoose')

const Test = mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    arg1: {
        type: String,
        required: true
    },
    arg2: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    expectedResult: {
        type: String,
        required: true
    },
    updated_at: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('tests', Test)