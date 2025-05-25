// hooks/useGeoLocation.ts
import { fetchLocation, LocationData } from "@/services/fetchLocation";
import { useState, useEffect } from "react";

export function useGeoLocation() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLocation()
      .then(setLocation)
      .catch((err) => setError(err.message));
  }, []);

  return { location, error };
}
