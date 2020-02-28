<template>
  <div>
    <div class="top">
      <h1>YouTubeライブアンケートではYouTubeの生放送でコメントを指定してアンケートをとることができます</h1>
      <a href="/live">YouTubeライブアンケートを始める</a>
      <p>YouTubeライブアンケートの使用にユーザー登録は必要ありません</p>
      <p>ユーザー登録をすると便利な機能が利用できます</p>
    </div>
    <div class="how-to-use">
      <h2>使い方</h2>
      <div class="image-sample"></div>
      <p>アンケートを行いたい生放送のYouTubeチャンネルのURLを入力して「始める」ボタンを押します</p>
      <div class="image-sample"></div>
      <p>アンケートに使うコメントを入力して計測する時間を選択します</p>
      <p>「スタート」ボタンを押すとアンケートの集計が開始します</p>
    </div>
    <div class="functions">
      <h2>ユーザー登録をすると利用できる機能</h2>
      <div class="image-sample"></div>
      <p>マイページの履歴から過去に行ったアンケートの結果を閲覧できます</p>
      <div class="image-sample"></div>
      <p>アンケートを設定して使いたいときに設定を呼び出せます</p>
      <a href="#!">ユーザー登録</a>
    </div>
    <div class="lets-start">
      <p>さあ、はじめよう！</p>
      <a href="/live">YouTubeライブアンケートを始める</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.top{
  height: calc(100vh - #{$headerHeight});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
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
.how-to-use{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eeeeee;
  font-family: 'Noto Sans JP';
  padding-bottom: 10vh;
  h2{
    font-size: $fontSizeMM;
    font-weight: 700;
    color: $textColor;
    margin-top: 10vh;
  }
  p{
    font-size: $fontSizeMM;
    font-weight: 400;
    color: $textColor;
    text-align: center;
    margin: 0 10%;
  }
}
.image-sample{
  width: 60vw;
  height: 33.75vw;
  background: #ffffff;
  border: 2px solid #eeeeee;
  margin: 10vh 0;
}
.functions{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  font-family: 'Noto Sans JP';
  padding-bottom: 10vh;
  h2{
    font-size: $fontSizeMM;
    font-weight: 700;
    text-align: center;
    color: $textColor;
    margin: 10vh 10% 0;
  }
  p{
    font-size: $fontSizeMM;
    font-weight: 400;
    color: $textColor;
    text-align: center;
    margin: 0 10%;
  }
  a{
    width: 12em;
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
    margin-top: 10vh;
  }
}
.lets-start{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eeeeee;
  font-family: 'Noto Sans JP';
  p{
    font-size: $fontSizeML;
    font-weight: 400;
    color: $textColor;
    text-align: center;
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
}
</style>
