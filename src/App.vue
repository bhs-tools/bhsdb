<script setup>
import MenuBar from './components/MenuBar.vue'
import Grades from './components/Grades.vue'

const tab = "Test"
</script>

<template>
  <Grades :if="tab === 'Grades'" />
  <MenuBar />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #222222;
}
</style>
