import React from 'react'
import { toast } from 'react-toastify';

// export default function ToastNotification ({
//   type
// }) {

//   console.log('[TIPO]', type)

//   switch (type) {
//     case 'info':
//       return <InfoToast />
//     case 'success':
//       return <InfoSuccess />
//     default:
//       break;
//   }
// }

export const InfoToast = () => {
  toast.info('Informação!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}

export const InfoSuccess = () => {
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