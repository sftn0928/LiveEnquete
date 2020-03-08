<template>
  <client-only>
    <line-chart
      :chartData="chartData"
      :options="chartOptions"
    ></line-chart>
  </client-only>
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
        legend: {
          labels: {
            padding: 25,
            boxWidth: 40,
            fontSize: 12
          }
        },
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 0,
            bottom: 0
          }
        },
        tooltips: {
          mode: "index",
          xPadding: 50
        },
        scales: {
          xAxes: [{
            ticks: {
              autoSkip: true,
              maxTicksLimit: 30 //値の最大表示数
            },
          }],
          yAxes: [{
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6 //値の最大表示数
            },
          }]
      }
      },
    };
  },
  props: {
    chartData: Object
  }
}
</script>

<style>

</style>