<template>
  <div class="comment-frame-wrapper">
    <div class="frame-wrapper">
      <p class="comment">取得するコメント</p>
      <input type="text" name="comment1" value="" class="comment-frame">
      <input type="text" name="comment2" value="" class="comment-frame" v-model="item" >
      <div v-for="(val, index) in items" :key="index" class="add-frame-wrapper">
        <input type="text" @change="changeInput($event, index)"
          :value="val" class="comment-frame new-frame" />
        <div class="delete-btn" @click="changeInput">
          <p>×</p>
        </div>
      </div>
      <div class="add-btn">
        <p class="plus" @click="addFrame">＋</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      item:"",
      items:[]
    }
  },

  methods: {    
    addFrame() {
        this.items.push(this.item);
    },
        changeInput(event,index){
        this.items.splice(index,1);
    },
  }
}
</script>

<style lang="scss" scoped>
  .comment-frame-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .comment {
    font-size: $fontSizeMM;
    color: $textColor;
  }

  .frame-wraper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 500px;
    height: 500px;
  }
  .comment-frame {
    height: 2em;
    display: block;
    margin: 2vh 0;
    font-size: $fontSizeMM;
    color: $textColor;
    border: 1px $textColor solid;
    border-radius: 10px;
  }

  .add-frame-wrapper {
    display: flex;

    .delete-btn {
      height: 1.5em;
      width: 1.5em;
      font-size: $fontSizeMM;
      margin: 0.35em 0 0 -2em;  
      border-radius: 50%;
      background-color: #eeee;
      cursor: pointer;

      &:hover {
        background-color: #9999;
        transition: 200ms;
      }
    }

    p {
      font-size: 1em;
      text-align: center;
      line-height: 1.5em;
    }
  }

  .new-frame {
    margin-top: 0;
  }

  .add-btn {
    height: 2em;
    display: block;
    font-size: $fontSizeMM;
    border-style: none;
    border-radius: 10px;
    background-color: #eeeeee;
    &:hover {
          background-color: #9999;
          transition: 200ms;
      }
  }

  .plus {
      text-align: center;
      line-height: 2em;
      font-size: $fontSizeMM;
      cursor: pointer;
  }
</style>