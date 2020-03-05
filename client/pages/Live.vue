<template>
  <div>
    <setURLComponent  v-if="isSetURL === false" v-on:finishSetURL="hideSetURL" />
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
    setURLComponent,
  },
  data() {
    return {
      isSetURL: false,
      isCollect: true,
      socket: ""
    };
  },
  methods:{
    hideSetURL(){
      this.isSetURL = !this.isSetURL;
      this.isCollect = !this.isCollect;
    }
  },
  mounted() {
    this.socket = io();
  }
};
</script>

<style lang="scss" scoped></style>
