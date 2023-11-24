import Cookies from 'js-cookie';

const Admin = () => {
    const handleLoginDemo = () => {
        // Set a demo token for the admin page
        Cookies.set('token', 'demoAdmin', { expires: 1 });

        // Log to console or display a message for demonstration
        console.log('Demo admin access granted');
    };

    return (
        <div>
            <h1>Admin Demo Page</h1>
            <p>This is a demo page for administrative features.</p>
            <button onClick={handleLoginDemo}>Enable Demo Admin</button>
        </div>
    );
};

export default Admin;