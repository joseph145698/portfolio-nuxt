import Swal from 'sweetalert2'

export function useExternalLinks() {
  const handleExternalLink = async (event: MouseEvent) => {
    const link = event.currentTarget

    if (!(link instanceof HTMLAnchorElement)) {
      throw new TypeError('External link handler must be bound to an anchor element.')
    }

    event.preventDefault()

    const result = await Swal.fire({
      title: 'Leave this website?',
      text: "You're about to leave this website to go to my profile.",
      icon: 'warning',
      background: '#242424',
      color: '#ffffff',
      confirmButtonText: 'Go to Link',
      cancelButtonText: 'Stay',
      showCancelButton: true,
      confirmButtonColor: '#ffffff',
      cancelButtonColor: '#555555',
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        htmlContainer: 'custom-swal-text',
        confirmButton: 'custom-swal-confirm',
        cancelButton: 'custom-swal-cancel'
      }
    })

    if (result.isConfirmed) {
      window.open(link.href, '_blank', 'noopener,noreferrer')
    }
  }

  return { handleExternalLink }
}