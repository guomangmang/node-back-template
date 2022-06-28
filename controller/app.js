//用于对路由的返回结果进行统一整理
const { App } = require('../models/index')
// 新建应用
exports.add = async (req,res) =>{
  const data = await App.create({
      chinesename:req.body.chinesename,
      englishname:req.body.englishname,
      cover:req.body.cover,
      adress:req.body.adress
  })
  if(data) {
    res.status(200).send({
        message:'新建应用成功'
    })
  }else {
    res.send({
      message:'新建应用失败'
    }) 
  }
}
