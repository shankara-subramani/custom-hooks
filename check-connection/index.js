import { useEffect, useState } from 'react';

export const useConnectionStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', ()=> setStatus(navigator.onLine));
    window.addEventListener('offline', ()=> setStatus(navigator.onLine));

    return () => {
      window.removeEventListener('online', ()=> setStatus(navigator.onLine));
      window.removeEventListener('offline', ()=> setStatus(navigator.onLine));
    };
  });

  return status;
};
export default useConnectionStatus;
