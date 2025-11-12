/**
 * @desc: 入口文件
 * @author: lianpf
 * @date: 2021-02-24
 *  */
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
const app = new Koa()
//import router from './app/router.ts'
import corsConfigs from './configs/cors.ts'
//import mongDb from './app/common/mongDbHelper.ts'
//import redis from './app/common/redisHelper.ts'
import mysql from './app/common/mysqlHelper.ts'


import User from './app/controller/user.ts'

// 处理跨域的配置
app.use(cors(corsConfigs));

// logger 中间件
// const loggerAsync = require('./middleware/logger-async')
// app.use(loggerAsync())

// router
app.use(bodyParser()); // 解析request的body
app.use(User.routes());

//mysql
//app.use(mysql);
app.context.mysql = mysql;

//mongDb
//app.use(mongDb)

//redis
const Redis = require('ioredis');

const redis = new Redis({
  port: 6379,          // Redis 端口号
  host: '127.0.0.1',   // Redis 服务器地址
  family: 4,           // IPv4 (4) 或 IPv6 (6)
  // 其他配置项如密码等
});
app.context.redis = redis; // 将 Redis 客户端添加到 Koa 的 context 上，以便在中间件或路由中使用


// response
// app.use(async ctx => {
//   ctx.body = 'Hello World, Koa!'
// })




// 在端口65535监听:
app.listen(65535, '127.0.0.1');
console.log('app started at port 65535...')