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
    <div>
      <client-only>
        <line-chart
          :chartData="chartDataLine"
          :options="chartOptions"
        ></line-chart>
      </client-only>
    </div>
    <div v-for="(data, index) in rate" :key="index">
      {{ data.name }}:{{ data.sum }}
      {{ Math.floor((data.sum / (sum || 1)) * 100) }} %
    </div>
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
        legend: {
          labels: {
            padding: 10,
            boxWidth: 40,
            fontSize: 10
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
          xAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 30 //値の最大表示数
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 5 //値の最大表示数
              }
            }
          ]
        }
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
      isCollect: "stop",
      rate: "rateData",
      sum: "sumData"
    })
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
    setTime() {}
  }
};
</script>
<style lang="scss">
.result-container {
  height: calc(100vh - #{$headerHeight});
}

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
  margin: 2vh 0;
}

.chart-card {
  background: tan;
  border-radius: 6px;
  width: 25%;
}

.ct-series-a .ct-bar {
  stroke-width: 50px;
}
</style>
