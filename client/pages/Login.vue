<template>
    <div class="login-page">
        <div class="login-page-contents">
            <p>メールアドレス</p>
            <input type="email" required placeholder=" メールアドレス" />
            <p>パスワード</p>
            <input type="password" required placeholder=" パスワード" />
        </div>
        <button>ログイン</button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login-page{
    height: calc(100vh - #{$headerHeight});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    font-family: 'Noto Sans JP';
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
.login-page-contents{
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
