<template>
  <div class="comment-frame-wrapper">
    <p class="comment">取得するコメント</p>
    <div class="frame-wrapper">
      <div v-for="(val, index) in items" :key="index" class="add-frame-wrapper">
        <input
          type="text"
          @change="changeInput($event, index)"
          :value="val"
          class="comment-frame new-frame"
        />
        <div class="delete-btn" @click="deleteInput(index)">
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
      items: [""]
    };
  },

  methods: {
    addFrame() {
      this.items.push(this.item);
    },
    changeInput(event, index) {
      this.items.splice(index, 1, event.target.value);
    },
    deleteInput(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-frame-wrapper {
  margin: 50px 0 0 100px;
  height: 200px;
}

.comment {
  font-size: $fontSizeML;
}

.frame-wraper {
  display: flex;
  // flex-direction: column;

  flex-flow: column wrap;
}
.comment-frame {
  display: block;
  height: 72px;
  width: 460px;
  border-radius: 10px;
  margin: 20px 0;
}

.add-frame-wrapper {
  display: flex;

  .delete-btn {
    margin: 18px 0 0 -50px;
    border-radius: 50%;
    background-color: #eeee;
    height: 40px;
    width: 40px;
    cursor: pointer;

    &:hover {
      background-color: #9999;
      transition: 200ms;
    }
  }

  p {
    font-size: 1.3em;
    text-align: center;
    line-height: 40px;
  }
}

.new-frame {
  margin-top: 0;
}

.add-btn {
  height: 72px;
  width: 465px;
  border-radius: 10px;
  background-color: #eeee;
}

.plus {
  text-align: center;
  line-height: 72px;
  font-size: 3em;
  cursor: pointer;

  &:hover {
    background-color: #9999;
    border-radius: 10px;
    transition: 200ms;
  }
}
</style>
