import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAdhAKyaQh9rjsEOQCC2ge0Inddhk5daiU",
  authDomain: "realitycheck-3f781.firebaseapp.com",
  databaseURL: "https://realitycheck-3f781-default-rtdb.firebaseio.com",
  projectId: "realitycheck-3f781",
  storageBucket: "realitycheck-3f781.appspot.com",
  messagingSenderId: "657827613201",
  appId: "1:657827613201:web:e7d6225c73205811c1bfb0",
  measurementId: "G-GME3FRC0BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);