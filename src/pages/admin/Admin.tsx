// src/components/Admin.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "@/firebase"; // Adjust the import path as necessary

const Admin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Admin access granted");
      navigate("/"); // Redirect to the dashboard or home page
    } catch (error: any) { // TypeScript requires typing, use 'any' or a more specific error type
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col space-y-4">
      <h1 className="font-semibold text-xl dark:text-white">Admin Page</h1>
      <p className="text-gray-500 dark:text-gray-300">Please enter your credentials to proceed.</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="p-2 border rounded dark:border-gray-700 dark:bg-gray-700 dark:text-white mb-4"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="p-2 border rounded dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      />
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 transition-colors mt-4">Login</button>
    </div>
  );
};

export default Admin;
