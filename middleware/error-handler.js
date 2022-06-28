module.exports = () => {
  // 处理响应错误的中间件(四个参数不能少，少一个就不是中间件)，最好是放在最后
  return (err,req,res,next) => {
    console.log('错误');
    res.status(500).json({
        error:err.message
    })
  }
}