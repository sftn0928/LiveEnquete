<template>
  <div>
    <button @click="isCollect = !isCollect">StartCollect! 10秒</button>
    <button @click="isSetURL = !isSetURL">setURL</button>
    <setURLComponent v-if="isSetURL === false" @setURL="setURL($event)" />
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
    setURLComponent
  },
  data() {
    return {
      isCollect: false,
      isSetURL: false,
      URL: ""
    };
  },
  methods: {
    setURL(input) {
      this.isSetURL = true;
      this.URL = input;
    }
  }
};
</script>

<style lang="scss" scoped></style>
