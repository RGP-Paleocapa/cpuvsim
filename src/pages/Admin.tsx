import { useState } from 'react';
import Cookies from 'js-cookie';

const Admin = () => {
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Example: Simple password check (not secure for production!)
        if (password === 'adminPassword') {
            // Set a cookie that expires in 1 day
            Cookies.set('token', 'admin', { expires: 1 });

            // Redirect or show admin content
            // You can use React Router's useNavigate hook for redirection
            // or update the state to show admin content.
            console.log('Logged in as admin');
        } else {
            console.error('Incorrect password');
        }
    };

    return (
        <div>
            <h1>Admin Login</h1>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Admin;
