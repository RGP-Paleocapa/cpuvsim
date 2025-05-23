const ErrorFallback = ({ error, resetErrorBoundary }: {
  error: Error,
  resetErrorBoundary: () => void
}) => (
  <div role="alert" className="p-6 text-center text-red-600">
    <h2 className="text-xl font-bold">Something went wrong:</h2>
    <pre className="mt-2">{error.message}</pre>
    <button
      onClick={resetErrorBoundary}
      className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
    >
      Try again
    </button>
  </div>
);

export default ErrorFallback;
