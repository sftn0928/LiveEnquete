<template>
  <div>
    <button @click="isCollect = !isCollect">StartCollect! 10秒</button>
    <button @click="isSetURL = !isSetURL">setURL</button>
    <setURLComponent v-if="isSetURL === false" />
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
      isSetURL: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
