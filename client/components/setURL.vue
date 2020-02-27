<template>
  <div class="set-url">
    <p>YouTube ライブ配信中のページURLを入力して下さい</p>
    <input type="text" placeholder="URL" v-model="url" />
    <button @click="start">始める</button>
  </div>
</template>
<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      url: "",
      socket: ""
    };
  },
  methods: {
    start() {
      this.socket.emit("setURL", this.url);
    }
  },
  created() {
    this.socket = io();
  }
};
</script>
<style scoped>
.set-url {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}
</style>
