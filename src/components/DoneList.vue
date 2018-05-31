<template>
  <div>
    <h1>Done</h1>
    <ul>
      <li v-for="item in doneItems">{{item}}</li>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
