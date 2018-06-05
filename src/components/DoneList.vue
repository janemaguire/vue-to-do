<template>
  <div class="list">
    <h1>Done</h1>
    <ul>
      <li v-for="item in doneItems">
        {{item.task}}
        <button @click="deleteItem" type="button" name="button">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DoneList',
  computed: {
    doneItems() {
      return this.$store.getters.doneItems
    }
  },
  methods: {
    deleteItem(item) {
      // Committing a mutation
      this.$store.commit('deleteItem', item);
    }
  }
}
</script>

<style scoped>

</style>
