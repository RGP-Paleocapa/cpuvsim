import { FirebaseError } from 'firebase/app';

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
