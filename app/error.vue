<template>
  <main class="error-page" data-theme="dark">
    <section class="error-card card">
      <img
        class="error-icon"
        src="/images/tech/404.png"
        alt="404 error icon"
        width="160"
        height="160"
      >

      <p class="error-code">{{ statusCode }}</p>
      <h1>{{ title }}</h1>
      <p class="error-description">{{ description }}</p>

      <button class="home-button btn btn-neutral" type="button" @click="clearError({ redirect: '/' })">
        <House aria-hidden="true" :size="18" />
        Return to homepage
      </button>
    </section>
  </main>
</template>

<script setup lang="ts">
import { House } from 'lucide-vue-next'

interface ErrorPageProps {
  error: {
    statusCode?: number
  }
}

const props = defineProps<ErrorPageProps>()

const statusCode = computed(() => props.error.statusCode ?? 404)
const title = computed(() => statusCode.value === 404 ? 'Page not found' : 'Something went wrong')
const description = computed(() => statusCode.value === 404
  ? ""
  : 'An unexpected error occurred. Please return to the homepage and try again.')

useHead({
  title: '404 Page Not Found'
})

useSeoMeta({
  robots: 'noindex, nofollow'
})
</script>

<style scoped>
.error-page {
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 3rem 2rem;
  color: #ffffff;
}

.error-card {
  display: flex;
  width: min(100%, 56rem);
  min-height: 0;
  flex-direction: column;
  align-items: center;
  padding: clamp(3rem, 8vw, 6rem);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 2rem;
  background: rgba(25, 25, 25, 0.72);
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.28);
  text-align: center;
  backdrop-filter: blur(1.2rem);
}

.error-icon {
  width: clamp(9rem, 22vw, 14rem);
  height: clamp(9rem, 22vw, 14rem);
  margin-bottom: 1rem;
  object-fit: contain;
  filter: grayscale(1) brightness(0) invert(1);
}

.error-code {
  color: #c5c5c5;
  font-size: clamp(6rem, 16vw, 10rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
}

.error-card h1 {
  margin-top: 1.5rem;
  font-size: clamp(2.4rem, 6vw, 3.6rem);
}

.error-description {
  max-width: 38rem;
  margin-top: 1.2rem;
  color: #ffffff;
  font-size: 1.6rem;
  line-height: 1.7;
}

.home-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 3.8rem;
  padding: 1.2rem 2.2rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.8rem;
  background: #5a5a5a;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.home-button:hover {
  transform: translateY(-2px);
  background: #777777;
}

.home-button:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .home-button {
    transition: none;
  }
}

@media (max-height: 600px) {
  .error-page {
    padding-block: 0.8rem;
  }

  .error-card {
    padding: 1.2rem;
  }

  .error-icon {
    width: 5.5rem;
    height: 5.5rem;
    margin-bottom: 0;
  }

  .error-code {
    font-size: 4.4rem;
  }

  .error-card h1 {
    margin-top: 0.6rem;
  }

  .error-description {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    line-height: 1.4;
  }

  .home-button {
    margin-top: 3.8rem;
  }
}
</style>
