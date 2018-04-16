// sql语句映射文件 给api调用
const sqlMap = {
  user: {
    add: 'insert into user(id, username, age) values (?, ?, ?)'
  },
  article: {
    add: 'insert into article(title, type, content, create_time) values (?, ?, ?, now())'
  },
  home: {
    read: 'select (id, title, type) from article'
  }
}

module.exports = sqlMap
