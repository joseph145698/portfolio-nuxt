<template>
  <article
    class="tech-card rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-2xl"
  >
    <img
      v-if="technology.image"
      :src="technology.image"
      :alt="technology.alt || ''"
      aria-hidden="true"
    >
    <i
      v-else
      :class="technology.icon"
      aria-hidden="true"
    />
    <span>{{ technology.name }}</span>
  </article>
</template>

<script setup lang="ts">
interface TechnologyCardItem {
  name: string
  icon?: string
  image?: string
  alt?: string
}

defineProps<{
  technology: TechnologyCardItem
}>()
</script>
