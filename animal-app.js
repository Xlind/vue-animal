const express = require('express')
const app = new express
// const lunb = require('./api/lunbo')

app.use('/', express.static('./dist/'))
app.use('/api/',express.static('./api/'))

app.get('/', function (req, res) {
    res.sendfile('./dist/index.html')
})
// app.get('/lunbo', function (req, res) {
//     res.sendfile('./api/lunbo.json')
// })


app.listen(8004, function () {
    console.log('animal-app server is running...')
})