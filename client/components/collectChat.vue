<template>
  <div>
    <commentFrame v-if="isStart === false" />
    <timeSet v-if="isStart === false" @finishTimeSet="hideFrameTime" />
    <resultComponent v-if="isStart" />
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
  props: {
    socket: Object
  },
  data() {
    return {
      isStart: false,
    };
  },
  methods: {
    setCollection() {
      this.collection.push(this.collectData);
    },
    hideFrameTime() {
      this.isStart = !this.isStart;
      
    }
  },
  mounted() {
    this.socket.on("emitComment", comment => {});
  }
};
</script>
<style scoped></style>
