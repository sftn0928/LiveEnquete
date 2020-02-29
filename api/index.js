const express = require("express");
const app = express();
const redis = require("redis");

// const UserController = require("./Controller/user");
const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo:27017/User_db", { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", () => {
  console.log("Mongo connect");
});

const userSchema = mongoose.Schema({
  name: String,
  email: String
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// app.get("/", UserController.signUp);
app.get("/", (req, res) => {
  console.log(req.body.data);
});

module.exports = {
  path: "/api/",
  handler: app
};
