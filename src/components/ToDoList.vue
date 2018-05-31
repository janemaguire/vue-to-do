<template>
  <div>
    <h1>To Do</h1>
    <ul>
      <li v-for="item in itemsToDo">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  computed: {
    itemsToDo() {
      return this.$store.state.toDoListItems;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
