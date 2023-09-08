import React from 'react'
import {GoogleAuthProvider } from 'firebase/auth';
// import {provider} from '..firebase_config'
const SignIn = () => {
    const useSignInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <button onClick={useSignInWithGoogle}>Sign In with Google</button>
    )
}


export default SignIn