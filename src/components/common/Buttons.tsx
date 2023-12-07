// Button.tsx

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }
  
  export const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
      <button
        className={`flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white transition duration-300 ease-in-out ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  
  // Update the CheckIcon component with a green color and a subtle hover effect
  const CheckIcon = () => (
    <span className="flex items-center rounded bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 transition duration-300 ease-in-out">
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
  
  type SuccessButtonProps = {
    onClick: () => void;
  };
  
  export const SuccessButton: React.FC<SuccessButtonProps> = ({ onClick }) => (
    <Button onClick={onClick} className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700">
      <CheckIcon />
      <span className="py-2 px-4">Success</span>
    </Button>
  );


const CancelIcon = () => (
  <span className="flex items-center rounded bg-red-600 hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-900 transition duration-300 ease-in-out">
    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </span>
);

type CancelButtonProps = {
  onClick: () => void;
};

export const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => (
  <Button onClick={onClick} className="bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800">
    <CancelIcon />
    <span className="py-2 px-4">Cancel</span>
  </Button>
);
