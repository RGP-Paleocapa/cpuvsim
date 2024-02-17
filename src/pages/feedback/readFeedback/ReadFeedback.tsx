import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, orderBy, collectionGroup } from 'firebase/firestore';
import firebaseApp from '@/services/firebaseConfig'; // Adjust the import path as necessary
import Layout from '../feedbackLayout/Layout';
import useAuthStore from '@/context/useAuthStore'; // Ensure the correct path

export interface Feedback {
  id: string;
  name: string;
  email: string;
  text: string;
  timestamp: Date | any; // Firestore timestamp or converted Date
  role?: string;
  rating?: number;
}

const ReadFeedback = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const { user } = useAuthStore(); // Hook to access user state

  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const userId = user?.userId; // Using optional chaining here

    if (!userId) {
      console.log("User ID is undefined. Make sure user is logged in.");
      return;
    }
  
    const isAdmin = user?.isAdmin;
  
    const fetchFeedback = async () => {
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

  return (
    <Layout>
      <div className="w-5/6 max-w-2xl mx-auto mt-10">
        <h2 className="text-xl font-semibold dark:text-white">Feedback Received</h2>
        {feedbacks.length > 0 ? (
          <ul className="mt-4 space-y-6">
            {feedbacks.map((feedback, index) => (
              <li key={index} className="border border-gray-300 rounded-md shadow-md dark:border-gray-600 dark:bg-gray-800 p-4">
                <p className="text-gray-800 dark:text-gray-100 font-semibold">Name: {feedback.name}</p>
                <p className="text-gray-600 dark:text-gray-400">Email: {feedback.email}</p>
                <p className="text-gray-700 dark:text-gray-300">Feedback: {feedback.text}</p>
                {feedback.role && <p className="text-gray-700 dark:text-gray-300">Role: {feedback.role}</p>}
                {feedback.rating && <p className="text-gray-700 dark:text-gray-300">Rating: {feedback.rating}</p>}
                {feedback.timestamp && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">{feedback.timestamp.toLocaleString()}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 dark:text-gray-100">No feedback found.</p>
        )}
      </div>
    </Layout>
  );
};

export default ReadFeedback;
