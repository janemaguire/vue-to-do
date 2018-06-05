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
    background-image: url('assets/glitter.jpeg');
}

.title {
  background-color: mediumvioletred;
  color: white;
  margin: 5vh;
  padding: 1vh 5vh;
  border: 1vw solid;
  border-radius: 5vw;
}

.container {
    font-family: 'Homemade Apple', cursive;
    font-size: 1.5rem;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
}

.list {
    width: 40%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    color: mediumvioletred;
    margin: 5vh;
    padding: 0 5vh 5vh 5vh;
    border: 1vw solid;
    border-radius: 5vw;
}

h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Special Elite', cursive;
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
  font-family: 'Special Elite', cursive;
  font-size: 1.2rem;
}

input {
  padding: 0.5rem 5rem 0.5rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  color: mediumvioletred;
  border: solid 1px mediumvioletred;
  outline: none;
  font-family: 'Special Elite', cursive;
  font-size: 1rem;
}

input::placeholder {
  color: mediumvioletred;
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
}

</style>
