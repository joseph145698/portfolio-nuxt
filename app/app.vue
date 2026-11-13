<template>
  <PageLoader />
  <NuxtPage />
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
    },
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