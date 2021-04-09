import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: [],
    packageInfo: {},
    searchValue: ''
  },
  mutations: {
    setPackages: (state, packages) => {
      state.packages = packages
    },
    setPackageInfo: (state, packageInfo) => {
      state.packageInfo = packageInfo
    },
    setSearchValue: (state, value) => {
      state.searchValue = value
    },
  },
  actions: {
    getPackages({commit}) {
      return axios.get('https://data.jsdelivr.com/v1/stats/packages')
        .then((response) => {
          commit('setPackages', response.data)
        })
    },
    getPackageInfo({commit}, pack) {
      return axios.get(`https://data.jsdelivr.com/v1/package/${pack.type}/${pack.name}`)
        .then((response) => {
        commit('setPackageInfo', response.data)
      })
    },
    getSearchValue({commit}, value) {
      commit('setSearchValue', value)
    },
  },
  getters: {
    packages(state) {
      return state.packages
    },
    packageInfo(state) {
      return state.packageInfo
    },
    searchValue(state) {
      return state.searchValue
    },
  },
  modules: {}
})
