<template>
  <div class="list">
    <h1>To Do</h1>
    <ul>
      <li v-for="item in toDoItems">
        {{item.task}}
        <button @click="markDone(item)" type="button" name="button">Mark as done</button>
      </li>
    </ul>
    <div class="mark-all">
      <button v-if="toDoItems.length > 1" @click="markAllDone" type="button" name="button">Mark all as done</button>
    </div>
    <div class="add-new">
      <input v-model="newItem" type="text" placeholder="Add an item">
      <button @click="addNew(newItem)" type="button" name="button">Add new</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      newItem: ''
    }
  },
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
      if (newItem) {
        this.$store.commit('addNew', newItem);
        this.newItem = '';
      }
    }
  }
}
</script>

<style scoped>

.mark-all {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2vh;
}

.add-new {
  display: flex;
  justify-content: space-between;
}

</style>
