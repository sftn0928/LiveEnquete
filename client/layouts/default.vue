<template>
  <div>
    <header>
      <div class="header-wrapper">
        <nuxt-link tag="h1" to="/">YouTubeライブアンケート</nuxt-link>
        <!-- 未変更時点では<div class="unregistered">が真ん中に表示されている
        　　　どちらかをdisplay:none;にすると両端によります -->
        <!-- 未ログイン時 -->
        <div class="unregistered">
          <nuxt-link tag="a" to="createuser">新規登録</nuxt-link>
          <nuxt-link tag="a" to="/login">ログイン</nuxt-link>
        </div>
        <!-- ログイン時 -->
        <div class="registered">
          <nuxt-link to="/user">ユーザー名</nuxt-link>
        </div>
        
      </div>
    </header>
    <nuxt />
  </div>
</template>

<style lang="scss">
.header-wrapper {
  height: $headerHeight;
  background-color: #707070;
  display: flex;
  justify-content: space-between;
  h1{
    line-height: $headerHeight;
    color: white;
    font-size: 18px;
    font-weight: 700;
    margin: 0 20px;
    cursor: pointer;
  }
  a{
    text-decoration: none;
    line-height: $headerHeight;
    color: white;
    font-size: 16px;
    font-weight: 400;
    margin: 0 20px;
  }
}

.unregistered{
  display: flex; 
}

.registered{
  display: block;
}
</style>
