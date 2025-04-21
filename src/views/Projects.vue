<template>
<div class="p-8">
    <h2 class="text-2xl font-semibold mb-4">My Projects</h2>
    <div class="grid gap-4 md:grid-cols-2">
    <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
    />
    </div>
</div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
{
    title: 'Weather App',
    description: 'A Vue app that shows weather using an API.',
    github: 'https://github.com/yourusername/weather-app',
    live: 'https://yourusername.github.io/weather-app',
},
// Add more projects!
]
</script>