<template>
  <div>
    {{ count }}
    <client-only>
      <line-chart :chartData="chartData" :options="chartOptions"></line-chart>
      <Doughnut-chart :chartData="chartData" :options="chartOptions"></Doughnut-chart>
    </client-only>

  </div>
</template>
<script>
import { mapGetters } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      }
    };
  },
  mounted() {
    if (!_.isEmpty(interval)) return;
    let interval = setInterval(() => {
      this.$store.commit("decrementCount", interval);
    }, 1000);
  },
  computed: {
    ...mapGetters({
      chartData: "chartData",
      count: "count",
      interval: "interval"
    })
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
