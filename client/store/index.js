import _ from "lodash";
import io from "socket.io-client";
import socketCreatePlugins from "@/plugins/createSocket";

const socketPlugins = socketCreatePlugins(io());
export const plugins = [socketPlugins];

let datasetsInter = {
  data: [],
  sum: "",
  label: "",
  backgroundColor: "",
  borderColor: ""
};
let collectsInter = {
  startTime: "",
  labels: [],
  datasets: [datasetsInter]
};

export const state = () => ({
  //セキュリティトークン
  csrfToken: "",
  liveId: "",
  pageId: "",
  socket: "",
  collects: collectsInter,
  count: "",
  interval: ""
});

export const mutations = {
  SET_CSRF_TOKEN(state, csrfToken) {
    state.csrfToken = csrfToken;
  },
  setLiveURL(state, URL) {
    const parseURL = URL.match(/watch\?v=([A-Za-z0-9-/:-@\[-~/-]{11})/);
    state.liveId = _.isNull(parseURL) ? false : parseURL[1];
  },
  startCollect(state, arr) {
    state.collects.startTime = Date.now();
    state.collects.labels = [];
    state.collects.datasets = arr.map((value, index) => {
      return {
        sum: 0,
        data: [],
        label: value,
        backgroundColor: `hsla(0, 0, 0, 0)`,
        borderColor: `hsla(${index * 30}, 100%, 60%, 1)`
      };
    });
  },
  SET_URL(state, payLord) {},
  getData(state, message) {
    if (_.isEmpty(state.collects)) return;
    let time = Math.floor((Date.now() - state.collects.startTime) / 1000);
    state.collects.labels = Array.from(new Array(time), (v, i) => i);
    state.collects.datasets.forEach(value => {
      if (message.includes(value.label)) {
        value.sum++;
      }
      const length = value.data.length - 1;
      value.data = [
        ...value.data,
        ...[...Array(time - length)].fill(value.sum)
      ];
      return value;
    });
    state.collects = Object.assign({}, state.collects);
  },
  countSet(state, count) {
    let [minute, second] = count;
    console.log(minute, second, count);
    if (minute === "∞") {
      state.count = ["∞", "∞"];
    } else {
      state.count = [minute, second];
      console.log(state.count);
    }
  },
  decrementCount(state, interval) {
    state.interval = interval;
    const [minute, second] = state.count;
    if (minute !== "∞") {
      let sum = Number(minute) * 60 + Number(second);
      if (sum > 0) {
        sum--;
        state.count = [Math.floor(sum / 60), sum % 60];
      }
    }
  }
};

export const getters = {
  liveId: state => state.liveId,
  pageId: state => state.pageId,
  isPageId: state => !Lang.isEmpty(state.pageId),
  interval: state => interval,
  chartData: state => {
    const data = state.collects;
    return {
      labels: data.labels,
      datasets: data.datasets.map(v => {
        return {
          label: v.label,
          data: v.data,
          borderColor: v.borderColor,
          backgroundColor: v.backgroundColor
        };
      })
    };
  },
  count: state => `${state.count[0]}:${state.count[1]}`
};

export const actions = {
  nextServerInit({ commit }, { req }) {
    if (req.cookies) {
      commit("SET_CSRF_TOKEN", req.csrfToken());
    }
  }
};
