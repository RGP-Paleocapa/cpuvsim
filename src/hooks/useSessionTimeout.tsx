import { useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import app from "@/firebase";

const useSessionTimeout = (timeout: number) => { // timeout in milliseconds
  useEffect(() => {
    const auth = getAuth(app);
    const interval = setInterval(() => {
      const sessionStart = parseInt(localStorage.getItem('sessionStart') || '0');
      const now = Date.now();
      console.log(`Checking session timeout: Now: ${now}, Session Start: ${sessionStart}, Difference: ${now - sessionStart}`);

      if (now - sessionStart > timeout) {
        console.log('Session expired. Signing out...');
        signOut(auth).then(() => {
          // Redirect to login page or show a message
          console.log('Session timed out. User signed out.');
        });
      }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, [timeout]);
};

export default useSessionTimeout;