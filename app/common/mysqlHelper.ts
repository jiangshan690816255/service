const mysql = require('mysql2');

// 创建连接池
const pool = mysql.createPool({
    host: 'localhost',       // 数据库地址
    user: 'root',    // 数据库用户名
    password: '69540268Js!', // 数据库密码
    database: 'demo1' // 数据库名
});

// 导出连接池
export default  pool.promise(); // 使用 promise API