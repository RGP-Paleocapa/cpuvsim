import { db } from "@/firebase/firebaseConfig";
import { doc, runTransaction } from "@firebase/firestore";

export async function incrementVisitCount(
  continent: string,
  country?: string,
  maxRetries = 5
) {
  const counterRef = doc(db, 'analytics/visitCounter');

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await runTransaction(db, async (transaction) => {
        const counterDoc = await transaction.get(counterRef);
        const data = counterDoc.exists() ? counterDoc.data() : {};

        const totalCount = (data.totalCount || 0) + 1;
        const byContinent = { ...(data.byContinent || {}) };
        const byCountry = { ...(data.byCountry || {}) };

        byContinent[continent] = (byContinent[continent] || 0) + 1;
        if (country) {
          byCountry[country] = (byCountry[country] || 0) + 1;
        }

        transaction.set(counterRef, { totalCount, byContinent, byCountry }, { merge: true });
      });

      break; // success, exit loop
    } catch (error) {
      if (attempt === maxRetries) {
        console.error("Error incrementing visit count after retries:", error);
        throw error; // rethrow after max attempts
      }
      // exponential backoff
      const delay = 100 * Math.pow(2, attempt);
      await new Promise(res => setTimeout(res, delay));
      console.log(`Retrying increment visit count (attempt ${attempt + 1})...`);
    }
  }
}
