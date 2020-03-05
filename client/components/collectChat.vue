<template>
  <div>
    <commentFlame />
    <resultComponent />
    <timeSet />
  </div>
</template>
<script>
import resultComponent from "@/components/result";
import commentFlame from "@/components/commentFrame";
import timeSet from "@/components/timeSet";

export default {
  components: {
    resultComponent,
    commentFlame,
    timeSet
  },
  props: {
    socket: Object
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
  },
  mounted() {
    socket.on("emitComment", comment => {});
  }
};
</script>
<style scoped></style>
