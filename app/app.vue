<template>
  <div class="app-shell" data-theme="dark">
    <PageLoader />
    <BackgroundEffects />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/images/tech/logo.png'
    }
  ]
})

</script>