const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')

//引入连接mongoodb数据库的表
const Rescue = require('./api/rescue.js')
const Volunteer = require('./api/volunteer.js')
const Account = require('./api/account.js')

//配置body-parser中间件，用于解析post表单请求体
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//配置session
app.use(session({
    // 配置加密字符串，在原有加密基础之上和这个字符串拼起来去加密
    secret: 'keyboard',
    resave: false,
    saveUninitialized: false
}))

// 所有链接增加改header信息，来解决访问跨域的问题。
app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next()
});
//公开资源
app.use('/api/', express.static('./api/'))
app.use('/', express.static('./dist/'))

app.get('/', (req, res) => {
    res.sendfile('./dist/index.html')
})

//提交注册表单
app.post('/api/register', (req, res) => {
    let body = req.body
    console.log('rgister params: ' + JSON.stringify(req.body))
    Account.findOne({
        email: body.email
    }, (err, date) => {
        if (err) {
            return res.status(200).json({
                code: 400,
                reason: err
            })
        }
        if (date) {
            return res.status(200).json({
                code: 400,
                reason: 1011
            })
        }
        Account(body).save((err, account) => {
            if (err) {
                console.log(err.message)
                return res.status(200).json({
                    code: 400,
                    reason: err
                })
            }
            req.session.account = account
            res.status(200).json({
                code: 200
            })
        })
    })

})

//登录
app.post('/api/login', (req, res) => {
    let body = req.body
    console.log('login params: ' + JSON.stringify(req.body))
    Account.findOne({
        email: body.email,
        password: body.password
    }, (err, account) => {
        if (err) {
            return res.status(200).json({
                code: 400,
                reason: err
            })
        }
        if (!account) {
            return res.status(200).json({
                code: 400,
                reason: err
            })
        }
        req.session.account = account
        res.status(200).json({
            code: 200
        })
    })
})

//退出
app.get('/logut', (req, res) => {
    req.session.account = null
})

// 获取个人信息
app.post('/api/gainAccountInfo', (req, res) => {
    let body = req.body
    console.log('gainAccountInfo params: ' + JSON.stringify(req.body))
    Account.findOne({
        email: body.email,
    }, (err, account) => {
        if (err) {
            return res.status(200).json({
                code: 400,
                reason: err
            })
        }
        if (!account) {
            return res.status(200).json({
                code: 400,
                reason: 1001
            })
        }
        req.session.account = account
        res.status(200).json({
            code: 200,
            email: account.email,
            username: account.username,
            sex: account.sex
        })
    })
})

// 修改个人信息
app.post('/api/changeAccountInfo', (req, res) => {
    let body = req.body
    console.log('changeAccountInfo params: ' + JSON.stringify(req.body))
    Account.findOne({
        email: body.email,
    }, (err, account) => {
        if (err) {
            return res.status(200).json({
                code: 400,
                reason: err
            })
        }
        if (!account) {
            return res.status(200).json({
                code: 400,
                reason: err
            })
        }
        req.session.account = account
        Account.updateOne({ email: body.email }, { name: body.name, sex: body.sex }, (err, result) => {
            if (err) {
                return res.status(200).json({
                    code: 400,
                    reason: err
                })
            } else{
                console.log(result)
                return res.status(200).json({
                    code: 200
                })
            }
        })
    })
})

// 获取帖子 todo
app.post('/api/gainPosts', (req, res) => {
    let body = req.body
    console.log('login params: ' + JSON.stringify(req.body))
    Account.findOne({
        email: body.email,
        password: body.password
    }, (err, account) => {
        if (err) {
            return res.status(500).json({
                code: 400,
                reason: 1001
            })
        }
        if (!account) {
            return res.status(200).json({
                code: 400,
                reason: 1001
            })
        }
        req.session.account = account
        res.status(200).json({
            code: 200
        })
    })
})

app.listen(8004, function () {
    console.log('animal-api server is running...')
})