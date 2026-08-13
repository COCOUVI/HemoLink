import { toast } from 'react-toastify';
import type { ToastMessage } from '../types/hemolink';

export function useToast() {
  const show = (message: string, type: ToastMessage['type'] = 'info') => {
    const options = { autoClose: 4000 } as const;
    if (type === 'success') toast.success(message, options);
    else if (type === 'error') toast.error(message, options);
    else toast.info(message, options);
  };

  return { show };
}
