// /* mysql入口 */
// const mysql = require("mysql");
// // mysql 配置
// const { MYSQL_CONF } = require("../conf/db");

// // 创建连接对象
// const con = mysql.createConnection(MYSQL_CONF);

// // 开始连接
// con.connect();

// // 统一执行 sql 的函数
// function exec(sql) {
//   const promise = new Promise((resolve, reject) => {
//     con.query(sql, (err, result) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(result);
//     });
//   });
//   return promise;
// }

// // 注意不能断开连接！（单例模型：循环引用同一个）

// module.exports = {
//   exec
// };
