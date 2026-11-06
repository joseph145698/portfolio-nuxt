<template>
  <div
    class="lightbox"
    :class="{ show: isOpen, closing: isClosing }"
    :aria-hidden="!isOpen && !isClosing"
    role="dialog"
    aria-modal="true"
    aria-label="Project image preview"
    @click.self="handleBackdropClick"
  >
    <div class="lightbox-content">
      <img
        v-if="project"
        :src="project.src"
        :alt="project.alt || 'Zoomed project image'"
      >
      <p v-if="project?.description" class="lightbox-description">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LightboxProject } from '~/composables/useImageLightbox'

defineProps<{
  project: LightboxProject | null
  isOpen: boolean
  isClosing: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const handleBackdropClick = () => {
  emit('close')
}
</script>