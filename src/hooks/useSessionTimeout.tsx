import { useEffect } from 'react';
import useAuthStore from '@/context/useAuthStore';

const useSessionTimeout = (timeout: number) => {
  const { clearUser } = useAuthStore();

  useEffect(() => {
    const interval = setInterval(() => {
      const sessionStart = parseInt(localStorage.getItem('sessionStart') || '0');
      const now = Date.now();

      if (now - sessionStart > timeout) {
        clearUser();
        localStorage.removeItem('sessionStart'); // Clear session start time
        // Assume redirection or additional handling is triggered by clearUser or elsewhere
      }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, [timeout, clearUser]);
};

export default useSessionTimeout;