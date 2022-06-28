const express = require("express")
const app = express()
const router = require('./routes/index')
const ErrorHandler = require('./middleware/error-handler')
// 处理日志的中间件
const morgan = require('morgan')
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// 处理表单提交的格式
app.use(express.json())
// 处理跨域
app.use(require('cors')())
// 路由中间件
app.use(router)
// 处理404的中间件,一般需要放在路由之后
app.use((req,res,next) => {
    res.status(404).send("404 NOT FOUND")
})

// 统一处理服务端错误中间件
app.use(ErrorHandler())

app.listen(3001,()=> {
    console.log("http://localhost:3001");
})