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
        <div
          class="delete-btn"
          :class="{ hide: isHide }"
          @click="deleteInput(index)"
        >
          <p>×</p>
        </div>
      </div>
      <div class="add-btn">
        <p @click="addFrame">＋</p>
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

  computed: {
    isHide() {
      return this.items.length >= 3 ? false : true;
    }
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
.hide {
  display: none;
}

.comment-frame-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.comment {
  margin: 30px 0 0 100px;
  font-size: $fontSizeMM;
  color: $textColor;
}

.frame-wrapper {
  display: flex;
  width: calc(40% + 15vh);
  flex-direction: column;
  margin: 10vh 0;
}

.comment-frame {
  height: 2em;
  width: 100%;
  display: block;
  margin: 1vh 0;
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
    margin: calc(1vh + 0.3em) 0 0 -2em;
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

.add-btn {
  height: 2em;
  display: block;
  font-size: $fontSizeMM;
  border-style: none;
  border-radius: 10px;
  background-color: #eeeeee;
  margin: 1vh 0;
  &:hover {
    background-color: #9999;
    transition: 200ms;
  }
  p {
    text-align: center;
    line-height: 2em;
    font-size: $fontSizeMM;
    cursor: pointer;
  }
}
</style>
