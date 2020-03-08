<template>
  <div>
    <input type="text" v-model="title" />
    <button @click="createChart">保存する</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    createChart() {
      this.$store.commit("createChart", title);
    }
  }
};
</script>
<style scoped></style>
