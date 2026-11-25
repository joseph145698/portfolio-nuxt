<template>
  <main>
    <Navbar />

    <section
      class="contacts page-section"
      :class="{ show: pageVisible }"
    >
      <div class="contacts-container">
        <div class="contacts-text">
          <h1>Contacts</h1>
          <p>
            Feel free to view my profile or contact me on LinkedIn and GitHub:
          </p>
        </div>

        <div class="contact-links social-icons">
          <a
            href="https://www.linkedin.com/in/joseph-rey-paterno-4258113b8/"
            class="external-link btn btn-circle btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            @click="handleExternalLink"
          >
            <Linkedin class="social-icon" aria-hidden="true" />
          </a>

          <a
            href="https://github.com/joseph145698"
            class="external-link btn btn-circle btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            @click="handleExternalLink"
          >
            <Github class="social-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'

const pageVisible = usePageReveal()
const { handleExternalLink } = useExternalLinks()

useHead({
  title: 'Contacts | Joseph Rey Paterno'
})

useSeoMeta({
  title: 'Contacts | Joseph Rey Paterno',
  description: 'Connect with Joseph Rey Paterno on LinkedIn and GitHub.'
})
</script>
