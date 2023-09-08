import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBF6QyvBzySKI3LBKKUE5t0VCb-3nY_KQg",
  authDomain: "engiverse-b6a5b.firebaseapp.com",
  projectId: "engiverse-b6a5b",
  storageBucket: "engiverse-b6a5b.appspot.com",
  messagingSenderId: "617650329799",
  appId: "1:617650329799:web:cd6c645fbd1a28cf2fc6e2",
  measurementId: "G-G65LJQFWW8"
};
// initializing to identify a project

const app = initializeApp(firebaseConfig);
export const authUser = getAuth(app); 
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);