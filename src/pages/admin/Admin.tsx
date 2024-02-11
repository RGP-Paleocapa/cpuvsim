import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const [inputToken, setInputToken] = useState('');
    const navigate = useNavigate();
    const adminToken = import.meta.env.VITE_ADMIN_TOKEN;
    const cookie = Cookies.get('adminAuthToken');

    useEffect(() => {
        // Redirect immediately if already logged in, no need for setTimeout
        if (adminToken === cookie) {
            navigate("/"); // Adjust to your home or dashboard route
        }
    }, [adminToken, cookie, navigate]);

    const handleLogin = () => {
        if (adminToken === inputToken) {
            const minutes = 1;
            const expires = new Date(new Date().getTime() + minutes * 60 * 1000);
            Cookies.set('adminAuthToken', adminToken, { expires });
            alert('Admin access granted');
            navigate("/"); // Redirect without delay
        } else {
            alert('Invalid Token');
        }
    };

    return (
        <div className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col space-y-4">
            <h1 className="font-semibold text-xl dark:text-white">Admin Page</h1>
            <p className="text-gray-500 dark:text-gray-300">Please enter the admin token to proceed.</p>
            <input
                type="password"
                value={inputToken}
                onChange={(e) => setInputToken(e.target.value)}
                className="p-2 border rounded dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            />
            <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 transition-colors">Login</button>
        </div>
    );
};

export default Admin;
