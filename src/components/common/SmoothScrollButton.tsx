interface SmoothScrollButtonProps {
  targetId: string;
  buttonText: string;
  spaceBefore?: string;
  spaceAfter?: string;
}

const SmoothScrollButton: React.FC<SmoothScrollButtonProps> = ({
  targetId,
  buttonText,
}) => {
  const smoothScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>    
      {' '}
      <button
        className="text-sm underline custom-button text-blue-700 focus:text-blue-900 hover:text-blue-900 dark:text-blue-400 dark:focus:text-white dark:hover:text-white"
        onClick={() => smoothScrollToId(targetId)}
      >
        {buttonText}
      </button>
      {' '}
    </>
  );
};

export default SmoothScrollButton;
