<template>
  <div>
    <commentFlame />
    <resultComponent />
  </div>
</template>
<script>
import resultComponent from "@/components/result";
import commentFlame from "@/components/commentFrame";

export default {
  components: {
    resultComponent,
    commentFlame
  },
  props: {
    socket
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
