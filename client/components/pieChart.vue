<template>
  <client-only>
    <pie-chart
      :chartData="chartDataPie"
      :options="chartOptions">
    </pie-chart>
  </client-only>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            padding: 25,
            boxWidth: 40,
            fontSize: 12
          }
        },
        tooltips: {
          mode: "index",
          xPadding: 50
        },
      }
    }
  },
  computed: {
    ...mapGetters({
      chartDataPie: "chartDataPie",
    })
  }
}
</script>

<style>

</style>