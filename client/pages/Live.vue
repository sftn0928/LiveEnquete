<template>
  <div>
    <setURLComponent v-if="isSetURL === false" v-on:finishSetURL="hideSetURL" />
    <resultComponent v-if="isCollect" />
    <button @click="isCollect = !isCollect">StartCollect! 10秒</button>
    <button @click="isSetURL = !isSetURL">setURL</button>
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
    resultComponent,
    setURLComponent
  },
  data() {
    return {
      isSetURL: false,
      socket: "",
      LiveId: "",
      isCollect: false
    };
  },
  methods: {
    hideSetURL() {
      this.isSetURL = !this.isSetURL;
    }
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
