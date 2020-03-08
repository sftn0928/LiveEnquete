<template>
  <div>
    <commentFrame v-if="isStart === false" ref="comment" />
    <timeSet v-if="isStart === false" @finishTimeSet="hideFrameTime" />
    <resultComponent v-if="isStart" />
  </div>
</template>
<script>
import resultComponent from "@/components/result";
import commentFrame from "@/components/commentFrame";
import timeSet from "@/components/timeSet";
import _ from "lodash";

export default {
  components: {
    resultComponent,
    commentFrame,
    timeSet
  },
  data() {
    return {
      isStart: false
    };
  },
  methods: {
    setCollection() {
      this.collection.push(this.collectData);
    },
    hideFrameTime() {
      const items = this.$refs.comment.items
        .filter(v => !_.isEmpty(v))
        .filter(v => v !== undefined);
      console.log(items);
      if (_.isEmpty(items)) return;
      this.$store.commit("startCollect", this.$refs.comment.items);
      this.isStart = !this.isStart;
    }
  },
  mounted() {
    if (this.$store.state.isCollect) {
      this.isStart = true;
    }
  }
};
</script>
<style scoped></style>
