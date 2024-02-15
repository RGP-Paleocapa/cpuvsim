import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import firebaseApp from '@/firebase'; // Adjust the import path as necessary
import Layout from './Layout';
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
    const userId = user?.userId; // Using userId for Firestore path

    // Ensure userId is defined before fetching
    if (!userId) {
      console.log("User ID is undefined. Make sure user is logged in.");
      return; // Exit if userId is undefined
    }

    const fetchFeedback = async () => {
      // Correctly using the `userId` in the Firestore path
      const q = query(collection(db, `users/${userId}/feedback`), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);

      const fetchedFeedback = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // Adjusting for timestamp conversion
        timestamp: doc.data().timestamp ? new Date(doc.data().timestamp.seconds * 1000) : undefined,
      })) as Feedback[];

      setFeedbacks(fetchedFeedback);
    };

    fetchFeedback();
  }, [user]); // Depend on the user state to re-run when user or user ID changes

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
