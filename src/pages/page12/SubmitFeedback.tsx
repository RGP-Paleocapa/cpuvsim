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

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-xl font-semibold dark:text-white">Submit Feedback</h2>
        <form onSubmit={handleSubmit} className="mt-4">
        <ReactStars
          count={5}
          // onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />

      {/* <ReactStars
          count={5}
          // onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        /> */}
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your name'
            className='w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100'
          />
          {/* Removed the email input field as it's now coming from the Zustand store */}
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback"
            required
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            />
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500">
            Submit Feedback
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SubmitFeedback;
