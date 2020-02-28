<template>
  <div class="top-wrapper">
    <h1>YouTubeライブアンケートではYouTubeの生放送でコメントを指定してアンケートをとることができます</h1>
    <a href="/live">YouTubeライブアンケートを始める</a>
    <p>YouTubeライブアンケートの使用にユーザー登録は必要ありません</p>
    <p>ユーザー登録をすると便利な機能が利用できます</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.top-wrapper{
  height: calc(100vh - #{$headerHeight});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans JP';
  font-weight: 400;
  h1{
    color: $textColor;
    font-size: $fontSizeML;
    text-align: center;
    margin: 0 10vw;
  }
}
.description{

}
</style>
