<template>
  <div class="">
    {{ form }}
  </div>
</template>
<script>
import axios from "axios";

export default {
  asyncData({ params }) {
    return axios
      .get(`http://server:3001/id/${params.id}/User`)
      .then(val => {
        console.log(val);
        return {
          form: val.data
        };
      })
      .catch(e => {
        return {
          form: e
        };
      });
  },
  data() {
    return {};
  }
};
</script>
<style scoped></style>
