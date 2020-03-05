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
    setURLComponent
  },
  data() {
    return {
      isSetURL: false,
      socket: {},
      LiveId: ""
    };
  },
  methods: {
    hideSetURL() {
      this.LiveId = this.$store.getters.liveId;
      this.isSetURL = !this.isSetURL;
    }
  },
  mounted() {
    this.socket = io();
  },
  watch: {
    isSetURL() {
      const Id = Lang.isEmpty(LiveId) ? "" : { liveId: this.liveId };
    }
  }
};
</script>

<style lang="scss" scoped></style>
