<template>
  <section class="home page-section" :class="{ show: pageVisible }">
    <div class="home-container home-centered">

      <!-- Profile Image -->
      <div class="home-image">
        <img
          src="/images/profile.png"
          alt="Joseph Rey Paterno"
        >
      </div>

      <!-- Introduction -->
      <div class="home-text text-center max-w-2xl">
        <h1>Hello!</h1>

        <h2>I'm Joseph Rey Paterno</h2>

        <p>
          Aspiring web developer who is passionate about developing
          my skills and making my dreams come true, one step at a time.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Github, Linkedin } from 'lucide-vue-next'

const pageVisible = usePageReveal()
const { handleExternalLink } = useExternalLinks()
</script>