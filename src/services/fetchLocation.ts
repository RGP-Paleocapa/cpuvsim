// services/fetchLocation.ts

export interface LocationData {
  country: string;   // e.g. "FR"
  continent: string; // e.g. "EU"
}

const isDev = import.meta.env.DEV;
function log(...args: any[]) {
  if (isDev) console.log(...args);
}


// Individual fetchers
async function fetchFromIpApiCo(): Promise<LocationData | null> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) return null;

    const data = await res.json();
    return {
      country: data.country_code,
      continent: data.continent_code,
    };
  } catch {
    return null;
  }
}

async function fetchFromIpwhoIs(): Promise<LocationData | null> {
  try {
    const res = await fetch("https://ipwho.is/");
    if (!res.ok) return null;

    const data = await res.json();
    if (!data.success) return null;

    return {
      country: data.country_code,
      continent: data.continent_code,
    };
  } catch {
    return null;
  }
}

async function fetchFromIpapiInfo(): Promise<LocationData | null> {
  try {
    const res = await fetch("https://ipapi.info/json");
    if (!res.ok) return null;

    const data = await res.json();
    return {
      country: data.country_code,
      continent: data.continent_code || "unknown",
    };
  } catch {
    return null;
  }
}

async function fetchFromGeoJs(): Promise<LocationData | null> {
  try {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
    if (!res.ok) return null;

    const data = await res.json();
    return {
      country: data.country_code,
      continent: data.continent_code || "unknown",
    };
  } catch {
    return null;
  }
}

export async function fetchLocation(): Promise<LocationData> {
  const providers = [
    fetchFromIpApiCo,
    fetchFromIpwhoIs,
    fetchFromIpapiInfo,
    fetchFromGeoJs,
  ];

  for (const fetcher of providers) {
    const result = await fetcher();
    if (result) {
      log(`${fetcher.name} succeeded:`, result);
      return result;
    } else {
      log(`${fetcher.name} failed or returned null.`);
    }
  }

  log("All geolocation providers failed; using fallback.");
  return {
    country: "unknown",
    continent: "unknown",
  };
}
