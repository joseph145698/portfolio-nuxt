<template>
  <header class="header">
    <nav class="top-nav">
      <NuxtLink to="/" :class="{ active: route.path === '/' }">
        <House />
        <span>Joseph Rey Paterno</span>
      </NuxtLink>

      <NuxtLink to="/about" :class="{ active: route.path === '/about' }">
        <User />
        <span>About</span>
      </NuxtLink>

      <NuxtLink to="/certifications" :class="{ active: route.path === '/certifications' }">
        <Award />
        <span>Certifications</span>
      </NuxtLink>

      <NuxtLink to="/tech-stack" :class="{ active: route.path === '/tech-stack' }">
        <CodeXml />
        <span>Tech Stack</span>
      </NuxtLink>

      <NuxtLink to="/contacts" :class="{ active: route.path === '/contacts' }">
        <Mail />
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