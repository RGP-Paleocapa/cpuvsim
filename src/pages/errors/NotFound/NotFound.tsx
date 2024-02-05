import useDocumentMetadata from "../../../hooks/useDocumentMetadata";

const NotFound = () => {
    useDocumentMetadata('404 - Page not found', 'The page may not exist.');
  
    return (
      <div className=" min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-gray-900 dark:text-gray-100 text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-4">The page you are looking for doesn't exist.</p>
        </div>
      </div>
    );
}

export default NotFound;