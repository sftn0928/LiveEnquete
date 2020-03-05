import _ from "lodash";
import io from "socket.io-client";

import socketCreatePlugins from "@/plugins/createSocket";

const socketPlugins = socketCreatePlugins(io());

export const state = () => ({
  //セキュリティトークン
  csrfToken: "",
  //
  liveId: "",
  pageId: "",
  socket: "",
  collects: [],
  collectObject: []
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
  setInput(state, arr) {
    state.collects = arr;
  },
  SET_URL(state, payLord) {},
  getData(state, message) {
    state.collectObject = collects.map(value => {});
  }
};

export const getters = {
  liveId: state => state.liveId,
  pageId: state => state.pageId,
  isPageId: state => !Lang.isEmpty(state.pageId)
};

export const actions = {
  nextServerInit({ commit }, { req }) {
    if (req.cookies) {
      commit("SET_CSRF_TOKEN", req.csrfToken());
    }
  }
};

export const plugins = [socketPlugins];
