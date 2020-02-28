<template>
  <div>
    <div>メールアドレス:<input type="email" v-model="email" /></div>
    <div>パスワード:<input type="password" v-model="pass" /></div>
    <div><input type="submit" value="ログイン" @click="submitToServer" /></div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      pass: ""
    };
  },
  methods: {
    submitToServer() {
      axios
        .get("/api", {
          email: this.email,
          pass: this.pass
        })
        .then(val => {
          $router.push("/");
        })
        .catch(e => {
          if (e === "email") {
            console.log("email is none");
          }
          if (e === "pass") {
            console.log("pass is missing");
          }
        });
      console.log("axios");
    }
  }
};
</script>
<style scoped></style>
