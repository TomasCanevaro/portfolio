<script setup>
import NavBar from './components/NavBar.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
</script>

<template>

  <div class="min-h-screen bg-gray-100 text-gray-900">
    <NavBar />
    <router-view />
  </div>


</template>
