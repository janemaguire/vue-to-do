import Vue from 'vue'
import Vuex from 'vuex'

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
    // deleteAll(state) {
    //   for (let i=0; i<state.listItems.length; i++) {
    //     if (state.listItems[i].complete == true) {
    //       console.log('false')
    //       state.listItems.splice(i.id, 1);
    //     }
    //   }
    // },
  },
  actions: {

  }
})
