<template>
  <div>
    <setURLComponent  v-if="isSetURL === false" v-on:finishSetURL="hideSetURL" />
    <collectComponent v-if="isCollect === false" />
    <resultComponent v-if="isCollect" />
  </div>
</template>
<script>
import collectComponent from "~/components/collectChat";
import resultComponent from "~/components/result";
import setURLComponent from "~/components/setURL";
export default {
  components: {
    collectComponent,
    resultComponent,
    setURLComponent,
  },
  data() {
    return {
      isSetURL: false,
      isCollect: false
    };
  },
  methods:{
    hideSetURL(){
      this.isSetURL = !this.isSetURL;
    }
  }
};
</script>

<style lang="scss" scoped></style>
