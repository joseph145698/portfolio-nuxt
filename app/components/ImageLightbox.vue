<template>
  <div
    class="lightbox"
    :class="{ show: isOpen, closing: isClosing }"
    :aria-hidden="!isOpen && !isClosing"
    role="dialog"
    aria-modal="true"
    :aria-label="project?.verificationUrl ? 'Certificate image preview' : 'Project image preview'"
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
      <a
        v-if="project?.verificationUrl"
        class="certificate-button"
        :href="project.verificationUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Verify Certification
      </a>
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