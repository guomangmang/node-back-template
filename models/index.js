
const mongoose = require("mongoose")
const db = mongoose.connection
const UserSchema = require('./users')
const AppSchema = require('./app')
const { dbUrl } = require('../config/config.default')
mongoose.connect(dbUrl, {
  useCreateIndex:true,
  useNewUrlParser: true
})

// 当链接失败
db.on('error',(err) => {
  console.log('数据库连接失败',err);
})

// 当链接成功
db.once('open',() => {
  console.log('数据库链接成功');
})

// 导出模型类
module.exports = {
  User: mongoose.model("User",UserSchema),
  App: mongoose.model("App",AppSchema),
}
