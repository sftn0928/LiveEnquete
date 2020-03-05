import _ from "lodash";
import io from "socket.io-client";

import socketCreatePlugins from "@/plugins/createSocket";

const socketPlugins = socketCreatePlugins(io());
export const plugins = [socketPlugins];

export const state = () => ({
  //セキュリティトークン
  csrfToken: "",
  //
  liveId: "",
  pageId: "",
  socket: "",
  collects: {}
});

export const mutations = {
  SET_CSRF_TOKEN(state, csrfToken) {
    state.csrfToken = csrfToken;
  },
  setLiveURL(state, URL) {
    const parseURL = URL.match(/watch\?v=([A-Za-z0-9/-]{11})/);
    state.liveId = _.isNull(parseURL) ? false : parseURL[1];
  },
  setSocket(state, socket) {
    // console.log(io());
    state.socket = socket;
  },
  startCollect(state, arr) {
    state.collects.startTime = Date.now();
    state.collects.labels = [];
    state.collects.datasets = arr.map(value => {
      return {
        sum: 0,
        data: [],
        label: value
      };
    });
  },
  SET_URL(state, payLord) {},
  getData(state, message) {
    if (_.isEmpty(state.collects)) return;

    let time = Math.floor((Date.now() - state.collects.startTime) / 1000);
    state.collects.labels = Array.from(new Array(time), (v, i) => i);
    state.collects.datasets = state.collects.datasets.map(value => {
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
  }
};

export const getters = {
  liveId: state => state.liveId,
  pageId: state => state.pageId,
  isPageId: state => !Lang.isEmpty(state.pageId),
  chartData: state => {
    const data = state.collects;
    const returndata = {
      labels: data.labels,
      datasets: data.datasets.map(v => {
        return {
          label: v.label,
          data: v.data
        };
      })
    };
    console.log(returndata);
    return returndata;
  }
};

export const actions = {
  nextServerInit({ commit }, { req }) {
    if (req.cookies) {
      commit("SET_CSRF_TOKEN", req.csrfToken());
    }
  }
};
