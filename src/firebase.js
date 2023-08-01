import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHe4G8SwDmPKBsFPDWUrt3YAw9Q5KGFJg",
  authDomain: "own-bucket-app.firebaseapp.com",
  projectId: "own-bucket-app",
  storageBucket: "own-bucket-app.appspot.com",
  messagingSenderId: "273109758182",
  appId: "1:273109758182:web:36c85baeb3322f4d2a8b27",
  measurementId: "G-0QWMX86V4Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

