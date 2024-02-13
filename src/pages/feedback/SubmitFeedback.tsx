import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebaseApp from '@/firebase'; // Adjust the import path as necessary
import Layout from './Layout';
import useAuthStore from '@/context/useAuthStore'; // Ensure the correct path to your Zustand store
import ReactStars from "react-rating-stars-component";

interface FeedbackData {
  name: string;
  email: string;
  text: string;
  timestamp: Date;
  role?: string; // optional
  rating?: number; // Optional 'rating' field, assuming rating is a number from 1 to 5
}


const SubmitFeedback: React.FC = () => {
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [resetKey, setResetKey] = useState(0);
  const [role, setRole] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');

  const { user } = useAuthStore();
  const userEmail = user?.email;

  const handleRoleChange = (event: any) => {
    setRole(event.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!userEmail) {
      alert('User email is not available. Please log in.');
      return;
    }

    const feedbackData: FeedbackData = {
      ...(typeof rating === 'number' && { rating }),
      ...(role && { role }),
      name,
      text: feedback,
      email: userEmail,
      timestamp: new Date(),
    };

    const db = getFirestore(firebaseApp);
    try {
      await addDoc(collection(db, "feedback"), feedbackData);
      setFeedback('');
      setName('');
      setRole('');
      setRating(undefined);
      setResetKey(prevKey => prevKey + 1); // Increment key to force re-mount
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Error submitting feedback');
    }
  };

  return (
    <Layout>
      <div className="w-5/6 mx-auto mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Submit Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="rating" className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">Rating: <span className="text-red-500">*</span></label>
            <ReactStars
              key={resetKey}
              id="rating"
              count={5}
              onChange={setRating}
              size={30} // Larger star size
              activeColor="#ffd700"
              value={rating}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="role" className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">Your Role or Job Title:</label>
            <div className="flex items-center mb-2 dark:text-gray-100">
              <input 
                type="radio" 
                id="student" 
                name="role" 
                value="Student" 
                className="mr-2" 
                onChange={handleRoleChange} 
                checked={role === 'Student'}
              />
              <label htmlFor="student" className="mr-4">Student</label>
              
              <input 
                type="radio" 
                id="professor" 
                name="role" 
                value="Professor" 
                className="mr-2" 
                onChange={handleRoleChange} 
                checked={role === 'Professor'}
              />
              <label htmlFor="professor" className="mr-4">Professor</label>
              
              <input 
                type="radio" 
                id="other" 
                name="role" 
                value="Other" 
                className="mr-2" 
                onChange={handleRoleChange} 
                checked={role === 'Other'}
              />
              <label htmlFor="other" className="mr-4">Other</label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">Your Name <span className="text-red-500">*</span></label>
            <input
              id="name"
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              className='w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-green-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-green-400 dark:focus:ring-green-400'
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="feedback" className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">Your Feedback <span className="text-red-500">*</span></label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts"
              required
              className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-green-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-green-400 dark:focus:ring-green-400"
              rows={5}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Fields marked with <span className="text-red-500">*</span> are required.</p>
          <button type="submit" className="w-full px-6 py-3 text-lg text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-700 shadow-2xl dark:shadow-green-800/50">
            Submit Feedback
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SubmitFeedback;
