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
  h1{
    color: $textColor;
    font-size: $fontSizeMM;
    text-align: center;
    font-weight: 400;
    margin: 0 10%;
  }
  a{
    width: 19em;
    height: 2.5em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: $fontSizeMM;
    font-weight: 400;
    text-decoration: none;
    background-color: $bottonColor;
    color: #ffffff;
    border-style: none;
    border-radius: 10px;
    cursor: pointer;
    margin: 10vh 0;
  }
  p{
    font-size: $fontSizeMM;
    color: $textColor;
    text-align: center;
    font-weight: 400;
    margin: 0 10%;
  }
}
</style>
