<template>
  <main>
    <BackgroundEffects />
    <Navbar />

    <section class="about page-section">
      <div class="about-container">
        <div class="about-text">
          <h1>About</h1>

          <h3 class="about-subtitle">
            Let me introduce myself . . .
          </h3>

          <p>
            I am currently a college student pursuing a BSIT degree at
            St. Dominic College of Asia. I enjoy learning new things in IT
            and continuously improving myself and my skills through our
            projects in school. But outside of academics, I like gaming,
            biking outdoors, playing sports, and playing guitar.
          </p>

          <p>
            I have experience in developing Android applications using
            Android Studio and building database-driven systems using
            pgAdmin 4 and Apache NetBeans. I am eager and passionate about
            expanding my knowledge in front-end web development using
            HTML, CSS, JavaScript, and VS Code as I work on projects such
            as this web developer portfolio. My goal in life is to become
            a successful full-stack web developer in the future and continue
            to improve my skills and knowledge as I gain more experience
            in this field.
          </p>

          <p>
            Here are some of the projects I have worked on during college:
          </p>
        </div>

        <div class="about-images">
          <figure
            v-for="project in projects"
            :key="project.src"
            class="about-project-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <button
              class="about-project-image"
              type="button"
              :aria-label="`View ${project.title} image`"
              @click="openLightbox(project)"
            >
              <img :src="project.src" :alt="project.alt">
            </button>
            <figcaption>{{ project.title }}</figcaption>
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
import { useImageLightbox, type LightboxProject } from '~/composables/useImageLightbox'

const projects: LightboxProject[] = [
  {
    src: '/images/projects/android-studio-appproject.png',
    alt: 'Android Studio App Project',
    title: 'Android Studio Mobile App',
    description: 'One of my Android Studio projects, this is a parody to the famous online shopping platform Amazon.'
  },
  {
    src: '/images/projects/vscode-coding.jpg',
    alt: 'Coding in VS Code',
    title: 'Web Developer Portfolio',
    description: 'This portfolio was created using Visual Studio Code, where I applied HTML, CSS, and JavaScript.'
  },
  {
    src: '/images/projects/apache-netbeans-final-project.png',
    alt: 'Final Project in ADBMS using Apache NetBeans',
    title: 'MediTrack Hospital System',
    description: 'Our final ADBMS project that uses Apache NetBeans for frontend design and pgAdmin 4 for PostgreSQL database.'
  },
  {
    src: '/images/projects/ssms-project-in-adbms.png',
    alt: 'Another ADBMS Project using SQL Server Management Studio',
    title: 'SSMS Project',
    description: 'Another ADBMS project created using SQL Server Management Studio.'
  }
]

const {
  project: lightboxProject,
  isOpen: isLightboxOpen,
  isClosing: isLightboxClosing,
  open: openLightbox,
  close: closeLightbox
} = useImageLightbox()

useHead({
  title: 'About | Joseph Rey Paterno'
})

useSeoMeta({
  title: 'About | Joseph Rey Paterno',
  description: 'Learn more about Joseph Rey Paterno, his studies, interests, and college projects.'
})
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
