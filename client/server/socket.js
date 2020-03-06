exports.socketConnect = LiveChat => socket => {
  let Live;
  console.log(socket.id);
  socket.on("setURL", Id => {
    Live = new LiveChat(Id);
    console.log(Id);
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
      try {
        console.log(comment.message[0].text);
        socket.emit("emitComment", comment.message[0].text);
      } catch (error) {
        console.log(commit.message, "this is 無言のスパチャ");
      }
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
};
