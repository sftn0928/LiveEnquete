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
import Lang from "lodash/lang";
export default {
  components: {
    collectComponent,
    setURLComponent
  },
  data() {
    return {
      isCollect: false,
      isSetURL: false,
      socket: "",
      LiveId: ""
    };
  },
  mounted() {
    this.socket = io();
  },
  watch: {
    isSetURL() {
      if (isSetURL) {
        const Id = Lang.isEmpty(LiveId) ? "" : { liveId: this.liveId };
        this.this.socket.emit("setURL", Id);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
