import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    sortParam: 'name',
    initial: [
      {
        "_id": "5c74144efc2e28554cd69b55",
        "name": "Watts",
        "nick": "Newman",
        "age": 19
      },
      {
        "_id": "5c74144e7f4b4715c93f0a16",
        "name": "Kerri",
        "nick": "Reed",
        "age": 26
      },
      {
        "_id": "5c74144eac409c45c2c2fdbb",
        "name": "Rachael",
        "nick": "Day",
        "age": 30
      },
      {
        "_id": "5c74144eb67be75c1dc0ab23",
        "name": "Georgette",
        "nick": "Lang",
        "age": 29
      },
      {
        "_id": "5c74144e3e1ed02b8d3de7eb",
        "name": "Daniels",
        "nick": "Jenkins",
        "age": 29
      },
      {
        "_id": "5c74144ea21698d9a40c3c84",
        "name": "Long",
        "nick": "Cervantes",
        "age": 29
      },
      {
        "_id": "5c74144eda4fd55a60234877",
        "name": "Wendi",
        "nick": "Floyd",
        "age": 28
      },
      {
        "_id": "5c74144eb1c5600a56a6b87f",
        "name": "Romero",
        "nick": "Bruce",
        "age": 29
      },
      {
        "_id": "5c74144e4f29d1e633f06cab",
        "name": "Murray",
        "nick": "Serrano",
        "age": 21
      },
      {
        "_id": "5c74144e8a350ae162dff464",
        "name": "Janis",
        "nick": "Fulton",
        "age": 25
      },
      {
        "_id": "5c74144e61bee3752e975ce0",
        "name": "Carlene",
        "nick": "Manning",
        "age": 26
      },
      {
        "_id": "5c74144ec7530b01e715c0dd",
        "name": "Irma",
        "nick": "Boyer",
        "age": 21
      },
      {
        "_id": "5c74144e7dc166be93a0416c",
        "name": "Loraine",
        "nick": "Velazquez",
        "age": 23
      },
      {
        "_id": "5c74144e6ceed9ac8fbfd96a",
        "name": "Bowers",
        "nick": "Lester",
        "age": 37
      },
      {
        "_id": "5c74144e993a58b713350c12",
        "name": "Nixon",
        "nick": "Harrison",
        "age": 30
      },
      {
        "_id": "5c74144e7fad30d8f954d721",
        "name": "Michelle",
        "nick": "Hardin",
        "age": 26
      },
      {
        "_id": "5c74144ed8af0fc118c8c5ff",
        "name": "Greer",
        "nick": "Lara",
        "age": 28
      }
    ],
    base: []
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
        // return a[this.sortParam] - b[this.sortParam];
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
    fetchData({state, commit}) {
      new Promise(res=>res(state.initial))
        .then(data => {
          commit('changeBase', data);
        })
    },
    changeSortParam({commit}, sortParam) {
      commit('changeSortParam', sortParam)
    }
  },
  strict: process.env.Node_ENV !== 'production'
});
