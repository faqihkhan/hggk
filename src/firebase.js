
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByKdWCJc5mS_lFKyoni1T2oJJyrUfDiMc",
  authDomain: "build-see.firebaseapp.com",
  projectId: "build-see",
  storageBucket: "build-see.appspot.com",
  messagingSenderId: "531084744283",
  appId: "1:531084744283:web:5f8b2c0c40ae783c19117e",
  measurementId: "G-JFBHVBL173"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);