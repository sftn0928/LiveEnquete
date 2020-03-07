<template>
  <div>
    <client-only>
      <line-chart :chartData="chartData" :options="chartOptions"></line-chart>
    </client-only>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

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
    }, 1000);
  },
  computed: {
    ...mapGetters({
      chartData: "chartData"
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
