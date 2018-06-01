<template>
  <div>
    <h1>To Do</h1>
    <ul>
      <li v-for="item in toDoItems">
        {{item.task}}
        <button @click="markDone(item)" type="button" name="button">Mark as done</button>
      </li>
    </ul>
    <input v-model="newItem" type="text" placeholder="Add an item">
    <button @click="addNew(newItem)" type="button" name="button">Add new</button>
    <button @click="markAllDone" type="button" name="button">Mark all as done</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  computed: {
    toDoItems() {
      return this.$store.getters.toDoItems;
    }
  },
  methods: {
    markAllDone() {
      this.$store.commit('markAllDone');
    },
    markDone(item) {
      this.$store.commit('markDone', item);
    },
    addNew(newItem) {
      this.$store.commit('addNew', newItem);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
