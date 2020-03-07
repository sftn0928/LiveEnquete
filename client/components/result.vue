<template>
  <div>
    {{ time }}
    <button @click="collectStop" v-if="isCollect === false">
      Stop
    </button>
    <button @click="collectRestart" v-if="isCollect">
      Restart
    </button>
    <client-only>
      <line-chart
        :chartData="chartDataLine"
        :options="chartOptions"
      ></line-chart>
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
        maintainAspectRatio: false
      },
      interval: "",
      time: ""
    };
  },
  mounted() {
    this.StartInterval();
  },
  destroy() {
    clearInterval(this.interval);
  },
  computed: {
    ...mapGetters({
      chartDataLine: "chartDataLine",
      count: "count",
      isCollect: "stop"
    })
  },
  methods: {
    collectStop() {
      clearInterval(this.interval);
      this.$store.commit("collectStop");
    },
    StartInterval() {
      if (!_.isEmpty(this.interval)) return;
      this.interval = setInterval(() => {
        if (this.count !== "∞") {
          let time = Math.floor((this.count - Date.now()) / 1000);
          console.log(time);
          this.time = `${Math.floor(time / 60)}:${time % 60}`;
          if (time <= 0) {
            this.collectStop();
          }
        }
      }, 1000);
    },
    collectRestart() {
      this.$store.commit("collectRestart");
      this.StartInterval();
    },
    setTime() {}
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
