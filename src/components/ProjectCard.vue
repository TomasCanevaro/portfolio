<template>
<div class="bg-white p-4 rounded shadow">
    <h3 class="text-xl font-bold">{{ project.title }}</h3>
    <p class="my-2">{{ project.description }}</p>
    <div class="flex gap-2">
    <a :href="project.github" class="text-blue-600 hover:underline" target="_blank">GitHub</a>
    <a :href="project.live" class="text-blue-600 hover:underline" target="_blank">Live Demo</a>
    </div>
</div>
</template>

<script setup>
defineProps(['project'])
</script>
  