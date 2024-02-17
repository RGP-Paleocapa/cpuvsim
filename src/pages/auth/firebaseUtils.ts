// firebaseUtils.ts

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, signOut, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore, Firestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from '@/services/firebaseConfig';

const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);

export const signUpWithEmailAndPassword = async (email: string, password: string, navigate: any): Promise<any> => {
  try {
    await setPersistence(auth, browserSessionPersistence);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Send email verification
    await sendEmailVerification(userCredential.user);
    console.log('Verification email sent.');

    // Sign out the user
    await signOut(auth);
    navigate('/auth/login'); // Redirect to login after signing out

    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};


export const signInWithEmailAndPasswordAndFetchUserInfo = async (email: string, password: string, navigate: any, setUser: any): Promise<void> => {
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
      await signOut(auth); // Sign out if email is not verified
      const unverifiedEmailError = new Error("Please verify your email before logging in.");
      unverifiedEmailError.name = "UnverifiedEmailError";
      throw unverifiedEmailError;
    }
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async (navigate: any): Promise<void> => {
  try {
    await signOut(auth);
    navigate('/auth/login');
  } catch (error) {
    throw error;
  }
};

export const fetchisAdmin = async (db: Firestore, userId: string): Promise<boolean> => {
  const docRef = doc(db, `users/${userId}`);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data().isAdmin : false;
};

export const sendResetPasswordEmail = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

export const checkUserExists = async (email: string): Promise<boolean> => {
  const db = getFirestore();
  const userDocRef = doc(db, "users", email.trim());
  const docSnap = await getDoc(userDocRef);
  return docSnap.exists();
};