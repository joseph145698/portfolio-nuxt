<template>
  <Transition name="loader">
    <div v-if="visible" id="loader">
      <div class="typewriter">
        <h1>Hello, World!</h1>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const visible = ref(false)

let hideTimer

onMounted(() => {
  localStorage.setItem('helloLoaderDone', '0')
  visible.value = true

  // Wait for the typing animation to finish, then start fading out.
  hideTimer = window.setTimeout(() => {
    visible.value = false
  }, 2500)
})

onBeforeUnmount(() => {
  clearTimeout(hideTimer)
})
</script>