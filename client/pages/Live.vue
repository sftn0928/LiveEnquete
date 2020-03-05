<template>
  <div>
    <button @click="isCollect = !isCollect">StartCollect! 10秒</button>
    <button @click="isSetURL = !isSetURL">setURL</button>
    <setURLComponent v-if="isSetURL === false" />
    <collectComponent v-if="isCollect === false" :socket="socket" />
  </div>
</template>
<script>
import collectComponent from "~/components/collectChat";
import setURLComponent from "~/components/setURL";
import io from "socket.io-client";
export default {
  components: {
    collectComponent,
    setURLComponent
  },
  data() {
    return {
      isCollect: false,
      isSetURL: false,
      socket: ""
    };
  },
  mounted() {
    this.socket = io();
  }
};
</script>

<style lang="scss" scoped></style>
