<template>
  <div>
    <setURLComponent v-if="isSetURL === false" @finishSetURL="hideSetURL" />
    <collectComponent v-if="isSetURL" :socket="socket" />
  </div>
</template>
<script>
import resultComponent from "~/components/result";
import collectComponent from "~/components/collectChat";
import setURLComponent from "~/components/setURL";

import io from "socket.io-client";
import Lang from "lodash/lang";
export default {
  components: {
    collectComponent,
    setURLComponent,
  },
  data() {
    return {
      isSetURL: false,
<<<<<<< HEAD
      socket: io(),
=======
      isCollect: true,
      socket: "",
>>>>>>> 3494de7870a9724a6666b6a9d6556d8f06929bf0
      liveId: ""
    };
  },
  methods: {
    hideSetURL() {
      this.liveId = this.$store.getters.liveId;
      this.isSetURL = !this.isSetURL;
      this.isCollect = !this.isCollect;
    }
  },
  mounted() {
    this.socket = io();
    console.log(this.socket);
  },
  watch: {
    isSetURL() {
      const Id = this.liveId ? { liveId: this.liveId } : "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
