const mongoose = require("mongoose")

// app模型
const AppSchema = new mongoose.Schema({
  chinesename:{ type:String, unique:true },
  englishname:{ type:String, unique:true },
  cover:{ type:String,unique:true },
  adress:{ type:String,unique:true}
})



module.exports = AppSchema