import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useAuthStore from '@/context/useAuthStore'; // Adjust the import path as needed
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ email: userCredential.user.email });

        // Set session start time in localStorage
        localStorage.setItem('sessionStart', Date.now().toString());

        navigate('/'); // Redirect to dashboard or home page after signup
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
      <div className="max-w-md w-full space-y-8 border-2 border-gray-300 rounded-lg shadow-md bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600">Already have an account? <Link to="/auth/login" className="text-indigo-600 hover:text-indigo-500">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
