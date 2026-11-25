<template>
  <figure class="cert-card card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg">
    <button
      class="cert-image-button"
      type="button"
      :disabled="disabled"
      :aria-label="`View ${certification.title} certificate`"
      @click="emit('select', certification)"
    >
      <img :src="certification.src" :alt="certification.alt">
      <ZoomIn class="cert-image-zoom" aria-hidden="true" :size="18" />
    </button>

    <figcaption>
      <a
        class="cert-link"
        :href="certification.verificationUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ certification.title }}
        <ExternalLink aria-hidden="true" :size="16" />
      </a>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { ExternalLink, ZoomIn } from 'lucide-vue-next'
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
  position: relative;
  display: block;
  width: 100%;
  max-width: 360px;
  padding: 0;
  overflow: visible;
  background: transparent;
  cursor: zoom-in;
}

.cert-image-zoom {
  position: absolute;
  top: 1rem;
  right: 1rem;
  box-sizing: content-box;
  padding: 0.7rem;
  border-radius: 50%;
  background: rgba(27, 27, 27, 0.85);
  color: #ffffff;
  pointer-events: none;
}

.cert-image-button:disabled {
  cursor: default;
}

.cert-image-button:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 4px;
}

.cert-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}
</style>
