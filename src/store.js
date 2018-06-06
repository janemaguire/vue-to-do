import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // Initial state
  state: {
    listItems: [{
        task: 'Fall down',
        complete: true,
        id: 0
      },
      {
        task: 'Make mistakes',
        complete: true,
        id: 1
      },
      {
        task: 'Get up',
        complete: true,
        id: 2
      },
      {
        task: 'Look sickening',
        complete: true,
        id: 3
      },
      {
        task: 'Make them eat it',
        complete: true,
        id: 4
      }
    ]
  },
  // Getters: computed properties for stores, available in all children
  getters: {
    doneItems: state => {
      return state.listItems.filter(item => item.complete);
    },
    toDoItems: state => {
      return state.listItems.filter(item => !item.complete);
    }
  },
  // Mutations: change state in a store by committing a mutation
  mutations: {
    markAllDone(state) {
      return state.listItems.map(item => item.complete = true);
    },
    markDone(state, item) {
      item.complete = true;
    },
    addNew(state, newItem) {
      state.listItems.push({
        task: newItem,
        complete: false,
        id: state.listItems.length
      })
    },
    deleteItem(state, item) {
      state.listItems.splice(item.id, 1);
    }
  },
  actions: {
    fetchList({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function(response) {
          response.data.slice(0, 10).forEach(function(item) {
            commit('addNew', item.title)
          });

        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})
