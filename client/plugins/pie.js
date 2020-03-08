import Vue from "vue";
import { Pie, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

Vue.component("pie-chart", {
  extends: Pie,
  mixins: [reactiveProp],
  props: ["options"],
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
});
