<template>
  <div class="result-container">
    <div v-if="count !== '∞'" class="timer-view">
      {{ time }}
    </div>
    <div v-if="count === '∞'" class="switching-container">
      <button
        @click="collectStop"
        v-if="isCollect === false"
        class="switching-button"
      >
        STOP
      </button>
      <button @click="collectRestart" v-if="isCollect" class="switching-button">
        RESTART
      </button>
    </div>
    <button @click="switchChart()">円グラフの表示</button>
    <div>
      <client-only>
        <lineChart
        :chartData="chartDataLine"
        v-if="isLine == false" />
        <pieChart v-if="isPie" />
      </client-only>
    </div>
    <div class="result-table">
      <div v-for="(data, index) in rate" :key="index" class="result-data">
      {{ data.name }} : {{ data.sum }}票
      {{ Math.floor((data.sum / (sum || 1)) * 100) }} %
    </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import pieChart from "~/components/pieChart"
import lineChart from "~/components/lineChart"
import _ from "lodash";
export default {
  data() {
    return {
<<<<<<< HEAD
      isPie: true,
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
          xPadding: 50,
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
=======
      isPie: false,
      isLine: false,
>>>>>>> c8ccae0e100619a2c32310eb806f97cbaf3f55b8
      interval: "",
      time: ""
    };
  },
  mounted() {
    this.StartInterval();
  },
  components: {
    pieChart,
    lineChart
  },
  destroy() {
    clearInterval(this.interval);
  },
  computed: {
    ...mapGetters({
      chartDataLine: "chartDataLine",
      count: "count",
      isCollect: "stop",
      rate: "rateData",
      sum: "sumData",
    }),
  },
  methods: {
    collectStop() {
      clearInterval(this.interval);
      this.$store.commit("collectStop");
    },
    StartInterval() {
      if (!_.isEmpty(this.interval)) return;
      console.log(this.count == "∞");
      if (this.count !== "∞") {
        this.interval = setInterval(() => {
          let time = Math.floor((this.count - Date.now()) / 1000);
          console.log(time);
          this.time = `${Math.floor(time / 60)}:${time % 60}`;
          if (time <= 0) {
            this.collectStop();
          }
        }, 1000);
      }
    },
    collectRestart() {
      this.$store.commit("collectRestart");
      this.StartInterval();
    },
    switchChart(){
      this.isPie = !this.isPie;
      this.isLine = !this.isLine;
    },
    props: {

    },
    setTime() {}
  }
};
</script>
<style lang="scss">

.timer-view {
  display: flex;
  justify-content: center;
  font-size: $fontSizeML;
  color: $textColor;
  margin: 3vh;
}

.switching-container {
  display: flex;
  justify-content: center;
}

.switching-button {
  width: 8em;
  height: 2.5em;
  display: inline-block;
  font-size: $fontSizeMM;
  background-color: $bottonColor;
  color: #ffffff;
  border-style: none;
  border-radius: 10px;
  cursor: pointer;
  margin: calc(2vh + 25px) 0 2vh;
}

.result-table{
  display: flex;
  justify-content: center;
  align-items: center;
}

.result-data{
  margin: 2em;
  font-size: 15px;
  color: $textColor;
}

</style>
