<template>
  <figure class="cert-card">
    <button
      class="cert-image-button"
      type="button"
      :disabled="disabled"
      :aria-label="`View ${certification.title} certificate`"
      @click="emit('select', certification)"
    >
      <img :src="certification.src" :alt="certification.alt">
    </button>

    <figcaption>
      <a
        class="cert-link"
        :href="certification.verificationUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ certification.title }}
      </a>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { LightboxProject } from '~/composables/useImageLightbox'

defineProps<{
  certification: LightboxProject
  disabled: boolean
}>()

const emit = defineEmits<{
  select: [certification: LightboxProject]
}>()
</script>

<style scoped>
.cert-image-button {
  display: block;
  width: 100%;
  max-width: 360px;
  padding: 0;
  overflow: visible;
  background: transparent;
  cursor: zoom-in;
}

.cert-image-button:disabled {
  cursor: default;
}

.cert-image-button:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 4px;
}
</style>
