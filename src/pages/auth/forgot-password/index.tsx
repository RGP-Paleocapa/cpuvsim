import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendResetPasswordEmail } from '../../../firebase/firebaseUtils';
import { handleFirebaseForgotPasswordError } from '../../../firebase/firebaseErrorHandling';
import { FirebaseError } from 'firebase/app';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  // const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setMessage(''); // Clear any previous message
    setError(''); // Clear any previous error
  
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
  
    try {
      // const isRegistered = await isEmailRegistered(email.trim()); // Await the result of isEmailRegistered
      // if (!isRegistered) {
      //   setError('No user found with this email address. Please check and try again.');
      //   return;
      // }
  
      await sendResetPasswordEmail(email);
      setMessage('Check your email to reset your password.');
      // setTimeout(() => navigate('/auth/login'), 3000); // Redirect them to the login page after 3 seconds
    } catch (error: any) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleFirebaseForgotPasswordError(error);
        setError(errorMessage);
      } else {
        setError(error.message);
      }
    }
  };  

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
      <div className="max-w-md w-full space-y-8 border-2 border-gray-300 rounded-lg shadow-md bg-white p-6 dark:border-blue-700 dark:bg-gray-800">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">Reset Password</h2>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
          <label htmlFor="email" className="text-xl font-semibold text-gray-700 dark:text-blue-400 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm hocus:border-blue-500 hocus:ring hocus:ring-blue-500 hocus:ring-opacity-50 dark:border-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:hocus:border-blue-400 dark:hocus:ring-blue-400"
          />
          <button
            
            type="submit"
            className="w-full px-6 py-3 text-lg text-white rounded-md bg-blue-700 hocus:bg-blue-800 focus:outline-none hocus:ring-2 hocus:ring-blue-700 hocus:ring-opacity-50 dark:bg-blue-700 dark:hocus:bg-blue-800 dark:hocus:ring-blue-700 shadow-2xl dark:shadow-blue-800/50"
          >
            Send Reset Email
          </button>
        </form>
        <p className="dark:text-gray-200">Already have an account? <Link to="/auth/login" className="text-blue-500 hocus:text-blue-700 text-lg underline underline-offset-4">Login</Link></p>
      </div>
    </div>
  
  );
}

export default ForgotPassword;