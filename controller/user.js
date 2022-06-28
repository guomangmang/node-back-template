//用于对路由的返回结果进行统一整理
const { User } = require('../models/index')
// 用户注册
exports.register = async (req,res) =>{
  const data = await User.create({
      username:req.body.username,
      password:req.body.password
  })
  if(data) {
    res.status(200).send({
        message:'用户注册成功'
    })
  }else {
    res.send({
      message:'用户注册失败'
    }) 
  }
}


// 用户登录
exports.login = async (req,res) =>{
  const { username, password } = req.body
  // 根据提供的用户去数据库中查询
  const personal = await User.findOne({username})
  console.log(personal.password)
  if(!personal) {
      res.status(422).send({
          message:'用户不存在'
      })
  }
  //如果存在再去验证密码
  const isValid = require('bcryptjs').compareSync(password,personal.password)
  if(!isValid) {
      return res.status(422).send({
          message:'密码错误'
      })
  }
  // 返回token
  const jwt = require('jsonwebtoken')
  const token = jwt.sign({id:personal._id},'sedfgserhgftrdjfytu')
  res.send({token,
    message:'登录成功',
    username
  })
}
