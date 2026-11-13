<template>
  <main>
    <Navbar />

    <section
      class="tech-stack page-section"
      :class="{ show: pageVisible }"
    >
      <div class="tech-container">
        <div class="tech-text">
          <h1>Tech Stack</h1>
          <p>
            These are the tools, programming languages, and technologies I
            used and learned while building projects and developing this
            portfolio.
          </p>
        </div>

        <div class="tech-grid">
          <article
            v-for="technology in technologies"
            :key="technology.name"
            class="tech-card rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-2xl"
          >
            <img
              v-if="technology.image"
              :src="technology.image"
              :alt="technology.alt"
              aria-hidden="true"
            >
            <i
              v-else
              :class="technology.icon"
              aria-hidden="true"
            />
            <span>{{ technology.name }}</span>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const pageVisible = usePageReveal()

const technologies = [
  { name: 'HTML', icon: 'fa-brands fa-html5' },
  { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
  { name: 'JavaScript', icon: 'fa-brands fa-js' },
  { name: 'Java', icon: 'fa-brands fa-java' },
  { name: 'Python', icon: 'fa-brands fa-python' },
  {
    name: 'PostgreSQL',
    image: '/images/tech/postgresql.svg',
    alt: 'PostgreSQL logo'
  },
  {
    name: 'MongoDB',
    image: '/images/tech/mongodb.svg',
    alt: 'MongoDB logo'
  },
  {
    name: 'pgAdmin 4',
    image: '/images/tech/pgadmin.svg',
    alt: 'pgAdmin 4 logo'
  },
  {
    name: 'SSMS',
    image: '/images/tech/ssms.svg',
    alt: 'SQL Server Management Studio logo'
  },
  { name: 'VS Code', icon: 'bx bxl-visual-studio' },
  { name: 'Git', icon: 'fa-brands fa-git-alt' },
  { name: 'GitHub', icon: 'fa-brands fa-github' }
]

useHead({
  title: 'Tech Stack | Joseph Rey Paterno'
})

useSeoMeta({
  title: 'Tech Stack | Joseph Rey Paterno',
  description: 'Explore the programming languages, development tools, and technologies used by Joseph Rey Paterno.'
})
</script>
