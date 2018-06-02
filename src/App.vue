<template>
  <div id="app">
    <div class="container">
      <ToDoList />
      <DoneList />
    </div>
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

#app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
}

.list {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

h1 {
    text-align: center;
    text-transform: uppercase;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

</style>
