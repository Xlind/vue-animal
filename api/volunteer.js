var mongoose = require('mongoose')
var Schema = mongoose.Schema
// 连接数据库
mongoose.connect('mongodb://localhost/animal')

var volunteerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: Number,
        enum: [0, 1],
        default: 0,
        required: true
    },
    introduction: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('volunteer', volunteerSchema)