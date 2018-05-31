<template>
  <div>
    <h1>Done</h1>
    <ul>
      <li v-for="item in itemsDone">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DoneList',
  computed: {
    itemsDone () {
      return this.$store.state.doneListItems;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
