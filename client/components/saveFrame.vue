<template>
  <div>
    <select name="" v-model.number="select">
      <option
        v-for="(comment, index) in comments"
        :key="index"
        :value="index"
        >{{ comment.title }}</option
      >
    </select>
    <input type="title" v-model="title" />
    <button @click="createSlot">新しく追加</button>
    <button @click="deleteSlot">削除</button>
    <button @click="updateSlot">上書き</button>
    {{ flash }}
    <commentFrame ref="comment" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import commentFrame from "@/components/commentFrame";
export default {
  components: {
    commentFrame
  },
  data() {
    return {
      select: 0,
      title: "",
      flash: ""
    };
  },
  computed: {
    ...mapState({
      comments: "commentFrame"
    })
  },
  methods: {
    createSlot() {
      const items = this.$refs.comment.items
        .filter(v => !_.isEmpty(v))
        .filter(v => v !== undefined);
      const slots = {
        title: this.title,
        items: items
      };
      this.$axios.post("/api/slotCreate", slots).then(res => {
        this.flash = "新しく保存しました";
        slots.id = res.body;
        this.$store.commit("createSlot", slots);
      });
    },
    deleteSlot() {
      if (_.isEmpty(this.comments[this.select].id)) return;
      this.$axios
        .post("/api/slotDelete", this.comments[this.select].id)
        .then(() => {
          this.$store.commit("deleteSlot", this.select);
          this.flash = "削除しました";
        });
    },
    updateSlot() {
      if (_.isEmpty(this.comments[this.select].id)) return;
      const items = this.$refs.comment.items
        .filter(v => !_.isEmpty(v))
        .filter(v => v !== undefined);
      const slots = [
        {
          title: this.title,
          items: items,
          id: this.comments[this.select].id
        },
        this.select
      ];
      this.$axios.post("/api/slotUpdate", slots).then(() => {
        this.$store.commit("updateSlot", slots);
        this.flash = "保存しました";
      });
    }
  }
};
</script>
<style scoped></style>
