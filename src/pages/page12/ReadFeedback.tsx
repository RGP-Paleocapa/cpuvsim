import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import firebaseApp from '@/firebase'; // Adjust the import path as necessary
import Layout from './Layout';

// Define a TypeScript interface for the feedback objects
export interface Feedback {
  id: string;
  name: string;
  email: string;
  text: string; // Ensure 'text' is expected to be a string
  timestamp?: Date | any; // Make 'timestamp' optional or ensure all documents have it
}

const ReadFeedback = () => {
  // Use the 'Feedback' interface for the state
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const fetchFeedback = async () => {
      const q = query(collection(db, "feedback"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      // Correctly process each document to fit the 'Feedback' interface
      const fetchedFeedback = querySnapshot.docs.map(doc => {
        const data = doc.data() as Feedback; // Cast to Feedback type
        return {
          id: doc.id,
          name: data.name,
          email: data.email,
          text: data.text,
          timestamp: data.timestamp !== undefined ? data.timestamp.toDate() : undefined // Check if it's not undefined before calling toDate()
        };
      });
      setFeedbacks(fetchedFeedback);
    };

    fetchFeedback();
  }, []);

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-10">
        <h2 className="text-xl font-semibold dark:text-white">Feedback Received</h2>
        {feedbacks.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {feedbacks.map((feedback, index) => (
              <li key={index} className="p-4 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-800">
                <p className="dark:text-gray-100">Name: {feedback.name}</p>
                <p className="dark:text-gray-100">Email: {feedback.email}</p>
                <p className="dark:text-gray-100">Feedback: {feedback.text}</p>
                {/* Optionally display 'timestamp' if it exists */}
                {feedback.timestamp && <span className="text-sm">{feedback.timestamp.toLocaleString()}</span>}
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
