import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuthStore from '@/context/useAuthStore'; // Adjust the import path as needed
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ email: userCredential.user.email });

        // Set session start time in localStorage
        localStorage.setItem('sessionStart', Date.now().toString());

        navigate('/feedback/submit'); // Redirect to dashboard or home page after login
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
      <div className="max-w-md w-full space-y-8 border-2 border-gray-300 rounded-lg shadow-md bg-white p-6 dark:border-blue-700 dark:bg-gray-800">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm hocus:border-blue-500 hocus:ring hocus:ring-blue-500 hocus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hocus:border-blue-400 dark:hocus:ring-blue-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm hocus:border-blue-500 hocus:ring hocus:ring-blue-500 hocus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hocus:border-blue-400 dark:hocus:ring-blue-400"
            />
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/auth/forgot-password" className="text-blue-400 hocus:text-blue-600 text-lg underline underline-offset-4">Forgot your password?</Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-lg text-white rounded-md bg-blue-700 hocus:bg-blue-800 focus:outline-none hocus:ring-2 hocus:ring-blue-700 hocus:ring-opacity-50 dark:bg-blue-700 dark:hocus:bg-blue-800 dark:hocus:ring-blue-700 shadow-2xl dark:shadow-blue-800/50"
            >
              Login
            </button>
          </form>
          <p className="dark:text-gray-200">Don't have an account? <Link to="/auth/signup" className="text-blue-400 hocus:text-blue-600 text-lg underline underline-offset-4">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
