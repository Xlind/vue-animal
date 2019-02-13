var mongoose = require('mongoose')
var Schema = mongoose.Schema
// 连接数据库
mongoose.connect('mongodb://localhost/animal')

var rescueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    publishTime: {
        type: Date,
        default: Date.now
    },
    solveTime: {
        type: Date,
        default: Date.now
    },
    foundtype: {
        type: Number,
        enum: [0, 1],
        default: 0,
        required: true
    }
})

module.exports = mongoose.model('rescue', rescueSchema)