import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleResetPassword = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('Check your email to reset your password.');
        setTimeout(() => navigate('/auth/login'), 3000); // Redirect them to the login page after 3 seconds
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
      <div className="max-w-md w-full space-y-8 border-2 border-gray-300 rounded-lg shadow-md bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">Reset Password</h2>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
          <label htmlFor="email" className="text-xl font-semibold text-gray-700 dark:text-green-400 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className='w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-green-500 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-green-400 dark:focus:ring-green-400'
          />
          <button
            type="submit"
            className="w-full px-6 py-3 text-lg text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-700 shadow-2xl dark:shadow-green-800/50"
          >
            Send Reset Email
          </button>
        </form>
        <p className="dark:text-gray-200">Already have an account? <Link to="/auth/login" className="text-green-400 hover:text-green-600 text-lg underline underline-offset-4">Login</Link></p>
      </div>
    </div>
  );
}

export default ForgotPassword;
