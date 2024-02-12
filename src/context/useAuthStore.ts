// useAuthStore.ts
import { create } from 'zustand';

interface UserType {
  email: string | null;
}

interface UseAuthStoreTypes {
  isAuthenticated: boolean;
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  clearUser: () => void;
}

const useAuthStore = create<UseAuthStoreTypes>((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user: UserType | null) => set(() => ({ isAuthenticated: !!user, user })),
  clearUser: () => set(() => ({ isAuthenticated: false, user: null })),
}));

export default useAuthStore;
