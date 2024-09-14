import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAQTJmR_gWqGISv1sOVDN806Odh_I9CTig",
  authDomain: "engiverse-5c5b3.firebaseapp.com",
  projectId: "engiverse-5c5b3",
  storageBucket: "engiverse-5c5b3.appspot.com",
  messagingSenderId: "879752332767",
  appId: "1:879752332767:web:5a1898dd0f6c62e324306a",
  measurementId: "G-B7R9G6N36H"
};
// initializing to identify a project

const app = initializeApp(firebaseConfig);
export const authUser = getAuth(app); 
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);