import { initializeApp } from "firebase/app";

const key = import.meta.env.VITE_FIREBASE_APIKEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const projectID = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const msgSenderID = import.meta.env.VITE_MSG_SENDER_ID;
const appID = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
  apiKey: key,
  authDomain: authDomain,
  projectId: projectID,
  storageBucket: storageBucket,
  messagingSenderId: msgSenderID,
  appId: appID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
