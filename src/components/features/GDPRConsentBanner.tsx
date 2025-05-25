import { useGeoLocation } from "@hooks/usegGeoLocation";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function GDPRConsentBanner() {
  const { location } = useGeoLocation();
  const [showBanner, setShowBanner] = useState(false);

  // Check localStorage if dismissed
  useEffect(() => {
    if (location?.continent === "EU") {
      const dismissed = localStorage.getItem("gdprBannerDismissed");
      if (!dismissed) setShowBanner(true);
    }
  }, [location]);

  const dismiss = () => {
    localStorage.setItem("gdprBannerDismissed", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-lg w-full
      bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg
      shadow-md p-4 flex items-center justify-between text-sm text-gray-700 dark:text-gray-300
      z-50"
    >
      <p>
        We collect anonymous location data to improve your experience. No personal data or cookies are used. See our{" "}
        <Link
          to="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Privacy Policy
        </Link>.
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss privacy banner"
        className="ml-4 p-2 rounded-full text-gray-500 dark:text-gray-400
          hover:text-gray-700 dark:hover:text-gray-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
          transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
