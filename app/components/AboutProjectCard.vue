<template>
  <figure
    class="about-project-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <button
      class="about-project-image"
      type="button"
      :aria-label="`View ${project.title} image`"
      @click="emit('select', project)"
    >
      <img :src="project.src" :alt="project.alt">
    </button>
    <figcaption>{{ project.title }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { LightboxProject } from '~/composables/useImageLightbox'

defineProps<{
  project: LightboxProject
}>()

const emit = defineEmits<{
  select: [project: LightboxProject]
}>()
</script>

<style scoped>
.about-project-image {
  display: block;
  width: 100%;
  padding: 0;
  background: transparent;
  cursor: zoom-in;
}

.about-project-image:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 4px;
}
</style>
