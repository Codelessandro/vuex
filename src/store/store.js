import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const getters = {
  evenOrOdd: state => state.count % 2 == 0 ? 'even' : 'odd'
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

const actions = {
  increment: (context, payload) => context.commit('increment'),
  decrement: (context, payload) => context.commit('decrement')
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
