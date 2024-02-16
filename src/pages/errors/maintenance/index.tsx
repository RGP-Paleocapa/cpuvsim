import useDocumentMetadata from "@hooks/useDocumentMetadata";

const Maintenance = () => {
    const goBack = () => {
        window.history.back(); // Use the browser's history to go back
    };

    useDocumentMetadata('err - maintenance', 'The curent page is under maintenance');

    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-gray-900 dark:text-gray-100 text-4xl font-bold">Maintenance Mode</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mt-4">We are currently performing maintenance. Please check back later.</p>
            <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={goBack}
            disabled
            >
            Go Back
            </button>
        </div>
        </div>
    );
}

export default Maintenance;