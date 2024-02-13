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
  timestamp?: Date | any; // Assuming your Firestore 'timestamp' field is compatible with Date
}

const ReadFeedback = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const { user } = useAuthStore(); // Hook to access user state

  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const userEmail = user?.email; // Accessing the logged-in user's email

    // Ensure userEmail is defined before fetching
    if (!userEmail) {
      console.log("User email is undefined. Make sure user is logged in.");
      return; // Exit if userEmail is undefined
    }

    const fetchFeedback = async () => {
      const q = query(collection(db, "feedback"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);

      const fetchedFeedback = querySnapshot.docs
        .map(doc => {
          const data = doc.data() as Feedback;
          return {
            id: doc.id,
            name: data.name,
            email: data.email,
            text: data.text,
            timestamp: data.timestamp ? data.timestamp.toDate() : undefined,
          };
        })
        .filter(feedback => feedback.email === userEmail); // Properly filter feedback by userEmail

      setFeedbacks(fetchedFeedback);
    };

    fetchFeedback();
  }, [user]); // Depend on the user state to re-run when user or user email changes


  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-10">
        <h2 className="text-xl font-semibold dark:text-white">Feedback Sent</h2>
        {feedbacks.length > 0 ? (
          <ul className="mt-4 space-y-6">
            {feedbacks.map((feedback, index) => (
              <li key={index} className="border border-gray-300 rounded-md shadow-md dark:border-gray-600 dark:bg-gray-800">
                <div className="p-4">
                  <p className="text-gray-800 dark:text-gray-100 font-semibold">Name: {feedback.name}</p>
                  <p className="text-gray-600 dark:text-gray-400">Email: {feedback.email}</p>
                  <p className="text-gray-700 dark:text-gray-300">Feedback: {feedback.text}</p>
                  {feedback.timestamp && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">{feedback.timestamp.toLocaleString()}</p>
                  )}
                </div>
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
