<template>
  <header class="header navbar">
    <nav class="top-nav">
      <NuxtLink to="/" class="btn btn-ghost" :class="{ active: route.path === '/' }">
        <House aria-hidden="true" />
        <span>Joseph Rey Paterno</span>
      </NuxtLink>

      <NuxtLink to="/about" class="btn btn-ghost" :class="{ active: route.path === '/about' }">
        <User aria-hidden="true" />
        <span>About</span>
      </NuxtLink>

      <NuxtLink to="/certifications" class="btn btn-ghost" :class="{ active: route.path === '/certifications' }">
        <Award aria-hidden="true" />
        <span>Certifications</span>
      </NuxtLink>

      <NuxtLink to="/tech-stack" class="btn btn-ghost" :class="{ active: route.path === '/tech-stack' }">
        <CodeXml aria-hidden="true" />
        <span>Tech Stack</span>
      </NuxtLink>

      <NuxtLink to="/contacts" class="btn btn-ghost" :class="{ active: route.path === '/contacts' }">
        <Mail aria-hidden="true" />
        <span>Contacts</span>
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import {
  House,
  User,
  Award,
  CodeXml,
  Mail
} from 'lucide-vue-next'

const route = useRoute()
</script>