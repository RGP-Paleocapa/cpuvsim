// firebaseUtils.ts

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, signOut } from 'firebase/auth';
import { getFirestore, Firestore, doc, getDoc } from 'firebase/firestore';
import { FirebaseError } from '@firebase/util';

export const handleFirebaseSignupError = (error: FirebaseError) => {
  // Handle Firebase signup errors here
};

export const handleFirebaseLoginError = (error: FirebaseError) => {
  // Handle Firebase login errors here
};

export const signUpWithEmailAndPassword = async (email: string, password: string, navigate: any) => {
  const auth = getAuth();
  try {
    await setPersistence(auth, browserSessionPersistence);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signInWithEmailAndPasswordAndFetchUserInfo = async (email: string, password: string, db: Firestore, navigate: any, setUser: any) => {
  const auth = getAuth();
  try {
    await setPersistence(auth, browserSessionPersistence);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    if (userCredential.user.emailVerified) {
      const isAdmin = await fetchisAdmin(db, userCredential.user.uid);

      setUser({
        email: userCredential.user.email,
        userId: userCredential.user.uid,
        isAdmin: isAdmin,
      });

      localStorage.setItem('sessionStart', Date.now().toString());
      navigate('/feedback/submit');
    } else {
      throw new Error("Please verify your email before logging in.");
    }
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async (navigate: any) => {
  const auth = getAuth();
  try {
    await signOut(auth);
    navigate('/auth/login');
  } catch (error) {
    throw error;
  }
};

export const fetchisAdmin = async (db: Firestore, userId: string) => {
  const docRef = doc(db, `users/${userId}`);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data().isAdmin : false;
};
