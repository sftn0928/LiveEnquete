<template>
  <div>
    <commentFrame />
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
    this.socket.on("emitComment", comment => {});
  }
};
</script>
<style scoped></style>
