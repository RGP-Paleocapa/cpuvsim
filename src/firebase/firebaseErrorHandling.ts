import { FirebaseError } from 'firebase/app';

export const handleFirebaseLoginError = (error: FirebaseError): string => {
    switch (error.code) {
        // Common authentication errors
        case "auth/user-not-found":
            return "Email is not registered. Please check your email or sign up.";
        case "auth/wrong-password":
        case "auth/invalid-password":
        case "auth/invalid-email":
        case "auth/invalid-credential":
            return "Invalid email or password. Please try again.";
        
        case "auth/network-request-failed":
            return "Network error. Please check your connection and try again.";
        
        case "auth/email-already-exists":
            return "Email already in use. Please choose a different email.";
        
        case "auth/too-many-requests":
            return "Too many unsuccessful login attempts. Please try again later.";
        
        case "auth/invalid-id-token":
        case "auth/id-token-expired":
        case "auth/id-token-revoked":
            return "There was a problem with your authentication. Please try signing in again.";
        
        case "auth/invalid-verification-code":
        case "auth/invalid-verification-id":
            return "Invalid verification code. Please try again.";
        
        // Additional Errors to Consider
        case "auth/account-exists-with-different-credential":
            return "An account already exists with a different sign-in method for that email.";
        
        case "auth/requires-recent-login":
            return "You need to re-authenticate to perform this action. Please login again.";
        
        case "auth/user-disabled":
            return "This user account has been disabled. Please contact support.";
        
        case "auth/invalid-captcha-response":
            return "Invalid reCAPTCHA response. Please try the verification again.";
        
        // Web-specific errors
        case "auth/missing-android-pkg-name":
        case "auth/missing-continue-uri":
        case "auth/missing-ios-bundle-id":
        case "auth/operation-not-allowed":
            return "Internal configuration error. Please contact support.";
        
        // Add more error cases as needed
        default:
            return "An unexpected error occurred. Please try again.";
    }
};

export const handleFirebaseSignupError = (error: FirebaseError): string => {
    switch (error.code) {
        case "auth/email-already-in-use":
            return("Email is already in use. Please choose another one.");
            break;
        case "auth/weak-password":
            return("Password is too weak. Please choose a stronger password.");
            break;
        case "auth/invalid-email":
            return("Invalid email format. Please enter a valid email address.");
            break;
        case "auth/operation-not-allowed":
            return("This sign-up method is not allowed. Please contact support.");
            break;
        case "auth/network-request-failed":
            return("Network error. Please check your connection and try again.");
            break;
        case "auth/too-many-requests":
            return("Too many requests. Please try again later.");
            break;
        case "auth/invalid-captcha-response":
            return("Invalid CAPTCHA response. Please try again.");
            break;
        // Add other cases as necessary
        default:
            return("An unexpected error occurred. Please try again.");
            break;
    }
};

export const handleFirebaseForgotPasswordError = (error: FirebaseError): string => {
    switch (error.code) {
        case 'auth/user-not-found':
            return 'No user found with this email address. Please check and try again.';
          case 'auth/invalid-email':
            return 'Invalid email address format. Please enter a valid email address.';
          // Add more cases as needed
          case 'auth/network-request-failed':
            return 'Network error. Please check your internet connection and try again.';
          case 'auth/too-many-requests':
            return 'Too many attempts. Please try again later.';
          // ...
          default:
            return 'An unexpected error occurred. Please try again later.';
    }
};
