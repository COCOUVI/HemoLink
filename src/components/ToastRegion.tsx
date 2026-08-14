import { ToastContainer, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastTransition = cssTransition({
  enter: 'toast-enter',
  exit: 'toast-exit',
  collapse: true,
  collapseDuration: 260,
});

export function ToastRegion() {
  return <ToastContainer position="top-right" autoClose={4000} newestOnTop closeOnClick pauseOnHover theme="light" transition={toastTransition} hideProgressBar={false} progressClassName="toast-progress" />;
}
