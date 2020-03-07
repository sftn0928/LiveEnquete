<template>
  <div>
    <setURLComponent v-if="isSetURL === false" @finishSetURL="hideSetURL" />
    <collectComponent v-if="isSetURL" />
  </div>
</template>
<script>
import resultComponent from "~/components/result";
import collectComponent from "~/components/collectChat";
import setURLComponent from "~/components/setURL";
export default {
  components: {
    collectComponent,
    setURLComponent
  },
  data() {
    return {
      isSetURL: false,
      liveId: ""
    };
  },
  methods: {
    hideSetURL() {
      this.liveId = this.$store.getters.liveId;
      this.isSetURL = !this.isSetURL;
    },
    connect(Id) {
      this.$store.commit("SET_URL", Id);
    }
  },
  watch: {
    isSetURL() {
      if (!this.$store.state.isCollect) {
        const Id = this.liveId ? { liveId: this.liveId } : "";
        this.connect(Id);
      }
    }
  },
  mounted() {
    console.log(this.$store.state.isCollect);
    if (this.$store.state.isCollect) {
      this.isSetURL = true;
    }
  }
};
</script>

<style lang="scss" scoped></style>
