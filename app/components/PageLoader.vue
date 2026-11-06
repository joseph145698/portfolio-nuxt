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
const loaderDoneKey = 'helloLoaderDone'

let hideTimer

onMounted(() => {
  try {
    if (localStorage.getItem(loaderDoneKey) === 'true') return

    localStorage.setItem(loaderDoneKey, 'true')
  } catch (error) {
    console.warn('Unable to access local storage for the intro animation:', error)
  }

  visible.value = true

  hideTimer = window.setTimeout(() => {
    visible.value = false
  }, 2500)
})

onBeforeUnmount(() => {
  clearTimeout(hideTimer)
})
</script>