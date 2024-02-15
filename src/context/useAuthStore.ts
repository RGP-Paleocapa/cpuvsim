import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

interface UserType {
  email: string | null;
  userId: string | null;
  isAdmin: boolean | null;
}

interface UseAuthStoreTypes {
  isAuthenticated: boolean;
  checkingAuth: boolean;
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  clearUser: () => void;
}

// Custom storage object that adheres to the PersistStorage type expectations
const storage: PersistStorage<UseAuthStoreTypes> = {
  getItem: (key: string) => {
    const item = localStorage.getItem(key);
    // The getItem method now returns a promise that resolves to the parsed state or null
    return item ? Promise.resolve(JSON.parse(item)) : Promise.resolve(null);
  },
  setItem: (key: string, value: any) => {
    // Serialize the state to a string before storing
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};

const useAuthStore = create<UseAuthStoreTypes>()(persist(
  (set) => ({
    isAuthenticated: false,
    checkingAuth: true,
    user: null,
    setUser: (user) => set({
      isAuthenticated: !!user,
      user: {
        email: user?.email || null,
        userId: user?.userId || null,
        isAdmin: user?.isAdmin ?? null,
      },
      checkingAuth: false
    }),
    clearUser: () => set({ isAuthenticated: false, user: null, checkingAuth: false }),
  }),
  {
    name: 'auth-storage',
    storage: storage, // Use the defined custom storage
  }
));

export default useAuthStore;
