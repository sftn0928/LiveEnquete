<template>
  <div>
    <button @click="setCollection">setData</button>
    <input type="text" v-model="collectData" />
    <ul>
      <li v-for="(data, index) in collection" :key="index">{{ data }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collectData: "",
      collection: []
    };
  },
  methods: {
    setCollection() {
      this.collection.push(this.collectData);
    }
  }
};
</script>
<style scoped></style>
