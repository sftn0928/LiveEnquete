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
  authUser: null,
  liveId: "",
  pageId: "",
  socket: "",
  collects: {},
  count: "",
  interval: "",
  isCollectStop: false,
  isCollect: false,
  betweenTime: 0,
  betweenTimeStart: 0
});

export const mutations = {
  SET_CSRF_TOKEN(state, csrfToken) {
    state.csrfToken = csrfToken;
  },
  SET_URL(state, payLord) {},
  SET_USER: function(state, user) {
    state.authUser = user;
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
        backgroundColor: `hsla(0, 100%, 100%, 0)`,
        borderColor: `hsla(${index * 30}, 100%, 60%, 1)`
      };
    });
  },
  getData(state, message) {
    if (_.isEmpty(state.collects)) return;
    if (state.isCollectStop) return;
    let time = Math.floor(
      (Date.now() - state.betweenTime - state.collects.startTime) / 1000
    );
    console.log(time);
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
  countSet(state, time) {
    state.isCollect = true;
    if (time !== "∞") {
      state.count = Date.now() + time * 1000;
    } else state.count = time;
  },
  decrementCount(state, interval) {
    state.interval = interval;
  },
  collectStop(state) {
    state.isCollectStop = true;
    state.betweenTimeStart = Date.now();
  },
  collectRestart(state) {
    state.isCollectStop = false;
    state.betweenTime = state.betweenTime + Date.now() - state.betweenTimeStart;
    console.log(state.betweenTime);
  }
};

export const getters = {
  liveId: state => state.liveId,
  pageId: state => state.pageId,
  isPageId: state => !Lang.isEmpty(state.pageId),
  interval: state => state.interval,
  stop: state => state.isCollectStop,
  isCollect: state => state.isCollect,
  chartDataLine: state => {
    const data = state.collects;
    return {
      labels: data.labels,
      datasets: data.datasets.map(v => {
        return {
          label: v.label,
          data: v.data,
          borderColor: v.borderColor,
          backgroundColor: v.backgroundColor,
          pointRadius: 0,
          lineTension: 0
        };
      })
    };
  },
  count: state => state.count,
  rateData: state => {
    const data = state.collects;
    return data.datasets.map(value => {
      return {
        name: value.label,
        sum: value.sum
      };
    });
  },
  sumData: state => {
    const data = state.collects;
    return data.datasets.reduce((sum, cu) => sum + cu.sum, 0);
  }
};

export const actions = {
  nextServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit("SET_USER", req.session.authUser);
    }
  },

  async login({ commit }, { user }) {
    commit("SET_USER", user);

    await axios.post("/session/login", { authUser: user });
  },

  async logout({ commit }) {
    commit("SET_USER", null);

    await axios.post("/session/logout");
  }
};

// 半角 -> 全角

// function zenkakuHankaku(str) {
//   return str.replace(/[A-Za-z0-9]/g, function(s) {
//       return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
//   });
// }
// console.log(zenkakuHankaku("12zxsDSF"))