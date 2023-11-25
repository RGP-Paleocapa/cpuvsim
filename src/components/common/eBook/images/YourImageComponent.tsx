// Define a type for the image prop
type ImageObject = {
  src: string;
  alt?: string;
  url?: string;
};

// Extend the props to include an optional className
type YourImageComponentProps = {
  image: ImageObject;
  className?: string;
};

const YourImageComponent: React.FC<YourImageComponentProps> = ({ image, className }) => {
  // Function to handle click
  const handleClick = () => {
    if (image.url) {
      window.open(image.url, '_blank');
    } else {
      // If navigate is needed for some reason in the future
      // navigate('/cpuvsim/404');
    }
  };

  // Combine the default classes with any additional classes passed in
  const combinedClassName = `img-center rounded ${className || ''}`;

  return (
    <img
      src={image.src}
      alt={image.alt || 'Image description'}
      onClick={image.url ? handleClick : undefined}
      className={combinedClassName}
      style={{ cursor: image.url ? 'pointer' : 'default' }}
    />
  );
};

export default YourImageComponent;
