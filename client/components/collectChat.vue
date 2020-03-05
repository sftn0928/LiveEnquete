<template>
  <div>
    <commentFrame />
    <resultComponent />
  </div>
</template>
<script>
import resultComponent from "@/components/result";
import commentFrame from "@/components/commentFrame";

export default {
  components: {
    resultComponent,
    commentFrame
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
