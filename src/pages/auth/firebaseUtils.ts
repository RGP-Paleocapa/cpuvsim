// firebaseUtils.ts

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, signOut, sendEmailVerification, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, getRedirectResult, signInWithRedirect } from 'firebase/auth';
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

export const signInWithGoogle = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  try {
    // Initiate the sign-in with redirect
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error initiating sign-in with Google:", error);
    throw error;
  }
};

export const handleRedirectResult = async (navigate: any, setUser: any): Promise<void> => {
  try {
    // Get the result of the redirect sign-in
    const result = await getRedirectResult(auth);

    if (result && result.user) {
      // User signed in successfully
      const { email, uid } = result.user;

      // Perform additional checks or user details setup here if needed

      // Set user details
      setUser({
        email: email,
        userId: uid,
        // Add other user details as needed
      });

      // Save session start time
      localStorage.setItem('sessionStart', Date.now().toString());

      // Redirect to a specific route after successful sign-in
      navigate('/feedback/submit');
    }
  } catch (error) {
    console.error("Error handling redirect result:", error);
    // Handle error (e.g., display error message)
    // You can redirect to a login page or display an error message to the user
    // navigate('/login'); // Redirect to login page
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

// export const isEmailRegistered = async (email: string): Promise<boolean> => {
//   console.log(email);
//   const trimmedEmail = email.trim();
//   const usersCollectionRef = collection(db, "users");
//   const q = query(usersCollectionRef, where("email", "==", trimmedEmail));
//   const querySnapshot = await getDocs(q);

//   console.log("Query completed");
//   return !querySnapshot.empty;
// };