import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebaseApp from '@/firebase'; // Adjust the import path as necessary
import Layout from './Layout';
import useAuthStore from '@/context/useAuthStore'; // Ensure the correct path to your Zustand store
// import ReactStars from "react-rating-stars-component";
import ReactStars from "react-rating-stars-component";

const SubmitFeedback = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [_role, _setRole] = useState('');
  
  // Access the current user's email from the Zustand store
  const { user } = useAuthStore();
  const userEmail = user?.email;

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Ensure there's a user email available
    if (!userEmail) {
      alert('User email is not available. Please log in.');
      return;
    }

    const db = getFirestore(firebaseApp);
    try {
      await addDoc(collection(db, "feedback"), {
        name,
        email: userEmail, // Use the email from Zustand store
        text: feedback,
        timestamp: new Date(),
      });
      setFeedback(''); // Reset the feedback input after submission
      setName('');
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Error submitting feedback');
    }
  };

  function setOtherRole(_value: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Layout>
      <div className="w-5/6 mx-auto mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Submit Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="rating" className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">Rating:</label>
            <ReactStars
              id="rating"
              count={5}
              size={30} // Larger star size
              activeColor="#ffd700"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="role" className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">Your Role or Job Title:</label>
            <div className="flex items-center mb-2 dark:text-gray-100">
              <input type="radio" id="student" name="role" value="Student" className="mr-2" />
              <label htmlFor="student" className="mr-4">Student</label>
              <input type="radio" id="professor" name="role" value="Professor" className="mr-2" />
              <label htmlFor="professor" className="mr-4">Professor</label>
              <input type="radio" id="other" name="role" value="Other" className="mr-2" />
              <label htmlFor="other" className="mr-4">Other</label>
            </div>
            <input
              id="otherRole"
              type="text"
              placeholder="Please specify if 'Other'"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-green-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-green-400 dark:focus:ring-green-400"
              style={{ display: 'none' }} // Initially hide this input
              onChange={(e) => setOtherRole(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">Your Name</label>
            <input
              id="name"
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              className='w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-green-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-green-400 dark:focus:ring-green-400'
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="feedback" className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">Your Feedback</label>
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
          <button type="submit" className="w-full px-6 py-3 text-lg text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-700 shadow-2xl dark:shadow-green-800/50">
            Submit Feedback
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SubmitFeedback;
