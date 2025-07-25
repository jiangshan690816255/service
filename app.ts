/**
 * @desc: 入口文件
 * @author: lianpf
 * @date: 2021-02-24
 *  */
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
const app = new Koa()
import router from './app/router.ts'
import corsConfigs from './configs/cors.ts'
 
// 处理跨域的配置
app.use(cors(corsConfigs));
 
// logger 中间件
// const loggerAsync = require('./middleware/logger-async')
// app.use(loggerAsync())
 
// router
app.use(bodyParser()); // 解析request的body
app.use(router.routes());
 
// response
// app.use(async ctx => {
//   ctx.body = 'Hello World, Koa!'
// })
 
// 在端口65535监听:
app.listen(65535,'127.0.0.1');
console.log('app started at port 65535...')