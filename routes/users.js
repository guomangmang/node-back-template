// 用户模块路由抽离
const express = require('express')
const router = express.Router()
const UserCtrl = require('../controller/user')
// 引入校验规则
const userValidata = require('../validator/users')
// 用户注册(加入验证规则，增加代码健壮性)
router.post('/api/user',userValidata.register, UserCtrl.register)

// 用户登录
router.post('/api/login',UserCtrl.login)


module.exports = router