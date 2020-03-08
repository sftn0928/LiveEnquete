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