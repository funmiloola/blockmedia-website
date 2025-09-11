import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD2HA10vukUvIEqL1xB3EN6PcWULjyUuyU",
  authDomain: "blockmedia-website.firebaseapp.com",
  projectId: "blockmedia-website",
  storageBucket: "blockmedia-website.firebasestorage.app",
  messagingSenderId: "367708171868",
  appId: "1:367708171868:web:e03df085b1079534cc0099",
  measurementId: "G-BW8R3YH40S"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);