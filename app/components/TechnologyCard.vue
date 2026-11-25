<template>
  <article
    class="tech-card card rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-2xl"
  >
    <img
      v-if="technology.image"
      :src="technology.image"
      :alt="technology.alt || ''"
      aria-hidden="true"
    >
    <component
      v-else
      :is="technology.icon"
      aria-hidden="true"
    />
    <span>{{ technology.name }}</span>
  </article>
</template>

<script setup lang="ts">
import type { TechnologyCardItem } from '~/types/technology'

defineProps<{
  technology: TechnologyCardItem
}>()
</script>
