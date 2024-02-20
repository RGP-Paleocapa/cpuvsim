import useAuthStore from '@/context/useAuthStore';
import Layout from '../feedbackLayout/Layout';
import { useFeedback } from '../../../utils/FormUtils';

const ReadFeedback = () => {
  const feedbacks = useFeedback();  
  // const { isAdmin } = useAuthStore();
  const auth = useAuthStore();
  const isAdmin = auth.user?.isAdmin;

  const feedbackTitles = [
    "Feedback on Usage",
    "Interesting Features",
    "Challenges Faced",
    "Enhancements Suggestions",
    "Custom feedback"
  ]

  return (
    <Layout>
      <div className="w-5/6 max-w-2xl mx-auto mt-10 whitespace-pre-wrap">
        <h2 className="text-xl font-semibold dark:text-white">Feedback Received</h2>
        {feedbacks.length > 0 ? (
          <ul className="mt-4 space-y-6">
            {feedbacks.map((feedback, index) => (
              <li key={index} className="border border-gray-300 rounded-md shadow-md dark:border-gray-600 dark:bg-gray-800 p-4">
                {isAdmin && <p className="text-gray-600 dark:text-gray-400">Email: {feedback.email}</p>}
                {/* <p className="text-gray-700 dark:text-gray-300">Feedback: {feedback.text}</p> */}
                {feedback.text.split('\n\n').map((text, idx) => (
                  <p key={idx} className="text-gray-700 dark:text-gray-300">{feedbackTitles[idx]}: {text}</p>
                ))}
                <p className="text-gray-700 dark:text-gray-300">Role: {feedback.role}</p>
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
