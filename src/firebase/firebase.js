import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "blockmedia-website.firebaseapp.com",
  projectId: "blockmedia-website",
  storageBucket: "blockmedia-website.firebasestorage.app",
  messagingSenderId: "367708171868",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);