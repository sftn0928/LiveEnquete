<template>
  <div class="set-url">
    <p>YouTube ライブ配信中のページURLを入力して下さい</p>
    <input type="text" placeholder=" URL" ref="inputURL" />
    <div class="error-message">{{ error }}</div>
    <button @click="finishSetURL">始める</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: ""
    };
  },
  methods: {
    finishSetURL() {
      let test = this.$store.commit("setLiveURL", this.$refs.inputURL.value);
      console.log(this.$store.getters.liveId);
      this.$store.getters.liveId
        ? this.$emit("finishSetURL")
        : (this.error = "無効なURLです。");
    }
  }
};
</script>

<style lang="scss" scoped>
.set-url {
  height: calc(100vh - #{$headerHeight});
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  color: $textColor;
  p {
    font-size: $fontSizeML;
    text-align: center;
    margin: 0 10%;
  }
  input {
    height: 2em;
    width: calc(40% + 15vh);
    margin-top: 10vh;
    font-size: $fontSizeMM;
    border: 1px $textColor solid;
    border-radius: 10px;
  }
  button {
    width: 8em;
    height: 2.5em;
    display: inline-block;
    font-size: $fontSizeMM;
    background-color: $bottonColor;
    color: #ffffff;
    border-style: none;
    border-radius: 10px;
    cursor: pointer;
    margin: 10vh 0;
  }
}
.error-message {
  color: red;
  font-size: $fontSizeMM;
}
</style>
