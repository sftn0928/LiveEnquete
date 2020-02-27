const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const app = express();
// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";
const LiveChat = require("youtube-chat").LiveChat;

const socketEvent = require("./socket.js");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept"
  //   );
  //   next();
  // });
  app.use(nuxt.render);

  // Listen the server

  let server = app.listen(port, host);

  socketStart(server);
  console.log("socket.io starts");

  function socketStart(server) {
    const io = require("socket.io").listen(server);
    io.on("connection", socketEvent.socketConnect(LiveChat));
  }

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
