// NavLink.tsx
import { Link, useLocation } from 'react-router-dom';

interface Route {
  path: string;
  text: string;
  pattern: string;
  color: {
    default: string;
    hover: string;
  };
}

interface NavLinkProps {
  route: Route;
  scrollToTop: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ route, scrollToTop }) => {
  const location = useLocation();
  const linkClassName = `mr-4 ${new RegExp(route.pattern).test(location.pathname) ? 'font-bold underline decoration-2 underline-offset-8' : ''} ${route.color.default} ${location.pathname === route.path ? route.color.hover : ''}`;

  return route.path.startsWith("http") ? (
    <a href={route.path} target="_blank" rel="noopener noreferrer" className={linkClassName} onClick={scrollToTop}>
      {route.text}
    </a>
  ) : (
    <Link to={route.path} className={linkClassName} onClick={scrollToTop}>
      {route.text}
    </Link>
  );
};

export default NavLink;
