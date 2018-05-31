<template>
  <div id="app">
    <ToDoList />
    <DoneList />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import DoneList from './components/DoneList.vue'

export default {
  name: 'app',
  components: {
    ToDoList,
    DoneList
  }
}
</script>

<style>
</style>
