<template>
  <div>
    <commentFrame @setCollect="setCollect($event)" ref="comment" />
    <resultComponent />
    <timeSet />
  </div>
</template>
<script>
import resultComponent from "@/components/result";
import commentFrame from "@/components/commentFrame";
import timeSet from "@/components/timeSet";

export default {
  components: {
    resultComponent,
    commentFrame,
    timeSet
  },
  data() {
    return {
      collection: []
    };
  },
  methods: {
    setCollect(event) {
      console.log(this.$refs.comment, event);
    }
  }
};
</script>
<style scoped></style>
