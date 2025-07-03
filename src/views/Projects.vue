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
    title: 'Spring Expense Tracker',
    description: 'Expense Tracker written in Spring Boot',
    github: 'https://github.com/TomasCanevaro/spring-expense-tracker',
},
{
    title: 'Angular Homes App',
    description: 'Angular app for managing homes and properties.',
    github: 'https://github.com/TomasCanevaro/Angular-HomesApp',
},
{
    title: 'React Movies Site',
    description: 'Movies Reviews Site',
    github: 'https://github.com/TomasCanevaro/react-movies-site',
},
]
</script>