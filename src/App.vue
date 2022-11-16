<template>
  <Navbar />
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view />
</template>

<script>
import { defineAsyncComponent } from 'vue' // Necesitamos esta importacion para hacer el Lazy Load

export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => import( /* webpackChunkName: "ListPage" */ '../src/modules/shared/components/Navbar.vue'))
  }
}
</script>

<style>
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; 
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  background-color: #2c3e50;
  font-family: 'Rubik', sans-serif;
  font-size: 1.6rem;
  color: #fff;
}

</style>
