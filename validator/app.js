// 应用的校验
const { body } = require('express-validator')
const validata = require('../middleware/validator')

exports.add = validata([
  // 中文名的校验
  body('chinesename').notEmpty().withMessage('中文名不能为空'),

  // 英文名的校验
  body('englishname').notEmpty().withMessage('英文名不能为空'),
  // 封面的校验
  body('cover').notEmpty().withMessage('封面不能为空'),

  // 地址的校验
  body('adress').notEmpty().withMessage('英文名不能为空')
  
])