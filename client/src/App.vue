<template>
  <div id="app">
   <img width="350" height="170" id="logo" alt="Vue logo" src="./assets/logo.png">
   <!--Skriver ut innehållet i PostComponent till webbsidan-->
    <PostComponent />
  </div>
</template>

<script>
//Laddar in ny komponent
import PostComponent from './components/PostComponent.vue'

export default {
  name: 'App',
  components: {
    PostComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
