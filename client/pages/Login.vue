<template>
  <div class="login-page">
    <div class="login-page-contents">
      <p>メールアドレス</p>
      <input
        type="email"
        required
        placeholder=" メールアドレス"
        v-model="email"
      />
      <p>パスワード</p>
      <input
        type="password"
        required
        placeholder=" パスワード"
        v-model="password"
      />
    </div>
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
import axios from "axios";
import myAxios from "@/plugins/myAxios";
import Cookie from "js-cookie";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      myAxios
        .post("/api/login", {
          email: this.email,
          password: this.password
        })
        .then(val => {
          this.$router.push(`/${val.data.id}/User`);
          console.log(val.data.id);
          // Cookie.set("jws", val.data.token, { expires: 7 });
        })
        .catch(err => {
          console.log(err);
          this.$router.push("/login");
        });
    }
  }
  // asyncData({ app, params, store, $axios }) {
  //   const data = { key: "value" };
  //   return myAxios.getCommon("login").then(res => {
  //     console.log(res.data);
  //     return { title: res.data.title };
  //   });
  // }
};
</script>

<style lang="scss">
.login-page {
  height: calc(100vh - #{$headerHeight});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  font-family: "Noto Sans JP";
  button {
    width: 8em;
    height: 2.5em;
    display: inline-block;
    font-size: $fontSizeMM;
    background-color: $bottonColor;
    color: #ffffff;
    border-style: none;
    border-radius: 10px;
    margin: 10vh 0;
    cursor: pointer;
  }
}
.login-page-contents {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: calc(40% + 15vh);
  p {
    font-size: 20px;
    color: $textColor;
    margin-top: 5vh;
  }
  input {
    height: 2em;
    width: 100%;
    font-size: $fontSizeMM;
    color: $textColor;
    border: 1px $textColor solid;
    border-radius: 10px;
  }
}
</style>
