<template>
  <div id="app">
    <TopBar/>
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard';
import TopBar from './components/TopBar'


export default {
  name: 'App',
  components: {
    Dashboard,
    TopBar,
  }
}
</script>

<style>

</style>

