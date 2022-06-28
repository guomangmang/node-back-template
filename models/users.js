const mongoose = require("mongoose")

// 用户模型
const UserSchema = new mongoose.Schema({
  username:{ type:String, unique:true },
  password:{ 
    type:String,
    set(val) {
      return require('bcryptjs').hashSync(val,10)
    },
    // select:false   // 每次查询User不会返回密码回客户端
  },
})



module.exports = UserSchema