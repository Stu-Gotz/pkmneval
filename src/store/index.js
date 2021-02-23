import { createStore } from 'vuex'

export default createStore({
  state: {
    team: {
    }
  },
  mutations: {
    updateTeam (state, newTeam) {
      state.team = newTeam
    },
    clearTeam (state) {
      state.team = {}
    }
  },
  actions: {
    updateTeam ({ commit }, team) {
      commit('updateTeam', team)
    },
    clearTeam ({ commit }) {
      commit('clearTeam')
    }
  },
  modules: {
  }
})
