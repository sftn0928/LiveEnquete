<template>
  <div class="set-url">
    <div class="message">
      <p>YouTube ライブ配信中のページURLを入力して下さい</p>
    </div>
    <div class="input-style">
      <input type="text" placeholder=" URL" />
    </div>
    <button class="button-style">始める</button>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.set-url {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  color: $textColor;
}
.message {
  font-size: $fontSizeML;
  margin: 0 10vw;
}
.input-style {
  width: calc(40% + 15vh);
  margin: 10vh 0;
  input {
    height: 2em;
    width: 100%;
    font-size: $fontSizeMM;
    border: 1px $textColor solid;
    border-radius: 10px;
  }
}
.button-style {
  width: 8em;
  height: 2.5em;
  display: inline-block;
  font-size: $fontSizeMM;
  background-color: $bottonColor;
  color: #ffffff;
  border-style: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
