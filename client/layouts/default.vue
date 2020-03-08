<template>
  <div>
    <header>
      <div class="header-wrapper">
        <nuxt-link tag="h1" to="/">YouTubeライブアンケート</nuxt-link>
        <!-- 未変更時点では<div class="unregistered">が真ん中に表示されている
        　　　どちらかをdisplay:none;にすると両端によります -->
        <!-- 未ログイン時 -->
        <div class="unregistered" v-if="!isLogin">
          <nuxt-link tag="a" to="/createuser">新規登録</nuxt-link>
          <nuxt-link tag="a" to="/login">ログイン</nuxt-link>
        </div>
        <!-- ログイン時 -->
        <div class="registered" v-if="isLogin">
          <nuxt-link :to="userURL">{{ user.name }}</nuxt-link>
          <div @click="logout">ログアウト</div>
        </div>
      </div>
    </header>

    <nuxt />

    <footer>
      <div class="footer-list">
        <nuxt-link tag="a" to="/contact">問い合わせ・ご意見・ご要望</nuxt-link>
      </div>
      <div class="copyright">Copyright © 2020 teamASK</div>
    </footer>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
      user: "authUser"
    }),
    ...mapGetters({
      userURL: "userURL",
      isLogin: "isLogin"
    })
  },
  methods: {
    logout() {
      this.$router.push("/");
      this.$store.commit("logout");
    }
  }
};
</script>
<style lang="scss">
.header-wrapper {
  width: 100%;
  height: $headerHeight;
  background-color: #707070;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: white;
    font-size: 18px;
    font-weight: 700;
    margin: 0 20px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: 400;
    margin: 0 20px;
  }
}

.unregistered {
  display: flex;
}

.registered {
  display: block;
}

footer {
  width: 100%;
  height: 25vh;
  background: #707070;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  .footer-list {
    display: flex;
    a {
      text-decoration: none;
      font-size: 16px;
      color: #ffffff;
      margin: 4vh 2em;
    }
  }
  .copyright {
    font-size: 12px;
    margin: 4vh 0;
  }
}
</style>
