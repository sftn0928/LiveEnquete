<template>
  <div>
    <client-only>
      <line-chart
        :chartData="chartDataCom"
        :options="chartOptions"
      ></line-chart>
    </client-only>
  </div>
</template>
<script>
import Vue from "vue";
import chartList from "vue-chartist";
Vue.use(chartList);

export default {
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      time: 0
    };
  },

  mounted() {
    setInterval(() => {
      this.time++;
    }, 100);
  },
  computed: {
    chartDataCom() {
      return {
        labels: Array.from(new Array(this.time), (v, i) => i / 10),
        datasets: [
          {
            data: [...Array(this.time)].map((v, i) => i + 1 / 10)
          },
          {
            data: [...Array(this.time)].map((v, i) => Math.random() * i)
          }
        ]
      };
    }
  }
};
</script>
<style>
.chart-card {
  background: tan;
  border-radius: 6px;
  width: 25%;
}

.ct-series-a .ct-bar {
  stroke-width: 50px;
}
</style>
