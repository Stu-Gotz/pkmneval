import { createStore } from 'vuex'

export default createStore({
  state: {
    team: [],
    dex: []
  },
  mutations: {
    updateTeam (state, newTeam) {
      state.team = newTeam
    },
    clearTeam (state) {
      state.team = []
      state.dex = []
    },
    createDex (state, newDex) {
      state.dex = newDex
    }
  },
  actions: {
    updateTeam ({ commit }, team) {
      commit('updateTeam', team)
    },
    clearTeam ({ commit }) {
      commit('clearTeam')
    },
    createDex ({ commit }, newDex) {
      commit('createDex', newDex)
    }
  },
  modules: {
  }
})
