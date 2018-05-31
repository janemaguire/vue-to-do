import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listItems: [{
        task: 'Fall down',
        completed: true
      },
      {
        task: 'Make mistakes',
        completed: true
      },
      {
        task: 'Get up',
        complete: false
      },
      {
        task: 'Look sickening',
        complete: false
      },
      {
        task: 'Make them eat it',
        complete: false
      }
    ]
  },
  getters: {
    doneItems: state => {
      let list = [];
      for (let i=0; i<state.listItems.length; i++) {
        if (state.listItems[i].completed) {
          list.push(state.listItems[i].task);
        }
      }
      return list;
    },
    toDoItems: state => {
      let list = [];
      for (let i=0; i<state.listItems.length; i++) {
        if (!state.listItems[i].completed) {
          console.log(state.listItems[i].task);
          list.push(state.listItems[i].task);
        }
      }
      return list;
    }
  },
  mutations: {

  },
  actions: {

  }
})
