<template>
  <div class="create-user">
    <div class="create-user-contents">
        <h1>ユーザー登録</h1>
        <p>ユーザー名</p>
        <input type="text" required placeholder=" ユーザー名">
        <p>メールアドレス</p>
        <input type="email" required placeholder=" メールアドレス">
        <p>パスワード</p>
        <input type="password" required placeholder=" パスワード">
        <p>パスワード</p>
        <input type="password" required placeholder=" パスワード">
        <p>チャンネルURL</p>
        <input type="text" placeholder=" チャンネルURL">
    </div>
    <button>登録</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.create-user{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    font-family: 'Noto Sans JP';
    h1{
        font-size: $fontSizeML;
        font-weight: 700;
        color: $textColor;
        margin-top: 10vh;
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
        margin: 10vh 0;
        cursor: pointer;
    }
}
.create-user-contents{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: calc(40% + 15vh);
    p{
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