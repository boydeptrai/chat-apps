
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import  {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC80qWHw8x9me2ai2W3Hi8YPpGOPfll4Sk",
  authDomain: "chat-3879d.firebaseapp.com",
  projectId: "chat-3879d",
  storageBucket: "chat-3879d.appspot.com",
  messagingSenderId: "391290688465",
  appId: "1:391290688465:web:40920e72b71416ef38c6f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage();