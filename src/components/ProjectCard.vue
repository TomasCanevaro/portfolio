<template>
<div class="bg-[#2b2b3c] text-gray-100 p-6 rounded-xl shadow-lg w-full max-w-md transition hover:shadow-xl hover:scale-[1.02]">
    <h3 class="text-2xl font-semibold text-teal-300">{{ project.title }}</h3>
    <p class="my-3 text-gray-300">{{ project.description }}</p>
    <div class="flex gap-4 mt-4">
    <a :href="project.github" class="text-blue-400 hover:text-blue-300 hover:underline" target="_blank">GitHub</a>
    </div>
</div>
</template>

<script setup>
defineProps(['project'])
</script>
  