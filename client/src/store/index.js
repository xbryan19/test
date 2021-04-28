import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}, // default empty object
    leaderInfo: {},
  },
  mutations: {
    CHANGE_USER_INFO: (state, data) => {
      state.userInfo = data
    },
    CHANGE_LEADER_INFO: (state, data) => {
      state.leaderInfo = data
      // axios.get('api/getCheckpoint')
      //   .then(res => {
      //     state.check_points = res.data
      //   }).catch(err => {
      //     console.log(err)
      //   })
    },
  },
  //save to web storage
  plugins: [createPersistedState()]
})