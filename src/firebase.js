import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlR02973C5ckgLPq8SIF2N8Eh-sK16TF4",
  authDomain: "authproject-6014c.firebaseapp.com",
  projectId: "authproject-6014c",
  storageBucket: "authproject-6014c.appspot.com",
  messagingSenderId: "423982385525",
  appId: "1:423982385525:web:f2ad5abf58af8c24baeb3c",
  measurementId: "G-P395SVBVZZ",
};

// const firebaseConfig = {
//   apiKey: String(process.env.FIREBASE_API_KEY),
//   authDomain: process.env.FIREBASE_AUTH_NAME,
//   projectId: String(process.env.FIREBASE_PROJECT_ID),
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: String(process.env.FIREBASE_APP_ID),
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
