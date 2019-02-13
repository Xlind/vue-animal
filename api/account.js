var mongoose = require('mongoose')
var Schema = mongoose.Schema
// 连接数据库
mongoose.connect('mongodb://localhost/animal')

var accountSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sex: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    avatar: {
        type: String,
        default: ''
    },
    status: {
        type: Number,
        enum: [0, 1, 2],
        default: 0
    }
})

module.exports = mongoose.model('account', accountSchema)