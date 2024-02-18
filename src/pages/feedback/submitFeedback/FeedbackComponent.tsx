type FeedbackComponentProps = {
    id: string;
    feedback: string;
    setFeedback: (value: string) => void;
    label: string;
    required? : boolean;
};

export const FeedbackComponent: React.FC<FeedbackComponentProps> = ({ id, feedback, setFeedback, label, required }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">
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

          {/* <div className="flex flex-col">
            <label htmlFor="name" className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">Your Name <span className="text-red-500">*</span></label>
            <input
              id="name"
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              className='w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-green-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-green-400 dark:focus:ring-green-400'
              autoComplete='name'
              required
            />
          </div> */}


          {/* <div className="flex flex-col">
            <label htmlFor="feedback" className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">How did you use the e-book and the CPUVSIM simulator: were they primarily used as a teaching instrument during lectures, as independent self-learning materials, or integrated into a course curriculum? <span className="text-red-500">*</span></label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts"
              required
              className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-green-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-green-400 dark:focus:ring-green-400"
              rows={5}
            />
          </div> */}