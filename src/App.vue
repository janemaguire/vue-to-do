<template>
  <div id="app">
    <ToDoList :list="toDoListItems"/>
    <DoneList :list="doneListItems"/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import DoneList from './components/DoneList.vue'

export default {
  name: 'app',
  data () {
    return {
      toDoListItems: ['Get up', 'Look sickening', 'Make them eat it'],
      doneListItems: ['Fall down', 'Make mistakes']
    }
  },
  components: {
    ToDoList,
    DoneList
  }
}
</script>

<style>
</style>
