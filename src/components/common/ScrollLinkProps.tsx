import { Link } from 'react-router-dom';

interface ScrollLinkProps {
  route: string;
  id: string;
  text: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ route, id, text }) => {
  return (
    <Link
      to={`/${route}#${id}`} // Use Link to navigate to a specific route and section with a hash
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg"
    >
      {text}
    </Link>
  );
};

export default ScrollLink;
