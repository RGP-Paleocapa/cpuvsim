import { getFirestore, collection, addDoc, FieldValue, Timestamp, serverTimestamp, query, collectionGroup, orderBy, getDocs } from 'firebase/firestore';
import firebaseApp from '@/firebase/firebaseConfig'; // Adjust the import path as necessary
import useAuthStore from '@/context/useAuthStore';
import { useEffect, useState } from 'react';

export type FeedbackData = {
    email: string;
    text: string;
    timestamp: FieldValue | Timestamp | Date | null | any; 
    role: string;
    rating?: number;
}

export async function submitFeedback(
    userId: string | undefined,
    feedbackData: FeedbackData,
    resetForm: () => void
): Promise<string> {
    if (!userId) {
        return 'User ID is not available. Please log in.';
    }

    const db = getFirestore(firebaseApp);

    try {
        await addDoc(collection(db, `users/${userId}/feedback`), {
            ...feedbackData,
            timestamp: serverTimestamp(),
        });
        resetForm();
        return 'Feedback submitted successfully';
    } catch (error) {
        console.error("Error adding document: ", error);
        return 'Error submitting feedback';
    }
}


export interface Feedback {
    id: string;
    name: string;
    email: string;
    text: string;
    timestamp: Date | any; // Firestore timestamp or converted Date
    role?: string;
    rating?: number;
  }
  
 export const useFeedback = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const { user } = useAuthStore(); // Hook to access user state
  
    useEffect(() => {
      const fetchFeedback = async () => {
        const db = getFirestore(firebaseApp);
        const userId = user?.userId; // Using optional chaining here
  
        if (!userId) {
          console.log("User ID is undefined. Make sure user is logged in.");
          return;
        }
      
        const isAdmin = user?.isAdmin;
        let q;
    
        if (isAdmin) { // Simplified check, assuming isAdmin correctly reflects the user's admin status
          // Collection group query for admin users
          q = query(collectionGroup(db, 'feedback'), orderBy("timestamp", "desc"));
        } else {
          // Specific user query for non-admin users
          q = query(collection(db, `users/${userId}/feedback`), orderBy("timestamp", "desc"));
        }
    
        try {
          const querySnapshot = await getDocs(q);
          const fetchedFeedback = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            // More robust handling of the timestamp conversion
            const timestamp = data.timestamp?.toDate ? data.timestamp.toDate() : new Date();
            return {
              id: doc.id,
              ...data,
              timestamp, // Use the converted Date object directly
            };
          }) as Feedback[];
        
          setFeedbacks(fetchedFeedback);
        } catch (error) {
          console.error("Failed to fetch feedback:", error);
        }
      };
    
      fetchFeedback();
    }, [user]);
  
    return feedbacks;
  };
  
