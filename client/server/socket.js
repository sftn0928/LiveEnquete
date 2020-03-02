exports.socketConnect = LiveChat => socket => {
  let Live;
  console.log(socket.id);
  socket.on("setURL", url => {
    Live = new LiveChat({ liveId: url });
    console.log(url);
    Live.on("error", err => {
      console.log(err);
    });

    Live.on("start", liveId => {
      console.log(liveId);
    });
    Live.on("end", reason => {
      console.log(reason);
    });
    Live.on("comment", comment => {
      console.log(comment.message[0].text);
      socket.emit("emitComment", comment.message);
    });
    Live.start();
  });

  socket.on("disconnect", () => {
    if (Live !== undefined) {
      if (typeof Live.stop === "function") {
        Live.stop();
      }
    }
  });
};
