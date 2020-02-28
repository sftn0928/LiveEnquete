<template>
    <div class="comment-frame-wrapper">
      <p>取得するコメント</p>
      <div class="frame-wrapper">
          <input type="text" name="comment1" value="" class="comment-frame">
          <input type="text" name="comment2" value="" class="comment-frame">
          <div class="add-btn">
              <p class="plus">＋</p>
          </div>
      </div>

  </div>
</template>

<script>
// import commentFrameComponent from "~/components/commentFrame";
export default {
    // components: {
    //     commentFrameComponent
    // },
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    .comment-frame-wrapper {
        margin: 50px 0 0 100px;
    }

    .frame-wraper {
        display: flex;
        flex-direction: column;
    }
    .comment-frame {
        display: block;
        height: 72px;
        width: 460px;
        border-radius: 10px;
        margin: 20px 0;
    }

    .add-btn {
        height: 72px;
        width: 465px;
        border-radius: 10px;
        margin: 10px 0;
        background-color: #eeee;
    }

    .plus {
        text-align: center;
        line-height: 72px;
        font-size: 3em;
        cursor: pointer;

        &:hover {
            opacity: .7;
        }
    }
</style>