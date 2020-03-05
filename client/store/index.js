import Lang from "lodash/lang";

export const state = () => ({
  csrfToken: "",
  liveURL: "",
  pageURL: ""
});

export const mutations = {
  SET_CSRF_TOKEN(state, csrfToken) {
    state.csrfToken = csrfToken;
  },
  setLiveURL(state, URL) {
    const parseURL = URL.match(/watch\?v=([A-Za-z0-9/-]{11})/)[1];
    state.liveURL = parseURL;
    return parseURL;
  }
};

export const getters = {
  liveId: state => state.liveURL,
  pageId: state => state.liveURL,
  isPageId: state => !Lang.isEmpty(state.isPageURL)
};

export const actions = {
  nextServerInit({ commit }, { req }) {
    if (req.cookies) {
      commit("SET_CSRF_TOKEN", req.csrfToken());
    }
  }
};
