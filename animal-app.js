const express = require('express')
const app = new express

app.use('/', express.static('./dist/'))
// app.use('./src/',express.static('./src/'))

app.get('/', function (req, res) {
    res.sendfile('./dist/index.html')
})

app.listen(8004, function () {
    console.log('animal-app server is running...')
})