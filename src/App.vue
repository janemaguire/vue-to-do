<template>
  <div id="app">
    <div class="title">
      <h1>Things to do</h1>
    </div>
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
  },
  methods: {

  },
  created() {
    this.$store.dispatch('fetchList')
  }
}
</script>

<style>

#app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Special Elite', cursive;
    color: mediumvioletred;
}

.title {
  background-color: mediumvioletred;
  color: white;
  margin: 5vh;
  padding: 1vh 5vh;
  border-radius: 5vw;
}

.container {
    font-size: 1.5rem;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
}

.list {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    margin: 5vh;
    padding: 0 5vh 5vh 5vh;
    border: 1vw solid;
    border-radius: 5vw;
}

.list p {
  max-width: 65%;
}

h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5rem;
    margin: 2rem;
    padding-top: 0.5rem;
}

button {
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;

  background-color: mediumvioletred;
  color: white;
  border: none;
  font-size: 1.2rem;
  font-family: 'Special Elite', cursive;
}

button:hover {
  background-color: deeppink;
}

input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  border: solid 1px mediumvioletred;
  outline: none;
  color: mediumvioletred;
  font-family: 'Special Elite', cursive;
  font-size: 1rem;
  width: 60%;
}

input::placeholder {
  color: mediumvioletred;
}

input:focus {
  background-color: lavenderblush;
  border: solid 2px mediumvioletred;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Homemade Apple', cursive;
}

</style>
