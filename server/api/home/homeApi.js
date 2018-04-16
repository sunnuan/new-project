// 测试api
const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')

// 连接数据库
const con = mysql.createConnection(models.mysql)

con.connect()

const jsonWrite = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// home页接口
router.get('/list', (req, res) => {
  const sql = $sql.home.read

  con.query(sql, function(err, resResult) {
    if (err) {
      console.log(err)
    }
    if (resResult) {
      jsonWrite(res, resResult)
    }
  })
})

module.exports = router
