<template>
  <div class="result-container">
    <div class="switching-container">
      <div v-if="count !== '∞'" class="timer-view">
      {{ time }}
    </div>
      <div v-if="count === '∞'">
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
      <button @click="switchChart()" v-if="isPieBtn == false" class="switching-button">円グラフ</button>
      <button @click="switchChart()" v-if="isLineBtn" class="switching-button">折れ線グラフ</button>
    </div>
    
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
      isPie: false,
      isLine: false,
      isPieBtn: false,
      isLineBtn: false,
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
      this.isPieBtn = !this.isPieBtn;
      this.isLineBtn = !this.isLineBtn;
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
  margin: calc(2vh + 25px) 0 2vh;
}

.switching-container {
  display: flex;
  justify-content: space-evenly;
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
  margin: 6vh 2em 10vh;
  font-size: 15px;
  color: $textColor;
}

</style>
