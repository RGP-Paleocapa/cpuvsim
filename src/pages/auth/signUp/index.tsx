import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { signInWithGoogle, signUpWithEmailAndPassword } from '../../../firebase/firebaseUtils';
import { handleFirebaseSignupError } from '../../../firebase/firebaseErrorHandling';
import useAuthStore from '@/context/useAuthStore';
import OrSeparator from '@/components/common/OrSeparator';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.trim() === '') {
      setError("Password cannot be empty.");
      return;
    }

    if (password != checkPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await signUpWithEmailAndPassword(email, password, navigate);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleFirebaseSignupError(error);
        setError(errorMessage);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const handleGoogleSignUp = async () => {
    const errorMessage = await signInWithGoogle(navigate, setUser);
    if (errorMessage) {
      setError(errorMessage);
    }
  };
  
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
      <div className="max-w-md w-full space-y-8 border-2 border-gray-300 rounded-lg shadow-md bg-white p-6 dark:border-blue-700 dark:bg-gray-800">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          {/* <p className="dark:text-gray-200">Email:</p> */}
          <div>
            <label htmlFor="email" className="dark:text-white">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm hocus:border-blue-500 hocus:ring hocus:ring-blue-500 hocus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hocus:border-blue-400 dark:hocus:ring-blue-400"
            />
            </div>
          {/* <p className="dark:text-gray-200">Password:</p> */}
          <div>
            <label htmlFor="password" className="dark:text-white">
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 my-2 border border-gray-300 rounded-md shadow-sm hocus:border-blue-500 hocus:ring hocus:ring-blue-500 hocus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hocus:border-blue-400 dark:hocus:ring-blue-400"
            />
            <label htmlFor="confirmPassword" className="dark:text-white">
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm hocus:border-blue-500 hocus:ring hocus:ring-blue-500 hocus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hocus:border-blue-400 dark:hocus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-lg text-white rounded-md bg-blue-700 hocus:bg-blue-800 focus:outline-none hocus:ring-2 hocus:ring-blue-700 hocus:ring-opacity-50 dark:bg-blue-700 dark:hocus:bg-blue-800 dark:hocus:ring-blue-700 shadow-2xl dark:shadow-blue-800/50"
          >
            Sign Up
          </button>

          <OrSeparator />

          <button
              onClick={handleGoogleSignUp}
              className="w-full px-6 py-3 mt-4 text-lg font-medium text-white rounded-md bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow-lg transition duration-150 ease-in-out"
            >
              Sign in with Google
            </button>
          
        </form> 
        <p className="dark:text-gray-200">Already have an account? <Link to="/auth/login" className="text-blue-400 hocus:text-blue-600 text-lg underline underline-offset-4">Login</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
