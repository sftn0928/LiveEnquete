<template>
  <div>
    <commentFlame />
    <resultComponent />
  </div>
</template>
<script>
import resultComponent from "@/components/result";
import commentFlame from "@/components/commentFlame";

export default {
  components: {
    resultComponent,
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
