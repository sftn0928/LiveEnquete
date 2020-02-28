const express = require("express");
const app = express();
const mysql = require("mysql");
const redis = require("redis");

// const connectDB = mysql.createConnection({
//   host: "mysql",
//   port: 3306,
//   user: "root",
//   password: "rootpass"
// });

// connectDB.connect(err => {
//   if (err) throw err;
//   console.log("Connected");
// });

// const config = {
//   host: "redis",
//   port: 6379
// };

// const client = redis.createClient(config);
// // データの登録
// client.set("key", "value");
// // データの取得と表示
// client.get("key", (err, reply) => {
//   console.log(reply);
// });
// // データの削除
// client.del("key");
// // 削除されているか確認
// client.get("key", (err, reply) => {
//   console.log(reply);
// });
// // 切断
// client.quit();

app.get("/", function(req, res) {
  res.send("HelloWorld");
});

module.exports = {
  path: "/api/",
  handler: app
};
