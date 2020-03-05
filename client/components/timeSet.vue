<template>
<div class="container">
    <div class="select-time">
        <p>今から</p>
        <select class="minute">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>∞</option>
        </select>
        <p>分</p>
        <select class="second">
            <option>00</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
        </select>
        <p>秒間 コメントを取得する</p>
    </div>
    <button class="start-button" @click="finish">スタート</button>
</div>

</template>

<script>
export default {
    methods:{
        finish(){
            this.$emit("finishTimeSet")
        }
    }
};
</script>

<style lang="scss">
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.select-time{
    display: flex;
    color: $textColor;
    margin: 10vh 0;
    p{
        line-height: 1.5em;
        font-size: $fontSizeMM;
        margin: 0.5em;
    }
    select{
        background-color: white;
        border: 1px solid #{$textColor};
        border-radius: 4px;
        display: inline-block;
        font-family: "Noto Sans JP";
        font-size: $fontSizeMM;
        color: $textColor;
        line-height: 1.5em;
        padding: 0 0.5em;
    }
    option{
        font-size: $fontSizeMM;
        color: $textColor;
    }
}

.start-button{
    width: 8em;
    height: 2.5em;
    display: inline-block;
    font-size: $fontSizeMM;
    background-color: $bottonColor;
    color: #ffffff;
    border-style: none;
    border-radius: 10px;
    cursor: pointer;
}
</style>