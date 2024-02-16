import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence, sendEmailVerification, signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import firebase from '@/firebase';
import { FirebaseError } from 'firebase/app';
// Import removed for doc and setDoc from 'firebase/firestore' as they're not used in this snippet.

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth(firebase);

    try {
        await setPersistence(auth, browserSessionPersistence);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        sendEmailVerification(userCredential.user)
            .then(() => {
                console.log('Verification email sent.');
                signOut(auth).then(() => {
                    navigate('/auth/login'); // Redirect to login after signing out
                });
            })
            .catch((error) => {
                console.error("Error sending verification email", error);
                setError("Error sending verification email. Please try again later.");
            });
    } catch (error) {
        if (error instanceof FirebaseError) {
            // Handle specific Firebase errors
            switch (error.code) {
                case "auth/email-already-in-use":
                    setError("Email is already in use. Please choose another one.");
                    break;
                case "auth/weak-password":
                    setError("Password is too weak. Please choose a stronger password.");
                    break;
                case "auth/invalid-email":
                    setError("Invalid email format. Please enter a valid email address.");
                    break;
                default:
                    setError("An unexpected error occurred. Please try again.");
                    break;
            }
        } else {
            setError("An unexpected error occurred. Please try again.");
        }
    }
};
      

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
      <div className="max-w-md w-full space-y-8 border-2 border-gray-300 rounded-lg shadow-md bg-white p-6 dark:border-blue-700 dark:bg-gray-800">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="w-full px-6 py-3 text-lg text-white rounded-md bg-blue-700 hocus:bg-blue-800 focus:outline-none hocus:ring-2 hocus:ring-blue-700 hocus:ring-opacity-50 dark:bg-blue-700 dark:hocus:bg-blue-800 dark:hocus:ring-blue-700 shadow-2xl dark:shadow-blue-800/50"
          >
            Sign Up
          </button>
        </form>
        <p className="dark:text-gray-200">Already have an account? <Link to="/auth/login" className="text-blue-400 hocus:text-blue-600 text-lg underline underline-offset-4">Login</Link></p>
      </div>
    </div>
  );
}

export default SignUp;