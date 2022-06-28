// 用户模块路由抽离
const express = require('express')
const router = express.Router()
const AppCtrl = require('../controller/app')
// 引入校验规则
const appValidata = require('../validator/app')


// 用户注册(加入验证规则，增加代码健壮性)
router.post('/api/add',appValidata.add, AppCtrl.add)



module.exports = router