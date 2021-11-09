
import { toast } from 'react-toastify';

export default function handleToastNotification (
  type
) {

  console.log('[TIPO]', type)

  switch (type) {
    case 'info':
      return infoToast()
    case 'success':
      return infoSuccess()
    default:
      break
  }
}

const infoToast = () => {
  toast.info('Informação informacional de conhecimento conhecimentado assim como a viagem é viajada e é pra ser aproveitada!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}

const infoSuccess = () => {
  return(
    toast.success('Sucesso!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  )
}