const state = {
  isTerminalOpen: false
}

const getters = {
  terminalModalOpen: (state, /*getters, rootState*/) => {
    return state.isTerminalOpen
  }
}

const actions = {
  toggleTerminalModal({commit, /*state*/}) {
    commit('setTerminalModal');
  }
}

const mutations = {
  setTerminalModal(state) {
    state.isTerminalOpen = !state.isTerminalOpen;
    console.log(state);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}