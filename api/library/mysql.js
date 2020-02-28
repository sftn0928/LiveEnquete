const mysql = require("mysql");
const bcrypt = require("bcrypt");
const securePassword = require("bookshelf-secure-password");
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "mysql",
    user: "root",
    password: "rootpass"
  }
});

const bookshelf = require("bookshelf")(knex);
bookshelf.plugin(securePassword);

const User = bookshelf.Model.extend("User", {
  tableName: "USERDATA",
  hasSecurePassword: "pass"
});

user = new User({
  name: "test",
  email: "sin.seki.nooo@gmail.com",
  pass: "asdfasdf"
});

user.save().then(() => {
  console.log(user.get("password_digest"));
});

user.authenticate("asdfasdf").then(user => {
  console.log(user);
});
