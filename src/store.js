import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
        complete: false,
        id: 2
      },
      {
        task: 'Look sickening',
        complete: false,
        id: 3
      },
      {
        task: 'Make them eat it',
        complete: false,
        id: 4
      }
    ]
  },
  getters: {
    doneItems: state => {
      return state.listItems.filter(item => item.complete);
    },
    toDoItems: state => {
      return state.listItems.filter(item => !item.complete);
    }
  },
  mutations: {
    markAllDone(state) {
      return state.listItems.map(item => item.complete = true);
    },
    markDone(state, item) {
      item.complete = true;
    },
    addNew(state, newItem) {
      state.listItems.push(
        {
          task: newItem,
          complete: false,
          id: state.listItems.length
        }
      )
    },
    deleteItem(state, item) {
      state.listItems.splice(item.id, 1);
    },
  },
  actions: {

  }
})
