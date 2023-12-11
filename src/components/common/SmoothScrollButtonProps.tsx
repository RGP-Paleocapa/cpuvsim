interface SmoothScrollButtonProps {
  targetId: string;
  buttonText: string;
  spaceBefore?: string;
  spaceAfter?: string;
}

const SmoothScrollButton: React.FC<SmoothScrollButtonProps> = ({
  targetId,
  buttonText,
  spaceBefore = '\u00A0', // Non-breaking space before
  spaceAfter = '\u00A0',  // Non-breaking space after
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
    <button
      className="text-sm underline custom-button text-blue-700 focus:text-white hover:text-white"
      onClick={() => smoothScrollToId(targetId)}
    >
      {spaceBefore}
      {buttonText}
      {spaceAfter}
    </button>
  );
};

export default SmoothScrollButton;
