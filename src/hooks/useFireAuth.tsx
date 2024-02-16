import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import useAuthStore from '@/context/useAuthStore';

const useFirebaseAuth = () => {
  const { setUser, clearUser } = useAuthStore();

  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore();

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDocRef = doc(db, `users/${firebaseUser.uid}`);
        const userDocSnap = await getDoc(userDocRef);
        const isAdmin = userDocSnap.exists() ? userDocSnap.data().admin : null;
        setUser({
          email: firebaseUser.email,
          userId: firebaseUser.uid,
          isAdmin,
        });
      } else {
        clearUser();
      }
    });

    return unsubscribe; // Cleanup function directly returned
  }, [setUser, clearUser]);
};

export default useFirebaseAuth;