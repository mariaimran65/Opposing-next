import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastify(message, variant) {
  switch (variant) {
    case 'error':
      toast.error(message);
      break;
    case 'success':
      toast.success(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    default:
      toast(message);
      break;
  }
}

// function suMessage(message) {
//   toast.error(message, {
//     position: 'top-right',
//     autoClose: 5000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: 'light'
//   });
// }

export default Toastify;
