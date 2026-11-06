<template>
  <main>
    <BackgroundEffects />
    <Navbar />

    <section
      class="certifications page-section"
      :class="{ show: pageVisible, 'animation-done': animationDone }"
    >
      <div class="certifications-container">
        <div class="certifications-text">
          <h1>Certifications</h1>
          <p class="cert-intro">
            Here are my certifications as of 2025–2026:
          </p>
        </div>

        <div class="certifications-images">
          <figure
            v-for="certification in certifications"
            :key="certification.src"
            class="cert-card"
          >
            <button
              class="cert-image-button"
              type="button"
              :disabled="!animationDone"
              :aria-label="`View ${certification.title} certificate`"
              @click="openLightbox(certification)"
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
        </div>
      </div>
    </section>

    <ImageLightbox
      :project="lightboxProject"
      :is-open="isLightboxOpen"
      :is-closing="isLightboxClosing"
      @close="closeLightbox"
    />
  </main>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useImageLightbox, type LightboxProject } from '~/composables/useImageLightbox'

const certifications: LightboxProject[] = [
  {
    src: '/images/certifications/joseph-rey-paterno-python-essentials-1-certificate.jpg',
    alt: 'Python Essentials 1 Certificate from Cisco Networking Academy',
    title: 'Python Essentials 1',
    description: 'Python Essentials 1 | Cisco Networking Academy.',
    verificationUrl: 'https://www.credly.com/badges/4e24522e-8ccb-478c-9a69-56cc6fcd76a1'
  },
  {
    src: '/images/certifications/joseph-rey-paterno-information-technology-specialist-java-certificate-of-completion.jpg',
    alt: 'Java Specialist Certificate',
    title: 'Java Specialist',
    description: 'Information Technology Specialist in Java | Certiport (Pearson VUE).',
    verificationUrl: 'https://www.credly.com/badges/699017d4-f57b-401c-b8a8-5574a86393ff'
  },
  {
    src: '/images/certifications/joseph-rey-paterno-mos-powerpoint-associate-microsoft-365-certificate.jpg',
    alt: 'PowerPoint Certificate',
    title: 'PowerPoint Associate',
    description: 'Microsoft Office Specialist: PowerPoint Associate (Microsoft 365 Apps).',
    verificationUrl: 'https://www.credly.com/badges/e45f1648-e298-4d31-a3e5-9131f2892664'
  },
  {
    src: '/images/certifications/joseph-rey-paterno-mos-word-2019-associate-certificate.png',
    alt: 'Word Certificate',
    title: 'Word 2019 Associate',
    description: 'Microsoft Office Specialist: Word Associate (Office 2019).',
    verificationUrl: 'https://www.credly.com/badges/2407782c-1db2-4e64-893f-701658333874'
  },
  {
    src: '/images/certifications/joseph-rey-paterno-saylor-cs302-software-engineering-certificate.jpg',
    alt: 'Software Engineering Certificate',
    title: 'Software Engineering',
    description: 'CS302: Software Engineering | Saylor Academy.',
    verificationUrl: 'https://learn.saylor.org/admin/tool/certificate/index.php?code=3370926235JP'
  },
  {
    src: '/images/certifications/joseph-rey-paterno-saylor-cs403-intro-to-modern-database-systems.certificate.jpg',
    alt: 'Modern Database Systems Certificate',
    title: 'Modern Database Systems',
    description: 'CS403: Introduction to Modern Database Systems | Saylor Academy.',
    verificationUrl: 'https://learn.saylor.org/admin/tool/certificate/index.php?code=7415237062JP'
  }
]

const {
  project: lightboxProject,
  isOpen: isLightboxOpen,
  isClosing: isLightboxClosing,
  open: openLightbox,
  close: closeLightbox
} = useImageLightbox()

const animationDone = ref(false)
const pageVisible = ref(false)
let animationTimer: ReturnType<typeof setTimeout> | undefined

onMounted(async () => {
  await nextTick()
  pageVisible.value = true

  animationTimer = setTimeout(() => {
    animationDone.value = true
  }, 2000)
})

onBeforeUnmount(() => {
  if (animationTimer) clearTimeout(animationTimer)
})

useHead({
  title: 'Certifications | Joseph Rey Paterno'
})

useSeoMeta({
  title: 'Certifications | Joseph Rey Paterno',
  description: 'View Joseph Rey Paterno’s certifications in programming, software engineering, databases, and Microsoft Office.'
})
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
