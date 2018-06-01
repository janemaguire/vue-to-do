import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listItems: [{
        task: 'Fall down',
        complete: true
      },
      {
        task: 'Make mistakes',
        complete: true
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
        if (state.listItems[i].complete) {
          list.push(state.listItems[i].task);
        }
      }
      return list;
    },
    toDoItems: state => {
      let list = [];
      for (let i=0; i<state.listItems.length; i++) {
        if (!state.listItems[i].complete) {
          list.push(state.listItems[i].task);
        }
      }
      return list;
    }
  },
  mutations: {
    markAllDone(state) {
      for (let i=0; i<state.listItems.length; i++) {
        state.listItems[i].complete = true;
        console.log('mutation worked', state.listItems[i].complete);
      }
    }
  },
  actions: {

  }
})
