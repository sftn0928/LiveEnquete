<template>
  <div>
    <commentFlame />
    <button @click="setCollection">スタート</button>
  </div>
</template>
<script>
import commentFlame from "~/components/commentFrame.vue";
export default {
  components: {
    commentFlame
  },
  data() {
    return {
      collectData: "",
      collection: []
    };
  },
  methods: {
    setCollection() {
      this.collection.push(this.collectData);
    }
  }
};
</script>
<style scoped></style>
