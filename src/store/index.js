import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios);
Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    base: [],
    sortParam: 'name'
  },
  getters:{
    base({base}){
      return base;
    },
    getSortParam({sortParam}) {
      return sortParam;
    },
    sortedList({sortParam, base}) {
      const arr = [...base];
      arr.sort((a,b) => {
        if(a[sortParam] > b[sortParam]) {
          return 1;
        } else {
          return -1;
        }
      });
      return arr;
    },
    getFullCard({base}) {
      return pageId => base.find(({_id}) => _id === pageId)
    }
  },
  mutations: {
    changeBase(state, data) {
      state.base = data;
    },
    changeSortParam(state, sortParam) {
      state.sortParam = sortParam;
    }
  },
  actions: {
    GET_DATA({state, commit}) {
      axios.get(`http://localhost:8000/base`)
      .then(response => {
       commit('changeBase', response.data);
      })
    },
    changeSortParam({commit}, sortParam) {
      commit('changeSortParam', sortParam)
    }
  },
  strict: process.env.Node_ENV !== 'production'
});
