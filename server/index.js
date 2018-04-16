// express 服务器的入口文件
const userApi = require('./api/userApi')
const articleApi = require('./api/articleApi')
const homeApi = require('./api/home/homeApi')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 后端api路由
app.use('/api/user', userApi)
app.use('/api/home', homeApi)
app.use('/api/article', articleApi)

// 监听端口
app.listen(3301, () => {
  console.log('success listen at port: 3301')
})
