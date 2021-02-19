import Vue from 'vue'
import Vuex from 'vuex'

import { fromJS } from 'immutable'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: fromJS([
      {
        type: 'Text',
        'test value': 'Some text',
        'second value': 'Other text',
      },
    ])
  },
  mutations: {
    setData(state, data) {
      state.data = data
    },
  },
  actions: {
  },
  modules: {
  }
})
