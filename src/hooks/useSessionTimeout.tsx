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

      console.log(`Time elapsed: ${elapsed/1_000}s`);

      if (elapsed >= timeoutInMilliseconds) {
        console.log("Session timeout reached. Logging out...");
        logoutUser();
        localStorage.removeItem('sessionStart');
      } else {
        // Log remaining time for diagnostic purposes
        const remaining = timeoutInMilliseconds - elapsed;
        console.log(`Session time remaining: ${remaining / 1_000}s`);
      }
    };

    // Check the session timeout status every 10 seconds
    const interval = setInterval(checkSessionTimeout, 10000);
    return () => clearInterval(interval);
  }, [timeoutInMilliseconds, user, clearUser]);
};

export default useSessionTimeout;