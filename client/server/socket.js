const axios = require("@nuxtjs/axios");
const fs = require("fs");

const log4js = require("log4js");

log4js.configure({
  appenders: {
    system: { type: "file", filename: "system.log" },
    error: { type: "file", filename: "error.log" }
  },
  categories: {
    default: { appenders: ["system"], level: "debug" },
    error: { appenders: ["error"], level: "error" }
  }
});

const logger = log4js.getLogger("system");
const loggerError = log4js.getLogger("error");

exports.socketConnect = LiveChat => socket => {
  let Live;
  console.log(socket.id);
  socket.on("setURL", Id => {
    Live = new LiveChat(Id);
    console.log(Id);
    Live.on("error", err => {
      // console.log(err);
      loggerError(err);
    });

    Live.on("start", liveId => {
      console.log(liveId, "liveStart");
    });
    Live.on("end", reason => {
      console.log(reason, "LiveEnd");
    });
    Live.on("comment", comment => {
      fs.writeFileSync("comment.txt", comment.message);
      logger.debug(comment.message);
      console.log(comment.message[0].text);
      socket.emit("emitComment", comment.message[0].text);
    });
    Live.start();
  });

  socket.on("disconnect", () => {
    if (Live !== undefined) {
      console.log("disconnect", typeof Live.stop);
      if (typeof Live.stop === "function") {
        Live.stop();
      }
    }
  });

  socket.on("setChannelURL", async function(Id) {
    const liveRes = await axios.get(
      `https://www.youtube.com/channel/${Id}/live`
    );
  });
};
