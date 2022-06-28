// 用户的校验
const { body } = require('express-validator')
const validata = require('../middleware/validator')
const { User } = require('../models/index')

exports.register = validata([
  // 用户名的校验
  body('username').notEmpty().withMessage('用户名不能为空').custom(async username => {
    const user = await User.findOne({ username })
    if(user) {
      return Promise.reject('用户名已存在')
    }
  }),

  // 密码的校验
  body('password').notEmpty().withMessage('密码不能为空')
  
])