import useAuthStore from "@/context/useAuthStore";
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";

const useSessionTimeout = (timeoutInMilliseconds: number) => {
  const { user, clearUser } = useAuthStore();
  const auth = getAuth();

  useEffect(() => {
    if (!user) {
      console.log("No user logged in, skipping session timeout.");
      return;
    }

    console.log("Session timeout setup initiated.");

    const logoutUser = async () => {
      try {
        await signOut(auth);
        clearUser();
        console.log("User signed out due to session timeout.");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    const checkSessionTimeout = () => {
      const sessionStart = parseInt(localStorage.getItem('sessionStart') || '0');
      const now = Date.now();
      const elapsed = now - sessionStart;
      const elapsedMinutes = Math.floor(elapsed / (1000 * 60));
      const elapsedSeconds = Math.floor((elapsed % (1000 * 60)) / 1000);
    
      console.log(`Time elapsed: ${elapsedMinutes}m ${elapsedSeconds}s`);
    
      if (elapsed >= timeoutInMilliseconds) {
        console.log("Session timeout reached. Logging out...");
        logoutUser();
        localStorage.removeItem('sessionStart');
      } else {
        const remaining = timeoutInMilliseconds - elapsed;
        const remainingMinutes = Math.floor(remaining / (1000 * 60));
        const remainingSeconds = Math.floor((remaining % (1000 * 60)) / 1000);
        console.log(`Session time remaining: ${remainingMinutes}m ${remainingSeconds}s`);
      }
    };   
    
    // Call checkSessionTimeout immediately for an instant check
    checkSessionTimeout();

    // Check the session timeout status every 10 seconds
    const interval = setInterval(checkSessionTimeout, 10000);
    return () => clearInterval(interval);
  }, [timeoutInMilliseconds, user, clearUser]);
};

export default useSessionTimeout;