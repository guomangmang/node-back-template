const express = require('express')
const router = express.Router()

// 用户相关路由
router.use(require('./users'))

// 应用相关路由
router.use(require('./app'))
// 前面可以设置统一路径，在引入的对应文件中就可以少写入共同的api
// router.use('./user/api', require('./users'))


router.get('/list',(req,res) => {
    res.send('调通了')
})






module.exports = router