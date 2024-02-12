// useAuthStore.ts
import { create } from 'zustand';

interface UserType {
  email: string | null;
}

interface UseAuthStoreTypes {
  isAuthenticated: boolean;
  checkingAuth: boolean; // Indicates if we're still checking the auth status
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  clearUser: () => void;
}

const useAuthStore = create<UseAuthStoreTypes>((set) => ({
  isAuthenticated: false,
  checkingAuth: true, // Initial state is true, indicating we're checking auth status
  user: null,
  setUser: (user) => set({ isAuthenticated: !!user, user, checkingAuth: false }),
  clearUser: () => set({ isAuthenticated: false, user: null, checkingAuth: false }),
}));

export default useAuthStore;
