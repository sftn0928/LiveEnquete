<template>
  <div>
    <div>メールアドレス:<input type="email" v-model="email" /></div>
    <div>パスワード:<input type="password" v-model="pass" /></div>
    <div><input type="submit" value="ログイン" @click="submitToServer" /></div>
  </div>
</template>
<script>
// import axios from "axios";
import myAxios from "~/plugins/myAxios";

export default {
  data() {
    return {
      email: "",
      pass: ""
    };
  },
  methods: {
    submitToServer() {
      let obj = {
        email: this.email,
        pass: this.pass
      };
      console.log(obj);
      myAxios.post("/api/user", obj);

      console.log("axios");
    }
  }
};
</script>
<style scoped></style>
