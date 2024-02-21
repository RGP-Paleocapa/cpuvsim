type FeedbackTextareaWithLabelProps = {
  id: string;
  feedback: string;
  setFeedback: (value: string) => void;
  label: string;
  required? : boolean;
};

export const FeedbackTextareaWithLabel: React.FC<FeedbackTextareaWithLabelProps> = ({ id, feedback, setFeedback, label, required }) => {
  return (
      <div className="flex flex-col">
          <label htmlFor={id} className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2 text-justify">
              {label} {required && <span className="text-red-500">*</span>}
          </label>
          <textarea
              id={id}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts"
              {...(required ? { required: true } : {})}
              className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-green-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-green-400 dark:focus:ring-green-400"
              rows={5}
          />
      </div>
  );
};
