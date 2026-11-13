<template>
  <main>
    <Navbar />
    <HomeSection />
  </main>
</template>

<script setup lang="ts">
const description = 'Aspiring web developer who is passionate about developing my skills and making my dreams come true, one step at a time.'

useHead({
  title: 'Home | Joseph Rey Paterno'
})

useSeoMeta({
  description,
  ogTitle: 'Home | Joseph Rey Paterno',
  ogDescription: description
})
</script>