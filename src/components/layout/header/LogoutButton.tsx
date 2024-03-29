import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import useAuthStore from '@/context/useAuthStore'; // Ensure the import path is correct

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const { clearUser } = useAuthStore(); // Assuming clearUser removes user info from Zustand store
  
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      clearUser(); // Clear user information from Zustand store
      navigate('/'); // Redirect to login page or home page after logout
    } catch (error) {
      console.error("Logout failed", error);
      // Optionally handle errors (e.g., display a notification)
    }
  };

  return (
    <div className='mr-4'>
      <button onClick={handleLogout} className="px-4 py-2 bg-red-600 dark:bg-red-700 text-white rounded hover:bg-red-700 dark:hover:bg-red-800 transition-colors">
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
