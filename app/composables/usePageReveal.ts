import { onBeforeUnmount, onMounted, ref } from 'vue'

export function usePageReveal() {
  const isVisible = ref(false)
  let firstFrame: number | undefined
  let secondFrame: number | undefined

  onMounted(() => {
    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        isVisible.value = true
      })
    })
  })

  onBeforeUnmount(() => {
    if (firstFrame !== undefined) cancelAnimationFrame(firstFrame)
    if (secondFrame !== undefined) cancelAnimationFrame(secondFrame)
  })

  return isVisible
}
