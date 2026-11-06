import { onBeforeUnmount, ref } from 'vue'

export interface LightboxProject {
  src: string
  alt: string
  title: string
  description: string
}

export function useImageLightbox() {
  const project = ref<LightboxProject | null>(null)
  const isOpen = ref(false)
  const isClosing = ref(false)
  let closeTimer: ReturnType<typeof setTimeout> | undefined

  const open = (selectedProject: LightboxProject) => {
    if (isClosing.value) return

    project.value = selectedProject
    document.body.classList.add('lightbox-active')
    requestAnimationFrame(() => {
      isOpen.value = true
    })
  }

  const close = () => {
    if (!isOpen.value || isClosing.value) return

    isClosing.value = true
    isOpen.value = false

    closeTimer = setTimeout(() => {
      project.value = null
      isClosing.value = false
      document.body.classList.remove('lightbox-active')
      closeTimer = undefined
    }, 400)
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') close()
  }

  if (import.meta.client) {
    window.addEventListener('keydown', handleKeydown)
  }

  onBeforeUnmount(() => {
    if (closeTimer) clearTimeout(closeTimer)
    if (import.meta.client) {
      window.removeEventListener('keydown', handleKeydown)
      document.body.classList.remove('lightbox-active')
    }
  })

  return { project, isOpen, isClosing, open, close }
}
