const mongoose = require('mongoose')

const {Schema} = mongoose

const taskSch = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
})

const task = mongoose.model('task', taskSch)

module.exports = task
