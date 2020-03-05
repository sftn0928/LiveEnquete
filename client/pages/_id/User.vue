<template>
  <div class="">
    {{ form }}
  </div>
</template>
<script>
// import axios from "axios";
import myAxios from "~/plugins/myAxios";
export default {
  async asyncData({ params }) {
    let dataResult = await myAxios.getCommon(`id/${params.id}/User`);
    return { form: dataResult.data };
  },
  data() {
    return {};
  }
};
</script>
<style scoped></style>
