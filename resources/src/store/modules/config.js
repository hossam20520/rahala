const state = {
  themeMode: {
    dark: false,
    light: true,
    semi_dark: false,
    theme_color: 'lite-purple',
    layout: 'large-sidebar',
    rtl: false,
  },
};

const getters = {
  getThemeMode: (state) => state.themeMode,
};

const actions = {
  changeThemeMode({ commit }) {
    commit('toggleThemeMode');
  },
  changeThemeLayout({ commit }, data) {
    commit('toggleThemeLayout', data);
  },
  changeThemeRtl({ commit }) {
    commit('toggleThemeRtl');
  },

  changetoRtl({ commit }) {
    commit('saveRtl');
  },

  changetoLtr({ commit }) {
    commit('saveLtr');
  },
};

const mutations = {
  toggleThemeMode: (state) => {
    state.themeMode.dark = !state.themeMode.dark;
  },
  toggleThemeLayout(state, data) {
    state.themeMode.layout = data;
  },
  toggleThemeRtl(state) {
    state.themeMode.rtl = !state.themeMode.rtl;
  },


  saveRtl(state) {
    state.themeMode.rtl = true;
  },

  saveLtr(state) {
    state.themeMode.rtl = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
