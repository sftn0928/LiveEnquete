export default function createWebSocketPlugin(socket) {
  return store => {
    socket.on("emitComment", data => {
      store.commit("getData", data);
    });
    store.subscribe(mutation => {
      console.log(mutation.type);
      if (mutation.type === "SET_URL") {
        socket.emit("setURL", mutation.payload);
      }
    });
  };
}
