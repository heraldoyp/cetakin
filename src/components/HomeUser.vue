<template>
  <div class="hello">
    <Navbar></Navbar>
    <h1>Ini After Login</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar"

export default {
  name: 'HomeUser',
  component: {Navbar},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
