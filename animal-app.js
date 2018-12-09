const express = require('express')
const app = new express
// const lunb = require('./api/lunbo')

// 所有链接增加改header信息，来解决访问跨域的问题。
app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next()
});

app.use('/', express.static('./dist/'))
app.use('/api/', express.static('./api/'))

app.get('/', function (req, res) {
    res.sendfile('./dist/index.html')
})
// app.get('/lunbo', function (req, res) {
//     res.sendfile('./api/lunbo.json')
// })



app.listen(8004, function () {
    console.log('animal-app server is running...')
})