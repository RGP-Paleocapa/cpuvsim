import { useEffect } from "react";
import useAuthStore from "@/context/useAuthStore";
import { getAuth, signOut } from "firebase/auth";

const useSessionTimeout = (timeoutInMilliseconds: number) => {
  const { user, clearUser } = useAuthStore();
  const auth = getAuth();

  useEffect(() => {
    // Only set up session timeout logic if a user is logged in
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
        localStorage.removeItem('sessionStart'); // Ensure sessionStart is cleared on logout
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    const checkSessionTimeout = () => {
      const sessionStart = parseInt(localStorage.getItem('sessionStart') || '0');
      const now = Date.now();
      const elapsed = now - sessionStart;

      if (elapsed >= timeoutInMilliseconds) {
        logoutUser();
      }
    };

    // Delay the initial check by a few seconds to ensure all login processes have completed
    const initialDelay = setTimeout(checkSessionTimeout, 5000);

    // Continue to check the session timeout status at regular intervals
    const interval = setInterval(checkSessionTimeout, 10000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [timeoutInMilliseconds, user, clearUser]);
};

export default useSessionTimeout;
