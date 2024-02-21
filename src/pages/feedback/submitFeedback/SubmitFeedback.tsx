import React, { useState } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import Layout from '../feedbackLayout/Layout';
import useAuthStore from '@/context/useAuthStore'; // Ensure the correct path to your Zustand store
import ReactStars from "react-rating-stars-component";
import { FeedbackTextareaWithLabel } from '../../../components/features/feedback/FeedbackTextareaWithLabel';
import { RadioGroupWithLabel } from '../../../components/features/feedback/RadioGroupWithLabel';
import { FeedbackData, submitFeedback } from '@/firebase/FormUtils';

const SubmitFeedback: React.FC = () => {
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [resetKey, setResetKey] = useState(0);
  const [feedback0, setFeedback0] = useState<string>('');
  const [feedback1, setFeedback1] = useState<string>('');
  const [feedback2, setFeedback2] = useState<string>('');
  const [feedback3, setFeedback3] = useState<string>('');
  const [feedback4, setFeedback4] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const { user } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Assuming user?.email could be undefined, we'll provide a fallback to an empty string
    const userEmail = user?.email || '';

    const feedbackData: FeedbackData = {
      email: userEmail, // Ensuring email is a string
      text: [feedback0, feedback1, feedback2, feedback3, feedback4].filter(t => t).join('\n\n'), // Combining non-empty feedback texts
      timestamp: serverTimestamp(), // Correct as long as FeedbackData expects a Firebase timestamp
      ...(typeof rating === 'number' ? { rating } : {}), // Conditionally adding rating if it's a number
      role, // Conditionally adding role if it's not empty
    };

    // Handling the case where user?.userId might be undefined
    if (user?.userId) {
      const responseMessage = await submitFeedback(user.userId, feedbackData, resetForm);
      alert(responseMessage);
    } else {
      alert('User ID is not available. Please log in.');
    }
  };


  const resetForm = () => {
    setFeedback0('');
    setFeedback1('');
    setFeedback2('');
    setFeedback3('');
    setFeedback4('');
    setRole('');
    setRating(undefined);
    setResetKey(prevKey => prevKey + 1); // Increment key to force re-mount
  };

  const roleOptions = [
      { id: 'student', value: 'Student', label: 'Student' },
      { id: 'professor', value: 'Professor', label: 'Professor' },
      { id: 'other', value: 'Other', label: 'Other' }
  ];

  const labels = [
    "How did you use the e-book and the CPUVSIM simulator: were they primarily used as a teaching instrument during lectures, as independent self-learning materials, or integrated into a course curriculum?",
    "What features or aspects of the e-book and CPUVSIM simulator did you find most interesting or useful?",
    "Were there any negative aspects or challenges encountered while using the e-book or CPUVSIM simulator?",
    "How do you think the e-book and CPUVSIM simulator could be enhanced to improve the overall learning experience for students?",
  ];

  return (
    <Layout>
      <div className="w-5/6 mx-auto mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">

        <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Overall Experience Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">Rating:</span>
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
          
          <RadioGroupWithLabel
            options={roleOptions}
            name="role"
            selectedValue={role}
            onValueChange={setRole}
            label="Your Role or Job Title"
            required
          />

          <FeedbackTextareaWithLabel
            id="feedback0"
            feedback={feedback0}
            setFeedback={setFeedback0}
            label={labels[0]}
            required
          />
          <FeedbackTextareaWithLabel
            id="feedback1"
            feedback={feedback1}
            setFeedback={setFeedback1}
            label={labels[1]}
            required
          />
          <FeedbackTextareaWithLabel
            id="feedback2"
            feedback={feedback2}
            setFeedback={setFeedback2}
            label={labels[2]}
            required
          />
          <FeedbackTextareaWithLabel
            id="feedback3"
            feedback={feedback3}
            setFeedback={setFeedback3}
            label={labels[3]}
            required
          />

          {/* <FeedbackTextareaWithLabel
            id="feedback4"
            feedback={feedback4}
            setFeedback={setFeedback4}
            label={"Thank you for your feedback so far! Anything else on your mind?"}
          /> */}

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
